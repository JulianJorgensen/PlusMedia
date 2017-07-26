import React from 'react';
let {connect} = require('react-redux');
import Marquee from '../Marquee/Marquee';
import PageItems from '../PageItems';
import styles from './index.css';
let modalActions = require('actions/modalActions');

class Clients extends React.Component{
  constructor(){
    super();
  }

  render() {
    let {dispatch} = this.props;

    return (
      <div>
        <Marquee
          title="Clients"
          intro="PlusMedia has experience across a wide variety of industries, markets and business models, serving clients throughout the U.S. and internationally."
          bgImage="/images/clients-marquee-bg.jpg"
        />
        <div className="page-content">
          <div className={styles.sectionBar}>Our Partners</div>
          <div className={styles.container}>
            <p>Our clients predominantly come to us through word-of-mouth referrals. Our very first client still works with us after nearly 20 years, and many others have been with us for more than a decade.</p>
            <div className={styles.partners}>
              <div className={styles.partner}><img src="/images/client-logos/Logo-Barnes-&-Noble.jpg" /></div>
              <div className={styles.partner}><img src="/images/client-logos/Logo-Charles-Tyrwhitt.jpg" /></div>
              <div className={styles.partner}><img src="/images/client-logos/Logo-Colonial-Penn.jpg" /></div>
              <div className={styles.partner}><img src="/images/client-logos/Logo-Feeding-America.jpg" /></div>
              <div className={styles.partner}><img src="/images/client-logos/Logo-Gerber-Life-Insurance.jpg" /></div>
              <div className={styles.partner}><img src="/images/client-logos/Logo-Hayneedle.jpg" /></div>
              <div className={styles.partner}><img src="/images/client-logos/Logo-HelloFresh.jpg" /></div>
              <div className={styles.partner}><img src="/images/client-logos/Logo-Jet.jpg" /></div>
              <div className={styles.partner}><img src="/images/client-logos/Logo-Omaha-Steaks.jpg" /></div>
              <div className={styles.partner}><img src="/images/client-logos/Logo-Shutterfly.jpg" /></div>
              <div className={styles.partner}><img src="/images/client-logos/Logo-Staples.jpg" /></div>
              <div className={styles.partner}><img src="/images/client-logos/Logo-The-Economist.jpg" /></div>
              <div className={styles.partner}><img src="/images/client-logos/Logo-USO.jpg" /></div>
              <div className={styles.partner}><img src="/images/client-logos/Logo-WSJwine.jpg" /></div>
            </div>
          </div>

          <div className={styles.sectionBar}>Testimonials</div>
          <div className={styles.container}>
            <p>Our clients often describe us as nimble because we adapt quickly to meet their changing needs. Here is what they are saying about us.</p>
            <div className={styles.testimonials}>
              <div className={styles.testimonial}>
                "PlusMedia has been a critical partner in our ability to quickly find and scale new online donors for the organization. Their breadth and depth of knowledge in the direct response industry has allowed us to innovate and test new partners while continuing to optimize and improve our core program."
                <author>– Senior Manager, Digital Media and Acquisition | Feeding America</author>
              </div>
              <div className={styles.testimonial}>
                "PlusMedia has proven to be an extraordinary partner. The team is not only responsive, but extremely knowledgeable in this market. They have really helped us expand this channel to become one of our most efficient sources of subscriber acquisition in North America. We are always confident that our needs will be met with superior service."
                <author>– Director, Offline Acquisitions | The Economist</author>
              </div>
              <div className={styles.testimonial}>
                "Plus Media has a superior level of expertise and enthusiasm with an unsurpassed drive for success.  Their management team and staff treat our business as if it was their own. We have increased our ROI in multiple channels, in large part, because of their approach to our strategy, solution and success."
                <author>– Media Director | Colonial Penn</author>
              </div>
            </div>
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
)(Clients);
