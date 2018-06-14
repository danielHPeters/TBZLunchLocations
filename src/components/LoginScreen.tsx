import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View, Button, Alert } from 'react-native'
import Login from './Login'

export interface LoginScreenProps {
  navigation
}

export interface LoginScreenState {
  email: string
  password: string
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
      email: '',
      password: ''
    }
  }

  render () {
    return (
      <View>
        <Login/>
      </View>
    )
  }

  login () {
    fetch('https://tbz-lunch-locations-webservice/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password
      })
    }).then(response => response.json())
      .then(json => {
        // If server response message same as Data Matched
        if (json.status === 'ok') {
          //Then open Profile activity and send user email to profile activity.
          this.props.navigation.navigate('Second', {email: this.state.email})
        }
        else {
          Alert.alert(json)
        }
      }).catch((error) => {
      console.error(error)
    })

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
