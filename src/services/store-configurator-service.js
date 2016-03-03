import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

export function create(reducer) {

  const middlewareStoreCreator = applyMiddleware(thunk)(createStore);

  return middlewareStoreCreator(reducer);

}
