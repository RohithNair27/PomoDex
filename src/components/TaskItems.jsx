import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import GreenTick from '../assets/Images/GreenTick.png';
import fire from '../assets/Images/fireWithoutBg.png';
import notepad from '../assets/Images/Notes.png';
import testTube from '../assets/Images/testTubeWithoutBg.png';
function TaskItems({data}) {
  return (
    <View style={styles.body}>
      <Image source={notepad} style={styles.image} />

      <View style={styles.taskInfo}>
        <Text style={styles.Text}>{data}</Text>
        <Text style={styles.date}>8 september</Text>
      </View>
      <TouchableOpacity style={styles.options}>
        <Text style={styles.optionsDots}>...</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  body: {
    width: '100%',
    height: '100%',

    padding: '2%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  Text: {
    color: 'black',
    fontWeight: 600,
    fontSize: 17,
  },
  date: {
    color: 'black',
  },
  image: {
    height: '100%',
    borderWidth: 1,
    padding: '10%',
    width: '10%',
  },
  options: {
    width: '20%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  optionsDots: {
    fontSize: 25,
    fontWeight: 900,
    color: 'black',
    bottom: '10%',
  },
  taskInfo: {},
});
export default TaskItems;
