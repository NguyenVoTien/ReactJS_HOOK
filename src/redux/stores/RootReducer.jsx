//LIBRARY
import { combineReducers } from 'redux';
// React -redux
import TodoReducer from './Reducer';

const rootReducer = combineReducers({
  todo: TodoReducer,
});
export default rootReducer;
