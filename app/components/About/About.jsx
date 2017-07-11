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
              <div className={styles.teamMemberPhoto} style={{backgroundImage: `url(/images/team/Untitled-${teamMember}.jpg)`}} />
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
          intro="PlusMedia is a dynamic, full-service media agency specializing in omnichannel direct response marketing that delivers measurable results."
          bgImage="/images/about-marquee.jpg"
        />
        <div className="page-content">
          <div className={styles.sectionBar}>Our Mission</div>
          <div className={styles.container}>
            <p>PlusMedia’s mission is to grow your business profitably through strategic media, marketing and management services. We treat your business as if it’s our own and have a proven track record of helping our clients successfully expand their market presence, acquire more customers and increase revenue.</p>
            <p>As industry veterans, our knowledge of direct response best practices and our strong relationships with key media partners allow us to cultivate new and exclusive opportunities that give you competitive advantage.</p>
            <p>With a seasoned executive team offering top-level strategy and support on every account, we become a seamless extension of your staff, working collaboratively to achieve your marketing goals.</p>
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
                  <quote>"PlusMedia’s team-oriented culture creates a collaborative atmosphere where employees feel empowered to contribute meaningfully"</quote>
                  <author>Fariya Naz, Account Coordinator</author>
                </div>
              </div>
              <div className={styles.quote}>
                <div className={styles.quoteAuthorImage} style={{backgroundImage: `url(/images/author-image.jpg)`}}></div>
                <div className={styles.quoteContent}>
                  <quote>"With a leadership team dedicated to ensuring each employee has the tools they need to be successful, the growth opportunities at PlusMedia are limitless."</quote>
                  <author>Christine Isgro, Senior Account Executive</author>
                </div>
              </div>
              <div className={styles.quote}>
                <div className={styles.quoteAuthorImage} style={{backgroundImage: `url(/images/author-image.jpg)`}}></div>
                <div className={styles.quoteContent}>
                  <quote>"PlusMedia upholds impeccable standards in every aspect of business – treatment of our employees, service to our clients and relationships with industry partners."</quote>
                  <author>Jessica Carnrick, Marketing Communications Specialist</author>
                </div>
              </div>
            </div>

            <h2 className={styles.jobsHeader}>Your Career Starts Here</h2>

            {renderJobs()}
          </div>

          {/* <div className={styles.sectionBar}>News</div>
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
)(About);
