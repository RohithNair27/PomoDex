import {createSlice, nanoid} from '@reduxjs/toolkit';

const initialState = {
  Task: [
    // {
    //   id: 1,
    //   name: 'Go',
    //   stage: 1,
    //   date: '29 sep',
    //   about: 'This is to go',
    // },
    // {
    //   id: 1,
    //   name: 'Go',
    //   stage: 1,
    //   date: '29 sep',
    //   about: 'This is to go',
    // },
  ],
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

      state.Task.push(newTasks);
    },
    changeProgress: function (state, action) {
      for (let i = 0; i < state.Task.length; i++) {
        if (action.payload.id === state.Task[i].id) {
          const updatedTask = {
            ...state.Task[i],
            // stage: state.Task[i].stage + 1,
            stage: action.payload.stage,
          };
          console.log(updatedTask);
          state.Task[i] = updatedTask;
        }
      }
    },
  },
});

export const {addTask, changeProgress} = TodoSlice.actions;
export default TodoSlice.reducer;
