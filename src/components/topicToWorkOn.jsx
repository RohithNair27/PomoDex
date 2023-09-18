import React, {useEffect, useState} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useDispatch, useSelector} from 'react-redux';
import {selectTheTask} from '../Redux/workPage/Actions';

function TopicToWorkOn({name, text, navigatee}) {
  const dispatch = useDispatch();
  SetTimeState(text);
  const [timeState, SetTimeState] = useState('');

  //Selects which task to work on and displays on timer clock
  const onSelect = () => {
    dispatch(selectTheTask(text));
  };

  // useEffect(() => {
  //   timeState(text);
  //   timeWorked();
  // }, []);

  const timeWorked = useSelector(
    state => state.SelectWorkReducer.time_worked_[timeState],
  );
  return (
    <TouchableOpacity
      style={styles.workContainer}
      onPress={() => {
        onSelect();
      }}
      onPressOut={() => {
        navigatee();
      }}>
      <FontAwesome
        name={name}
        size={50}
        color={'lightblue'}
        style={styles.Logos}
      />
      <Text style={styles.Text}>{text}</Text>

      <Text style={styles.timeworkedStyle}>{timeWorked + ' minutes'}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  workContainer: {
    backgroundColor: 'white',
    height: '15%',
    width: '80%',
    position: 'relative',
    top: '10%',
    left: '10%',
    elevation: 5,
    borderRadius: 25,
    marginBottom: 15,
  },
  Logos: {
    position: 'relative',
    top: '25%',
    left: '10%',
  },
  Text: {
    position: 'relative',
    bottom: '35%',
    left: '40%',
    color: 'black',
    fontSize: 35,
  },
  timeworkedStyle: {
    color: 'black',
    position: 'relative',
    left: '40%',
    bottom: '20%',
    fontSize: 20,
  },
});
export default TopicToWorkOn;
