import React, {useEffect, useRef, useState} from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  StatusBar,
  Animated,
  Image,
} from 'react-native';
import TextBar from '../components/TextBar';
import auth from '@react-native-firebase/auth';
import Button from '../components/Button';
import {useDispatch, useSelector} from 'react-redux';
import WaitingIndicator from '../components/WaitingIndicator';
function LoginPage({navigation}) {
  const dispatch = useDispatch();
  const [signedIn, setSignedIn] = useState(false);

  const movement = useRef(new Animated.Value(0)).current;

  const animate = () => {
    Animated.sequence([
      Animated.timing(movement, {
        toValue: 1000,
        duration: 10000,
        useNativeDriver: true,
      }),
      // Animated.timing(movement, {
      //   toValue: 0,
      //   duration: 2000,
      //   useNativeDriver: true,
      // }),
    ]).start();
  };

  useEffect(() => {
    animate();
  }, []);
  const authentication = () => {
    auth()
      .signInWithEmailAndPassword('nair@gmail.com', '12345678910')
      .then(() => {
        setSignedIn(true);

        navigation.navigate('TabNavigation');
      })
      .catch(() => {
        console.log('you are out');
      });
  };

  return (
    <SafeAreaView style={style.body}>
      <StatusBar hidden={false} backgroundColor={'#19bc9b'} />

      <Animated.View
        style={{
          ...style.topBallAnimation,
          transform: [{translateY: movement}],
        }}></Animated.View>

      <View style={style.welcome}>
        <Text style={style.loginText}>{'Welcome to PomoDex'}</Text>
      </View>
      <View style={style.InputBox}>
        <View style={style.userName}>
          <TextBar placeHolder={'Enter your password'} />
        </View>
        <View style={style.passWord}>
          <TextBar placeHolder={'Enter your password'} />
        </View>
      </View>
      <View style={style.button}>
        <Button placeholder={'Login'} onClick={authentication} />
      </View>
      <TouchableOpacity style={style.forgotpassword}>
        <Text style={style.forgotpasswordText}>Forgot Password?</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
export default LoginPage;
const style = StyleSheet.create({
  body: {
    height,
    width,
    backgroundColor: '#edeff1',
  },
  imageContainer: {
    resizeMode: 'contain',
    position: 'absolute',
    top: 1,
    left: '10%',
    width: '80%',
    height: '60%',
  },
  topBallAnimation: {
    backgroundColor: '#19bc9b',
    position: 'absolute',
    width: width,
    height: height + 1000,
    bottom: '100%',
    borderRadius: 150,
    shadowColor: '#000',

    elevation: 50,
  },
  welcome: {
    position: 'absolute',
    top: '30%',
    left: '5%',
    fontFamily: 'Open Sans',
  },
  loginText: {
    fontWeight: '400',
    color: 'white',
    fontSize: 35,
    fontFamily: 'Open Sans',
  },

  InputBox: {
    width: '80%',
    height: '20%',
    position: 'relative',
    top: '45%',
    left: '10%',
  },
  button: {
    positon: 'relative',
    top: '50%',
    left: '25%',
    width: '50%',
    height: '7%',
    backgroundColor: '#cccccc',
    borderRadius: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    elevation: 1,
  },

  InputOne: {
    backgroundColor: '#cccccc',
    marginBottom: '5%',
    height: '37%',
    borderRadius: 10,
    paddingLeft: 10,

    paddingRight: 10,
  },
  InputTwo: {
    paddingLeft: 10,
    paddingRight: 10,

    backgroundColor: '#cccccc',
    marginBottom: 10,
    height: '37%',
    borderRadius: 10,
  },
  userName: {
    marginBottom: 10,
    height: '37%',
  },
  passWord: {
    marginBottom: 10,
    height: '37%',
  },
  submit: {
    borderRadius: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    width: '50%',
    height: 40,
    top: '80%',
    left: '25%',
    backgroundColor: '#cbe6ef',
  },
  submit_text: {
    color: 'gray',
  },
  forgotpassword: {
    position: 'relative',
    top: '60%',
    left: '35%',
  },
  forgotpasswordText: {
    fontWeight: '600',
    color: 'white',
  },
});
