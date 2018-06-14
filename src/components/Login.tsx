import React, { Component } from 'react'
import { Text, TextInput, View } from 'react-native'

/**
 * Login form component.
 *
 * @author Daniel Peters
 * @version 1.0
 */
export default class Login extends Component<{}, {}> {
  render () {
    return <View>
      <Text>Login</Text>
      <TextInput placeholder={'Username'}/>
      <TextInput placeholder={'Password'}/>
    </View>
  }
}
