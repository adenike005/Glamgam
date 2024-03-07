import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, } from '@react-navigation/native';
import Settings from '../Screen/Settings';


const RootStackScreen = createStackNavigator();

const RootStack = () => {
  return (
    <>
     <RootStackScreen.Navigator headerMode='none'>
      <RootStack.Screen name="Settings" component={Settings}/>
           {/*<RootStack.Screen name="SignInScreen" component={SignInScreen}/>
        <RootStack.Screen name="SignUpScreen" component={SignUpScreen}/> */}
    </RootStackScreen.Navigator>
    </>
  )
}

export default RootStack