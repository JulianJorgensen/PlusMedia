import React from 'react';
import styles from './Marquee.css';

export default class Marquee extends React.Component {
  constructor(){
    super();
  }

  render() {
    let {title, intro, bgImage, split} = this.props;

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
        <div className={`${styles.marquee}`} style={{backgroundImage: `url(${bgImage})`}}>
          <div className={styles.container}>
            <h1 className={styles.header}>{title}</h1>
            <h2 className={styles.intro}>{intro}</h2>
          </div>
        </div>
      )
    }
  }
}
