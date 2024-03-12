import { StyleSheet, View, Image, Dimensions } from 'react-native'
import React from 'react'
import Swiper from 'react-native-swiper'

const { width } = Dimensions.get('window');

const Slider = () => {
  return (
    <View style={styles.sliderContainer}>
      <Swiper
        autoplay
        horizontal={false}
        height={width * 0.5} // Adjust the height to 80% of the screen width
        activeDotColor="#800080"
      >
        <View style={styles.slide}>
          <Image
            source={require('../assets/beautyone.jpg')}
            resizeMode="cover"
            style={styles.sliderImage}
          />
        </View>
        <View style={styles.slide}>
          <Image
            source={require('../assets/beautythree.jpg')}
            resizeMode="cover"
            style={styles.sliderImage}
          />
        </View>
        <View style={styles.slide}>
          <Image
            source={require('../assets/beautytwo.jpg')}
            resizeMode="cover"
            style={styles.sliderImage}
          />
        </View>
      </Swiper>
    </View>
  )
}

export default Slider

const styles = StyleSheet.create({
  sliderContainer: {
    height: width * 0.5, // Adjust the height to 80% of the screen width
    width: width * 0.9, // Adjust the width to 90% of the screen width
    marginTop: width * 0.05, // Adjust the margin top to 5% of the screen width
    alignSelf: 'center',
    borderRadius: 8,
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderRadius: 8,
  },
  sliderImage: {
    height: '100%',
    width: '100%',
    borderRadius: 8,
  },
})

