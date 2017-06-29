import React from 'react';
import {Link} from 'react-router-dom';
let {connect} = require('react-redux');
import styles from './index.css';

class PageItems extends React.Component{
  constructor(){
    super();
  }

  render() {
    let {dispatch} = this.props;

    return (
      <div className={styles.container}>
        <Link to="/case-study/title" className={styles.item}>
          <div className={styles.thumbnail} style={{backgroundImage: `url(/images/news-thumb.jpg)`}}></div>
          <div className={styles.title}>News title #1</div>
          <div className={styles.snippet}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</div>
        </Link>
        <Link to="/case-study/title2" className={styles.item}>
          <div className={styles.thumbnail} style={{backgroundImage: `url(/images/news-thumb2.jpg)`}}></div>
          <div className={styles.title}>News title #2</div>
          <div className={styles.snippet}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</div>
        </Link>
        <Link to="/case-study/title3" className={styles.item}>
          <div className={styles.thumbnail} style={{backgroundImage: `url(/images/news-thumb3.jpg)`}}></div>
          <div className={styles.title}>News title #3</div>
          <div className={styles.snippet}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</div>
        </Link>
      </div>
    )
  }
}

export default connect(
  (state) => {
    return {
      modal: state.modal
    }
  }
)(PageItems);
