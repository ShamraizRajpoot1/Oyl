import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import Navigation from './src/navigation';
import {SafeAreaProvider} from 'react-native-safe-area-context';


const App = () => {
  return (
    <SafeAreaProvider style={{flex:1}}>
      <Navigation />
    </SafeAreaProvider>
  );
};

export default App;
