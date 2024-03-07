import { View, Text } from 'react-native'
import React from 'react'
import Slider from '../Page/Slider'
import Sliders from '../Page/Sliders'
import Items from '../Page/Items'


const Home = () => {
  return (
    <View style={{backgroundColor:"white", flex:1}}>
     <View style={{paddingHorizontal:"5%"}}>
     <Slider/>
       <View style={{marginTop:"5%"}}>
       <Sliders/>
       
       </View>
       <View style={{marginTop:"5%", paddingHorizontal:"5%"}}>
       <Items/>
       </View>
     </View>
    </View>
  )
}

export default Home