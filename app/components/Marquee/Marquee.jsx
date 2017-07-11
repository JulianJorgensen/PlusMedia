import React from 'react';
let {connect} = require('react-redux');
import styles from './Marquee.css';

class Marquee extends React.Component {
  constructor(){
    super();
  }

  render() {
    let {title, intro, bgImage, className, split, scroll} = this.props;

    let marqueeOpacity = 1-(scroll.y/300);
    let top = -scroll.y/1.5;

    if (split){
      return (
        <div className={`${styles.marquee} ${styles.split}`}>
          <div className={styles.leftArea}>
            <h1 className={styles.header}>{title}</h1>
          </div>
          <div className={styles.rightArea} style={{backgroundImage: `url(${bgImage})`}}></div>
        </div>
      )
    }else{
      return (
        <div className={`${styles.marquee} ${className}`} style={{backgroundImage: `url(${bgImage})`, opacity: marqueeOpacity, marginTop: top}}>
          <div className={styles.container}>
            <h1 className={styles.header}>{title}</h1>
            <h2 className={styles.intro}>{intro}</h2>
          </div>
        </div>
      )
    }
  }
}

export default connect(
  (state) => {
    return {
      scroll: state.scrollPosition
    }
  }
)(Marquee);
