import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import App from './views/components/App';
import * as storeFactory from './store-factory';

let store = storeFactory.getStore();

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('content')
);
