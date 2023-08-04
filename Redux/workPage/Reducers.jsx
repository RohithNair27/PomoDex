import {
  SELECT_TASK_TO_WORK,
  ADD_TIME_WORKED_WORK,
  ADD_TIME_WORKED_MEDITATE,
  ADD_TIME_WORKED_FAMILYTIME,
  ADD_TIME_WORKED_READ,
} from '../ActionTypes';

const initalState = {
  text: 'What topic you want to work today?',
  time_worked_Work: 0,
  time_worked_Read: 0,
  time_worked_Meditate: 0,
  time_worked_FamilyTime: 0,
  time_worked_study: 0,
};

const SelectWorkReducer = (state = initalState, action) => {
  switch (action.type) {
    case SELECT_TASK_TO_WORK:
      return {
        ...state,
        text: action.payload,
      };
    case ADD_TIME_WORKED_WORK:
      return {
        ...state,
        time_worked_Work: state.time_worked_Work + action.payload,
      };
    case ADD_TIME_WORKED_MEDITATE:
      return {
        ...state,
        time_worked_Meditate: state.time_worked_Meditate + action.payload,
      };
    case ADD_TIME_WORKED_READ:
      return {
        ...state,
        time_worked_Read: state.time_worked_Read + action.payload,
      };
    case ADD_TIME_WORKED_FAMILYTIME:
      return {
        ...state,
        time_worked_FamilyTime: state.time_worked_FamilyTime + action.payload,
      };
    default:
      return state;
  }
};

export default SelectWorkReducer;
