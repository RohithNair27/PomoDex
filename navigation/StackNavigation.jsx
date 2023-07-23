import React from 'react';

import LoginPage from '../Screens/LoginPage';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import TabNavigation from './TabNavigation';
import Stats from '../Screens/Stats';
import Work from '../Screens/Work';
function StackNavigation() {
  const stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <stack.Screen name="LoginPage" component={LoginPage} />
        <stack.Screen name="TabNavigation" component={TabNavigation} />
        <stack.Screen name="Stats" component={Stats} />
        <stack.Screen name="Work" component={Work} />
      </stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNavigation;
