import React from 'react';
let {connect} = require('react-redux');
import {Link} from 'react-router-dom';

import styles from './Footer.css';

class Footer extends React.Component {
  constructor(){
    super();
  }

  render() {
    return (
      <footer className={styles.container}>
        <div className={styles.details}>
          <div>©2017 by PlusMedia, LLC. All Rights Reserved</div>
          <div className={styles.contact}>100 Mill Plain Road, 4th Floor Danbury, CT 06811  |  203.748.6500  |  <a href="mailto:contact@plusme.com">contact@plusme.com</a></div>
        </div>
        <div className={styles.logos}>
          <div><img src="/images/logo-woman-owned.png" /></div>
          <div><img width={200} src="/images/logo-big.png" /></div>
          <div className={styles.linkedin}>Find us on <a href="https://www.linkedin.com/company-beta/119805/" target="new"><i className="fa fa-linkedin-square" /></a></div>
        </div>
      </footer>
    )
  }
}

export default Footer;
