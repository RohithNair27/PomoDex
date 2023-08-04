import {
  SELECT_TASK_TO_WORK,
  ADD_TIME_WORKED_WORK,
  ADD_TIME_WORKED_READ,
  ADD_TIME_WORKED_MEDITATE,
  ADD_TIME_WORKED_FAMILYTIME,
} from '../ActionTypes';

export const selectTheTask = data => {
  return {
    type: SELECT_TASK_TO_WORK,
    payload: data,
  };
};

export const storeDataWork = data => {
  return {
    type: ADD_TIME_WORKED_WORK,
    payload: data,
  };
};
export const storeDataRead = data => {
  return {
    type: ADD_TIME_WORKED_READ,
    payload: data,
  };
};
export const storeDataMeditate = data => {
  return {
    type: ADD_TIME_WORKED_MEDITATE,
    payload: data,
  };
};
export const storeDataFamilyTime = data => {
  return {
    type: ADD_TIME_WORKED_FAMILYTIME,
    payload: data,
  };
};
