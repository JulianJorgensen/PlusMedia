import React from 'react';
let {connect} = require('react-redux');
import Marquee from '../Marquee/Marquee';
import PageItems from '../PageItems';
import styles from './About.css';
let modalActions = require('actions/modalActions');

class About extends React.Component{
  constructor(){
    super();
  }

  render() {
    let {dispatch} = this.props;

    let teamMembers = ['1', '2', '3', '4', '5', '6', '7', '8'];

    let renderTeamMembers = () => {
      return (
        teamMembers.map((teamMember) => {
          return (
            <div className={styles.teamMember} onClick={() => {
              dispatch(modalActions.openModal({
                template: 'about',
                image: '/images/team/Untitled-1.jpg',
                name: 'Sherry Somebody',
                title: 'President, PlusMedia',
                title2: 'CEO, PlusMedia Digital',
                bio: 'some bio here'
              }));
            }}>
              <div className={styles.teamMemberPhoto} style={{backgroundImage: `url(/images/team/Untitled-1.jpg)`}} />
              <h4 className={styles.teamMemberName}>Firstname Lastname</h4>
              <h5 className={styles.teamMemberTitle}>Title here</h5>
            </div>
          )
        })
      )
    };

    let renderJobs = () => {
      return (
        <div className={styles.jobs}>
          <div className={styles.job}>
            <h2 className={styles.jobTitle}>Job title #1</h2>
            <div className={styles.jobDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</div>
            <div className={styles.jobCtas}>
              <div className={styles.jobLocation}>Location</div>
              <div className={styles.jobApply}>Apply Now</div>
              <div className={styles.jobType}>Full time</div>
            </div>
          </div>
          <div className={styles.job}>
            <h2 className={styles.jobTitle}>Job title #1</h2>
            <div className={styles.jobDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</div>
            <div className={styles.jobCtas}>
              <div className={styles.jobLocation}>Location</div>
              <div className={styles.jobApply}>Apply Now</div>
              <div className={styles.jobType}>Full time</div>
            </div>
          </div>
        </div>
      )
    };

    return (
      <div>
        <Marquee
          title="About"
          intro="PlusMedia is an independent, full-service media agency specializing in omnichannel direct response marketing."
          bgImage="/images/about-marquee.jpg"
        />
        <div className="page-content">
          <div className={styles.sectionBar}>Our Approach</div>
          <div className={styles.container}>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in in velit esse cillum dolore eu fugiat nulla pariatur.</p>
          </div>

          <div className={styles.sectionBar}>Executive Team</div>
          <div className={styles.teamMembers}>
            {renderTeamMembers()}
          </div>

          <div className={styles.sectionBar}>Join Us</div>
          <div className={styles.container}>
            <div className={styles.quotes}>
              <div className={styles.quote}>
                <div className={styles.quoteAuthorImage} style={{backgroundImage: `url(/images/author-image.jpg)`}}></div>
                <div className={styles.quoteContent}>
                  <quote>"Lorem ipsum dolar et lama."</quote>
                  <author>Johnny</author>
                </div>
              </div>
              <div className={styles.quote}>
                <div className={styles.quoteAuthorImage} style={{backgroundImage: `url(/images/author-image.jpg)`}}></div>
                <div className={styles.quoteContent}>
                  <quote>"Lorem ipsum dolar et lama."</quote>
                  <author>Johnny</author>
                </div>
              </div>
              <div className={styles.quote}>
                <div className={styles.quoteAuthorImage} style={{backgroundImage: `url(/images/author-image.jpg)`}}></div>
                <div className={styles.quoteContent}>
                  <quote>"Lorem ipsum dolar et lama."</quote>
                  <author>Johnny</author>
                </div>
              </div>
            </div>

            <h2 className={styles.jobsHeader}>Your Career Starts Here</h2>

            {renderJobs()}
          </div>

          <div className={styles.sectionBar}>News</div>
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
)(About);
