import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TimerPage from '../Screens/TimerPage';
import TodoList from '../Screens/TodoList';
import Habits from '../Screens/Habits';
import AntIcon from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import {View, Image} from 'react-native';
function TabNavigation() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveBackgroundColor: '#EEE975',
        tabBarStyle: {
          position: 'absolute',
          bottom: '2%',
          borderRadius: 20,
          width: '95%',
          left: '2%',
          height: 60,
          elevation: 2,
        },
        tabBarItemStyle: {
          borderRadius: 20,
        },
      }}>
      <Tab.Screen
        name="Pomodoro"
        component={TimerPage}
        options={{
          tabBarIcon: function () {
            return <AntIcon name="clockcircleo" color="black" size={20} />;
          },
        }}
      />
      <Tab.Screen
        name="Todo List"
        component={TodoList}
        options={{
          tabBarIcon: function () {
            return <Feather name="list" color="black" size={20} />;
          },
        }}
      />
      <Tab.Screen
        name="Habits"
        component={Habits}
        options={{
          tabBarIcon: function () {
            return <Feather name="list" color="black" size={20} />;
          },
        }}
      />
    </Tab.Navigator>
  );
}

export default TabNavigation;
