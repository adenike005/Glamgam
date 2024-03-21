import React, { useState, useEffect } from 'react';
import { View, FlatList, Text, StyleSheet, Dimensions, TouchableOpacity, PixelRatio, Image } from 'react-native';

const { width } = Dimensions.get('window');
const itemWidth = width / 4;
const fontScale = PixelRatio.getFontScale();
const getFontSize = (size) => size / fontScale;

const data1 = ['Services', 'Reviews', 'Gallary', 'Details'];
const defaultSelectedItem = 'Services';

const FourFlatlists = ({ item }) => {
  const [selectedItem, setSelectedItem] = useState(defaultSelectedItem);

  useEffect(() => {
    // ... Perform any actions related to the default selected item
  }, [selectedItem]);

  const handleItemPress = (item) => {
    setSelectedItem(item);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleItemPress(item)} activeOpacity={0.8}>
      <Text style={[styles.item, selectedItem === item ? styles.selectedItem : styles.unselectedItem]}>{item}</Text>
    </TouchableOpacity>
  );

  const renderContent = () => {
    switch (selectedItem) {
      case 'Services':
        return (
          <View style={{ display: 'flex', alignItems: 'center', flexDirection:"row" }}>
            <Image
              source={item.images} // Assuming item.item1 contains the image source
              style={{ width: 100, height: 100 }}
              resizeMode="contain" // Adjust resizeMode if needed (e.g., "cover")
            />
            <Text>{item.rating}</Text>
          </View>
        );
      case 'Reviews':
        return <Text>{item.rating}</Text>;
      case 'Gallary':
        return <Text>Gallary Content</Text>;
      case 'Details':
        return <Text>Details Content</Text>;
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data1}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.flatListContent}
        initialScrollIndex={data1.indexOf(defaultSelectedItem)}
      />
      <View style={styles.contentContainer}>{renderContent()}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  flatListContent: {
    paddingHorizontal: (width - itemWidth * 4) / 2,
  },
  item: {
    width: itemWidth,
    padding: 20,
    marginHorizontal: (width - itemWidth * 4) / 8,
    textAlign: 'center',
    borderBottomWidth: 1.5,
    fontSize: getFontSize(13),
  },
  selectedItem: {
    fontFamily: 'Medium',
    fontWeight: 'bold',
    borderBottomColor: 'red',
  },
  unselectedItem: {
    fontFamily: 'Regular',
    fontWeight: 'normal',
    borderBottomColor: 'gray',
  },
  contentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
});

export default FourFlatlists;







