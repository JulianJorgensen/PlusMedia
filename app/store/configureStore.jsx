import * as redux from 'redux';
import thunk from 'redux-thunk';

import {modalReducer, scrollReducer, contentReducer} from 'reducers';

export let configure = (initialState = {}) => {
  var reducer = redux.combineReducers({
    modal: modalReducer,
    scrollPosition: scrollReducer,
    content: contentReducer,
  });

  var store = redux.createStore(reducer, initialState, redux.compose(
    redux.applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store;
};
