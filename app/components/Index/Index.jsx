import React from 'react';
import {Link, withRouter} from 'react-router-dom';
let {connect} = require('react-redux');
import Slider from 'react-slick';

import Layout from 'react-toolbox/lib/layout/Layout';
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
      slidesToShow: 4,
      slidesToScroll: 1
    };

    return (
      <div className="page-content">
        <section className={styles.landing}>
          <img src="/images/logo-big.png" />
          <h1 className={styles.header}>Leveraging the power of paid media to connect brands with customers.</h1>
        </section>

        <section className="double-col">
          <div onClick={() => history.push('/about')}>
            <h2 className="section-header">About</h2>
            <p className="section-subheader">PlusMedia is a dynamic, full-service media agency specializing in omnichannel direct response marketing that delivers measurable results.</p>
          </div>
          <div style={{backgroundImage: 'url(/images/about-bg.jpg)'}}>
          </div>
        </section>

        <section className="double-col">
          <div style={{backgroundImage: 'url(/images/capabilities-bg.jpg)'}}>
          </div>
          <div onClick={() => history.push('/capabilities')}>
            <h2 className="section-header">Capabilities</h2>
            <p className="section-subheader">PlusMedia provides strategic thought leadership and customized marketing solutions to optimize media spend, maximize ROI and increase bottom line profitability.</p>
          </div>
        </section>

        <section className="double-col">
          <div onClick={() => history.push('/clients')}>
            <h2 className="section-header">Clients</h2>
            <p className="section-subheader">PlusMedia has experience across a wide variety of industries, markets and business models, serving clients throughout the U.S. and internationally.</p>
          </div>
          <div style={{backgroundImage: 'url(/images/clients-bg.jpg)'}}>
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
