import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addTask, changeProgress} from '../Redux/toDoList/TodoListSlice';
import {View, Text, Dimensions, StyleSheet} from 'react-native';
import SearchBar from '../components/SearchBar';
import Button from '../components/Button';
import Stages from '../components/Stages';
// import {changeProgress} from '../Redux/toDoList/TodoListSlice';
function AddTask({route, navigation}) {
  const [taskDetails, settaskDetails] = useState({
    name: '',
    description: '',
    date: '',
  });

  //!this is for validation of text
  const [validationTextName, setValidationTextName] = useState('Name');
  const [validationTextDescription, setValidationTextDescription] =
    useState('Description');
  const [validationTextDate, setValidationTextDate] = useState('Date');
  const [canNavigateBack, setCanNavigateBack] = useState(false);
  //! Here is the function to check validation
  const onHandleErrorDetection = type => {
    if (taskDetails.name === '' && (type === 'Name' || type === 'Allcheck')) {
      setValidationTextName('Please enter some proper name');
    } else {
      setValidationTextName('Name');
    }
    if (taskDetails.date === '' && (type === 'Date' || type === 'Allcheck')) {
      setValidationTextDate('Please enter some date');
    } else {
      setValidationTextDate('Date');
    }
    if (
      taskDetails.description === '' &&
      (type === 'Description' || type === 'Allcheck')
    ) {
      setValidationTextDescription('Please enter some description');
    } else {
      setValidationTextDescription('Description');
    }
    if (
      taskDetails.name !== '' &&
      taskDetails.date !== '' &&
      taskDetails.description !== ''
    ) {
      setCanNavigateBack(true);
    }
  };

  const {changeStage, data} = route.params;
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
    if (canNavigateBack) {
      dispatch(addTask(taskDetails));
      navigation.navigate('TabNavigation');
    } else {
      onHandleErrorDetection('Allcheck');
    }
  };

  // const onHandleStageChange = selectedStage => {
  //   const newStateData = {...data, stage: selectedStage};
  //   dispatch(changeProgress(newStateData));
  // };

  return (
    <View style={styles.body}>
      <View
        style={{
          flex: 2,
          width: '90%',
        }}>
        <View style={styles.taskText}>
          <Text
            style={{
              color: 'black',

              fontSize: 35,
              fontWeight: '600',
            }}>
            {changeStage ? 'New task' : 'Task'}
          </Text>
        </View>
        <View style={styles.name}>
          <Text
            style={
              validationTextName !== 'Name'
                ? styles.placeHolderTextError
                : styles.placeHolderText
            }>
            {validationTextName}
          </Text>
          <View style={styles.nameTextBox}>
            {changeStage ? (
              <SearchBar
                info={taskDetails.name}
                onType={onHandleChangeName}
                placeHolder={data.name}
              />
            ) : (
              <SearchBar
                info={taskDetails.name}
                onType={onHandleChangeName}
                onClickErrorCheck={onHandleErrorDetection}
                type={'Name'}
              />
            )}
          </View>
        </View>

        <View style={styles.Description}>
          <Text
            style={
              validationTextDescription !== 'Description'
                ? styles.placeHolderTextError
                : styles.placeHolderText
            }>
            {validationTextDescription}
          </Text>
          <View style={{...styles.nameTextBox, height: '75%'}}>
            {changeStage ? (
              <SearchBar
                info={taskDetails.description}
                onType={onHandleChangeDescription}
                placeHolder={data.about}
              />
            ) : (
              <SearchBar
                info={taskDetails.description}
                onType={onHandleChangeDescription}
                onClickErrorCheck={onHandleErrorDetection}
                type={'Description'}
              />
            )}
          </View>
        </View>
        <View style={styles.Date}>
          <Text
            style={
              validationTextDate !== 'Date'
                ? styles.placeHolderTextError
                : styles.placeHolderText
            }>
            {validationTextDate}
          </Text>
          <View style={styles.nameTextBox}>
            {changeStage ? (
              <SearchBar
                info={taskDetails.date}
                onType={onHandleChangeDate}
                placeHolder={data.date}
              />
            ) : (
              <SearchBar
                info={taskDetails.date}
                onType={onHandleChangeDate}
                onClickErrorCheck={onHandleErrorDetection}
                type={'Date'}
              />
            )}
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
        <View style={styles.statusBody}>{changeStage ? null : null}</View>
        <View style={styles.ButtonBody}>
          {changeStage ? (
            <Button
              placeholder={'Save Changes'}
              textColor={'white'}
              onClick={onHandleAddTask}
            />
          ) : (
            <Button
              placeholder={'Add Task'}
              textColor={'white'}
              onClick={onHandleAddTask}
            />
          )}
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
    flex: 0.3,
    borderRadius: 10,
    backgroundColor: '#4683F9',
    width: '100%',
  },
  statusBody: {
    flex: 0.2,
  },
  placeHolderText: {left: '5%', color: 'gray'},
  placeHolderTextError: {left: '5%', color: 'red'},
});
export default AddTask;
