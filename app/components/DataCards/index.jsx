import React from 'react';
let {connect} = require('react-redux');
import {Link} from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import Marquee from '../Marquee/Marquee';
import Accordion from '../Accordion/Accordion';
import PageItems from '../PageItems';
import styles from './index.css';
let modalActions = require('actions/modalActions');

@connect(
  ({ modal, content }) => ({
    content: content.dataCardsContent,
    modal
  })
)
export default class DataCards extends React.Component{
  constructor(){
    super();
  }

  render() {
    let { dispatch, content } = this.props;

    return (
      <div>
        <Marquee
          title={content.title}
          intro=""
          className={styles.marquee}
        />
        <div className="page-content">
          <div className={styles.container}>
            <ReactMarkdown source={content.intro} />
            <div className={styles.datacards}>
              <Accordion className={styles.accordion}>
                {content.dataCards.map((dataCard) => {
                  return (
                    <Accordion.Item>
                      <Accordion.Title>
                        <div className={styles.datacard}>
                          <div className={styles.logo}>
                            <img src={dataCard ? dataCard.fields.logo.fields.file.url : ''} />
                          </div>
                          <div className={styles.description}>
                            {dataCard.fields.description}
                          </div>
                        </div>
                      </Accordion.Title>
                      <Accordion.Content>
                        <div className={styles.accordionContent}>
                          <ul>{dataCard.fields.pdFs ? dataCard.fields.pdFs.map((pdf) => {
                            return <li><a href={pdf.fields.file.url} target="new">{pdf.fields.title}</a></li>
                          }) : ''}
                          </ul>
                        </div>
                      </Accordion.Content>
                    </Accordion.Item>
                  )
                })}
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
