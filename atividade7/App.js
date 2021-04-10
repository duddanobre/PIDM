import React, {Component} from 'react'

import {SafeAreaProvider} from 'react-native-safe-area-context'

import Routers from './src/components/routes/Router';

export default class App extends Component {
  render() {
    return (
      <SafeAreaProvider>
        <Routers />
      </SafeAreaProvider>
    )
  }
}