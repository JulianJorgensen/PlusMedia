import React from 'react';
let {connect} = require('react-redux');
import {Link} from 'react-router-dom';
import Marquee from '../Marquee/Marquee';
import Accordion from '../Accordion/Accordion';
import PageItems from '../PageItems';
import styles from './index.css';
let modalActions = require('actions/modalActions');

let dataCards = [
  {
    logo: 'BN-logo.jpg',
    description: 'Reach loyal online customers who shop for books, DVDs, consumer electronics, kids\' toys and more at the Internet\'s largest bookstore, Barnes & Noble.com.',
    content: 'Lorem ipsum dolar sit amit...'
  },
  {
    logo: 'Bluestem-Brands-logo-for-website.jpg',
    description: 'Reach a well-educated and active 50+ market of men and women who enjoy shopping for apparel, accessories, home and consumer goods and more. Tap into Bluestem Brands’ database of 28 million mature adults.',
    content: 'Lorem ipsum dolar sit amit...'
  },
  {
    logo: 'bookspan.jpg',
    description: '',
    content: 'Lorem ipsum dolar sit amit...'
  },
  {
    logo: 'bradford-exchange-logo.jpg',
    description: '',
    content: 'Lorem ipsum dolar sit amit...'
  },
  {
    logo: 'columbiahouse.jpg',
    description: '',
    content: 'Lorem ipsum dolar sit amit...'
  },
  {
    logo: 'Country-Curtains-logo-for-website.png',
    description: '',
    content: 'Lorem ipsum dolar sit amit...'
  },
  {
    logo: 'CP-logo-for-website.jpg',
    description: '',
    content: 'Lorem ipsum dolar sit amit...'
  },
  {
    logo: 'crutchfield.jpg',
    description: '',
    content: 'Lorem ipsum dolar sit amit...'
  },
  {
    logo: 'directwines.jpg',
    description: '',
    content: 'Lorem ipsum dolar sit amit...'
  },
  {
    logo: 'disney.jpg',
    description: '',
    content: 'Lorem ipsum dolar sit amit...'
  },
  {
    logo: 'Famous-Smoke-Shop-logo-for-website.jpg',
    description: '',
    content: 'Lorem ipsum dolar sit amit...'
  },
  {
    logo: 'firstSTREET-logo-for-website.jpg',
    description: '',
    content: 'Lorem ipsum dolar sit amit...'
  },
  {
    logo: 'gatehousemedia.jpg',
    description: '',
    content: 'Lorem ipsum dolar sit amit...'
  },
  {
    logo: 'Keurig-logo.jpg',
    description: '',
    content: 'Lorem ipsum dolar sit amit...'
  },
  {
    logo: 'petflow.jpg',
    description: '',
    content: 'Lorem ipsum dolar sit amit...'
  },
  {
    logo: 'puritanspride.jpg',
    description: '',
    content: 'Lorem ipsum dolar sit amit...'
  },
  {
    logo: 'Santander-logo-for-website.jpg',
    description: '',
    content: 'Lorem ipsum dolar sit amit...'
  },
  {
    logo: 'Staples-logo-for-website.jpg',
    description: '',
    content: 'Lorem ipsum dolar sit amit...'
  },
  {
    logo: 'welcomewagon.jpg',
    description: '',
    content: 'Lorem ipsum dolar sit amit...'
  },
  {
    logo: 'yvesrocher.jpg',
    description: '',
    content: 'Lorem ipsum dolar sit amit...'
  }
];

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
          intro=""
          className={styles.marquee}
        />
        <div className="page-content">
          <div className={styles.container}>
            <p>PlusMedia’s Management division offers a wide range of media buying opportunities for advertisers looking to market to third party customer bases via lists, package inserts, billing statements, product samples and more. Please click on the links below to view data cards or <a href="mailto:tina.cavallo@plusme.com">contact Tina Cavallo</a> for more information on our managed properties.</p>
            <p><a target="new" href="/pdfs/PlusMedia-List-&-Program-Overview.pdf">Click here</a> to download our complete List & Program Overview</p>
            <div className={styles.datacards}>
              <Accordion className={styles.accordion}>
                {dataCards.map((dataCard) => {
                  return (
                    <Accordion.Item>
                      <Accordion.Title>
                        <div className={styles.datacard}>
                          <div className={styles.logo}>
                            <img src={`/images/data-cards/${dataCard.logo}`} />
                          </div>
                          <div className={styles.description}>
                            {dataCard.description}
                          </div>
                        </div>
                      </Accordion.Title>
                      <Accordion.Content>
                        <div className={styles.accordionContent}>
                          {dataCard.content}
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

export default connect(
  (state) => {
    return {
      modal: state.modal
    }
  }
)(DataCards);
