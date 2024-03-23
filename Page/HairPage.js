import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const HairPage = ({ route }) => {
  const { image } = route.params; // Get the image URI from navigation parameters
  console.log(image)

  return (
    <View style={styles.container}>
      <Image source={{ uri: image }} style={styles.image} resizeMode="cover" />
    </View>
  );
};

const styles = StyleSheet.create({
 
  image: {
    width: 500,
    height: 500,
    borderRadius: 20,
  },
});

export default HairPage;
