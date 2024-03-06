import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../Screen/Home';
import Welcome from '../Screen/Welcome';
import { Ionicons } from "react-native-vector-icons";
import TabNavigator from './TabNavigator';
import { TouchableOpacity } from 'react-native';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const HomeStack = createStackNavigator();
const WelcomeStack = createStackNavigator();

const HomeStackScreen = ({navigation}) => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerStyle:{
          backgroundColor:"#fff"
        },
        headerTintColor:"purple",
        headerTitleStyle:{
          fontWeight:"bold",
        },
        headerTitleAlign: 'center' // Align title in the center
      }}
    >
      <HomeStack.Screen
        name='Home'
        component={TabNavigator}
        options={{
          title:"GlamGam",
          headerLeft: () => (
           <TouchableOpacity>
             <Ionicons 
              name='menu-outline' 
              size={20} 
              backgroundColor="white"
              style={{paddingHorizontal:"15%"}}
              onPress={() => {
                navigation.openDrawer()
              }}
              />
           </TouchableOpacity>
          ),
          headerRight: () =>(
            <TouchableOpacity>
              <Ionicons 
            name='notifications-outline' 
            size={20} 
            backgroundColor="white"
            style={{paddingHorizontal:"15%"}}
            
          />
            </TouchableOpacity>
          ),
        }}
      />
    </HomeStack.Navigator>
  );
}

const WelcomeStackScreen = () => {
  return (
    <WelcomeStack.Navigator
      screenOptions={{
        headerStyle:{
          backgroundColor:"#fff"
        },
        headerTintColor:"#000",
        headerTitleStyle:{
          fontWeight:"bold",
        },
        headerTitleAlign: 'center' // Align title in the center
      }}
    >
      <WelcomeStack.Screen name='Welcome' component={Welcome}/>
    </WelcomeStack.Navigator>
  );
}

const Indexs = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Drawer.Screen name='Home' component={HomeStackScreen}/>
        <Drawer.Screen name='Welcome' component={WelcomeStackScreen}/>
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default Indexs;

