import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
function SearchBar({placeHolder, info, onType}) {
  return (
    <View style={styles.body}>
      <TextInput
        placeholder={placeHolder}
        style={styles.text}
        placeholderTextColor={'black'}
        value={info}
        onChangeText={onType}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    height: '100%',
    width: '100%',
    // justifyContent: 'center',
    padding: '2%',
  },
  text: {
    color: 'black',
  },
});
export default SearchBar;
