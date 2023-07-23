import {createStore} from 'redux';
import {TaskReducer} from './Todolist/Reducers';

export const Store = createStore(TaskReducer);
