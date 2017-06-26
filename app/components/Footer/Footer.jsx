import React from 'react';
let {connect} = require('react-redux');
import {Link} from 'react-router-dom';
import Logo from '../Logo';

import styles from './Footer.css';

class Footer extends React.Component {
  constructor(){
    super();
  }

  render() {
    return (
      <footer className={styles.container}>
        <div className={styles.credit}>
          <div className={styles.logo}>
            <div>PlusMedia</div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer;
