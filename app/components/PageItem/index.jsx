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
    const { page, items, id } = this.props.match.params;
    const item = _.find(this.props.content[page][items], { 'sys': { 'id': id } });
    this.setState({
      item: item.fields,
    });
  }

  render() {
    const { item } = this.state;
    if (!item) return false;

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
          </div>
        </div>
      </div>
    )
  }
}
