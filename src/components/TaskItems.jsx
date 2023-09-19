import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import GreenTick from '../assets/Images/GreenTick.png';
import fire from '../assets/Images/fireWithoutBg.png';
import notepad from '../assets/Images/Notes.png';
import testTube from '../assets/Images/testTubeWithoutBg.png';
function TaskItems({data, showStage}) {
  const imageSources = {
    1: GreenTick,
    2: fire,
    3: notepad,
    4: testTube,
  };

  const imageSource = imageSources[showStage];

  return (
    <View style={styles.body}>
      <View style={styles.imageView}>
        <Image
          source={imageSource}
          style={styles.image}
          resizeMode={'contain'}
        />
      </View>

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
  imageView: {
    width: '17%',
    height: '100%',
    // borderWidth: 1,
  },
  image: {
    height: '100%',

    width: '100%',
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
