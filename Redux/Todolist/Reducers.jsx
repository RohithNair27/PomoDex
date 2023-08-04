import {ADD_TASKS, REMOVE_TASKS} from '../ActionTypes';

const initialState = {
  Tasks: [],
};

export const TaskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASKS: {
      return {
        ...state,
        Tasks: [...state.Tasks, action.payload],
      };
    }
    case REMOVE_TASKS: {
      for (let i = 0; i < state.Tasks.length; i++) {
        if (action.payload === state.Tasks[i]) {
          state.Tasks.splice(i, 1);
          break;
        }
      }
      return {
        ...state,
        Tasks: [...state.Tasks],
      };
    }
    default:
      return state;
  }
};
