import React from 'react';
import { createStackNavigator } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';

const AppNavigator = createStackNavigator({
  home: { screen: HomeScreen },
  userList: { }
});

export default AppNavigator;
