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
    content: content.homepage
  })
)
export default class Index extends React.Component {
  constructor() {
    super();

    this.state = {
      marqueeVideo: null
    }
  }

  componentWillReceiveProps(){
    let marqueeVideos = [
      '/videos/PlusMedia_Video_v3_HR.mp4'
    ];
    this.setState({
      marqueeVideo: marqueeVideos[Math.floor(Math.random()*marqueeVideos.length)]
    });
  }

  render() {
    let { history, content } = this.props;
    var settings = {
      dots: false,
      infinite: true,
      variableWidth: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
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
          bgImage="/images/home-bg.jpg"
          bgVideo={this.state.marqueeVideo}
          poster="/images/home-bgvideo-poster.jpg"
          transitionSpeed={800}
        />

        <section className={styles.doubleCol}>
          <div onClick={() => history.push('/about')}>
            <h2 className={styles.sectionHeader}>About</h2>
            <p className={styles.sectionSubheader}>{content.aboutText}</p>
          </div>
          <div className={styles.image} style={{backgroundImage: 'url(/images/about-marquee.jpg)'}}></div>
        </section>

        <section className={`${styles.doubleCol} ${styles.capabilities}`}>
          <div className={styles.image} style={{backgroundImage: 'url(/images/capabilities-marquee-bg.jpg)'}}></div>
          <div onClick={() => history.push('/capabilities')}>
            <h2 className={styles.sectionHeader}>Capabilities</h2>
            <p className={styles.sectionSubheader}>{content.capabilitiesText}</p>
          </div>
        </section>

        <section className={styles.doubleCol}>
          <div onClick={() => history.push('/clients')}>
            <h2 className={styles.sectionHeader}>Clients</h2>
            <p className={styles.sectionSubheader}>{content.clientsText}</p>
          </div>
          <div className={styles.image} style={{backgroundImage: 'url(/images/clients-marquee-bg.jpg)'}}></div>
        </section>

        <div className={styles.pmGrid}></div>
        <div className={styles.clientLogos}>
          <Slider className={styles.slider} {...settings}>
            <div><img onClick={() => history.push('/clients')} src="/images/client-logos/Logo-Jet.jpg" /></div>
            <div><img onClick={() => history.push('/clients')} src="/images/client-logos/Logo-USO.jpg" /></div>
            <div><img onClick={() => history.push('/clients')} src="/images/client-logos/Logo-Gerber-Life-Insurance.jpg" /></div>
            <div><img onClick={() => history.push('/clients')} src="/images/client-logos/Logo-Barnes-&-Noble.jpg" /></div>
            <div><img onClick={() => history.push('/clients')} src="/images/client-logos/Childrens-Place-logo.jpg" /></div>
            <div><img onClick={() => history.push('/clients')} src="/images/client-logos/down-jones.jpg" /></div>
            <div><img onClick={() => history.push('/clients')} src="/images/client-logos/Haband-logo.jpg" /></div>
            <div><img onClick={() => history.push('/clients')} src="/images/client-logos/Harry's-logo.jpg" /></div>
            <div><img onClick={() => history.push('/clients')} src="/images/client-logos/Logo-Charles-Tyrwhitt.jpg" /></div>
            <div><img onClick={() => history.push('/clients')} src="/images/client-logos/Logo-Colonial-Penn.jpg" /></div>
            <div><img onClick={() => history.push('/clients')} src="/images/client-logos/Logo-Feeding-America.jpg" /></div>
            <div><img onClick={() => history.push('/clients')} src="/images/client-logos/Logo-Hayneedle.jpg" /></div>
            <div><img onClick={() => history.push('/clients')} src="/images/client-logos/Logo-HelloFresh.jpg" /></div>
            <div><img onClick={() => history.push('/clients')} src="/images/client-logos/Shoes.com-logo.jpg" /></div>
            <div><img onClick={() => history.push('/clients')} src="/images/client-logos/Logo-Shutterfly.jpg" /></div>
            <div><img onClick={() => history.push('/clients')} src="/images/client-logos/Logo-Staples.jpg" /></div>
            <div><img onClick={() => history.push('/clients')} src="/images/client-logos/Logo-The-Economist.jpg" /></div>
            <div><img onClick={() => history.push('/clients')} src="/images/client-logos/Logo-WSJwine.jpg" /></div>
            <div><img onClick={() => history.push('/clients')} src="/images/client-logos/ZipRecruiter-logo.jpg" /></div>
          </Slider>
        </div>
      </div>
    )
  }
}
