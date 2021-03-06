import React from 'react'
import { createAppContainer } from 'react-navigation'
import AppNavigator from './src/navigators/AppNavigator'

const AppContainer = createAppContainer(AppNavigator)

class App extends React.Component {
  render() {
    return (
      <AppContainer />
    )
  }
}

export default App

