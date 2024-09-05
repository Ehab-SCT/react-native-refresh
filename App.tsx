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
import { Provider } from 'react-redux';
import { store } from './src/store/redux/store';



function App(): React.JSX.Element {


  return (
    <Provider store={store}>
    <SafeAreaView style={[StyleSheet.absoluteFill]}>
     <NavigationContainer children={<AppNavigator />} />
    </SafeAreaView>
    </Provider>
  );
}


export default App;
