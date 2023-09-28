import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import TaskItems from './TaskItems';
import {useSelector, useDispatch} from 'react-redux';
import {changeProgress} from '../Redux/toDoList/TodoListSlice';
function ScrollTasks({onTouch}) {
  const [taskList, setTaskList] = useState([]);
  const dispatch = useDispatch();
  const TodoTasks = useSelector(state => {
    return state.Task;
  });
  useEffect(() => {
    if (TodoTasks) {
      setTaskList(TodoTasks);
    } else {
      setTaskList([]);
    }
  }, [TodoTasks]);

  const window_height = Dimensions.get('window').height;

  return (
    <ScrollView>
      {taskList.map(elements => {
        return (
          <TouchableOpacity
            style={{...styles.eachTaskStyle, height: window_height * 0.1}}
            key={elements.id}
            onPress={() => onTouch(true, elements)}>
            <TaskItems data={elements.name} showStage={elements.stage} />
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  Scroll: {
    height: '100%',
    width: '100%',
  },
  eachTaskStyle: {
    flex: 1,
    marginBottom: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'lightgray',
  },
});
export default ScrollTasks;
