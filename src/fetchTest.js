import React, { Component } from 'react'
import {
  StyleSheet,
  TextInput,
  Text,
  View,
} from 'react-native'

export default class inputTest extends Component {
  editCommit (event) {
    alert('开始 Fetch...')
    if (/^http/.test(event.nativeEvent.text)) {
      fetch(event.nativeEvent.text).then(res => {
        alert(JSON.stringify(res))
      })
    } else {
      fetch('https://github.com/leiyourong/reactNativeTest/blob/master/package.json').then(res => {
        alert(JSON.stringify(res))
      })
    }
  }

  render() {
    return (
      <View style={ avartarStyles.main } >
        <TextInput style={ avartarStyles.input } 
          underlineColorAndroid = {'transparent'}
          defaultValue = {''}
          placeholder = {'输入合法的 http ,否则默认查 package.json'}
          onSubmitEditing = { (e) => this.editCommit(e)} />
      </View>
    )
  }
}


const avartarStyles = StyleSheet.create({
  main: {
    flexDirection: 'column'
  },
  input: {
    backgroundColor: '#ccc',
    padding: 0,
  },
})

