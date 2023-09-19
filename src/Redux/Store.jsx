import {configureStore} from '@reduxjs/toolkit';
import TodoListSlice from './toDoList/TodoListSlice';
export const Store = configureStore({
  reducer: TodoListSlice,
});
