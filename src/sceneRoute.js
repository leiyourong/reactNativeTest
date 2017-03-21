import React from 'react'
import InputTest from './inputTest'
import ViewTest from './viewTest'
import FetchTest from './fetchTest'

const sceneRoute = [{
  title: '测试输入框 inputText',
  cmp: <InputTest />
}, {
  title: '测试 ListView & ScrollView',
  cmp: <ViewTest />
}, {
  title: '测试 Fetch',
  cmp: <FetchTest />
}]

export default sceneRoute