import React from 'react';
let {connect} = require('react-redux');
import {Link} from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import Marquee from '../Marquee/Marquee';
import Accordion from '../Accordion/Accordion';
import PageItems from '../PageItems';
import styles from './index.css';
let modalActions = require('actions/modalActions');

// let dataCards = [
//   {
//     logo: 'BN-logo.jpg',
//     description: 'Reach loyal online customers who shop for books, DVDs, consumer electronics, kids\' toys and more at the Internet\'s largest bookstore, Barnes & Noble.com.',
//     cards: [
//       {
//         pdf: '/pdfs/Barnes-Noble.com-Package-Insert-Program.pdf',
//         title: 'Barnes & Noble.com Package Insert Program'
//       }
//     ]
//   },
//   {
//     logo: 'Bluestem-Brands-logo-for-website.jpg',
//     description: 'Reach a well-educated and active 50+ market of men and women who enjoy shopping for apparel, accessories, home and consumer goods and more. Tap into Bluestem Brands’ database of 28 million mature adults.',
//     cards: [
//       {
//         pdf: '/pdfs/Bluestem-Brands-Media-Opportunities.pdf',
//         title: 'Bluestem Brands Media Kit'
//       },
//       {
//         pdf: '/pdfs/Bluestem-Brands-Program-Overview-2.pdf',
//         title: 'Bluestem Brands Program Overview'
//       },
//       {
//         pdf: '/pdfs/Appleseeds-Catalog-Blow-in.pdf',
//         title: 'Appleseed\'s Catalog Blow-in'
//       },
//       {
//         pdf: '/pdfs/Appleseeds-PIP.pdf',
//         title: 'Appleseed\'s Package Insert Program'
//       },
//       {
//         pdf: '/pdfs/Bedford-Fair-Catalog-Blow-in.pdf',
//         title: 'Bedford Fair Catalog Blow-in'
//       },
//       {
//         pdf: '/pdfs/Bedford-Fair-PIP.pdf',
//         title: 'Bedford Fair Package Insert Program'
//       },
//       {
//         pdf: '/pdfs/Blair-Home-Catalog-Blow-in.pdf',
//         title: 'Blair Home Catalog Blow-in'
//       },
//       {
//         pdf: '/pdfs/Blair-Mens-Catalog-Blow-in.pdf',
//         title: 'Blair Men\'s Catalog Blow-in'
//       },
//       {
//         pdf: '/pdfs/Blair-Womens-Catalog-Blow-in.pdf',
//         title: 'Blair Women\'s Catalog Blow-in'
//       },
//       {
//         pdf: '/pdfs/Blair-PIP.pdf',
//         title: 'Blair Package Insert Program'
//       },
//       {
//         pdf: '/pdfs/Blair-Group-PIP-1.pdf',
//         title: 'Blair Group Package Insert Program'
//       },
//       {
//         pdf: '/pdfs/Blair-Womens-Group-PIP-1.pdf',
//         title: 'Blair Women\'s Group Package Insert Program'
//       },
//       {
//         pdf: '/pdfs/Blair-Womens-Home-PIP.pdf',
//         title: 'Blair Women\'s & Home Package Insert Program'
//       },
//       {
//         pdf: '/pdfs/Bluestem-Brands-Affluent-Consumer-PIP.pdf',
//         title: 'Bluestem Brands Affluent Consumer Package Insert Program'
//       },
//       {
//         pdf: '/pdfs/Drapers-Damons-Catalog-Blow-in.pdf',
//         title: 'Draper\'s & Damon\'s Catalog Blow-in'
//       },
//       {
//         pdf: '/pdfs/Drapers-Damons-PIP.pdf',
//         title: 'Draper\'s & Damon\'s Package Insert Program'
//       },
//       {
//         pdf: '/pdfs/Fingerhut-PIP.pdf',
//         title: 'Fingerhut Package Insert Program'
//       },
//       {
//         pdf: '/pdfs/Fingerhut-Statement-Program-1.pdf',
//         title: 'Fingerhut Statement Program'
//       },
//       {
//         pdf: '/pdfs/Gold-Violin-Catalog-Blow-in.pdf',
//         title: 'Gold Violin Catalog Blow-in'
//       },
//       {
//         pdf: '/pdfs/Gold-Violin-PIP.pdf',
//         title: 'Gold Violin Package Insert Program'
//       },
//       {
//         pdf: '/pdfs/Haband-Mens-Catalog-Blow-in.pdf',
//         title: 'Haband Men\'s Catalog Blow-in'
//       },
//       {
//         pdf: '/pdfs/Haband-Womens-Catalog-Blow-in.pdf',
//         title: 'Haband Women\'s Catalog Blow-in'
//       },
//       {
//         pdf: '/pdfs/Haband-PIP.pdf',
//         title: 'Haband Package Insert Program'
//       },
//       {
//         pdf: '/pdfs/Haband-Mens-PIP-1.pdf',
//         title: 'Haband Men\'s Package Insert Program'
//       },
//       {
//         pdf: '/pdfs/Haband-Womens-PIP-1.pdf',
//         title: 'Haband Women\'s Package Insert Program'
//       },
//       {
//         pdf: '/pdfs/Haband-Ride-Along.pdf',
//         title: 'Haband Ride-Along'
//       },
//       {
//         pdf: '/pdfs/Haband-Mens-Ride-Along.pdf',
//         title: 'Haband Men\'s Ride-Along'
//       },
//       {
//         pdf: '/pdfs/Haband-Womens-Ride-Along.pdf',
//         title: 'Haband Women\'s Ride-Along'
//       },
//       {
//         pdf: '/pdfs/LinenSource-Catalog-Blow-in.pdf',
//         title: 'LinenSource Catalog Blow-in'
//       },
//       {
//         pdf: '/pdfs/LinenSource-PIP.pdf',
//         title: 'LinenSource Package Insert Program'
//       },
//       {
//         pdf: '/pdfs/Norm-Thompson-Catalog-Blow-in.pdf',
//         title: 'Norm Thompson Catalog Blow-in'
//       },
//       {
//         pdf: '/pdfs/Norm-Thompson-PIP.pdf',
//         title: 'Norm Thompson Package Insert Program'
//       },
//       {
//         pdf: '/pdfs/Old-Pueblo-Traders-Catalog-Blow-in.pdf',
//         title: 'Old Pueblo Traders Catalog Blow-in'
//       },
//       {
//         pdf: '/pdfs/Old-Pueblo-Traders-PIP.pdf',
//         title: 'Old Pueblo Traders Package Insert Program'
//       },
//       {
//         pdf: '/pdfs/Sahalie-Catalog-Blow-in.pdf',
//         title: 'Sahalie Catalog Blow-in'
//       },
//       {
//         pdf: '/pdfs/Sahalie-PIP.pdf',
//         title: 'Sahalie Package Insert Program'
//       },
//       {
//         pdf: '/pdfs/The-Tog-Shop-Catalog-Blow-in.pdf',
//         title: 'The Tog Shop Catalog Blow-in'
//       },
//       {
//         pdf: '/pdfs/The-Tog-Shop-PIP.pdf',
//         title: 'The Tog Shop Package Insert Program'
//       },
//       {
//         pdf: '/pdfs/WinterSilks-Catalog-Blow-in.pdf',
//         title: 'WinterSilks Catalog Blow-in'
//       },
//       {
//         pdf: '/pdfs/WinterSilks-PIP.pdf',
//         title: 'WinterSilks Package Insert Program'
//       }
//     ]
//   },
//   {
//     logo: 'bookspan.jpg',
//     description: 'Reach loyal members of Bookspan’s extensive network of general interest and specialty book clubs.',
//     cards: [
//       {
//         pdf: '/pdfs/BookspanPIP.pdf',
//         title: 'Bookspan Package Insert Program'
//       },
//       {
//         pdf: '/pdfs/BookspanRAL.pdf',
//         title: 'Bookspan Ride-Along'
//       },
//       {
//         pdf: '/pdfs/Bookspan-Masterfile.pdf',
//         title: 'Bookspan Masterfile'
//       },
//       {
//         pdf: '/pdfs/Bookspan-Former-Book-Club-Members16.pdf',
//         title: 'Bookspan Former Book Club Members'
//       }
//     ]
//   },
//   {
//     logo: 'bradford-exchange-logo.jpg',
//     description: 'Reach buyers of designer personal checks from The Bradford Exchange.',
//     cards: [
//       {
//         pdf: '/pdfs/BradfordChecksReactivationRide-Along.pdf',
//         title: 'Bradford Checks Reactivation Ride-Along'
//       }
//     ]
//   },
//   {
//     logo: 'CP-logo-for-website.jpg',
//     description: 'Reach moms of children, age newborn to preteen, who shop The Children\'s Place for fashionable, high-quality merchandise at value prices.',
//     cards: [
//       {
//         pdf: '/pdfs/Childrens-Place-PIP.pdf',
//         title: 'The Children\'s Place Package Insert Program'
//       }
//     ]
//   },
//   {
//     logo: 'columbiahouse.jpg',
//     description: 'Reach movie lovers who enjoy the convenience of watching DVDs at home with Columbia House.',
//     cards: [
//       {
//         pdf: '/pdfs/ColumbiaHouseRAL16-1.pdf',
//         title: 'Columbia House DVD Club Ride-Along'
//       },
//       {
//         pdf: '/pdfs/Columbia-House-DVD-Club-Masterfile-.pdf',
//         title: 'Columbia House DVD Club Masterfile'
//       },
//       {
//         pdf: '/pdfs/Columbia-House-Former-DVD-Buyers-.pdf',
//         title: 'Columbia House Former DVD Buyers'
//       },
//       {
//         pdf: '/pdfs/YourMusic.com-Former-Members-.pdf',
//         title: 'YourMusic.com Former Members'
//       }
//     ]
//   },
//   {
//     logo: 'Country-Curtains-logo-for-website.png',
//     description: 'Reach homeowners who enjoy creating cozy, inviting and beautiful homes with Country Curtains.',
//     cards: [
//       {
//         pdf: '/pdfs/Country-Curtains-Blow-in.pdf',
//         title: 'Country Curtains Blow-in'
//       }
//     ]
//   },
//   {
//     logo: 'crutchfield.jpg',
//     description: 'Reach tech-savvy men who purchase the latest gadgets for their home and car from Crutchfield.',
//     cards: [
//       {
//         pdf: '/pdfs/Crutchfield-Catalog-Blow-in.pdf',
//         title: 'Crutchfield Catalog Blow-in'
//       },
//       {
//         pdf: '/pdfs/Crutchfield-Masterfile.pdf',
//         title: 'Crutchfield Masterfile'
//       },
//       {
//         pdf: '/pdfs/Crutchfield-Masterfile-Enhanced.pdf',
//         title: 'Crutchfield Masterfile – Enhanced'
//       },
//       {
//         pdf: '/pdfs/Crutchfield-Wiland-Direct-Modeling-Masterfile.pdf',
//         title: 'Crutchfield – Wiland Direct Modeling Masterfile'
//       }
//     ]
//   },
//   {
//     logo: 'directwines.jpg',
//     description: 'Reach upscale wine enthusiasts who appreciate the finer things in life with Direct Wines.',
//     cards: [
//       {
//         pdf: '/pdfs/Direct-Wines-Masterfile.pdf',
//         title: 'Direct Wines Masterfile'
//       }
//     ]
//   },
//   {
//     logo: 'disney.jpg',
//     description: 'Reach young families in both the U.S. and Canada who enjoy watching Disney movies from the comfort of home.',
//     cards: [
//       {
//         pdf: '/pdfs/Disney-Movie-Club-PIP.pdf',
//         title: 'Disney Movie Club Gold Package Insert Program'
//       },
//       {
//         pdf: '/pdfs/Disney-Movie-Club-PIP-Canadian.pdf',
//         title: 'Disney Movie Club Canadian Package Insert Program'
//       },
//       {
//         pdf: '/pdfs/Disney-Movie-Club-RAL.pdf',
//         title: 'Disney Movie Club Ride-Along'
//       },
//       {
//         pdf: '/pdfs/Disney-Movie-Club-RAL-Canadian.pdf',
//         title: 'Disney Movie Club Canadian Ride-Along'
//       }
//     ]
//   },
//   {
//     logo: 'Famous-Smoke-Shop-logo-for-website.jpg',
//     description: 'Reach distinguished consumers who shop online for the finest cigar products from Famous Smoke Shop.',
//     cards: [
//       {
//         pdf: '/pdfs/Famous-Smoke-Shop-PIP.pdf',
//         title: 'Famous Smoke Shop Package Insert Program'
//       },
//       {
//         pdf: '/pdfs/Famous-Smoke-Shop-Blow-in-1.pdf',
//         title: 'Famous Smoke Shop Catalog Blow-in'
//       }
//     ]
//   },
//   {
//     logo: 'firstSTREET-logo-for-website.jpg',
//     description: 'Reach seniors and their caregivers who shop for innovative products from firstSTREET.',
//     cards: [
//       {
//         pdf: '/pdfs/firstSTREET-Catalog-Blow-in.pdf',
//         title: 'firstSTREET Catalog Blow-in'
//       }
//     ]
//   },
//   {
//     logo: 'gatehousemedia.jpg',
//     description: 'Reach subscribers of local, home-delivered daily and weekly newspapers with GateHouse Media.',
//     cards: [
//       {
//         pdf: '/pdfs/GateHouseMediaNewspaperStatementProgram.pdf',
//         title: 'GateHouse Media Newspaper Statement Program'
//       }
//     ]
//   },
//   {
//     logo: 'Keurig-logo.jpg',
//     description: 'Reach loyal customers of Keurig Green Mountain who receive shipments of pods and brewer accessories.',
//     cards: [
//       {
//         pdf: '/pdfs/KeurigPIP.pdf',
//         title: 'Keurig Package Insert Program'
//       }
//     ]
//   },
//   {
//     logo: 'petflow.jpg',
//     description: 'Reach pet owners who enjoy the convenience of shopping online for name brand pet products from PetFlow.com.',
//     cards: [
//       {
//         pdf: '/pdfs/PetFlow.com-PIP.pdf',
//         title: 'PetFlow.com Package Insert Program'
//       }
//     ]
//   },
//   {
//     logo: 'puritanspride.jpg',
//     description: 'Reach active seniors who take pride in their health and vitality with Puritan’s Pride.',
//     cards: [
//       {
//         pdf: '/pdfs/PuritansPridePIP.pdf',
//         title: 'Puritan’s Pride Package Insert Program'
//       }
//     ]
//   },
//   {
//     logo: 'Santander-logo-for-website.jpg',
//     description: 'Reach consumers who have financed or leased a vehicle through Santander Consumer USA.',
//     cards: [
//       {
//         pdf: '/pdfs/Santander-Consumer-USA-Auto-Finance-Leases-Billing-Statement.pdf',
//         title: 'Santander Consumer USA Auto Finance & Leases Billing Statement'
//       }
//     ]
//   },
//   {
//     logo: 'Staples-logo-for-website.jpg',
//     description: 'Reach consumers and small businesses who shop Staples for a wide range of office supplies, technology, furniture and business services.',
//     cards: [
//       {
//         pdf: '/pdfs/Staples-Package-Insert-Opportunities.pdf',
//         title: 'Staples Package Insert Opportunities'
//       },
//       {
//         pdf: '/pdfs/Staples-Canadian-Package-Insert-Program.pdf',
//         title: 'Staples Canadian Business Customer Package Insert Program'
//       }
//     ]
//   },
//   {
//     logo: 'welcomewagon.jpg',
//     description: 'Reach new movers who are in need of products and services for their new home with Welcome Wagon.',
//     cards: [
//       {
//         pdf: '/pdfs/WelcomeWagonNewMoverGiftBook.pdf',
//         title: 'Welcome Wagon New Mover Gift Book Program'
//       }
//     ]
//   },
//   {
//     logo: 'yvesrocher.jpg',
//     description: 'Reach mature women who have purchased botanical beauty products from Yves Rocher.',
//     cards: [
//       {
//         pdf: '/pdfs/YvesRocherPIP.pdf',
//         title: 'Yves Rocher Package Insert Program'
//       }
//     ]
//   }
// ];

@connect(
  ({ modal, content }) => ({
    content: content.dataCardsContent,
    dataCards: content.dataCards,
    modal
  })
)
export default class DataCards extends React.Component{
  constructor(){
    super();
  }

  render() {
    let { dispatch, content, dataCards } = this.props;
    console.log('DC: ', dataCards);

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
                {dataCards.map((dataCard) => {
                  return (
                    <Accordion.Item>
                      <Accordion.Title>
                        <div className={styles.datacard}>
                          <div className={styles.logo}>
                            <img src={dataCard.fields.logo.fields.file.url} />
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
