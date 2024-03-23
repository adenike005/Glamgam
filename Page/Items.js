import React from "react";
import {
  View,
  FlatList,
  Image,
  StyleSheet,
  Dimensions,
  Text,
  PixelRatio,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const windowWidth = Dimensions.get("window").width;
const fontScale = PixelRatio.getFontScale();
const getFontSize = (size) => size / fontScale;
const data = [
  {
    id: "1",
    text: "Hair Stylist",
    image: {
      uri: "https://facts.net/wp-content/uploads/2023/09/10-unbelievable-facts-about-hair-stylist-1695688941.jpg",
    },
    name: "Alice Smith",
    year: "10+ years experience",
    images: {
      uri: "https://source.boomplaymusic.com/buzzgroup2/M00/15/EF/rBEe_F_veBqATUa_AAEPaxILwq4977.jpg",
    },
    rating: "4.8",
    val: "(30 Reviews)",
    items: {
      uri: "https://images.ctfassets.net/pdf29us7flmy/2bJnpVWSt08FcGHVtWyPMB/3cc134d5e02e24154c55248c532eb4da/GettyImages-723502841-Red.jpg",
    },
    texts: "Unique Wigs with color and cut",
    textss: "Nature Hair",
    price: "$20",
    imgage3 : { 
      uri : "https://booksy.com/biz/uploads/media/x1920/09/5599-shutterstock_2065702454%20%281%29-min.jpg?v=1-0"
    },
  },

  {
    id: "2",
    text: "Makeup Stylist",
    image: {
      uri: "https://hellogiggles.com/wp-content/uploads/sites/7/2023/01/makeup-artist-1.jpg?quality=82&strip=1&resize=640%2C360",
    },
    name: "Johnson Bob",
    year: "11+ years experience",
    images: {
      uri: "https://img.freepik.com/free-photo/blue-eyes-wavy-modern-one-beautiful_1139-828.jpg",
    },
    rating: "4.5",
    val: "(33 Reviews)",
    items: {
      uri: "https://media.istockphoto.com/id/1314528208/photo/wedding-make-up-artist-making-professional-bride-makeup-bridal-eyeshadow-palette-wedding.jpg?s=612x612&w=0&k=20&c=ukuzhe61MX5zUcbRLjwxlnXxjNqthV69PPXeR_XguxA=",
    },
    texts: "Unique Wigs with color and cut",
    textss: "Nature",
    price: "$30",
    imgage3 : { 
      uri : "https://img.freepik.com/free-photo/make-up-artist-getting-model-ready-photoshootin_23-2149305147.jpg"
    },
  },

  {
    id: "3",
    text: "Spa Stylist",
    image: {
      uri: "https://media.istockphoto.com/id/921797424/photo/woman-in-mask-on-face-in-spa-beauty-salon.jpg?s=612x612&w=0&k=20&c=gGSPZOjIS2wcwQyOcjANOKpRVU0KR_iEDbRACnAoIXA=",
    },
    name: "Charlie Brown",
    year: "16+ years experience",
    images: {
      uri: "https://img.freepik.com/free-photo/hair-style-street-fashion-beautiful-girl_1139-844.jpg",
    },
    rating: "4.0",
    val: "(28 Reviews)",
    items: {
      uri: "https://www.ubagroup.com/57-marina/wp-content/uploads/sites/4/2023/08/Spa-2.jpg",
    },
    imgage3 : { 
      uri : "https://cdn.businessday.ng/2016/11/SPA-e1480347924294.jpg"
    },
    texts: "Unique Wigs with color and cut",
    textss: "Nature",
    price: "$100",
  },

  {
    id: "4",
    text: "Nail Stylist",
    image: {
      uri: "https://nail-spa-andover-mn.com/uploads/ngm87qlpz0z27n7b/logo/2017/09/29/1_1506626925_7_Slider_03.jpg",
    },
    name: "Lee Charlie",
    year: "9+ years experience",
    images: {
      uri: "https://img.freepik.com/free-photo/beautiful-girl-stands-near-walll-with-leaves_8353-5378.jpg",
    },
    rating: "4.2",
    val: "(35 Reviews)",
    items: {
      uri: "https://tulipnailnovi.com/uploads/demo23njfp99l/filemanager/about.jpg",
    },
    imgage3 : { 
      uri : "https://aislinnnailsandspa.com/images/banner1.jpg"
    },
    texts: "Unique Wigs with color and cut",
    textss: "Nature",
    price: "$100",
  },

  {
    id: "5",
    text: "Perfume Stylist",
    image: {
      uri: "https://assets-global.website-files.com/61a5d57e5f1c45eecb23d528/643cc13dcf71f33108c85b60_perfumer%2010th%20image.jpg",
    },
    name: "Miller Evee",
    year: "14+ years experience",
    images: {
      uri: "https://img.freepik.com/free-photo/beautiful-young-woman-posing-park_1153-6549.jpg",
    },
    rating: "4.3",
    val: "(25 Reviews)",
    items: {
      uri: "https://w0.peakpx.com/wallpaper/58/537/HD-wallpaper-pink-rose-spa-perfume-spa-roses-pink.jpg",
    },
    texts: "Unique Wigs with color and cut",
    textss: "Nature",
    price: "$999",
    imgage3 : { 
      uri : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW5n9npkmcScqBrSzbhu1T-wxDMbHMamglCg&usqp=CAU"
    },
  },
];

const BeautySpecialistFlatList = () => {
  const navigation = useNavigation();

  const handleImagePress = (item) => {
    navigation.navigate("LipPage", { item });
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.imageContainer}
      onPress={() => handleImagePress(item)}
    >
      <View style={{ flex: 1 }}>
        <Image source={item.image} style={styles.image} />
      </View>
      <Text style={styles.text}>{item.text}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: getFontSize(15),
          fontWeight: "700",
          fontFamily: "SemiBold",
          marginBottom: "5%",
        }}
      >
        Beauty Expert
      </Text>
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
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "90%",
    resizeMode: "cover",
  },
  text: {
    textAlign: "center",
    marginTop: 5,
    fontSize: getFontSize(12),
    fontWeight: "700",
    fontFamily: "SemiBold",
  },
});

export default BeautySpecialistFlatList;
