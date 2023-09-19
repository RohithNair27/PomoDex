import {createSlice, nanoid} from '@reduxjs/toolkit';

const initialState = {
  Task: [
    {
      id: 1,
      text: 'Go to the GYM',
      stage: 1,
    },
    {
      id: 2,
      text: 'study',
      stage: 3,
    },
    {
      id: 3,
      text: 'Healthy Food',
      stage: 2,
    },
    {
      id: 4,
      text: 'Sleep early',
      stage: 4,
    },
    {
      id: 5,
      text: 'work harder',
      stage: 2,
    },
    {
      id: 6,
      text: 'wake up early',
      stage: 4,
    },
    {
      id: 7,
      text: 'wake up early',
      stage: 3,
    },
    {
      id: 8,
      text: 'wake up early',
      stage: 2,
    },
  ],
};

const TodoSlice = createSlice({
  name: 'Todo',
  initialState,
  reducers: {
    addTask: function (state, action) {
      const newTasks = {
        id: nanoid(),
        text: action.payload,
        state: 1,
      };
      state.Task.push(newTasks);
    },
  },
});

export const {addTask} = TodoSlice.actions;
export default TodoSlice.reducer;
