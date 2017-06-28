import React from 'react';
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
        <div className={styles.item}>
          <div className={styles.thumbnail} style={{backgroundImage: `url(/images/news-thumb.jpg)`}}></div>
          <div className={styles.title}>News title #1</div>
          <div className={styles.snippet}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</div>
        </div>
        <div className={styles.item}>
          <div className={styles.thumbnail} style={{backgroundImage: `url(/images/news-thumb2.jpg)`}}></div>
          <div className={styles.title}>News title #2</div>
          <div className={styles.snippet}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</div>
        </div>
        <div className={styles.item}>
          <div className={styles.thumbnail} style={{backgroundImage: `url(/images/news-thumb3.jpg)`}}></div>
          <div className={styles.title}>News title #3</div>
          <div className={styles.snippet}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</div>
        </div>
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
