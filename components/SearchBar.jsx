import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
function SearchBar() {
  return (
    <View style={styles.body}>
      <TextInput
        placeholder="Search"
        style={styles.text}
        placeholderTextColor={'black'}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    height: '100%',
    width: '100%',
    paddingLeft: 20,
  },
  text: {
    color: 'black',
  },
});
export default SearchBar;
