import React, { Component } from 'react'
import { Button, Text, View } from 'react-native'

export interface WelcomeProps {
  onLogoutPress: () => void
}

export interface WelcomeState {

}

export default class Welcome extends Component<WelcomeProps, WelcomeState> {
  render () {
    return (<View>
      <Text>Welcome</Text>
      <Button onPress={this.props.onLogoutPress} title="Sign out"/>
    </View>)
  }
}