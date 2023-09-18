import React, {useState} from 'react';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import SearchBar from '../components/SearchBar';
import ScrollTasks from '../components/TodoListScroll';
import FilterButtons from '../components/filterButtons';
function Tasks({navigation}) {
  const [selectedButtonStates, setselectedButtonStates] = useState({
    selectAll: {
      text: 'selectedAll',
      value: false,
    },
    selectTodo: {
      text: 'selectedTodo',
      value: true,
    },
    selectInProgress: {
      text: 'selectedInProgress',
      value: false,
    },
    selectDone: {
      text: 'selectedDone',
      value: false,
    },
  });

  const onHandleTaskNavigation = getText => {
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

  return (
    <View style={styles.body}>
      <View style={styles.taskNavigationContianer}>
        <View style={styles.searchBarBody}>
          <SearchBar placeHolder={'Search'} />
        </View>
        <View style={styles.tasksHeader}>
          <Text style={styles.tasksHeaderText}>Tasks</Text>
        </View>
        <View style={styles.taskNavigator}>
          <FilterButtons
            placeHolder={'All'}
            selectState={selectedButtonStates.selectAll}
            handle={onHandleTaskNavigation}
          />
          <FilterButtons
            placeHolder={'To Do'}
            selectState={selectedButtonStates.selectTodo}
            handle={onHandleTaskNavigation}
          />
          <FilterButtons
            placeHolder={'In Progess'}
            selectState={selectedButtonStates.selectInProgress}
            handle={onHandleTaskNavigation}
          />
          <FilterButtons
            placeHolder={'Done'}
            selectState={selectedButtonStates.selectDone}
            handle={onHandleTaskNavigation}
          />
        </View>
      </View>
      <View style={styles.flatListContainer}>
        <ScrollTasks />
      </View>
      <TouchableOpacity
        style={styles.addTasksButton}
        onPress={() => {
          navigation.navigate('AddTask');
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
    flex: 2.5,
    width: '90%',
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
});
export default Tasks;
