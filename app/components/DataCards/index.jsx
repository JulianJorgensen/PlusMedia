import React from 'react';
let {connect} = require('react-redux');
import {Link} from 'react-router-dom';
import Marquee from '../Marquee/Marquee';
import Accordion from '../Accordion/Accordion';
import PageItems from '../PageItems';
import styles from './index.css';
let modalActions = require('actions/modalActions');

class DataCards extends React.Component{
  constructor(){
    super();
  }

  render() {
    let {dispatch} = this.props;

    return (
      <div>
        <Marquee
          title="Data Cards"
          intro="Click here to download our complete List & Program Overview"
          className={styles.marquee}
        />
        <div className="page-content">
          <div className={styles.container}>
            PlusMedia’s Management division offers a wide range of media buying opportunities for advertisers looking to market to third party customer bases via lists, package inserts, billing statements, product samples and more. Please click on the links below to view data cards or contact Sandra Roscoe for more information on our managed properties.
            <div className={styles.datacards}>
              <Accordion className={styles.accordion}>
                <Accordion.Item>
                  <Accordion.Title>
                    <div className={styles.datacard}>
                      <div className={styles.logo}>
                        <img src="/images/data-cards/Layer34.png" />
                      </div>
                      <div className={styles.description}>
                        Reach a well-educated and active 50+ market of men and women who enjoy shopping for apparel, accessories, home and consumer goods and more. Tap into Bluestem Brands’ database of 28 million mature adults.
                        <Link to="">VIEW DATA CARDS</Link>
                      </div>
                    </div>
                  </Accordion.Title>
                  <Accordion.Content>
                    <div className={styles.accordionContent}>
                      More content...
                    </div>
                  </Accordion.Content>
                </Accordion.Item>
                <Accordion.Item>
                  <Accordion.Title>
                    <div className={styles.datacard}>
                      <div className={styles.logo}>
                        <img src="/images/data-cards/Layer35.png" />
                      </div>
                      <div className={styles.description}>
                        Reach a well-educated and active 50+ market of men and women who enjoy shopping for apparel, accessories, home and consumer goods and more. Tap into Bluestem Brands’ database of 28 million mature adults.
                        <Link to="">VIEW DATA CARDS</Link>
                      </div>
                    </div>
                  </Accordion.Title>
                  <Accordion.Content>
                    <div className={styles.accordionContent}>
                      More content...
                    </div>
                  </Accordion.Content>
                </Accordion.Item>
                <Accordion.Item>
                  <Accordion.Title>
                    <div className={styles.datacard}>
                      <div className={styles.logo}>
                        <img src="/images/data-cards/Layer36.png" />
                      </div>
                      <div className={styles.description}>
                        Reach a well-educated and active 50+ market of men and women who enjoy shopping for apparel, accessories, home and consumer goods and more. Tap into Bluestem Brands’ database of 28 million mature adults.
                        <Link to="">VIEW DATA CARDS</Link>
                      </div>
                    </div>
                  </Accordion.Title>
                  <Accordion.Content>
                    <div className={styles.accordionContent}>
                      More content...
                    </div>
                  </Accordion.Content>
                </Accordion.Item>
                <Accordion.Item>
                  <Accordion.Title>
                    <div className={styles.datacard}>
                      <div className={styles.logo}>
                        <img src="/images/data-cards/Layer37.png" />
                      </div>
                      <div className={styles.description}>
                        Reach a well-educated and active 50+ market of men and women who enjoy shopping for apparel, accessories, home and consumer goods and more. Tap into Bluestem Brands’ database of 28 million mature adults.
                        <Link to="">VIEW DATA CARDS</Link>
                      </div>
                    </div>
                  </Accordion.Title>
                  <Accordion.Content>
                    <div className={styles.accordionContent}>
                      More content...
                    </div>
                  </Accordion.Content>
                </Accordion.Item>
                <Accordion.Item>
                  <Accordion.Title>
                    <div className={styles.datacard}>
                      <div className={styles.logo}>
                        <img src="/images/data-cards/Layer38.png" />
                      </div>
                      <div className={styles.description}>
                        Reach a well-educated and active 50+ market of men and women who enjoy shopping for apparel, accessories, home and consumer goods and more. Tap into Bluestem Brands’ database of 28 million mature adults.
                        <Link to="">VIEW DATA CARDS</Link>
                      </div>
                    </div>
                  </Accordion.Title>
                  <Accordion.Content>
                    <div className={styles.accordionContent}>
                      More content...
                    </div>
                  </Accordion.Content>
                </Accordion.Item>
              </Accordion>
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
)(DataCards);
