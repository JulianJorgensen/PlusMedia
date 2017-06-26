import React from 'react';
import {BrowserRouter as Router, Route, HashRouter, Link} from 'react-router-dom';

import DocumentMeta from 'react-document-meta';
import Main from 'Main';
import Index from 'Index/Index';
import Header from 'Header/Header';
import Footer from 'Footer/Footer';

import { Layout } from 'react-toolbox/lib/layout';
import ReactGA from 'react-ga';
// ReactGA.initialize('UA-6241825-9'); // initialize Google Analytics

function logPageView(location) {
  // ReactGA.set({ page: location.pathname });
  // ReactGA.pageview(location.pathname);
}

// browserHistory.listen((location) => {
//   logPageView(location);
//
//   // scroll to top when changing page
//   window.scrollTo(0, 0);
// });

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

export default (
  <Router>
    <div id="main" className={`page-name-here`}>
      <DocumentMeta {...meta} />
      <Header />
      <Route path="/" component={Main} />
      <Layout>
        <Route exact path="/" component={Index} />
        {/* <Route path="/about" component={About} /> */}
        <Footer />
      </Layout>
    </div>
  </Router>
);
