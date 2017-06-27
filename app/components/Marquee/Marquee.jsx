import React from 'react';
import styles from './Marquee.css';

export default class Marquee extends React.Component {
  constructor(){
    super();
  }

  render() {
    let {title, bgColor} = this.props;

    return (
      <div className={`${styles.marquee}`}>
        <h1 className={styles.header}>{title}</h1>
      </div>
    )
  }
}
