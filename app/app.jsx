import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';

import styles from './styles/app.css';

let store = require('configureStore').configure();
import Main from 'components/Main';

// subscribe to the redux store
store.subscribe(() => {
  let state = store.getState();
});

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Main />
    </Router>
  </Provider>,
  document.getElementById('app')
);
