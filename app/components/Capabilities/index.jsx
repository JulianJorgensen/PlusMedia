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
          intro="PlusMedia provides strategic thought leadership and customized marketing solutions to optimize media spend, maximize ROI and increase bottom line profitability."
          bgImage="/images/capabilities-marquee-bg.jpg"
        />
        <div className="page-content">
          <div className={styles.sectionBar}>Our Services</div>
          <div className={styles.services}>
            <p>We offer a comprehensive array of services to help you achieve your marketing goals, providing a single source for all your media buying and management.</p>
            <h2 className={styles.serviceGroupTitle}>Media Services</h2>
            <div className={styles.serviceGroup}>
              <div className={styles.service}>
                <h3 className={styles.serviceTitle}>Strategy & Planning</h3>
                <p className={styles.serviceDescription}>Market research, competitive tracking, and detailed media plans tailored to your business objectives and budget.</p>
              </div>
              <div className={styles.service}>
                <h3 className={styles.serviceTitle}>Buying & Execution</h3>
                <p className={styles.serviceDescription}>Rate and space negotiations, media procurement and proactive campaign monitoring to ensure best-in-class execution.</p>
              </div>
              <div className={styles.service}>
                <h3 className={styles.serviceTitle}>Analytics & Optimization</h3>
                <p className={styles.serviceDescription}>Data-driven campaign insights and customized reporting to help you make strategic business decisions.</p>
              </div>
            </div>

            <h2 className={styles.serviceGroupTitle}>Marketing Services</h2>
            <div className={styles.serviceGroup}>
              <div className={styles.service}>
                <h3 className={styles.serviceTitle}>Creative Development</h3>
                <p className={styles.serviceDescription}>Creative resources and expert direct response insight to help you design highly impactful ads.</p>
              </div>
              <div className={styles.service}>
                <h3 className={styles.serviceTitle}>Print Production</h3>
                <p className={styles.serviceDescription}>Full-spectrum production management to help you achieve the highest quality reproduction at the lowest possible material, printing, postage and freight costs.</p>
              </div>
            </div>

            <h2 className={styles.serviceGroupTitle}>Management Services</h2>
            <div className={styles.serviceGroup}>
              <div className={styles.service}>
                <h3 className={styles.serviceTitle}>Media Management</h3>
                <p className={styles.serviceDescription}>A dedicated sales team to help you identify and monetize your customer touch-points, generating incremental revenue on your behalf.</p>
              </div>
              <div className={styles.service}>
                <h3 className={styles.serviceTitle}>Partnership Management</h3>
                <p className={styles.serviceDescription}>A dedicated outreach team to identify, forge and nurture strategic marketing partnerships that yield mutually beneficial results for all parties.</p>
              </div>
            </div>
            <p>Contact us to learn more or to arrange for a complimentary evaluation of your current media, marketing and management services efforts.</p>
          </div>

          <div className={styles.sectionBar}>Media Channels</div>
          <div className={styles.container}>
            <p>We develop and execute integrated media campaigns that effectively reach your target audience, incorporating a mix of traditional, alternate and digital channels for maximum impact.</p>
            <div className={styles.mediaChannels}>
              <div className={styles.channel} onClick={() => {
                dispatch(modalActions.openModal({
                  template: 'media',
                  title: 'Inserts',
                  body: 'Place highly impactful insert placements into third-party mailings and merchandise shipments.'
                }));
              }}>
                <div className={styles.icon} style={{backgroundImage: `url(/images/media-channels/insert-icon.png)`}}></div>
                <h2 className={styles.title}>Inserts</h2>
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

          {/* <div className={styles.sectionBar}>Featured Case Studies</div>
          <div className={styles.container}>
            <PageItems />
          </div> */}
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
