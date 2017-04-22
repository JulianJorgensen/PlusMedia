import React from 'react';
import Slider from 'react-slick';
import {Link} from 'react-router';
let {connect} = require('react-redux');

import { Layout } from 'react-toolbox';
import styles from './Index.css';
import HomeLanding from 'Index/HomeLanding';

class Index extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="page-content">
        <HomeLanding />

        <div className={styles.container}>
          Content here
        </div>
      </div>
    )
  }
}


module.exports = Index;