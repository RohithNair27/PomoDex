import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

function TextBar({placeHolder}) {
  return (
    <View style={styles.body}>
      <TextInput
        style={styles.Text}
        placeholder={placeHolder}
        placeholderTextColor={'black'}></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
  },
  Text: {
    color: 'black',
  },
});
export default TextBar;
