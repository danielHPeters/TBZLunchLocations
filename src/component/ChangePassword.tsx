import React, { Component } from 'react'
import { TextInput, View } from 'react-native'

/**
 * Change password component.
 *
 * @author Daniel Peters
 * @version 1.0
 */
export default class ChangePassword extends Component<{}, {}> {
  render () {
    return <View>
      <TextInput placeholder={'Password'}/>
      <TextInput placeholder={'New password'}/>
      <TextInput placeholder={'Repeat new password'}/>
    </View>
  }
}
