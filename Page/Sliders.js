import React, { useState, useEffect } from 'react';
import { View, FlatList, Text, StyleSheet, Dimensions, TouchableOpacity, PixelRatio, Image } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Buttom from '../Navigation/Buttom';

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
    if (selectedItem === 'Services') {
      return (
       <View >
       <View style={{display:"flex", flexDirection:"column", gap: 10, }}>
       <View style={{ display: 'flex',  flexDirection: "row", alignItems:"center", borderBottomWidth:0.4, borderBottomColor: 'gray' }}>
          <TouchableOpacity style={styles.tabIcon}>
          <Image
            source={item.items} 
            style={{width:"100%", height:"100%", borderRadius: 20}}
            resizeMode="contain" 
          />
          </TouchableOpacity>
         <View style={{display:"flex", flexDirection:"column", gap:20,}}>
         <View style={{display:"flex", flexDirection:"row"}}>
          <View>
          <Text style={{fontSize:getFontSize(20), fontWeight:"bold", fontFamily:"SemiBold", marginHorizontal:"10%" }}>{item.textss}</Text>
          <Text style={{fontSize:getFontSize(12), fontWeight:"100", fontFamily:"Light", marginHorizontal:"10%" }}>{item.texts}</Text>
          </View>
          <View>
            <Text style={{fontSize:getFontSize(12), fontWeight:"bold", fontFamily:"SemiBold", }}>{item.price}</Text>
          </View>
          </View>
          <View style={{display:"flex", flexDirection:"row", justifyContent:"space-between", alignItems:"center"}}>
            <View><Text style={{fontSize:getFontSize(10), fontWeight:"100", fontFamily:"Light", marginHorizontal:"10%" }} >120km</Text></View>
            <View>
                <Buttom title='Book'/>
            </View>
            </View>
         </View>
        </View>
        <View style={{ display: 'flex',  flexDirection: "row", alignItems:"center", borderBottomWidth:0.4, borderBottomColor: 'gray' }}>
          <TouchableOpacity style={styles.tabIcon}>
          <Image
            source={item.items} 
            style={{width:"100%", height:"100%", borderRadius: 20}}
            resizeMode="contain" 
          />
          </TouchableOpacity>
         <View style={{display:"flex", flexDirection:"column", gap:20,}}>
         <View style={{display:"flex", flexDirection:"row"}}>
          <View>
          <Text style={{fontSize:getFontSize(20), fontWeight:"bold", fontFamily:"SemiBold", marginHorizontal:"10%" }}>{item.textss}</Text>
          <Text style={{fontSize:getFontSize(12), fontWeight:"100", fontFamily:"Light", marginHorizontal:"10%" }}>{item.texts}</Text>
          </View>
          <View>
            <Text style={{fontSize:getFontSize(12), fontWeight:"bold", fontFamily:"SemiBold", }}>{item.price}</Text>
          </View>
          </View>
          <View style={{display:"flex", flexDirection:"row", justifyContent:"space-between", alignItems:"center"}}>
            <View><Text style={{fontSize:getFontSize(10), fontWeight:"100", fontFamily:"Light", marginHorizontal:"10%" }} >120km</Text></View>
            <View>
                <Buttom title='Book'/>
            </View>
            </View>
         </View>
        </View>
        <View style={{ display: 'flex',  flexDirection: "row", alignItems:"center", borderBottomWidth:0.4, borderBottomColor: 'gray' }}>
          <TouchableOpacity style={styles.tabIcon}>
          <Image
            source={item.items} 
            style={{width:"100%", height:"100%", borderRadius: 20}}
            resizeMode="contain" 
          />
          </TouchableOpacity>
         <View style={{display:"flex", flexDirection:"column", gap:20,}}>
         <View style={{display:"flex", flexDirection:"row"}}>
          <View>
          <Text style={{fontSize:getFontSize(20), fontWeight:"bold", fontFamily:"SemiBold", marginHorizontal:"10%" }}>{item.textss}</Text>
          <Text style={{fontSize:getFontSize(12), fontWeight:"100", fontFamily:"Light", marginHorizontal:"10%" }}>{item.texts}</Text>
          </View>
          <View>
            <Text style={{fontSize:getFontSize(12), fontWeight:"bold", fontFamily:"SemiBold", }}>{item.price}</Text>
          </View>
          </View>
          <View style={{display:"flex", flexDirection:"row", justifyContent:"space-between", alignItems:"center"}}>
            <View><Text style={{fontSize:getFontSize(10), fontWeight:"100", fontFamily:"Light", marginHorizontal:"10%" }} >120km</Text></View>
            <View>
                <Buttom title='Book'/>
            </View>
            </View>
         </View>
        </View>
        
       </View>
       </View>
      );
    } else if (selectedItem === 'Reviews') {
      return <Text>{item.rating}</Text>;
    } else if (selectedItem === 'Gallary') {
      return <Text>Gallary Content</Text>;
    } else if (selectedItem === 'Details') {
      return <Text>Details Content</Text>;
    } else {
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
      <View style={{paddingHorizontal:"5%"}}>{renderContent()}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  
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
  
  tabIcon: {
    width: 100, 
    height: 100, 
    marginBottom: 10,
    borderRadius: 30,
  },
});

export default FourFlatlists;







