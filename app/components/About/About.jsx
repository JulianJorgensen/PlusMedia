import React from 'react';
let {connect} = require('react-redux');
import ReactMarkdown from 'react-markdown';
import Marquee from '../Marquee/Marquee';
import PageItems from '../PageItems';
import styles from './About.css';
let modalActions = require('actions/modalActions');

@connect(
  ({ content, modal }) => ({
    content: content.about,
    careers: content.careers,
    teamMembers: content.teamMembers,
    modal
  })
)
export default class About extends React.Component{
  constructor(){
    super();
  }

  render() {
    let { dispatch, content, careers, teamMembers } = this.props;

    let renderTeamMembers = () => {
      return (
        teamMembers.map((teamMember) => {
          return (
            <div className={styles.teamMember} onClick={() => {
              let topPosition = window.pageYOffset;
              dispatch(modalActions.openModal({
                template: 'about',
                image: teamMember.fields.image.fields.file.url,
                name: teamMember.fields.name,
                title: teamMember.fields.title,
                bio: teamMember.fields.bio,
                lastScrollPosition: topPosition
              }));
              window.scrollTo(0, 0);
            }}>
              <div className={styles.teamMemberPhoto} style={{backgroundImage: `url(${teamMember.fields.image.fields.file.url})`}} />
              <h4 className={styles.teamMemberName}>{teamMember.fields.name}</h4>
              <h5 className={styles.teamMemberTitle}>{teamMember.fields.title}</h5>
            </div>
          )
        })
      )
    };

    return (
      <div>
        <Marquee
          title={content.title}
          intro={content.marqueeIntro}
          bgImage={content.marqueeImage.fields.file.url}
        />
        <div className="page-content">
          <div className={styles.sectionBar}>Our Mission</div>
          <div className={styles.container}>
            <ReactMarkdown source={content.ourMission} />
          </div>

          <div className={styles.sectionBar}>Executive Team</div>
          <div className={styles.teamMembers}>
            {renderTeamMembers()}
          </div>

          <div className={styles.sectionBar}>Join Us</div>
          <div className={styles.container}>
            <div className={styles.quotes}>
              <div className={styles.quote}>
                <div className={styles.quoteAuthorImage} style={{backgroundImage: `url(/images/employees/Headshot-Fariya-Naz.jpg)`}}></div>
                <div className={styles.quoteContent}>
                  <quote>"PlusMedia’s team-oriented culture creates a collaborative atmosphere where employees feel empowered to contribute meaningfully."</quote>
                  <author>Fariya Naz,<br />Account Coordinator</author>
                </div>
              </div>
              <div className={styles.quote}>
                <div className={styles.quoteAuthorImage} style={{backgroundImage: `url(/images/employees/Headshot-Christine-Isgro.jpg)`}}></div>
                <div className={styles.quoteContent}>
                  <quote>"With a leadership team dedicated to ensuring each employee has the tools they need to be successful, the growth opportunities at PlusMedia are limitless."</quote>
                  <author>Christine Isgro,<br />Senior Account Executive</author>
                </div>
              </div>
              <div className={styles.quote}>
                <div className={styles.quoteAuthorImage} style={{backgroundImage: `url(/images/employees/Headshot-Jessica-Carnrick.jpg)`}}></div>
                <div className={styles.quoteContent}>
                  <quote>"PlusMedia upholds impeccable standards in every aspect of business – treatment of our employees, service to our clients and relationships with industry partners."</quote>
                  <author>Jessica Carnrick,<br />Marketing Specialist</author>
                </div>
              </div>
            </div>

            <h2 className={styles.jobsHeader}>Your Career Starts Here</h2>

            <div className={styles.jobs}>
              {careers.map((career) => {
                return (
                  <div className={styles.job}>
                    <h2 className={styles.jobTitle}>{career.fields.title}</h2>
                    <div className={styles.jobDescription}><ReactMarkdown source={career.fields.description} /></div>
                    <div className={styles.jobCtas}>
                      {/* <div className={styles.jobLocation}>Location</div> */}
                      <div className={styles.jobApply}><a href="mailto:contact@plusme.com">Apply Now</a></div>
                      {/* <div className={styles.jobType}>Full time</div> */}
                    </div>
                  </div>
                )
              })}
            </div>
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
