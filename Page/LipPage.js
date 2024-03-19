import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ImageBackground, PixelRatio,  } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

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
      <View style={{width:"100%", height:"30%"}}>
        <ImageBackground
          source={item.image}
          style={styles.image}
        >
          <TouchableOpacity style={{ position: 'absolute', top: 10, right: 10 }} onPress={handleHeartPress}>
            <Ionicons name={heartFilled ? 'heart' : 'heart-outline'} size={24} color={heartFilled ? 'red' : 'purple'} />
          </TouchableOpacity>
        </ImageBackground>
      </View>
      <View>
        <View style={{marginTop:"5%", paddingHorizontal:"5%", display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"space-between"}}>
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






    