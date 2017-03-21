import React, { Component } from 'react'
import {
  StyleSheet,
  TextInput,
  Text,
  View,
} from 'react-native'

export default class inputTest extends Component {
  constructor (props) {
    super(props)
    this.state = {
      num: 0,
      inputState: 'init',
    }
  }

  changeInputStat (eventName, text) {
    this.setState({
      inputState: eventName + ': ' + text
    })
  }

  editCommit (event) {
    alert('提交的值为：'+ event.nativeEvent.text)
    this.setState({
      num: ++this.state.num
    })
  }

  render() {
    return (
      <View style={ avartarStyles.main } >
        <Text>提交次数：{ this.state.num }</Text>
        <TextInput style={ avartarStyles.input } 
          underlineColorAndroid = {'transparent'}
          defaultValue = {''}
          onChangeText = { (text) => this.changeInputStat("onChangeText", text) }
          onSubmitEditing = { (e) => this.editCommit(e)} />
        <Text>{ this.state.inputState }</Text>
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

