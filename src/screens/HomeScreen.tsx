import React, {FC} from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
 import { NavigationProp } from '@react-navigation/native';

interface HomeProps {
  navigation :  NavigationProp<any>;
}


const HomeScreen: FC<HomeProps> = ({ navigation }) => {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>HomeScreen</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Details")}>
        <Text style={styles.buttonText}>Go to Details Screen</Text>
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
