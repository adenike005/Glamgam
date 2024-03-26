import React from 'react';
import { View, StyleSheet, Dimensions, Text, ScrollView } from 'react-native';
import { Calendar } from 'react-native-calendars';

const { height: screenHeight } = Dimensions.get('window');

const Salendar = ({ route }) => {
  


  return (
    <View style={styles.container}>
      <View style={styles.calendarContainer}>
        <Calendar
          markedDates={{
            '2024-03-24': { marked: true, dotColor: 'red' },
            '2024-03-25': { marked: true, dotColor: 'green' },
          }}
          theme={{
            backgroundColor: '#ffffff',
            calendarBackground: 'purple',
            textSectionTitleColor: '#ffffff',
            selectedDayBackgroundColor: '#ffffff',
            selectedDayTextColor: '#ffffff',
            todayTextColor: '#ffffff',
            dayTextColor: '#ffffff',
            textDisabledColor: '#ffffff',
            dotColor: '#ffffff',
            selectedDotColor: '#ffffff',
            arrowColor: 'red',
            disabledArrowColor: '#d9e1e8',
            monthTextColor: '#ffffff',
            indicatorColor: 'blue',
            textDayFontFamily: 'monospace',
            textMonthFontFamily: 'monospace',
            textDayHeaderFontFamily: 'monospace',
            textDayFontWeight: 'bold',
            textMonthFontWeight: 'bold',
            textDayHeaderFontWeight: 'bold',
            textDayFontSize: 13,
            textMonthFontSize: 13,
            textDayHeaderFontSize: 13,

            'stylesheet.calendar.header': {
              dayTextAtIndex0: {
                color: 'red'
              },
              dayTextAtIndex6: {
                color: 'purple'
              }
            }
          }}
        />
      </View>
     
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    height:"100%"
  },
  calendarContainer: {
   
    backgroundColor: 'white', 
  },
});

export default Salendar;


// import React, { useState, useRef } from 'react';
// import { StyleSheet, Text, View, TouchableOpacity, FlatList, Dimensions } from 'react-native';
// import Fontisto from 'react-native-vector-icons/Fontisto';

// const Calendar = () => {
//   // Initialize state to track the current month and year
//   const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
//   const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

//   // Refs for the two FlatLists
//   const dateListRef = useRef(null);
//   const dayListRef = useRef(null);

//   // Array of month names
//   const months = [
//     'January', 'February', 'March', 'April', 'May', 'June',
//     'July', 'August', 'September', 'October', 'November', 'December'
//   ];

//   // Function to handle navigation to the next month
//   const handleNextMonth = () => {
//     setCurrentMonth(prevMonth => {
//       if (prevMonth === 11) {
//         setCurrentYear(prevYear => prevYear + 1);
//         return 0;
//       } else {
//         return prevMonth + 1;
//       }
//     });
//   };

//   const handleBackMonth = () => {
//     setCurrentMonth(prevMonth => {
//       if (prevMonth === 0) {
//         setCurrentYear(prevYear => prevYear - 1);
//         return 11;
//       } else {
//         return prevMonth - 1;
//       }
//     });
//   };
  
 

  

//   return (
//     <View>
//       <View style={styles.header}>
//         <TouchableOpacity onPress={handleBackMonth}>
//           <Fontisto name="angle-left" size={18} color="black" />
//         </TouchableOpacity>
//         <Text>{`Schedule(${months[currentMonth]}, ${currentYear})`}</Text>
//         <TouchableOpacity onPress={handleNextMonth}>
//           <Fontisto name="angle-right" size={18} color="black" />
//         </TouchableOpacity>
//       </View>
      
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   header: {
//     paddingHorizontal: "5%",
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     marginTop: "5%",
//   },
 
// });

// export default Calendar;





