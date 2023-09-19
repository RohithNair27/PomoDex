import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import StackNavigation from './src/navigation/StackNavigation';
import {Provider} from 'react-redux';
import {Store} from './src/Redux/Store';
function App(): JSX.Element {
  return (
    <Provider store={Store}>
      <StackNavigation />
    </Provider>
  );
}

export default App;
