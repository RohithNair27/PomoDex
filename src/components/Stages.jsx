import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import GreenTick from '../assets/Images/GreenTick.png';
import fire from '../assets/Images/fireWithoutBg.png';
import Notes from '../assets/Images/Notes.png';
import testTube from '../assets/Images/testTubeWithoutBg.png';

const Stages = () => {
  return (
    <View style={styles.statusBody}>
      <TouchableOpacity
        style={styles.imageButton}
        onPress={() => onHandleStageChange(1)}>
        <Image source={Notes} style={styles.imageSize} />
        <Text style={{color: 'black', fontWeight: 600}}>To do</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.imageButton}
        onPress={() => onHandleStageChange(2)}>
        <Image source={fire} style={styles.imageSize} />
        <Text style={{color: 'black', fontWeight: 600}}>In Progress</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.imageButton}
        onPress={() => onHandleStageChange(3)}>
        <Image source={testTube} style={styles.imageSize} />
        <Text style={{color: 'black', fontWeight: 600}}>Testing</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.imageButton}
        onPress={() => onHandleStageChange(4)}>
        <Image source={GreenTick} style={styles.imageSize} />
        <Text style={{color: 'black', fontWeight: 600}}>Done</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Stages;

const styles = StyleSheet.create({
  imageButton: {
    flex: 1,
    alignItems: 'center',
  },
  statusBody: {
    // flex: 1,
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
  },
  imageSize: {resizeMode: 'contain', height: '40%', width: '70%'},
});
