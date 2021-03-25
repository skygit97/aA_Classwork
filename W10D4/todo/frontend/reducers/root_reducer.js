import { combineReducers } from 'redux';
import todoReducer from 'root_reducer';

const rootReducer = combineReducers({
  todo: todoReducer
})

export default rootReducer;