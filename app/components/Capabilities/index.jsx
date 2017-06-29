import React from 'react';
let {connect} = require('react-redux');
import Marquee from '../Marquee/Marquee';
import PageItems from '../PageItems';
import styles from './index.css';
let modalActions = require('actions/modalActions');

class Capabilities extends React.Component{
  constructor(){
    super();
  }

  render() {
    let {dispatch} = this.props;

    return (
      <div>
        <Marquee
          title="Capabilities"
          intro="PlusMedia offers a comprehensive array of services to help you achieve your marketing goals, serving as a single source for all of your media buying and management."
          bgImage="/images/capabilities-marquee-bg.jpg"
        />
        <div className="page-content">
          <div className={styles.sectionBar}>Our Services</div>
          <div className={styles.services}>
            <h2 className={styles.serviceGroupTitle}>Media</h2>
            <div className={styles.serviceGroup}>
              <div className={styles.service}>
                <h3 className={styles.serviceTitle}>Service title</h3>
                <p className={styles.serviceDescription}>Lorem ipsum dolar sit amit lama. Dorem elli marin ipsum.</p>
              </div>
              <div className={styles.service}>
                <h3 className={styles.serviceTitle}>Service title</h3>
                <p className={styles.serviceDescription}>Lorem ipsum dolar sit amit lama. Dorem elli marin ipsum.</p>
              </div>
              <div className={styles.service}>
                <h3 className={styles.serviceTitle}>Service title</h3>
                <p className={styles.serviceDescription}>Lorem ipsum dolar sit amit lama. Dorem elli marin ipsum.</p>
              </div>
            </div>

            <h2 className={styles.serviceGroupTitle}>Marketing</h2>
            <div className={styles.serviceGroup}>
              <div className={styles.service}>
                <h3 className={styles.serviceTitle}>Service title</h3>
                <p className={styles.serviceDescription}>Lorem ipsum dolar sit amit lama. Dorem elli marin ipsum.</p>
              </div>
              <div className={styles.service}>
                <h3 className={styles.serviceTitle}>Service title</h3>
                <p className={styles.serviceDescription}>Lorem ipsum dolar sit amit lama. Dorem elli marin ipsum.</p>
              </div>
            </div>

            <h2 className={styles.serviceGroupTitle}>Management</h2>
            <div className={styles.serviceGroup}>
              <div className={styles.service}>
                <h3 className={styles.serviceTitle}>Service title</h3>
                <p className={styles.serviceDescription}>Lorem ipsum dolar sit amit lama. Dorem elli marin ipsum.</p>
              </div>
              <div className={styles.service}>
                <h3 className={styles.serviceTitle}>Service title</h3>
                <p className={styles.serviceDescription}>Lorem ipsum dolar sit amit lama. Dorem elli marin ipsum.</p>
              </div>
            </div>
          </div>

          <div className={styles.sectionBar}>Media Channels</div>
          <div className={styles.container}>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla partur. Tempor incididunt ut et dolore magna aliqua.</p>
            <div className={styles.mediaChannels}>
              <div className={styles.channel} onClick={() => {
                dispatch(modalActions.openModal({
                  template: 'media',
                  title: 'Insert Media',
                  body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla partur. Tempor incididunt ut et dolore magna aliqua.'
                }));
              }}>
                <div className={styles.icon} style={{backgroundImage: `url(/images/media-channels/insert-icon.png)`}}></div>
                <h2 className={styles.title}>Insert Media</h2>
              </div>
              <div className={styles.channel} onClick={() => {
                dispatch(modalActions.openModal({
                  template: 'media',
                  title: 'Direct Mail',
                  body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla partur. Tempor incididunt ut et dolore magna aliqua.'
                }));
              }}>
                <div className={styles.icon} style={{backgroundImage: `url(/images/media-channels/direct-icon.png)`}}></div>
                <h2 className={styles.title}>Direct Mail</h2>
              </div>
              <div className={styles.channel} onClick={() => {
                dispatch(modalActions.openModal({
                  template: 'media',
                  title: 'Social Media',
                  body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla partur. Tempor incididunt ut et dolore magna aliqua.'
                }));
              }}>
                <div className={styles.icon} style={{backgroundImage: `url(/images/media-channels/social-icon.png)`}}></div>
                <h2 className={styles.title}>Social Media</h2>
              </div>
              <div className={styles.channel} onClick={() => {
                dispatch(modalActions.openModal({
                  template: 'media',
                  title: 'Mobile Marketing',
                  body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla partur. Tempor incididunt ut et dolore magna aliqua.'
                }));
              }}>
                <div className={styles.icon} style={{backgroundImage: `url(/images/media-channels/mobile-icon.png)`}}></div>
                <h2 className={styles.title}>Mobile Marketing</h2>
              </div>
            </div>
          </div>

          <div className={styles.sectionBar}>Featured Case Studies</div>
          <div className={styles.container}>
            <PageItems />
          </div>
        </div>
      </div>
    )
  }
}

export default connect(
  (state) => {
    return {
      modal: state.modal
    }
  }
)(Capabilities);
