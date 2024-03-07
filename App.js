import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Indexs from './Navigation/Indexs';
import { useFonts } from 'expo-font';
import RootStack from './Navigation/RootStack';
import { NavigationContainer, } from '@react-navigation/native';


export default function App() {
  const [loaded] = useFonts({
    // Montserrat: require('./assets/fonts/Yatra-One.ttf'),
      Italianno : require('./Font/Italianno-Regular.ttf'),

  });
  if (!loaded) {
    return null;
  }
  return (
  <>
   
   <Indexs/>
   {/* <RootStack/> */}
  
  </>
  );
}


