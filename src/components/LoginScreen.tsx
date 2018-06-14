import React, { Component } from 'react'
import { StyleSheet, View, TextInput, Button } from 'react-native'
import Welcome from './Welcome.'
import Login from './Login'

export interface LoginScreenProps {

}

export interface LoginScreenState {
  loggedIn: boolean
}

/**
 * Login screen component.
 *
 * @author Daniel Peters
 * @version 1.0
 */
export default class LoginScreen extends Component<LoginScreenProps, LoginScreenState> {
  static navigationOptions = {
    title: 'Login'
  }

  constructor (props: LoginScreenProps) {
    super(props)
    this.state = {
      loggedIn: false
    }
  }

  render () {
    return this.state.loggedIn ?
      <Welcome onLogoutPress={() => this.setState({loggedIn: false})}/> :
      <Login onLoginPress={() => this.setState({loggedIn: true})} />
  }
}

const styles = StyleSheet.create({
  welcomeText: {
    textAlign: 'center',
    marginTop: 30,
    fontSize: 20,
    marginBottom: 30
  }
})
