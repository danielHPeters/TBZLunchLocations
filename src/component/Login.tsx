import React, { Component } from 'react'
import { Alert, TextInput, View } from 'react-native'
import User from '../model/User'
import AppConfig from '../config/AppConfig'
import { Button } from 'react-native-material-ui'
import { NavigationScreenProps } from 'react-navigation'

export interface LoginProps extends NavigationScreenProps {
  onLoginPress: (user: User) => void
}

export interface LoginState {
  email: string
  password: string
}

/**
 * Login page component. Displayed when the user is not logged in.
 *
 * @author Daniel Peters
 * @version 1.0
 */
export default class Login extends Component<LoginProps, LoginState> {
  constructor (props: LoginProps) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }

  render () {
    return <View>
      <TextInput
        onChangeText={(text) => this.setState({ email: text })}
        value={this.state.email}
        placeholder={'Email'}
        autoCapitalize='none'
      />
      <TextInput
        onChangeText={(text) => this.setState({ password: text })}
        value={this.state.password}
        placeholder={'Password'}
        autoCapitalize={'none'}
        secureTextEntry={true}
      />
      <Button raised primary text="Sign in" onPress={() => this.login()}/>
      <Button text={'Register'} onPress={() => {this.openRegisterView()}}/>
    </View>
  }

  /**
   * Sends login request to API server.
   */
  login (): void {
    fetch(`http://${AppConfig.API_HOST}/api/user/login`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password
      })
    }).then(response => {
      if (response.status === 200) {
        return response.json()
      } else {
        throw new Error('Make sure you entered the correct email and password.')
      }
    })
      .then((json) => {
        this.props.onLoginPress(json)
      }).catch((error: Error) => {
      Alert.alert('Authentication Error', error.message)
    })
  }

  openRegisterView (): void {
    this.props.navigation.navigate('Register')
  }
}
