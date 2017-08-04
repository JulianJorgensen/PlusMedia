import React from 'react';
import styles from './Main.css';

export default function Loader(){
  return <div className={styles.siteLoader}><i className="fa fa-circle-o-notch fa-spin fa-3x fa-fw"></i></div>
}
