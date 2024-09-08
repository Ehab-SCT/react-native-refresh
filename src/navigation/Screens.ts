// src/navigation/screensConfig.ts
import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';
import LoginScreen from '../screens/LoginScreen';
import {TabsBar} from './TabNavigator';

export const screensConfig = [
  {
    name: 'Login',
    component: LoginScreen,
    options: {},
  },
  {
    name: 'Auth',
    component: TabsBar,
    options: {
      headerShown: false,
    },
  },
]

export const tabsConfig = [
  {
    name: 'Home',
    component: HomeScreen,
    options: {},
  },
  {
    name: 'Details',
    component: DetailsScreen,
    options: {},
  },
];
