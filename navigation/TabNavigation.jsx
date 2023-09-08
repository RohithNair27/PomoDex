import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Tasks from '../Screens/Tasks';
import Profile from '../Screens/Profile';
import {View, Image} from 'react-native';
function TabNavigation() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator>
      <Tab.Screen name="Task" component={Tasks} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

export default TabNavigation;
