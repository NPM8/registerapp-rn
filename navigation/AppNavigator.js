import React from 'react';
import { createStackNavigator } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import UserList from '../screens/UserListScreen';
import UserDetail from '../screens/UserDetail';

const AppNavigator = createStackNavigator({
  home: { screen: HomeScreen },
  userList: { screen: UserList},
  userDetails: { screen: UserDetail}
});

export default AppNavigator;
