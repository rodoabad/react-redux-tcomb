import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

export function create(reducers) {

  const middlewareStoreCreator = applyMiddleware(thunk)(createStore);

  return middlewareStoreCreator(reducers);

}
