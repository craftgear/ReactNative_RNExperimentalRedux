import React, { Component } from 'react'
import { View, Text } from 'react-native'
import ScrollableTabView from 'react-native-scrollable-tab-view';

import Recipes from '../components/Recipes'
import Samples from '../components/Sample'
import Home from '../containers/navRootContainer'

class Tabs extends Component {
  render() {
    return (
      <ScrollableTabView>
        <Recipes tabLabel="レシピ" />
        <Samples tabLabel="サンプル" />
        <Home tabLabel="ホーム" />
      </ScrollableTabView>
    )
  }
  // _changeTab(i) {
    // const { changeTab } = this.props
    // changeTab(i)
  // }

  // _renderTabContent(key) {
    // switch(key) {
      // case 'home':
        // return <Home />
      // case 'recipes':
        // return <Recipes />
      // case 'samples':
        // return <Samples />
    // }
  // }

  // render() {
    // const tabs = this.props.tabs.tabs.map((tab, i) => {
      // return (
        // <TabBarIOS.item key={tab.key}
          // icon={tab.icon}
          // selectedIcon={tab.selectedIcon}
          // title={tab.title}
          // onPress={() => this._changeTab(i)}
          // selected={this.props.tabs.index === i}>
          // {this._renderTabContent(tab.key)}
        // </TabBarIOS.Item>
        // )
    // })

    // return (
      // <TabBarIOS tintColor='black'>
        // {tabs}
      // </TabBarIOS>
    // )
  // }
}

export default Tabs
