import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 

const Button = ({ title, imageUri }) => { // Receive the imageUri parameter
  const navigation = useNavigation();
  
  const handlePress = () => {
    // Navigate to 'HairPage' with the imageUri parameter
    navigation.navigate('HairPage', { imageUri });
  };

  return (
    <TouchableOpacity style={styles.button} onPress={handlePress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'red',
    width:"100%",
    
    paddingVertical: 6,
    paddingHorizontal: '10%',
    borderRadius: 3,
    alignItems: 'center',
    marginBottom:"3%"
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Button;



