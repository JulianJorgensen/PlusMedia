import React from 'react';
import ReactMarkdown from 'react-markdown';
import _ from 'lodash';
import { withRouter, Link } from 'react-router-dom';
let {connect} = require('react-redux');
import axios from 'axios';
import Marquee from 'Marquee/Marquee';
import styles from './index.css';

@withRouter
@connect(({ content }) => ({
  content: content,
}))
export default class PageItem extends React.Component{
  state = {};

  componentWillMount() {
    this.setPageItem();
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.onRouteChanged();
    }
  }

  onRouteChanged() {
    this.setPageItem();
  }

  setPageItem() {
    const { content } = this.props;
    const { page, items, id } = this.props.match.params;
    const pageItems = content[page][items];
    pageItems.sort((a, b) => {
      return new Date(b.sys.createdAt) - new Date(a.sys.createdAt);
    });

    const currentItem = pageItems.find(pageItem => pageItem.sys.id === id);

    this.setState({
      item: currentItem.fields,
    });
  }

  render() {
    const { page, items, id } = this.props.match.params;
    const { content } = this.props;
    const { item } = this.state;
    if (!item) return false;

    const pageItems = content[page][items];
    pageItems.sort((a, b) => {
      return new Date(b.sys.createdAt) - new Date(a.sys.createdAt);
    });

    const i = pageItems.findIndex(pageItem => pageItem.sys.id === id);
    const previous=pageItems[i==0?pageItems.length-1:i-1];
    const next=pageItems[i==pageItems.length-1?0:i+1];

    return (
      <div>
        <Marquee
          title={item.title}
          bgImage={item.image.fields.file.url}
          split
        />
        <div className="page-content">
          <div className={styles.container}>
            <ReactMarkdown source={item.body}  />
            <div className={styles.arrows}>
              <Link to={`/${page}/${items}/${previous.sys.id}`} className={styles.leftArrow}><i className={`fa fa-angle-left`} /></Link>
              <Link to={`/${page}/${items}/${next.sys.id}`} className={styles.rightArrow}><i className={`fa fa-angle-right`} /></Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
