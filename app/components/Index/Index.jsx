import React from 'react';
import {Link} from 'react-router-dom';
let {connect} = require('react-redux');
import Slider from 'react-slick';

import Layout from 'react-toolbox/lib/layout/Layout';
import styles from './Index.css';

class Index extends React.Component {
  constructor() {
    super();
  }

  render() {
    var settings = {
      dots: false,
      infinite: true,
      variableWidth: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1
    };

    return (
      <div className="page-content">
        <section className={styles.landing}>
          <img src="/images/logo-big.png" />
          <h1 className={styles.header}>a dynamic media agency that anticipates your<br />changing needs and evolves to meet them.</h1>
        </section>

        <section className="double-col">
          <div>
            <h2 className="section-header">About</h2>
            <p className="section-subheader">PlusMedia is an independent, full-service media agency specializing in omnichannel direct response marketing.</p>
          </div>
          <div style={{backgroundImage: 'url(/images/about-bg.jpg)'}}>
          </div>
        </section>

        <section className="double-col">
          <div style={{backgroundImage: 'url(/images/capabilities-bg.jpg)'}}>
          </div>
          <div>
            <h2 className="section-header">Capabilities</h2>
            <p className="section-subheader">PlusMedia offers a comprehensive array of services to help you achieve your marketing goals, serving as a single source for all of your media buying and management.</p>
          </div>
        </section>

        <section className="double-col">
          <div>
            <h2 className="section-header">Clients</h2>
            <p className="section-subheader">PlusMedia has experience across many industries, driving client strategies that are deeply rooted in proven direct response principles.</p>
          </div>
          <div style={{backgroundImage: 'url(/images/clients-bg.jpg)'}}>
          </div>
        </section>

        <div className={styles.pmGrid}></div>
        <div className={styles.clientLogos}>
          <Slider className={styles.slider} {...settings}>
            <div><img src="/images/client-logos/gerber.png" /></div>
            <div><img src="/images/client-logos/rodale.png" /></div>
            <div><img src="/images/client-logos/dowjones.png" /></div>
            <div><img src="/images/client-logos/barnesnnoble.png" /></div>
          </Slider>
        </div>
      </div>
    )
  }
}


module.exports = Index;
