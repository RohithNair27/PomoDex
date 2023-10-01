import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Modal,
  StatusBar,
} from 'react-native';
import SearchBar from '../components/ui/SearchBar';
import FilterButtons from '../components/filterButtons';
import Stages from '../components/Stages';
import TaskItems from '../components/TaskItems';
import Button from '../components/ui/Button';
import {changeProgress} from '../Redux/toDoList/TodoListSlice';

function Tasks({navigation}) {
  const [modalVisible, setModalVisible] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [itemSelected, setItemSelected] = useState();
  const [selectedButtonStates, setselectedButtonStates] = useState({
    Todo: {
      text: 'Todo',
      value: true,
      stage: 1,
    },
    selectedInProgress: {
      text: 'selectedInProgress',
      value: false,
      stage: 2,
    },
    selectedOnHold: {
      text: 'selectedOnHold',
      value: false,
      stage: 3,
    },
    selectedDone: {
      text: 'selectedDone',
      value: false,
      stage: 4,
    },
  });

  //!This function gets the data from Store
  const TodoTasks = useSelector(state => {
    return state.Task;
  });

  //handle textchange in Search button
  const handleTextChangeSearch = element => {
    setSearchText(element);
  };

  //handles change in visibility of modal
  const handleModelChange = element => {
    setItemSelected(element);
    setModalVisible(!modalVisible);
  };

  const onHandleStageChange = stage => {
    dispatch(changeProgress({...itemSelected, stage: stage}));
  };

  const onHandleTaskStage = getText => {
    setselectedButtonStates(prevState => {
      const updatedStates = {...prevState};
      for (let key in updatedStates) {
        if (updatedStates[key].text === getText) {
          updatedStates[key].value = true;
        } else {
          updatedStates[key].value = false;
        }
      }
      return updatedStates;
    });
  };
  const onHandleTaskReturnStage = () => {
    for (let key in selectedButtonStates) {
      if (selectedButtonStates[key].value === true) {
        return selectedButtonStates[key].stage;
      } else {
        continue;
      }
    }
  };

  //* we are sending data just to do conditional navigation
  const onPressTaskNavigation = (changeStage, data) => {
    navigation.navigate('AddTask', {changeStage: changeStage, data: data});
  };

  const dispatch = useDispatch();
  const onChangeStage = () => {};

  const window_height = Dimensions.get('window').height;
  const window_width = Dimensions.get('window').width;
  return (
    <View
      style={
        modalVisible
          ? {...styles.body, backgroundColor: 'lightgray'}
          : styles.body
      }>
      {modalVisible ? <StatusBar backgroundColor={'lightgray'} /> : null}
      <View style={styles.taskNavigationContianer}>
        <View style={styles.searchBarBody}>
          <SearchBar
            placeHolder={'Search'}
            info={searchText}
            onType={handleTextChangeSearch}
            onClickErrorCheck={() => {
              null;
            }}
          />
        </View>
        <View style={styles.tasksHeader}>
          <Text style={styles.tasksHeaderText}>Tasks</Text>
        </View>
        <View style={styles.taskNavigator}>
          <FilterButtons
            placeHolder={'To Do'}
            selectState={selectedButtonStates.Todo}
            handle={onHandleTaskStage}
          />
          <FilterButtons
            placeHolder={'In Progess'}
            selectState={selectedButtonStates.selectedInProgress}
            handle={onHandleTaskStage}
          />
          <FilterButtons
            placeHolder={'Hold'}
            selectState={selectedButtonStates.selectedOnHold}
            handle={onHandleTaskStage}
          />
          <FilterButtons
            placeHolder={'Done'}
            selectState={selectedButtonStates.selectedDone}
            handle={onHandleTaskStage}
          />
        </View>
      </View>
      <View
        style={{
          ...styles.flatListContainer,
          marginBottom: window_height * 0.09,
        }}>
        <ScrollView>
          {TodoTasks.filter(data => {
            return (
              data.name.toLowerCase().includes(searchText.toLowerCase()) &&
              data.stage === onHandleTaskReturnStage()
            );
          }).map(elements => {
            return (
              <TouchableOpacity
                style={{...styles.eachTaskStyle, height: window_height * 0.1}}
                key={elements.id}
                onPress={() => handleModelChange(elements)}>
                <TaskItems data={elements} showStage={elements.stage} />
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
      <TouchableOpacity
        style={styles.addTasksButton}
        onPress={() => {
          navigation.navigate('AddTask', {changeStage: false});
        }}>
        <Text style={styles.plusSign}>+</Text>
      </TouchableOpacity>
      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => handleModelChange()}>
        <View style={styles.modalView}>
          <View
            style={{
              // flex: 1,
              borderWidth: 2,
              width: '40%',
              top: '5%',
              backgroundColor: 'back',
            }}></View>
          <View style={{flex: 0.4, justifyContent: 'center'}}>
            <Text
              style={{
                color: 'black',
                top: '14%',
                fontWeight: 700,
                fontSize: 20,
              }}>
              Change the status
            </Text>
          </View>
          <View style={styles.stagesIconsModal}>
            <Stages onHandleStageChange={onHandleStageChange} />
          </View>
          <View style={styles.ButtonBody}>
            <Button
              placeholder={'Close'}
              textColor={'red'}
              onClick={() => handleModelChange()}
            />
          </View>
        </View>
      </Modal>
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
    flexGrow: 1,
  },
  taskNavigationContianer: {
    top: '2%',
    alignItems: 'center',
    // borderWidth: 1,
    flex: 1,
    width: '90%',
  },
  searchBarBody: {
    top: '5%',
    width: '100%',
    flex: 1 / 1.5,
    backgroundColor: '#f3f3f3',
    borderRadius: 20,
  },
  flatListContainer: {
    // borderWidth: 1,
    flex: 2,
    width: '90%',
    // marginBottom: '20%',
  },
  tasksHeader: {
    color: 'black',
    fontSize: 40,
    fontWeight: '600',
    flex: 1,
    // borderWidth: 1,
    width: '90%',
    justifyContent: 'center',
  },
  tasksHeaderText: {
    color: 'black',
    fontSize: 40,
    fontWeight: '600',
  },
  text: {
    color: 'black',
    fontSize: 40,
  },
  taskNavigator: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '85%',
    // borderWidth: 1,
    // alignItems: 'center',
  },
  ScrollView: {
    borderWidth: 1,
    height: '100%',
  },
  EachtaskItemBody: {
    borderWidth: 1,
    height: '100%',
  },
  addTasksButton: {
    backgroundColor: '#4683F9',
    position: 'absolute',
    top: height - 150,
    left: width - 80,
    width: 60,
    height: 60,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
  },
  plusSign: {
    fontWeight: 400,
    fontSize: 35,
    color: 'white',
  },
  eachTaskStyle: {
    flex: 1,
    marginBottom: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'lightgray',
  },
  popUp: {
    height: '40%',
    width: '100%',
    backgroundColor: 'green',
  },
  modalView: {
    height: height * 0.37,
    backgroundColor: 'white',
    // borderWidth: 1,
    borderRadius: 40,
    width: '99%',
    alignSelf: 'center',
    position: 'absolute',
    bottom: '-2%',
    shadowColor: 'black',
    elevation: 100,
    alignItems: 'center',
    paddingBottom: '7%',
  },
  stagesIconsModal: {
    // borderWidth: 1,
    flex: 0.6,
  },
  ButtonBody: {
    flex: 0.4,
    width: '90%',
    borderRadius: 10,
    backgroundColor: '#ffe3e3',
  },
});
export default Tasks;
