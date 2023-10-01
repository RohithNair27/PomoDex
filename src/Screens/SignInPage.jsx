import React from 'react';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native';
import TextBar from '../components/ui/TextBar';
import Button from '../components/ui/Button';
function SignInPage({navigation}) {
  const onLoginPress = () => {
    navigation.navigate('LoginPage');
  };
  return (
    <SafeAreaView style={style.body}>
      <StatusBar hidden={false} backgroundColor={'white'} />
      <View style={style.loginView}>
        <Text style={style.loginText}>Sign In</Text>
        <View style={style.InputOne}>
          <TextBar placeHolder="Name" secure={false} />
        </View>
        <View style={style.InputOne}>
          <TextBar placeHolder={'Email'} secure={false} />
        </View>
        <View style={style.InputOne}>
          <TextBar placeHolder={'Password'} secure={true} />
        </View>

        <View style={style.submit}>
          <Button placeholder="Create a new account" textColor={'white'} />
        </View>
      </View>
      <View style={style.loginWithGoogleButton}>
        <View style={style.orBarView}>
          <View style={style.firstOr}></View>
          <Text style={style.orText}>or</Text>
          <View style={style.firstOr}></View>
        </View>
        <View style={style.googleAuth}>
          <Image
            source={require('../assets/Images/googleImage.png')}
            style={style.imageStyle}
          />
          <Button placeholder="Continue with Google" textColor={'black'} />
        </View>
        <View style={style.createNewAccountText}>
          <Text style={{color: 'gray'}}>Already have an account?</Text>
          <TouchableOpacity
            style={style.createNewAccountButton}
            onPress={() => onLoginPress()}>
            <Text style={{color: '#4683F9'}}> LogIn</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default SignInPage;
const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const style = StyleSheet.create({
  body: {
    backgroundColor: 'white',
    alignItems: 'center',
    height,
    width,
  },
  loginView: {
    width: '90%',
    flex: 1,
    top: '4%',
  },
  loginText: {
    fontSize: 30,
    fontWeight: '700',
    color: 'black',
    marginBottom: 10,
    left: '2%',
  },
  forgetText: {
    color: '#4683F9',
    left: '50%',
    fontWeight: '600',

    fontSize: 16,
  },
  InputOne: {
    borderWidth: 1,
    borderColor: '#cccccc',
    backgroundColor: 'white',
    marginBottom: '3%',
    height: '13%',
    width: '100%',
    borderRadius: 20,
    paddingLeft: 10,

    paddingRight: 10,
  },

  submit: {
    borderRadius: 20,

    position: 'relative',
    height: '13%',
    width: '100%',
    top: '7%',

    backgroundColor: '#4683F9',
  },
  submit_text: {
    color: 'gray',
  },

  loginWithGoogleButton: {
    borderRadius: 20,
    width: '90%',
    flex: 0.5,
    alignItems: 'center',
  },
  orBarView: {
    position: 'relative',
    top: '10%',
    // borderWidth: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  firstOr: {
    borderWidth: 0.7,
    borderColor: '#cccccc',
    width: '40%',
    height: '0%',
  },
  orText: {
    padding: 10,
    color: 'gray',
  },
  googleAuth: {
    borderRadius: 20,
    position: 'relative',
    height: '27%',
    width: '100%',
    top: '20%',
    backgroundColor: '#e3ebff',
    loginWithGoogleButton: {
      // borderWidth: 1,
      borderRadius: 20,
      width: '90%',
      flex: 0.5,
      alignItems: 'center',
    },
    orBarView: {
      position: 'relative',
      top: '10%',
      // borderWidth: 1,
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
    },
    firstOr: {
      borderWidth: 0.7,
      borderColor: '#cccccc',
      width: '40%',
      height: '0%',
    },
    orText: {
      padding: 10,
      color: 'gray',
    },
    googleAuth: {
      borderRadius: 20,
      position: 'relative',
      height: '27%',
      width: '100%',
      top: '20%',
      alignItems: 'center',
      backgroundColor: '#e3ebff',
      justifyContent: 'center',
      flexDirection: 'row',
    },

    createNewAccountText: {
      position: 'relative',
      top: '22%',
      width: '50%',
      height: '10%',
      flexDirection: 'row',
      justifyContent: 'center',
    },
    createNewAccountButton: {
      color: 'gray',
    },
  },
  imageStyle: {
    resizeMode: 'contain',
    position: 'absolute',
    height: '40%',
    right: '10%',
    top: '30%',
  },
  createNewAccountText: {
    position: 'relative',
    top: '22%',
    width: '50%',
    height: '10%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  createNewAccountButton: {
    color: 'gray',
  },
});
