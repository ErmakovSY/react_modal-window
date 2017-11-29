import { combineReducers } from 'redux';
import modal from './modalReducers.js'

export default combineReducers({
  modal: modal
  // More reducers if there are
  // can go here
});