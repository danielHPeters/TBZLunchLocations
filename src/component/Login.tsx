import React, { Component } from 'react'
import { Alert, Button, TextInput, View } from 'react-native'
import User from '../model/User'
import AppConfig from '../config/AppConfig'

export interface LoginProps {
  onLoginPress: (user: User) => void
}

export interface LoginState {
  email: string
  password: string
}

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
        placeholder={'Username'}
        autoCapitalize='none'
      />
      <TextInput
        onChangeText={(text) => this.setState({ password: text })}
        value={this.state.password}
        placeholder={'Password'}
        autoCapitalize='none'
      />
      <Button onPress={() => this.login()} title="Sign in"/>
    </View>
  }

  login () {
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
        throw new Error('Failed to log in')
      }
    })
      .then((json) => {
          this.props.onLoginPress(json)
      }).catch((error: Error) => {
      Alert.alert(error.message)
    })
  }
}
