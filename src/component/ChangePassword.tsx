import React, { Component } from 'react'
import { TextInput, View } from 'react-native'
import User from '../model/User'
import { Button } from 'react-native-material-ui'

export interface ChangePasswordProps {
  user: User
}
export interface ChangePasswordState {}

/**
 * Change password component.
 *
 * @author Daniel Peters
 * @version 1.0
 */
export default class ChangePassword extends Component<ChangePasswordProps, ChangePasswordState> {
  render () {
    return <View>
      <TextInput placeholder={'Password'}/>
      <TextInput placeholder={'New password'}/>
      <TextInput placeholder={'Repeat new password'}/>
      <Button primary raised text={'Submit'}/>
    </View>
  }
}
