import React, { Component } from 'react'
import { Text, TextInput, View } from 'react-native'

export default class ChangePassword extends Component{
  render () {
    return <View>
      <Text>Change password:</Text>
      <TextInput placeholder={'Password'}/>
    </View>
  }
}