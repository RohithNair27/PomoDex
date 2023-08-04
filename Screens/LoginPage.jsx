import React, {useEffect, useState} from 'react';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  StatusBar,
} from 'react-native';
import TextBar from '../components/TextBar';
import auth from '@react-native-firebase/auth';
import Button from '../components/Button';
import {useDispatch, useSelector} from 'react-redux';
import WaitingIndicator from '../components/WaitingIndicator';
function LoginPage({navigation}) {
  const dispatch = useDispatch();
  const [signedIn, setSignedIn] = useState(false);

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
  const username = useSelector(state => state.placeHolderReducer.username);
  const password = useSelector(state => state.placeHolderReducer.password);

  return (
    <SafeAreaView style={style.body}>
      <WaitingIndicator />
      <StatusBar hidden={false} backgroundColor={'#edeff1'} />

      <View style={style.welcome}>
        <Text style={style.loginText}>{'Welcome to PomoDex'}</Text>
        <Text style={style.register}>Rohith Nair</Text>
      </View>
      <View style={style.InputBox}>
        <View style={style.userName}>
          <TextBar placeHolder={username} />
        </View>
        <View style={style.passWord}>
          <TextBar placeHolder={password} />
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

  welcome: {
    position: 'absolute',
    top: '15%',
    left: '5%',
  },
  loginText: {
    fontWeight: '400',
    color: 'black',
    fontSize: 35,
  },
  register: {
    color: 'black',
    position: 'relative',
    fontSize: 45,
    top: '20%',
    fontWeight: '800',
    fontFamily: 'sans',
  },

  InputBox: {
    width: '80%',
    height: '20%',
    position: 'relative',
    top: '40%',
    left: '10%',
  },
  button: {
    positon: 'relative',
    top: '42%',
    left: '25%',
    width: '50%',
    height: '7%',
    backgroundColor: '#EEE975',
    borderRadius: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    elevation: 1,
  },
  InputOne: {
    backgroundColor: 'white',
    marginBottom: '5%',
    height: '37%',
    borderRadius: 10,
    paddingLeft: 10,

    paddingRight: 10,
  },
  InputTwo: {
    paddingLeft: 10,
    paddingRight: 10,

    backgroundColor: 'white',
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
    color: 'black',
  },
});
