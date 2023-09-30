import React, {useEffect, useRef, useState} from 'react';
import {View, Text, TextInput, StyleSheet, Animated} from 'react-native';

function TextBar({placeHolder, secure}) {
  return (
    <View style={styles.body}>
      <View style={styles.placeHolderStyle}>
        <Text style={{color: 'black'}}>{placeHolder}</Text>
      </View>
      <TextInput style={styles.Text} secureTextEntry={secure}></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    width: '100%',
    height: '100%',

    borderRadius: 10,
    padding: 10,
  },
  Text: {
    color: 'black',
  },
  placeHolderStyle: {
    position: 'absolute',
    top: '50%',
    left: '5%',
  },
});
export default TextBar;
