import React from 'react';
let {connect} = require('react-redux');
import ReactMarkdown from 'react-markdown';
import Marquee from '../Marquee/Marquee';
import PageItems from '../PageItems';
import styles from './index.css';
let modalActions = require('actions/modalActions');

@connect(
  ({ modal, content }) => ({
    content: content.clientsContent,
    testimonials: content.testimonials,
    modal
  })
)
export default class Clients extends React.Component{
  constructor(){
    super();
  }

  render() {
    let { dispatch, content, testimonials } = this.props;

    return (
      <div>
        <Marquee
          title={content.title}
          intro={content.marqueeIntro}
          bgImage={content.marqueeImage.fields.file.url}
        />
        <div className="page-content">
          <div className={styles.sectionBar}>Our Partners</div>
          <div className={styles.container}>
            <ReactMarkdown source={content.partnersIntro} />
            <div className={styles.partners}>
              <div className={styles.partner}><img src="/images/client-logos/Logo-Barnes-&-Noble.jpg" /></div>
              <div className={styles.partner}><img src="/images/client-logos/Logo-Charles-Tyrwhitt.jpg" /></div>
              <div className={styles.partner}><img src="/images/client-logos/Childrens-Place-logo.jpg" /></div>
              <div className={styles.partner}><img src="/images/client-logos/Logo-Colonial-Penn.jpg" /></div>
              <div className={styles.partner}><img src="/images/client-logos/down-jones.jpg" /></div>
              <div className={styles.partner}><img src="/images/client-logos/Logo-Feeding-America.jpg" /></div>
              <div className={styles.partner}><img src="/images/client-logos/Logo-Gerber-Life-Insurance.jpg" /></div>
              <div className={styles.partner}><img src="/images/client-logos/Haband-logo.jpg" /></div>
              <div className={styles.partner}><img src="/images/client-logos/Harry's-logo.jpg" /></div>
              <div className={styles.partner}><img src="/images/client-logos/Logo-Hayneedle.jpg" /></div>
              <div className={styles.partner}><img src="/images/client-logos/Logo-HelloFresh.jpg" /></div>
              <div className={styles.partner}><img src="/images/client-logos/Logo-Jet.jpg" /></div>
              <div className={styles.partner}><img src="/images/client-logos/Logo-Omaha-Steaks.jpg" /></div>
              <div className={styles.partner}><img src="/images/client-logos/Shoes.com-logo.jpg" /></div>
              <div className={styles.partner}><img src="/images/client-logos/Logo-Shutterfly.jpg" /></div>
              <div className={styles.partner}><img src="/images/client-logos/Logo-Staples.jpg" /></div>
              <div className={styles.partner}><img src="/images/client-logos/Logo-The-Economist.jpg" /></div>
              <div className={styles.partner}><img src="/images/client-logos/Logo-USO.jpg" /></div>
              <div className={styles.partner}><img src="/images/client-logos/Logo-WSJwine.jpg" /></div>
              <div className={styles.partner}><img src="/images/client-logos/ZipRecruiter-logo.jpg" /></div>
            </div>
          </div>

          <div className={styles.sectionBar}>Testimonials</div>
          <div className={styles.container}>
            <ReactMarkdown source={content.testimonialsIntro} />
            <div className={styles.testimonials}>
              {testimonials.map((testimonial) => {
                return (
                  <div className={styles.testimonial}>
                    "{testimonial.fields.testimonial}"
                    <author>– {testimonial.fields.author}</author>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
