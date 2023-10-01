import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Tasks from '../Screens/Tasks';
import Profile from '../Screens/Profile';
import {View, Image, Dimensions} from 'react-native';
import Foundation from 'react-native-vector-icons/Foundation';
function TabNavigation() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: TabBarStyle,
      }}>
      <Tab.Screen
        name="Task"
        component={Tasks}
        tabBarOptions={{
          style: {height: '100%', backgroundColor: 'lightgray'}, // Adjust the tab bar height and background color
        }}
        options={{
          tabBarLabel: 'Tasks',
          tabBarIcon: ({color, size}) => (
            <Foundation name="clipboard-notes" color={'black'} size={35} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color, size}) => (
            <Foundation name="torso" color={'black'} size={35} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
const WINDOW_HEIGHT = Dimensions.get('window').height;
const WINDOW_WIDTH = Dimensions.get('window').width;

const TabBarStyle = {
  height: WINDOW_HEIGHT * 0.1,
};
export default TabNavigation;
