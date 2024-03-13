import { View, Text, Image, StyleSheet, TouchableOpacity, ImageBackground, PixelRatio } from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';



const LipPage = ({ route }) => {
 
  const fontScale = PixelRatio.getFontScale();
  const getFontSize = (size) => size / fontScale;
  const { item } = route.params;
  const navigation = useNavigation();

  const handlePressMessage = () => {
    // Navigate to the message page
    navigation.navigate('History');
  };

  return (
    <View style={styles.container}>
     <View style={{width:"100%", height:"30%"}}>
     <ImageBackground
         source={item.image}
        style={styles.image}
      />

      </View>
      <View>
     <View style={{marginTop:"5%", paddingHorizontal:"5%", display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"space-between"}}>
     <View style={{display:"flex", flexDirection:"row", alignItems:"center"}}>
        <TouchableOpacity style={styles.cirle}>
        <Image source={item.images} style={styles.image}/>
        </TouchableOpacity>
      <View style={{ marginHorizontal: "5%" }}>
      <Text style={{ fontSize: getFontSize(25) , marginBottom:"3%", fontWeight:"900",}}>{item.name}</Text>
      <Text style={{ fontSize: getFontSize(15) , marginBottom:"3%", fontWeight:"400",color:'gray'}}>{item.year}</Text>
      </View>
      </View>
      <TouchableOpacity onPress={handlePressMessage}>
      <AntDesign name="message1" size={24} color="purple" />
      </TouchableOpacity>
     </View>
     
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
  cirle: {
    width: 50,
    height : 50,
    borderRadius : 25,
  }
});




    