import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

function Button({placeholder, onClick}) {
  return (
    <TouchableOpacity
      style={styles.body}
      onPress={() => {
        onClick();
      }}>
      <Text style={styles.text}>{placeholder}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  body: {
    width: '100%',
    height: '100%',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
});
export default Button;
