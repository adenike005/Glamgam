import {
    FlatList,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Dimensions 
  } from "react-native";
  import React, { useState } from "react";
  
import categories from "../Navigation/Categories";
 

  
  const Categories = ({onChange }) => {
    const [activeCategoryId, setActiveCategoryId] = useState(categories[0]?.id || null)
    const windowWidth = Dimensions.get('window').width;

  
    const handlePress = (id) => {
      setActiveCategoryId(id);
    //   onChange(id);
    };
  
    return (
      <FlatList
        horizontal={true}
        data={categories}
        
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ marginVertical: 10}}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => handlePress(item.id)}
            style={[styles.categoryContainer, { marginRight: windowWidth * 0.09 }]}
          >
            <Text
              style={[
                { color: 'black'  },
                activeCategoryId === item.id && { color: "gray" },
              ]}
            >
              {item.name}
            </Text>
            {activeCategoryId === item.id && (
              <View
                style={{
                    height: 1,
                    width: '100%',
                  backgroundColor: "purple",
                  marginTop: 5,
                 
                }}
              />
            )}
          </TouchableOpacity>
        )}
      />
    );
  };
  
  export default Categories;
  
  const styles = StyleSheet.create({});