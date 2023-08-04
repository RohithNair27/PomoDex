import React, {useEffect, useState, useRef} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  FlatList,
  ScrollView,
} from 'react-native';

import {addTasks, removeTasks} from '../Redux/Todolist/Actions';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import TaskComponent from '../components/TaskComponent';
import {useDispatch, useSelector} from 'react-redux';
function TodoList() {
  const [text, setText] = useState('');
  const [finalTask, setFinalTask] = useState([]);
  const dispatch = useDispatch();
  function random() {
    return Math.floor(Math.random() * 10000);
  }
  const onSubmitTask = function () {
    const taskAdded = {[random()]: text};
    dispatch(addTasks(taskAdded));
    setText('');
  };
  const data = useSelector(state => state.TaskReducer.Tasks);

  const completeTasks = data => {
    dispatch(removeTasks(data));
  };

  return (
    <View style={styles.body}>
      <View style={styles.AddTasksView}>
        <TextInput
          style={styles.AddTasks}
          placeholder="Write the tasks"
          placeholderTextColor={'black'}
          value={text}
          onChange={event => {
            setText(event.nativeEvent.text);
          }}
          onEndEditing={() => {
            onSubmitTask();
          }}></TextInput>
        <TouchableOpacity style={styles.AddCategoriesButton}>
          <MaterialIcons
            name="playlist-add"
            color="black"
            size={30}
            style={styles.AddCategoryIcon}
          />
        </TouchableOpacity>
      </View>

      <ScrollView
        style={styles.ListBody}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
        {data.map(element => {
          return (
            <TaskComponent
              data={element}
              key={Object.keys(element)}
              onComplete={completeTasks}
            />
          );
        })}
      </ScrollView>
    </View>
  );
}

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
const styles = StyleSheet.create({
  body: {
    height,
    width,
    backgroundColor: '#edeff1',
  },
  AddTasksView: {
    height: '20%',

    position: 'relative',
    top: '2%',
  },
  AddTasks: {
    width: '50%',
    position: 'absolute',
    left: '15%',
    top: '10%',
    borderRadius: 30,
    padding: 10,
    color: 'white',
    backgroundColor: 'white',
    elevation: 10,
    color: 'black',
  },
  AddCategoriesButton: {
    width: '12%',
    height: 46,
    position: 'relative',
    left: '70%',
    top: '11%',
    borderRadius: 100,
    backgroundColor: 'white',
    elevation: 10,
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
  },
  AddCategoryIcon: {
    position: 'relative',
    left: 6,
  },
  ListBody: {
    backgroundColor: '#edeff1',
    position: 'absolute',
    left: '5%',
    width: '85%',
    top: '13%',
    height: '73%',
  },
});
export default TodoList;
