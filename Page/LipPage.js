import { View, Text, Image, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';


const LipPage = ({ route }) => {
  const { imageUri } = route.params;
  return (
    <View style={styles.container}>
     <View style={{width:"100%", height:"30%"}}>
     <ImageBackground
         source={{ uri: imageUri }} 
        style={styles.image}
      >
      
      </ImageBackground>
     </View>
    </View>
  );
};

export default LipPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingHorizontal:"5%",
    // marginTop: '5%',
    // alignItems: 'center', // Center horizontally
    // justifyContent: 'center', // Center vertically
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 50,
  },
});




    