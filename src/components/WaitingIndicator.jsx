import React from 'react';
import {View, Text, ActivityIndicator, StyleSheet} from 'react-native';
import {SkypeIndicator} from 'react-native-indicators';
function WaitingIndicator() {
  return (
    <View style={styles.body}>
      <SkypeIndicator color="lightblue" size={70} />
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    // backgroundColor: 'white',
    width: '40%',
    height: '15%',
    position: 'absolute',
    // elevation: 5,
    borderRadius: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    left: '30%',
    top: '80%',
  },
});

export default WaitingIndicator;
