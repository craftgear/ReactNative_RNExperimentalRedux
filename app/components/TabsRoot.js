import React, { Component } from 'react'
import { View, Text } from 'react-native'
import ScrollableTabView from 'react-native-scrollable-tab-view';

import Recipes from '../components/Recipes'
import Samples from '../components/Sample'
import Home from '../containers/navRootContainer'

class Tabs extends Component {
  render() {
    return (
      <ScrollableTabView style={{marginTop: 15}} tabBarTextStyle={{ justifyContent: 'flex-end' }}>
        <Recipes tabLabel="レシピ" />
        <Samples tabLabel="サンプル" />
        <Home tabLabel="ホーム" />
      </ScrollableTabView>
    )
  }
}

export default Tabs
