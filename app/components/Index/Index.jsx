import React from 'react';
import {Link, withRouter} from 'react-router-dom';
let {connect} = require('react-redux');
import Slider from 'react-slick';

import Layout from 'react-toolbox/lib/layout/Layout';
import Marquee from '../Marquee/Marquee';
import styles from './Index.css';

@withRouter
@connect(
  ({ content }) => ({
    content: content.homepage,
    aboutContent: content.about,
    capabilitiesContent: content.capabilities,
    clientsContent: content.clientsContent
  })
)
export default class Index extends React.Component {
  constructor() {
    super();
  }

  render() {
    let { history, content, aboutContent, capabilitiesContent, clientsContent } = this.props;

    let settings = {
      dots: false,
      infinite: true,
      variableWidth: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 3,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
          }
        }
      ]
    };

    return (
      <div className="page-content">
        <Marquee
          header={<div className={styles.logo}><img src={content.marqueeLogo.fields.file.url} /></div>}
          subheader={<h1 className={styles.header}>{content.marqueeIntro}</h1>}
          className={styles.landing}
          bgImage={content.marqueeBackground.fields.file.url}
          poster={content.marqueeBackground.fields.file.url}
          bgVideo={content.video.fields.file.url}
          transitionSpeed={800}
        />

        <section className={styles.doubleCol}>
          <div onClick={() => history.push('/about')} className={styles.sectionDescription}>
            <h2 className={styles.sectionHeader}>About</h2>
            <p className={styles.sectionSubheader}>{content.aboutText}</p>
          </div>
          <div className={styles.image} style={{backgroundImage: `url(${aboutContent.marqueeImage.fields.file.url})`}}></div>
        </section>

        <section className={`${styles.doubleCol} ${styles.capabilities}`}>
          <div className={styles.image} style={{backgroundImage: `url(${capabilitiesContent.marqueeImage.fields.file.url})`}}></div>
          <div onClick={() => history.push('/capabilities')} className={styles.sectionDescription}>
            <h2 className={styles.sectionHeader}>Capabilities</h2>
            <p className={styles.sectionSubheader}>{content.capabilitiesText}</p>
          </div>
        </section>

        <section className={styles.doubleCol}>
          <div onClick={() => history.push('/clients')} className={styles.sectionDescription}>
            <h2 className={styles.sectionHeader}>Clients</h2>
            <p className={styles.sectionSubheader}>{content.clientsText}</p>
          </div>
          <div className={styles.image} style={{backgroundImage: `url(${clientsContent.marqueeImage.fields.file.url})`}}></div>
        </section>

        <div className={styles.pmGrid}></div>
        <div className={styles.clientLogos}>
          <Slider className={styles.slider} {...settings}>
            {
              content.clientLogos.map((clientLogo) => {
                return (
                  <div><img onClick={() => history.push('/clients')} src={clientLogo.fields.file.url} /></div>
                )
              })
            }
          </Slider>
        </div>
      </div>
    )
  }
}
