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

    let teamMembers = [
      {
        name: 'Sherry Scapperotti',
        title: 'President',
        title2: '',
        image: 'Sherry-Scapperotti.jpg',
        bio: 'Sherry Scapperotti is founder and owner of PlusMedia and CEO of PlusMedia Digital. A seasoned direct marketing executive and entrepreneur with 20 years of experience in the alternative media industry, Sherry is an expert negotiator and media strategist with a talent for identifying new growth opportunities and refining marketing plans to maximize ROI. She employs a unique, results-focused approach to media planning, buying and analysis with the ability to seamlessly evolve and adapt to meet client needs. Sherry is a member of the Direct Marketing Association, Insert Media Council, Hudson Valley Direct Marketing Association, and NEMOA.'
      },
      {
        name: 'Kate McGee',
        title: 'COO',
        title2: '',
        image: '',
        bio: 'Bio to come...'
      },
      {
        name: 'Elise Nathan',
        title: 'CFO',
        title2: '',
        image: 'Elise-Nathan.jpg',
        bio: 'Elise Nathan is Chief Financial Officer with over 30 years of diversified financial, operational, and management experience, with expertise in maximizing productivity and profits. She is a Certified Public Accountant, and is recognized for her strengths in strategic planning and systems development, leadership and problem-solving skills. At PlusMedia, Elise is responsible for all accounting functions, financial and treasury operations, and human resource administration. Her ability to create long-term financial plans and strategies, communication and operational skills, and leadership of the accounting department provides PlusMedia’s clients and executive team with a trusted resource.'
      },
      {
        name: 'Darryl Daoust',
        title: 'EVP',
        title2: '',
        image: 'Darryl-Daoust.jpg',
        bio: 'Darryl Daoust is Executive Vice President, Marketing & Integration with a wealth of experience in both offline and digital media, CRM strategy development, brand advertising, as well as B2B, B2C and B2E marketing. In this role, he leads cross-functional teams focused on driving clients’ business forward through the use of integrated media channels to engage consumers along the path to purchase, build brand equity, drive incremental sales and deliver on client objectives. Prior to joining PlusMedia, Darryl served as Vice President – General Manager at Epsilon (formerly Ryan Partnership), where he led the digital shopper marketing center of excellence as well as the Unilever enterprise client relationship across CRM, consumer promotions, data, brand marketing, omnichannel and ecommerce.'
      },
      {
        name: 'Michelle Syme',
        title: 'EVP',
        title2: '',
        image: 'Michelle-Syme.jpg',
        bio: 'Michelle Syme is a seasoned direct marketing professional with over 20 years of experience in the industry on both the mailer and agency sides of the business.  Prior to joining PlusMedia in 2004, Michelle worked for prominent direct marketing companies such as B2B cataloger Executive Greetings, Inc., Reader’s Digest, Scholastic/Grolier and Atlas Editions/Newfield Publications, where she learned  various direct marketing business models and p&ls as well as campaign planning and analysis for many media channels.  This background has enabled her to work with all clients at PlusMedia and is instrumental in her current role as Executive Vice President, Strategy & Planning.  In this role, she oversees client marketing strategy as well as planning, analysis and reporting for PlusMedia clients.'
      },
      {
        name: 'Sandra Roscoe',
        title: 'EVP',
        title2: '',
        image: 'Sandra-Roscoe.jpg',
        bio: 'Sandra Roscoe is Executive Vice President, Strategy & Development at PlusMedia with over 20 years of insert media buying and selling experience spanning a variety of client industries and business models. Sandra specializes in buying media at an affordable ROI and generating revenue for companies by monetizing their customer touch-points. A widely recognized expert in the field, she has extensive experience in the development of ancillary revenue opportunities and her entrepreneurial spirit led to the successful development of a leading revenue enhancement company in the industry. In the past, Sandra has served as chairperson for the Insert Media Council and has been honored by the Direct Marketing Association for her outstanding service and contributions to the industry.'
      },
      {
        name: 'Dolores Babcock',
        title: 'SVP',
        title2: '',
        image: 'Dolores-for-website.jpg',
        bio: 'Dolores Ryan Babcock is Senior Vice President, List Brokerage with extensive direct mail and insert media experience, having worked in the industry for over 30 years. In this role, she leads PlusMedia’s List Brokerage division and oversees direct mail strategy for all client accounts, working closely with the integration team to ensure a holistic campaign planning approach. Prior to joining PlusMedia, Dolores held positions at Direct Media and SMS representing clients such as Easy Rest, Omaha Steaks, Publishers Clearing House and Hayneedle.'
      },
      {
        name: 'Julie Lebeau',
        title: 'VP',
        title2: '',
        image: 'Julie-LeBeau.jpg',
        bio: 'Julie LeBeau has over 15 years of planning, buying and selling experience for various media channels ranging from offline mass media to online, radio syndication, DRTV, OOH, place-based and digital signage at point of sale. She is continually exploring new and emerging media channels while working side-by-side with her colleagues to customize media solutions and develop POVs for her clients. With her strong vendor relationships, Julie is able to create new inventory and aggressively negotiate media buys, including multi-year category buyout contracts that block out the competition and improve her clients’ bottom line. Julie provides a new perspective and fresh ideas reflective of the ever-evolving media landscape.'
      }
    ];

    let renderTeamMembers = () => {
      return (
        teamMembers.map((teamMember) => {
          return (
            <div className={styles.teamMember} onClick={() => {
              let topPosition = window.pageYOffset;
              dispatch(modalActions.openModal({
                template: 'about',
                image: `/images/team/${teamMember.image}`,
                name: teamMember.name,
                title: teamMember.title,
                title2: teamMember.title2,
                bio: teamMember.bio,
                lastScrollPosition: topPosition
              }));
              window.scrollTo(0, 0);
            }}>
              <div className={styles.teamMemberPhoto} style={{backgroundImage: `url(/images/team/${teamMember.image})`}} />
              <h4 className={styles.teamMemberName}>{teamMember.name}</h4>
              <h5 className={styles.teamMemberTitle}>{teamMember.title}</h5>
            </div>
          )
        })
      )
    };

    let renderJobs = () => {
      return (
        <div className={styles.jobs}>
          <div className={styles.job}>
            <h2 className={styles.jobTitle}>Account Coordinator</h2>
            <div className={styles.jobDescription}>The Account Coordinator is the engine that drives PlusMedia’s business.  Serving as the key support for the execution of high-impact media channels on behalf of our clients, the ideal Account Coordinator is organized, precise and communicative, and possesses a strong desire to learn and grow within a best-in-class media agency.  The Account Coordinator’s objectives are to ensure smooth execution across internal teams and external vendors and client contacts to drive top-notch service and results for PlusMedia’s clients.</div>
            <div className={styles.jobCtas}>
              {/* <div className={styles.jobLocation}>Location</div> */}
              <div className={styles.jobApply}><a href="mailto:contact@plusme.com">Apply Now</a></div>
              {/* <div className={styles.jobType}>Full time</div> */}
            </div>
          </div>
          {/* <div className={styles.job}>
            <h2 className={styles.jobTitle}>Job title #1</h2>
            <div className={styles.jobDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</div>
            <div className={styles.jobCtas}>
              <div className={styles.jobLocation}>Location</div>
              <div className={styles.jobApply}>Apply Now</div>
              <div className={styles.jobType}>Full time</div>
            </div>
          </div> */}
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
