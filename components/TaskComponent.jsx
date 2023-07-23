import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {useDispatch} from 'react-redux';
import {removeTasks} from '../Redux/Todolist/Actions';
function TaskComponent({data, onComplete}) {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  return (
    <View style={styles.TaskBody}>
      <CheckBox
        disabled={false}
        value={toggleCheckBox}
        onValueChange={() => {
          setToggleCheckBox(!toggleCheckBox);
          onComplete(data);
        }}
        style={styles.CheckBox}
        tintColors={{true: 'lightblue', false: '#edeff1'}}
      />
      <Text style={styles.taskText}>{Object.values(data)}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  TaskBody: {
    width: '95%',
    height: 52,
    borderRadius: 10,
    backgroundColor: 'white',
    elevation: 3,
    marginBottom: 20,
    position: 'relative',
    left: '4%',
  },
  taskText: {
    color: 'black',
    position: 'relative',
    left: '20%',
    bottom: '30%',
  },
  CheckBox: {
    position: 'relative',
    top: '22%',
    left: '5%',
  },
});
export default TaskComponent;
