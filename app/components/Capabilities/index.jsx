import React from 'react';
import {Link} from 'react-router-dom';
let {connect} = require('react-redux');
import Marquee from '../Marquee/Marquee';
import PageItems from '../PageItems';
import styles from './index.css';
let modalActions = require('actions/modalActions');
import Isvg from 'react-inlinesvg';

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
            <div className={styles.container}>
              <p>We offer a comprehensive array of services to help you achieve your marketing goals, providing a single source for all your media buying and management.</p>
            </div>
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
            <div className={styles.container}>
              <p><Link to="/contact">Contact us</Link> to learn more or to arrange for a complimentary evaluation of your current media, marketing and management services efforts.</p>
            </div>
          </div>

          <div className={styles.sectionBar}>Media Channels</div>
          <div className={styles.container}>
            <p>We develop and execute integrated media campaigns that effectively reach your target audience, incorporating a mix of traditional, alternate and digital channels for maximum impact.</p>
            <div className={styles.mediaChannels}>
              <div className={styles.channel} onClick={() => {
                dispatch(modalActions.openModal({
                  template: 'media',
                  title: 'Inserts',
                  body: 'Place highly impactful insert placements into third-party mailings and merchandise shipments.',
                  icon: <Isvg src="/images/media-channels/PM_MediaChannel_Inserts_Icon.svg" />
                }));
              }}>
                <div className={styles.icon}><Isvg src="/images/media-channels/PM_MediaChannel_Inserts_Icon.svg" /></div>
                <h2 className={styles.title}>Inserts</h2>
              </div>

              <div className={styles.channel} onClick={() => {
                dispatch(modalActions.openModal({
                  template: 'media',
                  title: 'Magazines',
                  body: 'Run on-page, bind-in, tip-on and onsert placements in editorially relevant publications that reach consumers at home, at the newsstand, at their doctor’s office or anywhere.',
                  icon: <Isvg src="/images/media-channels/PM_MediaChannel_Magazines_Icon.svg" />
                }));
              }}>
                <div className={styles.icon}><Isvg src="/images/media-channels/PM_MediaChannel_Magazines_Icon.svg" /></div>
                <h2 className={styles.title}>Magazine</h2>
              </div>

              <div className={styles.channel} onClick={() => {
                dispatch(modalActions.openModal({
                  template: 'media',
                  title: 'Newspapers',
                  body: 'Reach consumers locally, regionally and nationally with run of press, solo and free standing insert placements in traditional newspapers.',
                  icon: <Isvg src="/images/media-channels/PM_MediaChannel_Newspapers_Icon.svg" />
                }));
              }}>
                <div className={styles.icon}><Isvg src="/images/media-channels/PM_MediaChannel_Newspapers_Icon.svg" /></div>
                <h2 className={styles.title}>Newspapers</h2>
              </div>

              <div className={styles.channel} onClick={() => {
                dispatch(modalActions.openModal({
                  template: 'media',
                  title: 'Mass',
                  body: 'Include targeted inserts in mass-distributed mailings to consumers seeking out savings.',
                  icon: <Isvg src="/images/media-channels/PM_MediaChannel_Mass_Icon.svg" />
                }));
              }}>
                <div className={styles.icon}><Isvg src="/images/media-channels/PM_MediaChannel_Mass_Icon.svg" /></div>
                <h2 className={styles.title}>Mass</h2>
              </div>

              <div className={styles.channel} onClick={() => {
                dispatch(modalActions.openModal({
                  template: 'media',
                  title: 'Direct Mail',
                  body: 'Send dedicated mail pieces that reach highly engaged consumers right in their mailbox.',
                  icon: <Isvg src="/images/media-channels/PM_MediaChannel_DirectMail_Icon.svg" />
                }));
              }}>
                <div className={styles.icon}><Isvg src="/images/media-channels/PM_MediaChannel_DirectMail_Icon.svg" /></div>
                <h2 className={styles.title}>Direct Mail</h2>
              </div>

              <div className={styles.channel} onClick={() => {
                dispatch(modalActions.openModal({
                  template: 'media',
                  title: 'Out-of-Home',
                  body: 'Advertise in strategically placed out-of-home locations that reach consumers on the go – while shopping, socializing, commuting or running errands.',
                  icon: <Isvg src="/images/media-channels/PM_MediaChannel_OutOfHome_Icon.svg" />
                }));
              }}>
                <div className={styles.icon}><Isvg src="/images/media-channels/PM_MediaChannel_OutOfHome_Icon.svg" /></div>
                <h2 className={styles.title}>Out-of-Home</h2>
              </div>

              <div className={styles.channel} onClick={() => {
                dispatch(modalActions.openModal({
                  template: 'media',
                  title: 'Search',
                  body: 'Drive traffic and brand awareness with expert search engine marketing tactics that reach consumers organically or via sponsored content.',
                  icon: <Isvg src="/images/media-channels/PM_MediaChannel_Search_Icon.svg" />
                }));
              }}>
                <div className={styles.icon}><Isvg src="/images/media-channels/PM_MediaChannel_Search_Icon.svg" /></div>
                <h2 className={styles.title}>Search</h2>
              </div>

              <div className={styles.channel} onClick={() => {
                dispatch(modalActions.openModal({
                  template: 'media',
                  title: 'Display',
                  body: 'Prospect or remarket to consumers with contextually relevant ads as they browse content and shop online.',
                  icon: <Isvg src="/images/media-channels/PM_MediaChannel_Display_Icon.svg" />
                }));
              }}>
                <div className={styles.icon}><Isvg src="/images/media-channels/PM_MediaChannel_Display_Icon.svg" /></div>
                <h2 className={styles.title}>Display</h2>
              </div>

              <div className={styles.channel} onClick={() => {
                dispatch(modalActions.openModal({
                  template: 'media',
                  title: 'Social',
                  body: 'Leverage the sophisticated targeting and reach capabilities of social networks including Facebook, LinkedIn, Twitter, Instagram and Pinterest.',
                  icon: <Isvg src="/images/media-channels/PM_MediaChannel_Social_Icon.svg" />
                }));
              }}>
                <div className={styles.icon}><Isvg src="/images/media-channels/PM_MediaChannel_Social_Icon.svg" /></div>
                <h2 className={styles.title}>Social</h2>
              </div>

              <div className={styles.channel} onClick={() => {
                dispatch(modalActions.openModal({
                  template: 'media',
                  title: 'Mobile',
                  body: 'Serve messages to consumers anytime, anywhere with relevant, immediate and contextual mobile ads.',
                  icon: <Isvg src="/images/media-channels/PM_MediaChannel_Mobile_Icon.svg" />
                }));
              }}>
                <div className={styles.icon}><Isvg src="/images/media-channels/PM_MediaChannel_Mobile_Icon.svg" /></div>
                <h2 className={styles.title}>Mobile</h2>
              </div>

              <div className={styles.channel} onClick={() => {
                dispatch(modalActions.openModal({
                  template: 'media',
                  title: 'Email',
                  body: 'Partner with brand-relevant publishers to reach consumers in their email inbox.',
                  icon: <Isvg src="/images/media-channels/PM_MediaChannel_Email_Icon.svg" />
                }));
              }}>
                <div className={styles.icon}><Isvg src="/images/media-channels/PM_MediaChannel_Email_Icon.svg" /></div>
                <h2 className={styles.title}>Email</h2>
              </div>

              <div className={styles.channel} onClick={() => {
                dispatch(modalActions.openModal({
                  template: 'media',
                  title: 'Affiliate',
                  body: 'Leverage strategic partners by accessing their consumer base to drive qualified referrals.',
                  icon: <Isvg src="/images/media-channels/PM_MediaChannel_Affiliate_Icon.svg" />
                }));
              }}>
                <div className={styles.icon}><Isvg src="/images/media-channels/PM_MediaChannel_Affiliate_Icon.svg" /></div>
                <h2 className={styles.title}>Affiliate</h2>
              </div>

              <div className={styles.channel} onClick={() => {
                dispatch(modalActions.openModal({
                  template: 'media',
                  title: 'Online Video/Radio',
                  body: 'Tap into streaming video and radio networks to serve relevant ads to highly engaged consumers.',
                  icon: <Isvg src="/images/media-channels/PM_MediaChannel_OnlineVideoRadio_Icon.svg" />
                }));
              }}>
                <div className={styles.icon}><Isvg src="/images/media-channels/PM_MediaChannel_OnlineVideoRadio_Icon.svg" /></div>
                <h2 className={styles.title}>Online Video/Radio</h2>
              </div>
            </div>
            <p><Link to='/contact'>Contact us</Link> to learn more or to arrange for a complimentary evaluation of your current media efforts.</p>
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
