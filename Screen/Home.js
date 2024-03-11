import { View, Text } from 'react-native'
import React from 'react'
import Slider from '../Page/Slider'
import Itemss from '../Page/Itemss'



const Home = () => {
  return (
    <View style={{backgroundColor:"white", flex:1, width:"100%", height:"100%", paddingHorizontal:"5%"}}>
     <View style={{paddingHorizontal:"5%", width:"100%", height:"40%",}}>
     <Slider/>
      </View>
      <View style={{ width:"100%", height:"30%", }}>
        <Itemss/>
      </View>
      <View style={{ width:"100%", height:"30%", backgroundColor:"blue"}}>
       <Text>ghjkk</Text>
      </View>
      
    </View>
  )
}

export default Home