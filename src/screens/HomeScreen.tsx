import React from 'react'
import { View } from 'react-native'
import { WebView } from 'react-native-webview'
import { getStatusBarHeight } from 'react-native-status-bar-height'
import { WEB_URL } from 'react-native-dotenv'

class HomeScreen extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          paddingTop: getStatusBarHeight(),
          backgroundColor: 'black'
        }}
      >
        <WebView source={{ uri: WEB_URL }} style={{ flex: 1 }} />
      </View>
    )
  }
}

export default HomeScreen
