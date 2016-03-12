import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import routes from './routes';
import * as storeFactory from './store-factory';

const store = storeFactory.getStore();

const history = syncHistoryWithStore(browserHistory, store);

console.log(store.getState());

render(
  <Provider store={store}>
    <Router
      history={history}
      routes={routes}
    />
  </Provider>,
  document.getElementById('content')
);
