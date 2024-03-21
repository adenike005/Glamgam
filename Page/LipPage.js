import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ImageBackground, PixelRatio,  } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import Sliders from '../Page/Sliders'

const LipPage = ({ route }) => {
  const fontScale = PixelRatio.getFontScale();
  const getFontSize = (size) => size / fontScale;
  const { item } = route.params;
  const navigation = useNavigation();
  const [heartFilled, setHeartFilled] = useState(false);

  useEffect(() => {
    const loadHeartFilledState = async () => {
      try {
        const storedHeartFilled = await AsyncStorage.getItem(`heartFilled_${item.id}`);
        if (storedHeartFilled !== null) {
          setHeartFilled(JSON.parse(storedHeartFilled));
        }
      } catch (error) {
        console.error('Error loading heartFilled state:', error);
      }
    };

    loadHeartFilledState();
  }, []);

  const handleHeartPress = async () => {
    // Toggle heartFilled state
    setHeartFilled(!heartFilled);
    try {
      // Save the heartFilled state to AsyncStorage for this specific item
      await AsyncStorage.setItem(`heartFilled_${item.id}`, JSON.stringify(!heartFilled));
    } catch (error) {
      console.error('Error saving heartFilled state:', error);
    }
  };

  const handlePressMessage = () => {
    // Navigate to the message page
    navigation.navigate('History');
  };

  return (
    <View style={styles.container}>
      <View style={{width:"100%", height:"25%"}}>
        <ImageBackground
          source={item.image}
          style={styles.image}
        >
          <TouchableOpacity style={{ position: 'absolute', top: 10, right: 10 }} onPress={handleHeartPress}>
            <Ionicons name={heartFilled ? 'heart' : 'heart-outline'} size={24} color={heartFilled ? 'red' : 'red'} />
          </TouchableOpacity>
        </ImageBackground>
      </View>
      <View style={{paddingHorizontal:"5%", height:"15%", }}>
        <View style={{marginTop:"5%",  display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"space-between", marginBottom:"5%"}}>
          <View style={{display:"flex", flexDirection:"row", alignItems:"center"}}>
            <TouchableOpacity style={styles.circle}>
              <Image source={item.images} style={styles.image}/>
            </TouchableOpacity>
            <View style={{ marginHorizontal: "5%" }}>
              <Text style={{ fontSize: getFontSize(25), fontWeight:"900", fontFamily:"Regular" }}>{item.name}</Text>
              <Text style={{ fontSize: getFontSize(15),  fontWeight:"400",color:'gray', fontFamily:"Regular" }}>{item.year}</Text>
            </View>
          </View>
          <TouchableOpacity onPress={handlePressMessage}>
            <AntDesign name="message1" size={24} color="red" />
          </TouchableOpacity>
        </View>
       <View style={{paddingHorizontal:"15%", display:"flex", flexDirection:"row", alignItems:"center"}}>
       <Ionicons name="star" size={20} color="red" />
       <View style={{display:"flex", flexDirection:"row" ,alignItems:"center", paddingHorizontal:"3%"}}>
        <Text style={{ fontSize: getFontSize(19), fontFamily:"SemiBold"}}>{item.rating}</Text>
        <Text style={{fontSize: getFontSize(15) , paddingHorizontal:"3%", fontWeight:"400",color:'gray', fontFamily:"Regular"}}>{item.val}</Text>
       </View>
      </View>
      </View>
      <View style={{height:'60%'}}>
        <Sliders item={item}/>
      </View>
    </View>
  );
};

export default LipPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 50,
  },
  circle: {
    width: 50,
    height : 50,
    borderRadius : 25,
  }
});






    