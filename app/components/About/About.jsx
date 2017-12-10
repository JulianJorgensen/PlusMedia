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
    modal
  })
)
export default class About extends React.Component{
  constructor(){
    super();
  }

  render() {
    let { dispatch, content } = this.props;
    console.log('content: ', content);

    let renderTeamMembers = () => {
      return (
        content.teamMembers.map((teamMember) => {
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
              {
                content.quotes.map((quote) => {
                  return (
                    <div className={styles.quote}>
                      <div className={styles.quoteAuthorImage} style={{backgroundImage: `url(${quote.fields.image.fields.file.url})`}}></div>
                      <div className={styles.quoteContent}>
                        <quote>"{quote.fields.quote}"</quote>
                        <author>{quote.fields.author}</author>
                      </div>
                    </div>
                  )
                })
              }
            </div>

            <h2 className={styles.jobsHeader}>Your Career Starts Here</h2>

            <div className={styles.jobs}>
              {content.careers.map((career) => {
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

          <PageItems headline="News" page="about" items="news" />          
        </div>
      </div>
    )
  }
}
