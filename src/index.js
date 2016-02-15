import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from 'views/components/App';
import commentApp from './reducers';

let store = createStore(commentApp);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('content')
);
