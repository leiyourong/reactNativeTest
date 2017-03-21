import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  TextInput,
  Text,
  View,
  Image,
  ScrollView,
  ListView
} from 'react-native'

export default class reactNativeTest extends Component {
  constructor (props) {
    super(props)

    var ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => {
        alert('(' + r1.key + '1' + r1.value + ')(' + r2.key+ '2' + r1.value+ ')')
        return r1.key !== r2.key
      }
    })
    this._data = [{
      key: 'key',
      value: 'value'
    }]
    this.state = {
      num: 0,
      inputState: 'init',
      dataSource: ds.cloneWithRows(this._data),
    }

    
  }

  changeInputStat (eventName, text) {
    this.setState({
      inputState: eventName + ': ' + text
    })
  }

  editCommit (event) {
    const inputs = event.nativeEvent.text.split(',')
    if (inputs.length === 2) {
      const key = inputs[0]
      const value = inputs[1]
      this._data = this._data.concat({
        key: inputs[0],
        value: inputs[1]
      })
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(this._data)
      }) 
    }
    
  }

  render() {
    const urls = [{
      uri: "https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg"
    }]
    return (
      <View style={ avartarStyles.main } >
        <Text>计数：{ this.state.num }</Text>
        <TextInput style={ avartarStyles.input } 
          underlineColorAndroid = {'transparent'}
          defaultValue = {''}
          onChangeText = { (text) => this.changeInputStat("onChangeText", text) }
          onSubmitEditing = { (e) => this.editCommit(e)} />
        <Text>{ this.state.inputState }</Text>
        {
          urls.map(url => {
            return (<View key={url.uri}>
              <Avartar url={url}></Avartar>
            </View>)
          })
        }
        <ScrollView horizontal={true}>
          <Avartar url={require('./img/2.png')}></Avartar>
          <Text style={{fontSize: 50}}>文字文字</Text>
          <Avartar url={require('./img/3.png')}></Avartar>
          <Avartar url={require('./img/4.png')}></Avartar>
        </ScrollView>
        <ListView
          style={{height: 50}}
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <DeListItem text={rowData}></DeListItem>}>
        </ListView>
      </View>
    )
  }
}

class DeListItem extends Component {
  render() {
    return <View  style={avartarStyles.listView}>
      <Image style={ avartarStyles.itemImage } source={ require('./img/1.png') }></Image>
      <Text style={ avartarStyles.itemText }>{ this.props.text.key }</Text>
      <Text style={ avartarStyles.itemText }>{ this.props.text.value }</Text>
    </View>
  }
}

class Avartar extends Component {
  render() {
    return <View>
      <Image style={ avartarStyles.image } source={ this.props.url }></Image>
    </View>
  }
}

const avartarStyles = StyleSheet.create({
  main: {
    flexDirection: 'column'
  },
  image: {
    width: 100,
    height: 100,
  },
  input: {
    backgroundColor: '#ccc',
    padding: 0,
  },
  itemImage: {
    width: 20,
    height: 20,
  },
  itemText: {
    textAlign: 'center',
    flex: 1
  },
  listView: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 2,

    flexDirection: 'row',
    alignItems: 'center'
  }
})


AppRegistry.registerComponent('reactNativeTest', () => reactNativeTest);
