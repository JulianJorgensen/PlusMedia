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
          intro="PlusMedia has experience across many industries, driving client strategies that are deeply rooted in proven direct response principles."
          bgImage="/images/clients-marquee-bg.jpg"
        />
        <div className="page-content">
          <div className={styles.sectionBar}>Current Partners</div>
          <div className={styles.container}>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet</p>
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
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate</p>
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
