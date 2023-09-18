import React from 'react';

import LoginPage from '../Screens/LoginPage';
import SignInPage from '../Screens/SignInPage';
import OnBoarding from '../Screens/OnBoarding';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import TabNavigation from './TabNavigation';
import AddTask from '../Screens/AddTask';
function StackNavigation() {
  const stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <stack.Screen name="OnBoarding" component={OnBoarding} />
        <stack.Screen name="LoginPage" component={LoginPage} />
        <stack.Screen name="SignInPage" component={SignInPage} />
        <stack.Screen name="TabNavigation" component={TabNavigation} />
        <stack.Screen name="AddTask" component={AddTask} />
      </stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNavigation;
