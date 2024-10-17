import { Image, StyleSheet, Text, View} from 'react-native'
import styled from 'styled-components/native'
import { appTheme } from 'src/config/theme'
import getRandomChoice from 'src/utils/getRandom'
import ScreenLayout from './ScreenLayout'

const images = [
  require('../assets/images/aki_nobg.png'),
  require('../assets/images/aoi_nobg.png'),
  require('../assets/images/rin_nobg.png'),
  require('../assets/images/nadeshiko_nobg.png')
]

const loadingImage = require('../assets/images/ellipsis-loading.gif')

const LoadingScreen = () => {
  return (
    <ScreenLayout>
      <View style={styles.viewContainer}>
        <Text style={styles.loadingScreenTitle}>WARP - MoQT v1.2</Text>
        <Image source={loadingImage} style={styles.loadingImage} resizeMode='contain'/>
      </View>
      <Image source={getRandomChoice(images)} style={styles.bottomRightImage} resizeMode="contain" />
    </ScreenLayout>
  )
}


const styles = StyleSheet.create({
  viewContainer : {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: appTheme.background
  },
  bottomRightImage: {
    maxWidth: 200, // Set the maximum width
    maxHeight: 260, // Set the maximum height
    width: '100%', // Allow the width to adjust automatically
    height: '100%', // Let height adjust based on aspect ratio
    position: 'absolute', // Make it fixed on screen
    bottom: 0, // Distance from the bottom edge
    right: 0 // Distance from the right edge
  },
  loadingScreenTitle: {
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
    fontSize: 26,
    color: 'white',
  },
  loadingImage : {
    width: 100,
    height: 50,
  }
})

export default LoadingScreen
