import React from 'react';
import {Link} from 'react-router-dom';
import _ from 'lodash';
let {connect} = require('react-redux');
import ReactMarkdown from 'react-markdown';
import Marquee from '../Marquee/Marquee';
import PageItems from '../PageItems';
import styles from './index.css';
let modalActions = require('actions/modalActions');
import Isvg from 'react-inlinesvg';

@connect(
  ({ modal, content }) => ({
    content: content.capabilities,
    modal
  })
)
export default class Capabilities extends React.Component{
  constructor(){
    super();

    String.prototype.toCamelCase = function() {
      return this.valueOf()
        .replace(/\s(.)/g, function($1) { return $1.toUpperCase(); })
        .replace(/\s/g, '')
        .replace(/^(.)/, function($1) { return $1.toLowerCase(); });
    }
  }

  render() {
    let { dispatch, content } = this.props;
    let groupedServices = [];
    groupedServices = _.groupBy(content.services, function(service) {
      return service.fields.type.toCamelCase();
    });

    return (
      <div>
        <Marquee
          title={content.title}
          intro={content.marqueeIntro}
          bgImage={content.marqueeImage.fields.file.url}
        />
        <div className="page-content">
          <div className={styles.sectionBar}>Our Services</div>
          <div className={styles.services}>
            <div className={styles.container}>
              <ReactMarkdown source={content.ourServicesTop} />
            </div>

            <h2 className={styles.serviceGroupTitle}>Media Services</h2>
            <div className={styles.serviceGroup}>
              {groupedServices.mediaService.map((service) => {
                return (
                  <div className={styles.service}>
                    <h3 className={styles.serviceTitle}>{service.fields.title}</h3>
                    <p className={styles.serviceDescription}>{service.fields.description}</p>
                  </div>
                )
              })}
            </div>
            <h2 className={styles.serviceGroupTitle}>Marketing Services</h2>
            <div className={styles.serviceGroup}>
              {groupedServices.marketingService.map((service) => {
                return (
                  <div className={styles.service}>
                    <h3 className={styles.serviceTitle}>{service.fields.title}</h3>
                    <p className={styles.serviceDescription}>{service.fields.description}</p>
                  </div>
                )
              })}
            </div>

            <h2 className={styles.serviceGroupTitle}>Management Services</h2>
            <div className={styles.serviceGroup}>
              {groupedServices.managementService.map((service) => {
                return (
                  <div className={styles.service}>
                    <h3 className={styles.serviceTitle}>{service.fields.title}</h3>
                    <p className={styles.serviceDescription}>{service.fields.description}</p>
                  </div>
                )
              })}
            </div>
            <div className={styles.container}>
              <p><Link to="/contact">Contact us</Link> to learn more or to arrange for a complimentary evaluation of your current media, marketing and management services efforts.</p>
            </div>
          </div>

          <div className={styles.sectionBar}>Media Channels</div>
          <div className={styles.container}>
            <ReactMarkdown source={content.mediaChannelsTop} />
            <div className={styles.mediaChannels}>
              {
                content.mediaChannels.map((mediaChannel) => {
                  return (
                    <div className={styles.channel} onClick={() => {
                      let topPosition = window.pageYOffset;
                      dispatch(modalActions.openModal({
                        template: 'media',
                        title: mediaChannel.fields.title,
                        lastScrollPosition: topPosition,
                        body: mediaChannel.fields.body,
                        icon: <Isvg src={mediaChannel.fields.icon.fields.file.url} />
                      }));
                    }}>
                      <div className={styles.icon}><Isvg src={mediaChannel.fields.icon.fields.file.url} /></div>
                      <h2 className={styles.title}>{mediaChannel.fields.title}</h2>
                    </div>
                  )
                })
              }
            </div>
            <p><Link to='/contact'>Contact us</Link> to learn more or to arrange for a complimentary evaluation of your current media efforts.</p>
          </div>

          <PageItems headline="Featured Case Studies" page="capabilities" items="caseStudies" snippets />
        </div>
      </div>
    )
  }
}
