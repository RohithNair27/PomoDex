import {createSlice, nanoid} from '@reduxjs/toolkit';

const initialState = {
  Task: [],
};

const TodoSlice = createSlice({
  name: 'Todo',
  initialState,
  reducers: {
    addTask: function (state, action) {
      const newTasks = {
        id: nanoid(),
        name: action.payload.name,
        stage: 1,
        about: action.payload.description,
        date: action.payload.date,
      };
      console.log(newTasks);
      state.Task.push(newTasks);
    },
    changeProgress: function (state, action) {
      for (let i = 0; i < state.Task.length; i++) {
        if (action.payload.id === state.Task[i].id) {
          const updatedTask = {
            ...state.Task[i],
            stage: action.payload.stage,
          };

          state.Task[i] = updatedTask;
        }
      }
    },
  },
});

export const {addTask, changeProgress} = TodoSlice.actions;
export default TodoSlice.reducer;
