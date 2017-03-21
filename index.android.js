import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Navigator,
  View
} from 'react-native'

import sceneRoute from './src/sceneRoute'
import DefNavigatorBar from './src/navigatorBar'

export default class reactNativeTest extends Component {
  constructor (props) {
    super(props)
    this.state = {
      sceneIndex: 0
    }
  }
  render () {
    return <Navigator
        renderScene={(route, navigator) =>
          <View>
            <DefNavigatorBar
              title={sceneRoute[this.state.sceneIndex].title}
              onForward={() => {
                const nextIndex = this.state.sceneIndex + 1;
                if (nextIndex < sceneRoute.length) {
                  navigator.push({
                    title: sceneRoute[nextIndex].title,
                    index: nextIndex,
                  })
                  this.setState({
                    sceneIndex: nextIndex
                  })
                }
              }}
              onBack={() => {
                const preIndex = this.state.sceneIndex - 1;
                if (preIndex >= 0) {
                  this.setState({
                    sceneIndex: preIndex
                  })
                  navigator.pop();
                }
              }}/>
              <View style={ naviCls.main }>{ sceneRoute[this.state.sceneIndex].cmp }</View>
          </View>
      }>
    </Navigator>
  }
}

const naviCls = StyleSheet.create({
  main: {
    padding: 10
  }
})

AppRegistry.registerComponent('reactNativeTest', () => reactNativeTest);
