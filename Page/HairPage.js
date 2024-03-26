import React from 'react';
import { View, StyleSheet, Dimensions, Text, ScrollView } from 'react-native';
import Salendar from '../Navigation/Calendar';

const { height: screenHeight } = Dimensions.get('window');

const HairPage = ({ route }) => {
  
  const { imageUri } = route.params;

  return (
    <View style={styles.container}>
      
     <View style={{width:"100%", height:"20%", }}>
     <Salendar />
     </View>
    
      <View>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
   
  },
 
});

export default HairPage;





