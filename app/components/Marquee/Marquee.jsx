import React from 'react';
import styles from './Marquee.css';

export default class Marquee extends React.Component {
  constructor(){
    super();
  }

  render() {
    let {title, intro, bgImage} = this.props;

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
