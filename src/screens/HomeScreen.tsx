import React, {FC, useEffect, useState} from 'react';
import { StyleSheet,  TouchableOpacity } from 'react-native';
 import { NavigationProp } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { useCounterStore, useUserStore } from '../store/zostands/store';

import {View, Text,  Colors} from 'react-native-ui-lib';
import { toggleTheme } from '../theme/theme';


interface HomeProps {
  navigation :  NavigationProp<any>;
}

// get the value from zustands from the out of the component 

const logZusValue = () => {
  const count = useCounterStore.getState().count;

  console.log("zus value out of FC", count)
}





const HomeScreen: FC<HomeProps> = ({ navigation }) => {
const isLogin = useSelector(state => state.userData.isLogin) 
const username = useSelector(state => state.userData.username);
const zusUsername = useUserStore(state=> state.username);
const increment = useCounterStore(state => state.incrementAsync)
const count = useCounterStore(state => state.count)
const [theme, setTheme] = useState("")
console.log("isLogin", isLogin)

useEffect(() => {
  logZusValue()

}, [])



console.log("first", Colors.getScheme())

  return (
    <View  style={styles.container}>
      <Text  style={styles.title}>{count}</Text>
      <Text style={styles.title}>Username from redux: {username}</Text>
      <Text textColor style={styles.title}>Username from zustands: {zusUsername}</Text>
      <TouchableOpacity style={styles.button} onPress={()=> increment()}>
        <Text style={styles.buttonText}>Go to Details Screen</Text>
      </TouchableOpacity>

      <TouchableOpacity  style={[styles.button, {marginTop: 20}]} onPress={()=> {
          if(theme === "dark"){
            setTheme("light")
            toggleTheme(theme)
          }else{
            setTheme("dark")
            toggleTheme(theme)
          }
      } }>
        <Text  style={styles.buttonText}>Change Theme</Text>
      </TouchableOpacity>


    </View>
  )
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007BFF', // Blue color
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    elevation: 3, // For Android shadow
    shadowColor: '#000', // For iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  }
});
