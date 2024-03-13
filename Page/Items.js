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

// import React from 'react';
// import { View, FlatList, StyleSheet, Text, Image, Dimensions } from 'react-native';

// const windowWidth = Dimensions.get('window').width;

// const data = [
//     { id: '1', text: 'Hair Stylist', image: { uri: 'https://facts.net/wp-content/uploads/2023/09/10-unbelievable-facts-about-hair-stylist-1695688941.jpg' } },
//     { id: '2', text: 'Makeup Stylist', image: { uri: 'https://hellogiggles.com/wp-content/uploads/sites/7/2023/01/makeup-artist-1.jpg?quality=82&strip=1&resize=640%2C360' } },
//     { id: '3', text: 'Spa Stylist', image: { uri : 'https://media.istockphoto.com/id/921797424/photo/woman-in-mask-on-face-in-spa-beauty-salon.jpg?s=612x612&w=0&k=20&c=gGSPZOjIS2wcwQyOcjANOKpRVU0KR_iEDbRACnAoIXA='} },
//     { id: '4', text: 'Nail Stylist', image: {uri : 'https://nail-spa-andover-mn.com/uploads/ngm87qlpz0z27n7b/logo/2017/09/29/1_1506626925_7_Slider_03.jpg'} },
//     { id: '5', text: 'Perfume Stylist', image: {uri : 'https://assets-global.website-files.com/61a5d57e5f1c45eecb23d528/643cc13dcf71f33108c85b60_perfumer%2010th%20image.jpg'} },
// ];

// const renderItem = ({ item }) => (
//     <View style={styles.item}>
//       <Image source={item.image} style={styles.image} />
//       <View style={styles.overlay}>
//         <Text style={styles.text}>{item.text}</Text>
//       </View>
//     </View>
// );

// const MyFlatList = () => {
//   return (
//     <View style={styles.container}>
//         <Text>Beauty Specialist</Text>
//       <FlatList
//         data={data}
//         renderItem={renderItem}
//         keyExtractor={item => item.id}
//         horizontal={true} 
//         snapToInterval={windowWidth / 3} 
//         decelerationRate={'fast'} 
//         showsHorizontalScrollIndicator={false}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     marginTop: 20,
//   },
//   item: {
//     position: 'relative',
//     marginVertical: 10,
//     marginRight: 10,
//     width: windowWidth / 3,
//     height: "100%",
//   },
//   image: {
//     width: '80%',
//     height: '80%',
//     resizeMode: 'cover',
//     borderRadius: 10,
//   },
// });

// export default MyFlatList;

import React from 'react';
import { View, FlatList, Image, StyleSheet, Dimensions, Text, PixelRatio , TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const windowWidth = Dimensions.get('window').width;
const fontScale = PixelRatio.getFontScale();
const getFontSize = (size) => size / fontScale;
const data = [
    { id: '1', text: 'Hair Stylist', image: { uri: 'https://facts.net/wp-content/uploads/2023/09/10-unbelievable-facts-about-hair-stylist-1695688941.jpg' }, name : "Alice Smith", year : "10+ years experience" , images : { uri : "https://source.boomplaymusic.com/buzzgroup2/M00/15/EF/rBEe_F_veBqATUa_AAEPaxILwq4977.jpg"}},
    { id: '2', text: 'Makeup Stylist', image: { uri: 'https://hellogiggles.com/wp-content/uploads/sites/7/2023/01/makeup-artist-1.jpg?quality=82&strip=1&resize=640%2C360' }, name : "Johnson Bob" ,  year : "11+ years experience", images : { uri : "https://img.lovepik.com/free-png/20210919/lovepik-beautiful-lady-png-image_400955524_wh1200.png"}},
    { id: '3', text: 'Spa Stylist', image: { uri: 'https://media.istockphoto.com/id/921797424/photo/woman-in-mask-on-face-in-spa-beauty-salon.jpg?s=612x612&w=0&k=20&c=gGSPZOjIS2wcwQyOcjANOKpRVU0KR_iEDbRACnAoIXA=' }, name : "Charlie Brown",  year : "16+ years experience" ,images : { uri : "https://img.lovepik.com/free-png/20210919/lovepik-beautiful-lady-png-image_400955524_wh1200.png"} },
    { id: '4', text: 'Nail Stylist', image: { uri: 'https://nail-spa-andover-mn.com/uploads/ngm87qlpz0z27n7b/logo/2017/09/29/1_1506626925_7_Slider_03.jpg' }, name : "Lee Charlie" ,  year : "9+ years experience", images : { uri : "https://img.lovepik.com/free-png/20210919/lovepik-beautiful-lady-png-image_400955524_wh1200.png"}},
    { id: '5', text: 'Perfume Stylist', image: { uri: 'https://assets-global.website-files.com/61a5d57e5f1c45eecb23d528/643cc13dcf71f33108c85b60_perfumer%2010th%20image.jpg' } , name : "Miller Evee",  year : "14+ years experience", images : { uri : "https://img.lovepik.com/free-png/20210919/lovepik-beautiful-lady-png-image_400955524_wh1200.png"}},
];

const BeautySpecialistFlatList = () => {
  const navigation = useNavigation();

  const handleImagePress = (item) => {

    navigation.navigate('LipPage', { item});

  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.imageContainer} onPress={() => handleImagePress(item)}>
      <View style={{flex:1}}>
        <Image source={item.image} style={styles.image} />
      </View>
      <Text style={styles.text}>{item.text}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={{fontSize:getFontSize(15,), fontWeight:"700", fontFamily:"SemiBold", marginBottom:"5%"}}>Beauty Expert</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  imageContainer: {
    width: windowWidth / 3,
    aspectRatio: 1,
    marginHorizontal: 5,
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '90%',
    resizeMode: 'cover',
  },
  text: {
    textAlign: 'center',
    marginTop: 5,
    fontSize:getFontSize(12),
    fontWeight:"700", 
    fontFamily:"SemiBold"
  },
});

export default BeautySpecialistFlatList;



