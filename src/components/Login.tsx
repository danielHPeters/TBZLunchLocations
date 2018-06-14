import React, { Component } from 'react'
import { NavigationInjectedProps } from 'react-navigation'
import { Alert, Button, TextInput, View } from 'react-native'

export interface LoginProps {
  onLoginPress: () => void
}

export interface LoginState {
  email: string
  password: string
}

export default class Login extends Component<LoginProps, LoginState> {
  render () {
    return <View>
      <TextInput placeholder={'Username'}/>
      <TextInput placeholder={'Password'}/>
      <Button onPress={this.props.onLoginPress} title="Sign in"/>
    </View>
  }

  /*login () {
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
          this.props.navigation.navigate('Second', { email: this.state.email })
        }
        else {
          Alert.alert(json)
        }
      }).catch((error) => {
      console.error(error)
    })
  }*/
}
