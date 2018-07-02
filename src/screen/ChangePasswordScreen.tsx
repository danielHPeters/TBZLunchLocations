import React, { Component } from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import User from '../model/User'
import { Button } from 'react-native-material-ui'
import { NavigationScreenProps } from 'react-navigation'

export interface ChangePasswordProps extends NavigationScreenProps {
  user: User
}

export interface ChangePasswordState {
  password: string
  newPassword: string
  newPasswordRepeat: string
}

/**
 * Change password component.
 *
 * @author Daniel Peters
 * @version 1.0
 */
export default class ChangePasswordScreen extends Component<ChangePasswordProps, ChangePasswordState> {
  static navigationOptions = (navigation: NavigationScreenProps) => {
    return {
      title: navigation.navigation.getParam('title')
    }
  }

  constructor (props: ChangePasswordProps) {
    super(props)
    this.state = {
      password: '',
      newPassword: '',
      newPasswordRepeat: ''
    }
  }

  render () {
    return <View style={styles.container}>
      <TextInput
        onChangeText={(text) => this.setState({ password: text })}
        value={this.state.password}
        placeholder={'Password'}
        autoCapitalize='none'
        secureTextEntry={true}
      />

      <TextInput
        onChangeText={(text) => this.setState({ newPassword: text })}
        value={this.state.newPassword}
        placeholder={'New password'}
        autoCapitalize='none'
        secureTextEntry={true}
      />
      <TextInput
        onChangeText={(text) => this.setState({ newPasswordRepeat: text })}
        value={this.state.newPasswordRepeat}
        placeholder={'Repeat new password'}
        autoCapitalize='none'
        secureTextEntry={true}
      />
      <Button primary raised text={'Submit'}/>
    </View>
  }
}

/**
 * Style definition of this component.
 * Always put styles in StyleSheet object.
 */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  }
})
