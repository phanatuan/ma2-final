import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import React, { Component } from 'react';
import { Icon } from 'native-base';
import TransactionList from './TransactionList';
import AddTransactionForm from './AddTransactionForm';

const MainNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: ({ navigation }) => ({
      headerLeft: <Icon name='menu' size={24}
        color='white'
        // onPress={() => navigation.toggleDrawer()} 
        />
    })
  },
  // AddTransaction: { screen: AddTransaction },
  AddTransactionForm: {screen: AddTransactionForm},
  TransactionList: { screen: TransactionList },
})

const Main = createAppContainer(MainNavigator);
export default Main;