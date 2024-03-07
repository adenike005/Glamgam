import { View, FlatList, StyleSheet, Text, Dimensions, Image, PixelRatio, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const fontScale = PixelRatio.getFontScale();
const getFontSize = (size) => size / fontScale;

const Sliders = () => {
    const navigation = useNavigation();

    const data = [
        { id: '1', title: 'Lip', image: require("../assets/lip.jpg"), route: 'LipPage' },
        { id: '2', title: 'nail', image: require("../assets/nail.jpg"), route: 'NailPage' },
        { id: '4', title: 'Hair', image: require("../assets/hair.jpg"), route: 'HairPage' },
        { id: '3', title: 'Makeup', image: require("../assets/markup.jpg"), route: 'MakeupPage' },
        { id: '5', title: 'Spa', image: require("../assets/mark.png"), route: 'SpaPage' },
    ];

    const handleImagePress = (item) => {
        navigation.navigate(item.route);
    };

    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => handleImagePress(item)}>
            <View style={styles.item}>
                <Image source={item.image} style={styles.image} />
                <Text style={styles.title}>{item.title}</Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                horizontal={true}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.contentContainer}
            />
        </View>
    );
};

export default Sliders;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    contentContainer: {
        alignItems: 'center',
    },
    item: {
        marginVertical: 8,
        marginHorizontal: windowWidth * 0.02,
        borderRadius: windowHeight * 0.05,
        justifyContent: 'center',
        alignItems: 'center',
        width: windowHeight * 0.09,
        height: windowHeight * 0.09,
    },
    image: {
        width: '70%',
        height: '70%',
        borderRadius: windowHeight * 0.05,
    },
    title: {
        fontSize: getFontSize(10),
        color: "gray",
    },
});



