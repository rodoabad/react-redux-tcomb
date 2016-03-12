import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import * as storeConfigurator from './services/store-configurator-service';
import reducers from './reducers';

let store;

function createStore() {

  const reducer = combineReducers({
    ...reducers,
    routing: routerReducer
  });

  return storeConfigurator.create(reducer);

}

export function getStore() {

  if (!store) {

    store = createStore();

  }

  return store;

}

export function destroyStore() {

  store = undefined;

}
