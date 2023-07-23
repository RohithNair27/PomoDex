import {ADD_TASKS, REMOVE_TASKS} from '../ActionTypes';

export function addTasks(data) {
  return {
    type: ADD_TASKS,
    payload: data,
  };
}
export function removeTasks(data) {
  return {
    type: REMOVE_TASKS,
    payload: data,
  };
}
