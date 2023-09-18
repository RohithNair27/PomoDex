import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import StackNavigation from './src/navigation/StackNavigation';
import {Provider} from 'react-redux';

function App(): JSX.Element {
  return <StackNavigation />;
}

export default App;
