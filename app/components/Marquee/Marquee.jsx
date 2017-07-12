import React from 'react';
let {connect} = require('react-redux');
import styles from './Marquee.css';

class Marquee extends React.Component {
  constructor(){
    super();
  }

  render() {
    let {title, intro, header, subheader, transitionSpeed, bgImage, className, split, scroll} = this.props;

    if (!transitionSpeed){
      transitionSpeed = 400;
    }

    let marqueeOpacity = 1;
    if (marqueeOpacity >= 0){
      marqueeOpacity = 1-(scroll.y/transitionSpeed);
    }

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
        <div className={`${styles.marquee} ${className}`} style={{backgroundImage: `url(${bgImage})`, opacity: marqueeOpacity}}>
          <div className={styles.container}>
            {title ? <h1 className={styles.header}>{title}</h1> : header}
            {intro ? <h2 className={styles.intro}>{intro}</h2> : subheader}
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
