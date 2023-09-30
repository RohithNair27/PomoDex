import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import SearchBar from '../components/ui/SearchBar';

import FilterButtons from '../components/filterButtons';
import Stages from '../components/Stages';
import {useSelector} from 'react-redux';
import TaskItems from '../components/TaskItems';
function Tasks({navigation}) {
  const [modalVisible, setModalVisible] = useState(true);
  const [searchText, setSearchText] = useState('');
  const [selectedButtonStates, setselectedButtonStates] = useState({
    selectAll: {
      text: 'selectedAll',
      value: false,
      stage: 1,
    },
    selectTodo: {
      text: 'selectedTodo',
      value: true,
      stage: 2,
    },
    selectInProgress: {
      text: 'selectedInProgress',
      value: false,
      stage: 3,
    },
    selectDone: {
      text: 'selectedDone',
      value: false,
      stage: 4,
    },
  });

  //!This function gets the data from Store
  const TodoTasks = useSelector(state => {
    return state.Task;
  });
  const handleTextChangeSearch = element => {
    setSearchText(element);
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

  //* we are sending data just to do conditional navigation
  const onPressTaskNavigation = (changeStage, data) => {
    navigation.navigate('AddTask', {changeStage: changeStage, data: data});
  };

  const window_height = Dimensions.get('window').height;
  return (
    <View style={styles.body}>
      <View style={styles.taskNavigationContianer}>
        <View style={styles.searchBarBody}>
          <SearchBar
            placeHolder={'Search'}
            info={searchText}
            onType={handleTextChangeSearch}
            onClickErrorCheck={null}
          />
        </View>
        <View style={styles.tasksHeader}>
          <Text style={styles.tasksHeaderText}>Tasks</Text>
        </View>
        <View style={styles.taskNavigator}>
          <FilterButtons
            placeHolder={'To Do'}
            selectState={selectedButtonStates.selectTodo}
            handle={onHandleTaskStage}
          />
          <FilterButtons
            placeHolder={'In Progess'}
            selectState={selectedButtonStates.selectInProgress}
            handle={onHandleTaskStage}
          />
          <FilterButtons
            placeHolder={'Hold'}
            selectState={selectedButtonStates.selectAll}
            handle={onHandleTaskStage}
          />
          <FilterButtons
            placeHolder={'Done'}
            selectState={selectedButtonStates.selectDone}
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
            return data.name.toLowerCase().includes(searchText.toLowerCase());
          }).map(elements => {
            return (
              <TouchableOpacity
                style={{...styles.eachTaskStyle, height: window_height * 0.1}}
                key={elements.id}
                onPress={() => onTouch(true, elements)}>
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
});
export default Tasks;
