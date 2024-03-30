import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../Screen/Home";
import Welcome from "../Screen/Welcome";
import { Ionicons } from "react-native-vector-icons";
import TabNavigator from "./TabNavigator";
import { TouchableOpacity, View, PixelRatio } from "react-native";
import { StatusBar } from "react-native";
import Search from "../Screen/Search";
import Settings from "../Screen/Settings"; // Corrected import statement
import LipPage from "../Page/LipPage";
import HairPage from "../Page/HairPage";
import NailPage from "../Page/NailPage";
import MakeupPage from "../Page/MakeupPage";
import SpaPage from "../Page/SpaPage";


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const HomeStack = createStackNavigator();
// const WelcomeStack = createStackNavigator();
// const OtherStack = createStackNavigator(); // New stack navigator for other screen

// const HomeStackScreen = ({ navigation }) => {
//   return (
//     <HomeStack.Navigator
//       screenOptions={{
//         headerStyle: {
//           backgroundColor: "#fff",
//         },
//         headerTintColor: "purple",
//         headerTitleStyle: {
//           fontWeight: "bold",
//           fontFamily: "Italianno",
//           fontWeight: "300",
//         },
//         headerTitleAlign: "center",
//       }}
//     >
//       <HomeStack.Screen
//         name="Home"
//         component={TabNavigator}
//         options={{
//           title: "GlamGam",
//           headerLeft: () => (
//             <TouchableOpacity onPress={() => navigation.openDrawer()}>
//               <Ionicons
//                 name="menu-outline"
//                 size={20}
//                 backgroundColor="white"
//                 style={{ paddingHorizontal: "15%" }}
//               />
//             </TouchableOpacity>
//           ),
//           headerRight: () => (
//             <View style={{ display: "flex", flexDirection: "row" }}>
//               <TouchableOpacity>
//                 <Ionicons
//                   name="search-outline"
//                   size={20}
//                   backgroundColor="white"
//                 />
//               </TouchableOpacity>
//               <TouchableOpacity>
//                 <Ionicons
//                   name="person-circle-outline"
//                   size={20}
//                   backgroundColor="white"
//                   style={{ paddingHorizontal: "15%" }}
//                   onPress={() => navigation.navigate('Settings')}
//                 />
//               </TouchableOpacity>
//             </View>
//           ),
//         }}
//       />
//     </HomeStack.Navigator>
//   );
// };

const fontScale = PixelRatio.getFontScale();
const getFontSize = (size) => size / fontScale;



const HomeStackScreen = ({ navigation }) => {
  return (
    <HomeStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#fff",
        shadowColor: "#fff", // iOS
        elevation: 0, // Android
      },
      headerTintColor: "purple",
      headerTitleStyle: {
        fontWeight: "bold",
        fontFamily: "Italianno",
        fontWeight: "500",
        fontSize:getFontSize(20),
      },
      headerTitleAlign: "center",
    }}
    >
   
      <HomeStack.Screen
        name="Home"
        component={TabNavigator}
        options={{
          title: "Glamgam",

          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Ionicons
                name="menu-outline"
                size={20}
                backgroundColor="white"
                style={{ paddingHorizontal: "10%" }}
              />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <View style={{ display: "flex", flexDirection: "row" }}>
              <TouchableOpacity>
                <Ionicons
                  name="search-outline"
                  size={20}
                  backgroundColor="white"
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Ionicons
                  name="person-circle-outline"
                  size={20}
                  backgroundColor="white"
                  style={{ paddingHorizontal: "10%" }}
                  onPress={() => navigation.navigate("Settings")}
                />
              </TouchableOpacity>
            </View>
          ),
        }}
      />
      <HomeStack.Screen name="Settings" component={Settings} options={{ headerShown: false }} />
      <HomeStack.Screen name="LipPage" component={LipPage} options={{ headerShown: false }} />
      <HomeStack.Screen name="NailPage" component={NailPage} options={{ headerShown: false }} />
      <HomeStack.Screen name="HairPage" component={HairPage} options={{ headerShown: false }} />
      <HomeStack.Screen name="MakeupPage" component={MakeupPage} options={{ headerShown: false }} />
      <HomeStack.Screen name="SpaPage" component={SpaPage} options={{ headerShown: false }} />
    </HomeStack.Navigator>
  );
};

// const WelcomeStackScreen = () => {
//   return (
//     <WelcomeStack.Navigator
//       screenOptions={{
//         headerShown: false,
//         headerStyle: {
//           backgroundColor: "#fff"
//         },
//         headerTintColor: "#000",
//         headerTitleStyle: {
//           fontWeight: "bold"
//         },
//         headerTitleAlign: 'center'
//       }}
//     >
//       <WelcomeStack.Screen name='Settings' component={Settings}/>
//     </WelcomeStack.Navigator>
//   );
// }

const Indexs = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <Drawer.Screen name="Home" component={HomeStackScreen} />
        {/* <Drawer.Screen name='Welcome' component={WelcomeStackScreen}/> */}
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Indexs;
