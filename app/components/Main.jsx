import React from 'react';
import {Route, HashRouter, Link, withRouter} from 'react-router-dom';

import DocumentMeta from 'react-document-meta';
import Index from 'Index/Index';
import About from 'About/About';
import Header from 'Header/Header';
import Footer from 'Footer/Footer';

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
export default class Main extends React.Component {
  constructor() {
    super();

    this.state = {
      navActive: false
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.onRouteChanged();
    }
  }

  onRouteChanged() {
    // log page view to Google Analytics
    logPageView(location);

    // scroll to top when changing page
    window.scrollTo(0, 0);

    // close navigation drawer
    this.handleNavClose();
  }

  handleNavToggle = () => {
    this.setState({navActive: !this.state.navActive});
  };

  handleNavClose = () => {
    this.setState({navActive: false});
  };

  render() {
    return (
      <div id="main" className={`page-name-here`}>
        <DocumentMeta {...meta} />
        <Header handleNavToggle={this.handleNavToggle.bind(this)} navActive={this.state.navActive} />

        <Layout>
          <Route exact path="/" component={Index} />
          <Route path="/about" component={About} />
          <Footer />
        </Layout>
      </div>
    )
  }
}
