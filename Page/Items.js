// import React, { useState } from "react";
// import {
//   FlatList,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View,
//   Dimensions,
// } from "react-native";
// import categories from "../Navigation/Categories";

// const Categories = ({ onChange }) => {
//   const [activeCategoryId, setActiveCategoryId] = useState(
//     categories[0]?.id || null
//   );
//   const windowWidth = Dimensions.get("window").width;

//   const handlePress = (id) => {
//     setActiveCategoryId(id);
//     onChange(id);
//   };

//   return (
//     <FlatList
//       horizontal={true}
//       data={categories}
//       keyExtractor={(item) => item.id.toString()} // Ensure id is converted to string
//       contentContainerStyle={{ marginVertical: 10 }}
//       renderItem={({ item }) => (
//         <TouchableOpacity
//           onPress={() => handlePress(item.id)}
//           style={[styles.categoryContainer, { marginRight: windowWidth * 0.09 }]}
//         >
//           <Text
//             style={[
//               styles.categoryText,
//               { color: activeCategoryId === item.id ? "gray" : "black" },
//             ]}
//           >
//             {item.name}
//           </Text>
//           {activeCategoryId === item.id && (
//             <View
//               style={{
//                 height: 1,
//                 width: "100%",
//                 backgroundColor: "purple",
//                 marginTop: 5,
//               }}
//             />
//           )}
//         </TouchableOpacity>
//       )}
//     />
//   );
// };

// const styles = StyleSheet.create({
//   categoryContainer: {
//     alignItems: "center",
//   },
//   categoryText: {
//     fontSize: 16,
//     fontWeight: "bold",
//   },
// });

// export default Categories;

  
//   export default Categories;
  
//   const styles = StyleSheet.create({});





// import { View, Text } from 'react-native'
// import React from 'react'

// const Items = () => {
//   return (
//     <View>
//       <Text>Beauty Specialist</Text>
//     </View>
//   )
// }

// export default Items

import React from 'react';
import { View, FlatList, StyleSheet, Text, Image, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

const data = [
    { id: '1', text: 'Hair Stylist', image: { uri: 'https://facts.net/wp-content/uploads/2023/09/10-unbelievable-facts-about-hair-stylist-1695688941.jpg' } },
    { id: '2', text: 'Makeup Stylist', image: { uri: 'https://hellogiggles.com/wp-content/uploads/sites/7/2023/01/makeup-artist-1.jpg?quality=82&strip=1&resize=640%2C360' } },
    { id: '3', text: 'Spa Stylist', image: { uri : 'https://media.istockphoto.com/id/921797424/photo/woman-in-mask-on-face-in-spa-beauty-salon.jpg?s=612x612&w=0&k=20&c=gGSPZOjIS2wcwQyOcjANOKpRVU0KR_iEDbRACnAoIXA='} },
    { id: '4', text: 'Nail Stylist', image: {uri : 'https://nail-spa-andover-mn.com/uploads/ngm87qlpz0z27n7b/logo/2017/09/29/1_1506626925_7_Slider_03.jpg'} },
    { id: '5', text: 'Perfume Stylist', image: {uri : 'https://assets-global.website-files.com/61a5d57e5f1c45eecb23d528/643cc13dcf71f33108c85b60_perfumer%2010th%20image.jpg'} },
];

const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.overlay}>
        <Text style={styles.text}>{item.text}</Text>
      </View>
    </View>
);

const MyFlatList = () => {
  return (
    <View style={styles.container}>
        <Text>Beauty Specialist</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal={true} 
        snapToInterval={windowWidth / 3} 
        decelerationRate={'fast'} 
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  item: {
    position: 'relative',
    marginVertical: 10,
    marginRight: 10,
    width: windowWidth / 3,
    height: "100%",
  },
  image: {
    width: '80%',
    height: '80%',
    resizeMode: 'cover',
    borderRadius: 10,
  },
});

export default MyFlatList;
