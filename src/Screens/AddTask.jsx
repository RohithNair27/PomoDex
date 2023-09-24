import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {addTask} from '../Redux/toDoList/TodoListSlice';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import SearchBar from '../components/SearchBar';
import Button from '../components/Button';
import GreenTick from '../assets/Images/GreenTick.png';
import fire from '../assets/Images/fireWithoutBg.png';
import Notes from '../assets/Images/Notes.png';
import testTube from '../assets/Images/testTubeWithoutBg.png';
function AddTask({navigation}) {
  const [taskDetails, settaskDetails] = useState({
    name: '',
    description: '',
    date: '',
  });

  const onHandleChangeName = event => {
    settaskDetails({...taskDetails, name: event});
  };
  const onHandleChangeDescription = text => {
    settaskDetails({...taskDetails, description: text});
  };
  const onHandleChangeDate = text => {
    settaskDetails({...taskDetails, date: text});
  };
  const dispatch = useDispatch();
  const onHandleAddTask = () => {
    dispatch(addTask(taskDetails));
    navigation.navigate('TabNavigation');
  };

  return (
    <View style={styles.body}>
      <View
        style={{
          flex: 2,
          width: '90%',
        }}>
        <View style={styles.taskText}>
          {/* <TouchableOpacity
            onPress={() => navigation.navigate('TabNavigation')}>
            <Text style={{fontSize: 30, color: 'black'}}>{'<'}</Text>
          </TouchableOpacity> */}
          <Text
            style={{
              color: 'black',

              fontSize: 35,
              fontWeight: '600',
            }}>
            New task
          </Text>
        </View>
        <View style={styles.name}>
          <Text style={{left: '5%', color: 'gray'}}>Name</Text>
          <View style={styles.nameTextBox}>
            <SearchBar info={taskDetails.name} onType={onHandleChangeName} />
          </View>
        </View>

        <View style={styles.Description}>
          <Text style={{left: '5%', color: 'gray'}}>Description</Text>
          <View style={{...styles.nameTextBox, height: '75%'}}>
            <SearchBar
              info={taskDetails.description}
              onType={onHandleChangeDescription}
            />
          </View>
        </View>
        <View style={styles.Date}>
          <Text style={{left: '5%', color: 'gray'}}>Date</Text>
          <View style={styles.nameTextBox}>
            <SearchBar info={taskDetails.date} onType={onHandleChangeDate} />
          </View>
        </View>
      </View>
      <View
        style={{
          flex: 0.85,
          width: '90%',
          bottom: '4%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View style={styles.statusBody}>
          <TouchableOpacity style={styles.imageButton}>
            <Image source={Notes} style={styles.imageSize} />
            <Text style={{color: 'black', fontWeight: 600}}>To do</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.imageButton}>
            <Image source={fire} style={styles.imageSize} />
            <Text style={{color: 'black', fontWeight: 600}}>In Progress</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.imageButton}>
            <Image source={testTube} style={styles.imageSize} />
            <Text style={{color: 'black', fontWeight: 600}}>Testing</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.imageButton}>
            <Image source={GreenTick} style={styles.imageSize} />
            <Text style={{color: 'black', fontWeight: 600}}>Done</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.ButtonBody}>
          <Button
            placeholder={'Add Task'}
            textColor={'white'}
            onClick={onHandleAddTask}
          />
        </View>
      </View>
    </View>
  );
}
const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  body: {
    backgroundColor: 'white',
    alignItems: 'center',
    height,
    width,
  },
  taskText: {
    flex: 0.75,
    justifyContent: 'center',

    justifyContent: 'center',
  },
  name: {
    flex: 0.85,
    justifyContent: 'center',
  },
  nameTextBox: {
    height: '50%',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'lightgray',
    marginTop: '1%',
  },
  Description: {
    // borderWidth: 1,
    flex: 1.25,
  },
  Date: {
    flex: 0.85,
  },
  ButtonBody: {
    flex: 0.4,
    borderRadius: 10,
    backgroundColor: '#4683F9',
    width: '100%',
  },

  statusBody: {
    flex: 1,
    flexDirection: 'row',
    width: '95%',
    alignItems: 'center',
    // borderWidth: 1,
  },
  imageSize: {resizeMode: 'contain', height: '40%', width: '70%'},
  imageButton: {
    flex: 1,

    alignItems: 'center',
  },
});
export default AddTask;
