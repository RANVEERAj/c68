import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import BookTransactionScreen from './screens/bookTransactionScreen';
import SearchScreen from './screens/searchScreen'


export default class App extends Component {
  render() {
    return (
      <View style={{flex:1}}>
      
 <AContainer/>
      </View>
    )
  }
 
}
const tabNavigator=createBottomTabNavigator({
transaction:{screen:BookTransactionScreen},
 searchScreen:{screen:SearchScreen},
})
const AContainer=createAppContainer(tabNavigator)

