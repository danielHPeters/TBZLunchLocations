import React, { Component } from 'react'
import { Text, TextInput, View } from 'react-native'

/**
 * Change password component.
 *
 * @author Daniel Peters
 * @version 1.0
 */
export default class ChangePassword extends Component<{}, {}> {
  render () {
    return <View>
      <Text>Current password:</Text>
      <TextInput placeholder={'Password'}/>
      <Text>New password:</Text>
      <TextInput placeholder={'New password'}/>
      <Text>Repeat new password:</Text>
      <TextInput placeholder={'New password'}/>
    </View>
  }
}
