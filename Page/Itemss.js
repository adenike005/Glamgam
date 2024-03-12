import React from 'react';
import { View, FlatList, Image, Text, StyleSheet, Dimensions, TouchableOpacity, PixelRatio } from 'react-native';

const { width } = Dimensions.get('window');
const ITEM_WIDTH = width / 4;

const fontScale = PixelRatio.getFontScale();
const getFontSize = (size) => size / fontScale;

const data = [
  { id: '1', image: require('../assets/make-up.png'), text: 'Makeup' },
  { id: '2', image: require('../assets/beauty-treatment.png'), text: 'Facial' },
  { id: '3', image: require('../assets/facial-treatment.png'), text: 'Spa' },
  { id: '4', image: require('../assets/hairdresser.png'), text: 'Hair' },
  { id: '5', image: require('../assets/perfume.png'), text: 'perfume' },
  { id: '6', image: require('../assets/make-up.png'), text: 'Item 2' },
  { id: '7', image: require('../assets/spf.png'), text: 'Cream' },
  { id: '8', image: require('../assets/application.png'), text: 'More' },
  // Add more data as needed
];

const renderItem = ({ item }) => (
  <TouchableOpacity style={styles.item}>
    <Image source={item.image} style={styles.image} />
    <Text style={styles.text}>{item.text}</Text>
  </TouchableOpacity>
);

const MyFlatList = () => {
  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      numColumns={4}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    flex: 1,
    alignItems: 'center',
    margin: 5,
   
    
  },
  image: {
    width: ITEM_WIDTH * 0.3,
    height: ITEM_WIDTH * 0.3,
    // borderRadius: 8,
    resizeMode: 'contain',
  },
  text: {
    marginTop: 5,
    textAlign: 'center',
    marginBottom: '10%',
    fontFamily:"Regular",
    fontWeight:"400",
    fontSize: getFontSize(13),
  },
});

export default MyFlatList;
