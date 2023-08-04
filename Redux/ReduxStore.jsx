import {createStore, combineReducers} from 'redux';
import {TaskReducer} from './Todolist/Reducers';
import {placeHolderReducer} from './LoginPage/Redcuers';
import SelectWorkReducer from './workPage/Reducers';

const rootReducer = combineReducers({
  TaskReducer: TaskReducer,
  placeHolderReducer: placeHolderReducer,
  SelectWorkReducer: SelectWorkReducer,
});
export const Store = createStore(rootReducer);
