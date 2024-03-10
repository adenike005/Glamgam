import { View, Text } from 'react-native'
import React from 'react'
import Slider from '../Page/Slider'
import Sliders from '../Page/Sliders'
import Items from '../Page/Items'


const Home = () => {
  return (
    <View style={{backgroundColor:"white", flex:1, width:"100%", height:"100%", paddingHorizontal:"5%"}}>
     <View style={{paddingHorizontal:"5%", width:"100%",}}>
     <Slider/>
      </View>
      <View style={{marginTop:"5%", width:"100%", height:"15%"}}>
      <Sliders/>
      </View>
      <View style={{width:"100%", height:"30%"}}>
        <Items/>
      </View>
      <View style={{width:"100%", height:"30%"}}>
        <Text>Pls jjkl</Text>
      </View>
    </View>
  )
}

export default Home