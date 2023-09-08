import React, {useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Animated,
} from 'react-native';

function Button({placeholder, onClick, textColor}) {
  return (
    <TouchableOpacity
      style={styles.body}
      onPress={() => {
        onClick();
      }}>
      <Text style={{...styles.text, color: textColor}}>{placeholder}</Text>
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
    fontWeight: 'bold',
    fontSize: 18,
  },
});
export default Button;
