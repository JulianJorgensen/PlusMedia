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
          <div className={styles.sectionBar}>Current Partners</div>
          <div className={styles.container}>
            <p>Our clients predominantly come to us through word-of-mouth referrals. Our very first client still works with us after nearly 20 years, and many others have been with us for more than a decade.</p>
            <div className={styles.partners}>
              <div className={styles.partner}><img src="/images/client-logos/barnesnnoble.png" /></div>
              <div className={styles.partner}><img src="/images/client-logos/dowjones.png" /></div>
              <div className={styles.partner}><img src="/images/client-logos/gerber.png" /></div>
              <div className={styles.partner}><img src="/images/client-logos/rodale.png" /></div>
              <div className={styles.partner}><img src="/images/client-logos/barnesnnoble.png" /></div>
              <div className={styles.partner}><img src="/images/client-logos/dowjones.png" /></div>
              <div className={styles.partner}><img src="/images/client-logos/gerber.png" /></div>
              <div className={styles.partner}><img src="/images/client-logos/rodale.png" /></div>
              <div className={styles.partner}><img src="/images/client-logos/barnesnnoble.png" /></div>
              <div className={styles.partner}><img src="/images/client-logos/dowjones.png" /></div>
              <div className={styles.partner}><img src="/images/client-logos/gerber.png" /></div>
              <div className={styles.partner}><img src="/images/client-logos/rodale.png" /></div>
              <div className={styles.partner}><img src="/images/client-logos/dowjones.png" /></div>
              <div className={styles.partner}><img src="/images/client-logos/gerber.png" /></div>
              <div className={styles.partner}><img src="/images/client-logos/rodale.png" /></div>
            </div>
          </div>

          <div className={styles.sectionBar}>Testimonials</div>
          <div className={styles.container}>
            <p>Our clients often describe us as nimble because we adapt quickly to meet their changing needs. Here is what they are saying about us.</p>
            <div className={styles.testimonials}>
              <div className={styles.testimonial}>
                Boxed has been working with Plus Media for well over a year now and we're very happy with our experience. The team is super responsive (it seems like they work around the clock) and genuinely interested in helping Boxed grow and achieve our goals. We view Plus Media as an extension of our team and look forward to accomplishing even more together!
                <author>– Marketing Manager | Boxed</author>
              </div>
              <div className={styles.testimonial}>
                Boxed has been working with Plus Media for well over a year now and we're very happy with our experience. The team is super responsive (it seems like they work around the clock) and genuinely interested in helping Boxed grow and achieve our goals. We view Plus Media as an extension of our team and look forward to accomplishing even more together!
                <author>– Marketing Manager | Boxed</author>
              </div>
              <div className={styles.testimonial}>
                Boxed has been working with Plus Media for well over a year now and we're very happy with our experience. The team is super responsive (it seems like they work around the clock) and genuinely interested in helping Boxed grow and achieve our goals. We view Plus Media as an extension of our team and look forward to accomplishing even more together!
                <author>– Marketing Manager | Boxed</author>
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
