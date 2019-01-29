import { createStackNavigator, createAppContainer, createDrawerNavigator, DrawerItems, SafeAreaView } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import React, { Component } from 'react';
import { Icon } from 'native-base';
import TransactionList from './TransactionList';
import AddTransactionForm from './AddTransactionForm';
import { View, Platform, Image, StyleSheet, ScrollView, Text } from 'react-native';
import CategoryView from './CategoryView';


const HomeNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: ({navigation}) => ({
      headerLeft: <Icon 
          name='menu' size={24}
          color='white'
          onPress={() => navigation.toggleDrawer()} />
    })
  },
  AddTransactionForm: {screen: AddTransactionForm},
  TransactionList: { screen: TransactionList },
})


const CategoryNavigator = createStackNavigator({
  CategoryView: {
    screen: CategoryView,
    navigationOptions: ({navigation}) => ({
      headerLeft: <Icon 
          name='menu' size={24}
          color='white'
          onPress={() => navigation.toggleDrawer()} />
    })
  },
  AddTransactionForm: {screen: AddTransactionForm},
  TransactionList: { screen: TransactionList },
})

const CustomDraweContentComponent = (props) => (
  <ScrollView>
      <SafeAreaView forceInset={{ top: 'always', horizontal: 'never' }}>
          <View>
              <View style={{ flex: 2 }}>
                  <Text style={styles.drawerHeaderText}>Expense Tracking App</Text>
              </View>
          </View>
          <DrawerItems {...props} />
      </SafeAreaView>
  </ScrollView>
);

const MainNavigator = createDrawerNavigator({
  Home: {
      screen: HomeNavigator,
      navigationOptions: {
          title: 'Home',
          drawerLabel: 'Home',
      }
  },
CategoryView: {
  screen: CategoryNavigator
}
},{
    drawerBackgroundColor: '#D1C4E9',
    contentComponent: CustomDraweContentComponent
  })

const styles = StyleSheet.create({
  container: {
      flex: 1
  },
  drawerHeader: {
      backgroundColor: '#512DA8',
      height: 140,
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
      flexDirection: 'row'
  },
  drawerHeaderText: {
      color: 'white',
      fontSize: 24,
      fontWeight: 'bold'
  },
  drawerImage: {
      margin: 10,
      width: 80,
      height: 60
  }
})

export const Main = createAppContainer(MainNavigator);


