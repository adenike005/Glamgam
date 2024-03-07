import { View, Text } from 'react-native'
import React from 'react'
import Slider from '../Page/Slider'
import Sliders from '../Page/Sliders'


const Home = () => {
  return (
    <View style={{backgroundColor:"white", flex:1}}>
     <View style={{paddingHorizontal:"5%"}}>
     <Slider/>
       <View style={{marginTop:"5%"}}>
       <Sliders/>
       </View>
     </View>
    </View>
  )
}

export default Home