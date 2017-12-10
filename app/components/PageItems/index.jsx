import React from 'react';
import { Link } from 'react-router-dom';
let { connect } = require('react-redux');
import styles from './index.css';

@connect(({ content }) => ({
  content: content,
}))
export default class PageItems extends React.Component{
  render() {
    const { content, page, items, pageItem, headline } = this.props;
    const pageItems = content[page][items];

    if (!pageItems) return false;
    
    pageItems.sort((a, b) => {
      return new Date(b.sys.createdAt) - new Date(a.sys.createdAt);
    });

    return (
      <div className={styles.wrapper}>
        <div className={styles.sectionBar}>{headline}</div>
        <div className={styles.container}>
          <div className={styles.items}>
            {
              pageItems.slice(0,3).map((pageItem, index) => {
                return (
                  <Link to={`/${page}/${items}/${pageItem.sys.id}`} className={styles.item}>
                    <div className={styles.thumbnail} style={{backgroundImage: `url(${pageItem.fields.image.fields.file.url})`}}></div>
                    <div className={styles.title}>{pageItem.fields.title}</div>
                    <div className={styles.snippet}>{pageItem.fields.body.substring(0, 25)}...</div>
                  </Link>
                )
              })
            }
          </div>
        </div>
      </div>
    )
  }
}
