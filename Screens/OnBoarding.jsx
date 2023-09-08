import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  StatusBar,
} from 'react-native';
import Button from '../components/Button';
function OnBoarding() {
  return (
    <View style={styles.body}>
      <StatusBar hidden={false} backgroundColor={'white'} />
      <Image
        source={require('../assets/Images/Bluetick1.png')}
        style={styles.TickImage}
      />
      <View style={styles.About}>
        <View style={styles.AboutTextView}>
          <Text style={styles.AboutText1}>
            A convenenient and productive task manager
          </Text>
          <Text style={styles.AboutText2}>
            A Simple app for organizing your tasks
          </Text>
        </View>
        <View style={styles.submit}>
          <Button placeholder="Start" textColor={'white'} />
        </View>
      </View>
    </View>
  );
}
const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  body: {
    backgroundColor: 'white',
    alignItems: 'center',
    height,
    width,
  },
  TickImage: {
    resizeMode: 'contain',
    flex: 1,
    width: '80%',
  },
  About: {
    flex: 1,
    width: '90%',
    alignItems: 'center',
  },
  AboutTextView: {
    // borderWidth: 1,
    width: '88%',

    alignItems: 'center',
  },
  AboutText1: {
    fontWeight: 700,
    fontSize: 35,
    height: '60%',
    color: 'black',
    textAlign: 'center',
  },
  AboutText2: {
    fontWeight: 400,
    fontSize: 20,
    color: 'gray',
    textAlign: 'center',
  },
  submit: {
    borderRadius: 20,

    position: 'relative',
    height: '16%',
    width: '100%',
    backgroundColor: '#4683F9',
  },
});
export default OnBoarding;
