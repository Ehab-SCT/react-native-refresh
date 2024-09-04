/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { AppNavigator } from './src/navigation/AppNavigator';



function App(): React.JSX.Element {


  return (
    <SafeAreaView style={[StyleSheet.absoluteFill]}>
     <NavigationContainer children={<AppNavigator />} />
    </SafeAreaView>
  );
}


export default App;
