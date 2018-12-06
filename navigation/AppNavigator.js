import React from 'react';
import { createStackNavigator } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import UserList from '../screens/UserListScreen';

const AppNavigator = createStackNavigator({
  home: { screen: HomeScreen },
  userList: { screen: UserList}
});

export default AppNavigator;
