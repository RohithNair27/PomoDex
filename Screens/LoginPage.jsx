import React, {useEffect} from 'react';
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
function LoginPage({navigation}) {
  const onLoginPress = () => {
    navigation.navigate('TabNavigation');
  };
  const authentication = () => {
    auth()
      .signInWithEmailAndPassword('nair@gmail.com', '12345678910')
      .then(() => {
        console.log('you are in');
      })
      .catch(() => {
        console.log('you are out');
      });
  };

  useEffect(() => {
    authentication();
  }, []);
  return (
    <SafeAreaView style={style.body}>
      <StatusBar hidden={false} backgroundColor={'#edeff1'} />

      <View style={style.welcome}>
        <Text style={style.loginText}>{`Hey, 
Login Now!`}</Text>
        <Text style={style.register}>Already a user / Register</Text>
      </View>
      <View style={style.InputBox}>
        <View style={style.userName}>
          <TextBar placeHolder={'userName'} />
        </View>
        <View style={style.passWord}>
          <TextBar placeHolder={'password'} />
        </View>
      </View>
      <View style={style.button}>
        <Button placeholder={'Login'} onPress={onLoginPress} />
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
    fontWeight: '600',
    color: 'black',
    fontSize: 50,
  },
  register: {
    color: 'black',
    position: 'relative',
    fontSize: 20,
    top: '20%',
  },

  InputBox: {
    width: '80%',
    height: '20%',
    position: 'relative',
    top: '44%',

    left: '10%',
  },
  button: {
    positon: 'relative',
    top: '45%',
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
    elevation: 1,
  },
  passWord: {
    marginBottom: 10,
    height: '37%',
    elevation: 10,
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
