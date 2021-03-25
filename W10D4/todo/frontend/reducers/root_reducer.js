import { combineReducers } from 'redux';
import { todosReducer } from './todo_reducer';
import { stepsReducer } from './step_reducer';

const rootReducer = combineReducers({
  todo: todosReducer,
  step: stepsReducer
})

export default rootReducer;