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
    modal
  })
)
export default class Clients extends React.Component{
  constructor(){
    super();
  }

  render() {
    let { dispatch, content } = this.props;

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
              {
                content.clients.map((client) => {
                  return (
                    <div className={styles.partner}><img src={client.fields.logo.fields.file.url} /></div>
                  )
                })
              }
            </div>
          </div>

          <div className={styles.sectionBar}>Testimonials</div>
          <div className={styles.container}>
            <ReactMarkdown source={content.testimonialsIntro} />
            <div className={styles.testimonials}>
              {content.testimonials.map((testimonial) => {
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
