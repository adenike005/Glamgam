import { View, Text, PixelRatio , Image} from 'react-native'
import React from 'react'
const fontScale = PixelRatio.getFontScale();
const getFontSize = (size) => size / fontScale;

const History = ({item}) => {
  return (
    <View>
      <Image source={item.Image} style={{width:100, height:100, resizeMode:"contain"}}/>
    </View>
  )
}

export default History