import React from 'react';
let {connect} = require('react-redux');
import {Route, HashRouter, Link, withRouter} from 'react-router-dom';
import _ from 'lodash';
import axios from 'axios';
import DocumentMeta from 'react-document-meta';
import Index from 'Index/Index';
import About from 'About/About';
import Capabilities from 'Capabilities';
import Clients from 'Clients';
import DataCards from 'DataCards';
import Contact from 'Contact';
import PageItem from 'PageItem';
import Header from 'Header/Header';
import Footer from 'Footer/Footer';
import Modal from 'components/Modal';
import styles from './Main.css';
import Loader from 'components/Loader';

import Scroll from 'Scroll';

import { Layout } from 'react-toolbox/lib/layout';
import ReactGA from 'react-ga';
// ReactGA.initialize('UA-6241825-9'); // initialize Google Analytics

function logPageView(location) {
  // ReactGA.set({ page: location.pathname });
  // ReactGA.pageview(location.pathname);
}

// site meta data
const meta = {
  title: 'PlusMedia',
  description: 'PlusMedia description',
  meta: {
    charset: 'utf-8'
  },
  auto: {
    ograph: true
  }
};

@withRouter
@connect(
  ({ content }) => ({
    content
  })
)
export default class Main extends React.Component {
  constructor() {
    super();

    this.state = {
      navActive: false,
      loaded: false,
      contentFetched: false
    };
  }

  getAllContent = () => {
    let { dispatch } = this.props;
    axios.get(`/contentful/getAllContent`)
    .then((response) => {
      let homepageContent = _.find(response.data, { 'sys': {'id': '7hAkjlU9LqsSMYCG4q4sGU'} }).fields;
      let aboutContent = _.find(response.data, { 'sys': {'id': '62ZbsMs95CQAuygyw8E0UI'} }).fields;
      let capabilitiesContent = _.find(response.data, { 'sys': {'id': '3Os9QeGbq0c6IKaIeQiyiK'} }).fields;
      let clientsContent = _.find(response.data, { 'sys': {'id': 'ptfoS7OZAO2ygquY62osk'} }).fields;
      let contact = _.find(response.data, { 'sys': {'id': '15DHqPnnKik6EYaiyGM2uY'} }).fields;
      let dataCardsContent = _.find(response.data, { 'sys': {'id': '34eqgcK56Uo0ykY2akCekE'} }).fields;

      let careers = _.filter(response.data, { 'sys': {'contentType': {'sys': {'id': 'careers'} } } });
      let teamMembers = _.filter(response.data, { 'sys': {'contentType': {'sys': {'id': 'teamMember'} } } });
      let services = _.filter(response.data, { 'sys': {'contentType': {'sys': {'id': 'service'} } } });
      let testimonials = _.filter(response.data, { 'sys': {'contentType': {'sys': {'id': 'testimonial'} } } });
      let dataCards = _.filter(response.data, { 'sys': {'contentType': {'sys': {'id': 'dataCard'} } } });

      dispatch({
        type: 'SET_CONTENT',
        homepage: homepageContent,
        about: aboutContent,
        capabilities: capabilitiesContent,
        clientsContent,
        careers,
        teamMembers,
        dataCards,
        services,
        testimonials,
        contact,
        dataCardsContent
      });

      this.setState({contentFetched: true});
    })
    .catch((error) => {
      console.log('Error getting content from contentful...', error);
    });
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.onRouteChanged();
    }
  }

  componentWillMount() {
    this.getAllContent();
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({loaded: true});
    }, 200);
  }

  onRouteChanged() {
    // log page view to Google Analytics
    logPageView(location);

    // scroll to top when changing page
    window.scrollTo(0, 0);

    // close navigation drawer
    this.handleNavClose();

    // animate the loader
    this.setState({loaded: false});
    setTimeout(() => {
      this.setState({loaded: true});
    }, 200);
  }

  handleNavToggle = () => {
    this.setState({navActive: !this.state.navActive});
  };

  handleNavClose = () => {
    this.setState({navActive: false});
  };

  render() {
    let { contentFetched, homepageContent } = this.state;

    if (!contentFetched){
      return (
        <Loader />
      )
    }

    return (
      <div id="main">
        <DocumentMeta {...meta} />
        <Header handleNavToggle={this.handleNavToggle.bind(this)} navActive={this.state.navActive} />
        <Scroll />
        <Layout>
          <div className={`${styles.loader} ${this.state.loaded ? styles.loaded : ''}`}><div className={styles.loaderInner}></div></div>
          <div className={styles.page}>
            <Route exact path="/" component={Index} content={homepageContent} />
            <Route path="/about" component={About} />
            <Route path="/capabilities" component={Capabilities} />
            <Route path="/case-study/:title" component={PageItem} />
            <Route path="/clients" component={Clients} />
            <Route path="/contact" component={Contact} />
            <Route path="/data-cards" component={DataCards} />
          </div>
          <Footer />
        </Layout>
        <Modal />
      </div>
    )
  }
}
