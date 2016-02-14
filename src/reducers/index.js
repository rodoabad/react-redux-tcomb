import { combineReducers } from 'redux';
import comments from './comments';

const commentApp = combineReducers({
  comments
});

export default commentApp;
