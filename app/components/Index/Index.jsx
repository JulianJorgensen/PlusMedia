import React from 'react';
import {Link} from 'react-router-dom';
let {connect} = require('react-redux');

import Layout from 'react-toolbox/lib/layout/Layout';
import styles from './Index.css';

class Index extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="page-content">
        <section className={styles.landing}>
          <img src="/images/logo-big.png" />
          <h1>a dynamic media agency that anticipates your<br />changing needs and evolves to meet them.</h1>
        </section>

        <section className="double-col">
          <div>
            <h2 className="section-header">About</h2>
            <p>PlusMedia is an independent, full-service media agency specializing in omnichannel</p>
          </div>
          <div style={{backgroundImage: 'url(/images/about-bg.jpg)'}}>
          </div>
        </section>

        <section className="double-col">
          <div style={{backgroundImage: 'url(/images/about-bg.jpg)'}}>
          </div>
          <div>
            <h2 className="section-header">About</h2>
            <p>PlusMedia is an independent, full-service media agency specializing in omnichannel</p>
          </div>
        </section>
      </div>
    )
  }
}


module.exports = Index;
