import { combineReducers } from 'redux';
import pokemon from './pokemon';
import search from './search';

export default combineReducers({
  pokemon,
  search
});