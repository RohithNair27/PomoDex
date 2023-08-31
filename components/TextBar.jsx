import React, {useEffect, useRef} from 'react';
import {View, Text, TextInput, StyleSheet, Animated} from 'react-native';

function TextBar({placeHolder}) {
  const distance = useRef(new Animated.Value(0)).current;

  const animate = () => {
    Animated.timing(distance, {
      toValue: 10,
      duration: 1000,
      useNativeDriver: true,
    });
  };
  useEffect(() => {
    animate();
  }, []);
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
    backgroundColor: '#cccccc',
    borderRadius: 10,
    padding: 10,
  },
  Text: {
    color: 'black',
  },
});
export default TextBar;
