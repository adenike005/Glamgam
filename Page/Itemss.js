// import React from 'react';
// import { View, StyleSheet, Text } from 'react-native';

// const GridExample = () => {
//   return (
//     <View style={styles.container}>
//       <View style={styles.row}>
//         <View style={styles.item}>
//           <Text>Item 1</Text>
//         </View>
//         <View style={styles.item}>
//           <Text>Item 2</Text>
//         </View>
//         <View style={styles.item}>
//           <Text>Item 3</Text>
//         </View>
//       </View>
//       <View style={styles.row}>
//         <View style={styles.item}>
//           <Text>Item 4</Text>
//         </View>
//         <View style={styles.item}>
//           <Text>Item 5</Text>
//         </View>
//         <View style={styles.item}>
//           <Text>Item 6</Text>
//         </View>
//       </View>
//       <View style={styles.row}>
//         <View style={styles.item}>
//           <Text>Item 4</Text>
//         </View>
//         <View style={styles.item}>
//           <Text>Item 5</Text>
//         </View>
//         <View style={styles.item}>
//           <Text>Item 6</Text>
//         </View>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     // flex: 1,
//     flexDirection: 'column',
//     justifyContent: 'center',
//     alignItems: 'center',
//     height:"100%",
//    backgroundColor:"yellow",
//   },
//   row: {
//     flexDirection: 'row',
//     marginBottom: 10,
//   },
//   item: {
//     flex: 1,
//     backgroundColor: 'purple',
//     margin: 5,
//     padding: 10,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

// export default GridExample;


    
// import { StyleSheet, Text, View, Image } from 'react-native'
// import React from 'react'

// const Itemss = () => {
//   return (
//     <View style={styles.container}>
//       <View style={styles.row}>
//          <View style={styles.item}>
//             <View style={styles.itemm}>
//                 <Image source={require("../assets/make-up.png")} style={styles.image}/>
//             </View>
//             <View style={styles.itemm}>
//                 <Text>ghjjkklll</Text>
//             </View>
//          </View>
//       </View>
//     </View>
//   )
// }

// export default Itemss

// const styles = StyleSheet.create({
//     container:{
//         // flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     row:{
//         width:"100%",
//         backgroundColor:"yellow",
//         height: 200, // Set a fixed height or use flexbox properties to adjust the height
//         // marginTop: 50,
//     },
//     item:{
//         flexDirection: 'row',
//         justifyContent: 'center',
//         alignItems: 'center',
//         flex: 1,
//     },
//     itemm:{
//         width: '30%', // Adjust the width as needed
//         height: '30%', // Adjust the height as needed
//         backgroundColor:"red",
//         borderRadius: 30,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     image:{
//         width: '50%',
//         height: '50%',
//         resizeMode: 'contain',
//     }
// })


import React from 'react';
import { View, FlatList, Image, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';

const { width } = Dimensions.get('window');
const ITEM_WIDTH = width / 4;

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
  },
});

export default MyFlatList;
