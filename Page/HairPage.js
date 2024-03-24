import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const HairPage = ({ route }) => {
  // Extract the imageUri from the route params
  const { imageUri } = route.params;

  return (
    <View style={styles.container}>
      {/* Render the image */}
      <Image source={{ uri: imageUri }} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200, // Adjust the width as needed
    height: 200, // Adjust the height as needed
    resizeMode: 'cover', // Adjust the resizeMode as needed
  },
});

export default HairPage;




