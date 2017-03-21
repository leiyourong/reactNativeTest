import React, { Component, PropTypes } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native'

export default class DefNavigatorBar extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    onForward: PropTypes.func.isRequired,
    onBack: PropTypes.func.isRequired
  }
  render () {
    return <View>
      <Text style={ navigatorStyles.naviText }>{ this.props.title }</Text>
      <View style={ navigatorStyles.naviContainer }> 
        <TouchableHighlight style={ navigatorStyles.naviBtn2 } 
          onPress={this.props.onBack}>
          <Text style={ navigatorStyles.naviText }>点我返回上一场景</Text>
        </TouchableHighlight>
        <TouchableHighlight style={ navigatorStyles.naviBtn } 
          onPress={this.props.onForward}>
          <Text style={ navigatorStyles.naviText }>点我进入下一场景</Text>
        </TouchableHighlight>
      </View>
    </View>
  }
}

const navigatorStyles = StyleSheet.create({
  naviContainer: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 2,
    flexDirection: 'row',
    alignItems: 'center'
  },
  naviBtn: {
    backgroundColor: '#f00',
    flex: 1,
  },
  naviBtn2: {
    backgroundColor: '#0f0',
    flex: 1
  },
  naviText: {
    textAlign: 'center',
  }
})