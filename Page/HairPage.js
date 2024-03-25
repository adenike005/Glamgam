import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';

const HairPage = ({ route }) => {
  
  const { imageUri } = route.params;

  return (
    <View style={styles.container}>
       <Calendar
  onDayPress={(day) => console.log('selected day', day)}
  markedDates={{
    '2024-03-24': { marked: true, dotColor: 'red' },
    '2024-03-25': { marked: true, dotColor: 'green' },
  }}
  theme={{
    backgroundColor: '#ffffff',
    calendarBackground: '#ffffff',
    textSectionTitleColor: '#b6c1cd',
    selectedDayBackgroundColor: '#00adf5',
    selectedDayTextColor: '#ffffff',
    todayTextColor: '#00adf5',
    dayTextColor: '#2d4150',
    textDisabledColor: '#d9e1e8',
    dotColor: '#00adf5',
    selectedDotColor: '#ffffff',
    arrowColor: 'orange',
    disabledArrowColor: '#d9e1e8',
    monthTextColor: 'blue',
    indicatorColor: 'blue',
    textDayFontFamily: 'monospace',
    textMonthFontFamily: 'monospace',
    textDayHeaderFontFamily: 'monospace',
    textDayFontWeight: 'bold',
    textMonthFontWeight: 'bold',
    textDayHeaderFontWeight: 'bold',
    textDayFontSize: 16,
    textMonthFontSize: 16,
    textDayHeaderFontSize: 16,
  }}
/>

     
      {/* <Image source={{ uri: imageUri }} style={styles.image} /> */}
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




