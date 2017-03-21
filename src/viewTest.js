import React, { Component } from 'react'
import {
  StyleSheet,
  TextInput,
  Text,
  View,
  Image,
  ScrollView,
  ListView
} from 'react-native'

export default class DemoScene extends Component {
  constructor (props) {
    super(props)

    var ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    })
    this._data = ['listView1']
    this.state = {
      inputState: 'init',
      dataSource: ds.cloneWithRows(this._data),
    }
  }

  editCommit (event) {
    this._data = this._data.concat(event.nativeEvent.text)
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(this._data)
    })
    alert('添加成功！')
  }

  render() {
    const urls = [{
      uri: "https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg"
    }, {
      uri: "https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png"
    }]
    return (
      <View style={ viewStyles.main } >
        <Text style={ viewStyles.para }>TextInput</Text>
        <TextInput style={ viewStyles.input } 
          underlineColorAndroid = {'transparent'}
          defaultValue = {''}
          placeholder={'输入值将会被加入 listView 中'}
          onSubmitEditing = { (e) => this.editCommit(e)} />
        <ListView
          style={viewStyles.listView}
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <DeListItem text={rowData}></DeListItem>}>
        </ListView>
        <Text style={ viewStyles.para }>图片</Text>
        {
          urls.map(url => {
            return (<View key={url.uri}>
              <Avartar url={url}></Avartar>
            </View>)
          })
        }
        <Text style={ viewStyles.para }>ScrollView</Text>
        <ScrollView horizontal={true}>
          <Avartar url={require('../img/2.png')}></Avartar>
          <Text style={{fontSize: 30}}>ScrollView</Text>
          <Avartar url={require('../img/3.png')}></Avartar>
          <Avartar url={require('../img/4.png')}></Avartar>
        </ScrollView>
      </View>
    )
  }
}

class DeListItem extends Component {
  render() {
    return <View  style={viewStyles.item}>
      <Image style={ viewStyles.itemImage } source={ require('../img/1.png') }></Image>
      <Text style={ viewStyles.itemText }>{ this.props.text }</Text>
    </View>
  }
}

class Avartar extends Component {
  render() {
    return <View>
      <Image style={ viewStyles.image } source={ this.props.url }></Image>
    </View>
  }
}

const viewStyles = StyleSheet.create({
  main: {
    flexDirection: 'column'
  },
  para: {
    color: '#f00',
    fontSize: 20
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
    height: 120
  },
  item: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 2,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center'
  }
})

