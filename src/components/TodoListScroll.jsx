import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import TaskItems from './TaskItems';
import {onPressNavigation, dayTasks} from '../TempData';
function ScrollTasks() {
  return (
    <ScrollView>
      {dayTasks.tasks.map(elements => {
        return (
          <TouchableOpacity style={styles.eachTaskStyle} key={elements.id}>
            <TaskItems data={elements.title} />
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