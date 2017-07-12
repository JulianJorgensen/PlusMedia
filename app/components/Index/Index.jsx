import React from 'react';
import {Link, withRouter} from 'react-router-dom';
let {connect} = require('react-redux');
import Slider from 'react-slick';

import Layout from 'react-toolbox/lib/layout/Layout';
import Marquee from '../Marquee/Marquee';
import styles from './Index.css';

@withRouter
class Index extends React.Component {
  constructor() {
    super();
  }

  render() {
    let {history} = this.props;
    var settings = {
      dots: false,
      infinite: true,
      variableWidth: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    };

    return (
      <div className="page-content">
        <Marquee
          header={<div className={styles.logo}><img src="/images/logo-big.png" /></div>}
          subheader={<h1 className={styles.header}>Leveraging the power of paid media to connect brands with customers.</h1>}
          className={styles.landing}
          bgImage="/images/home-bg.jpg"
          transitionSpeed={800}
        />

        <section className={styles.doubleCol}>
          <div onClick={() => history.push('/about')}>
            <h2 className={styles.sectionHeader}>About</h2>
            <p className={styles.sectionSubheader}>PlusMedia is a dynamic, full-service media agency specializing in omnichannel direct response marketing that delivers measurable results.</p>
          </div>
          <div className={styles.videoWrapper} style={{backgroundImage: 'url(/images/about-bg.jpg)'}}>
            <video src="/videos/placeholder.mov" autoPlay loop />
          </div>
        </section>

        <section className={`${styles.doubleCol} ${styles.capabilities}`}>
          <div style={{backgroundImage: 'url(/images/capabilities-bg.jpg)'}}></div>
          <div onClick={() => history.push('/capabilities')}>
            <h2 className={styles.sectionHeader}>Capabilities</h2>
            <p className={styles.sectionSubheader}>PlusMedia provides strategic thought leadership and customized marketing solutions to optimize media spend, maximize ROI and increase bottom line profitability.</p>
          </div>
        </section>

        <section className={styles.doubleCol}>
          <div onClick={() => history.push('/clients')}>
            <h2 className={styles.sectionHeader}>Clients</h2>
            <p className={styles.sectionSubheader}>PlusMedia has experience across a wide variety of industries, markets and business models, serving clients throughout the U.S. and internationally.</p>
          </div>
          <div className={styles.videoWrapper} style={{backgroundImage: 'url(/images/clients-bg.jpg)'}}>
            <video src="/videos/placeholder2.mov" autoPlay loop />
          </div>
        </section>

        <div className={styles.pmGrid}></div>
        <div className={styles.clientLogos}>
          <Slider className={styles.slider} {...settings}>
            <div><img onClick={() => history.push('/clients')} src="/images/client-logos/gerber.png" /></div>
            <div><img onClick={() => history.push('/clients')} src="/images/client-logos/rodale.png" /></div>
            <div><img onClick={() => history.push('/clients')} src="/images/client-logos/dowjones.png" /></div>
            <div><img onClick={() => history.push('/clients')} src="/images/client-logos/barnesnnoble.png" /></div>
          </Slider>
        </div>
      </div>
    )
  }
}


module.exports = Index;
