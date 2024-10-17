import WebView from 'react-native-webview'
import LoadingScreen from 'src/components/LoadingScreen'
import ScreenLayout from 'src/components/ScreenLayout'
import { useState } from 'react'
import { View, StyleSheet } from 'react-native'

export default function HomeScreen() {
  const [isWebViewLoaded, setIsWebViewLoaded] = useState<boolean>(false)

  return (
    <ScreenLayout testID="home-screen-layout">
      <View style={{ flex: 1 }}>
        {/* WebView is rendered but initially hidden behind the LoadingScreen */}
        <WebView 
          source={{ uri: 'https:moq.rorre.me?url=https://moq.rorre.me:4443' }} 
          onLoadEnd={() => setIsWebViewLoaded(true)} // Mark as loaded once WebView finishes loading
          style={styles.webView}
        />

        {/* Overlay LoadingScreen on top until WebView is fully loaded */}
        {!isWebViewLoaded && (
          <View style={styles.loadingOverlay}>
            <LoadingScreen />
          </View>
        )}
      </View>
    </ScreenLayout>
  )
}

const styles = StyleSheet.create({
  webView: {
    flex: 1, // Ensure the WebView takes up full screen behind the loading screen
  },
  loadingOverlay: {
    ...StyleSheet.absoluteFillObject, // Position the loading screen over the WebView
    backgroundColor: 'black', // Customize the background color if needed
    width: "auto"
  },
})
