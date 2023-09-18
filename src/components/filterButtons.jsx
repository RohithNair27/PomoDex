import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
function FilterButtons({placeHolder, selectState, handle}) {
  return (
    <TouchableOpacity
      onPress={() => {
        handle(selectState.text);
      }}>
      <Text
        style={
          selectState.value ? styles.PlaceHolderSelected : styles.PlaceHolder
        }>
        {placeHolder}
      </Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  PlaceHolder: {
    color: 'black',
    fontWeight: 800,

    fontSize: 19,
    borderRadius: 7,
    padding: 3,
  },
  PlaceHolderSelected: {
    color: 'white',
    fontWeight: 800,
    borderWidth: 1,
    fontSize: 19,
    borderRadius: 7,
    backgroundColor: 'black',
    padding: 3,
  },
});
export default FilterButtons;
