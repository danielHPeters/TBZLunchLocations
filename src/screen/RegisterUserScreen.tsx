import React, { Component } from 'react'
import { Alert, StyleSheet, TextInput, View } from 'react-native'
import { Button } from 'react-native-material-ui'
import AppConfig from '../config/AppConfig'
import { NavigationScreenProps } from 'react-navigation'

export interface RegisterUserScreenProps extends NavigationScreenProps {}

export interface RegisterUserScreenState {
  name: string
  lastName: string
  firstName: string
  email: string
  password: string
}

/**
 * Screen where users can register.
 *
 * @author Daniel Peters
 * @version 1.0
 */
export default class RegisterUserScreen extends Component<RegisterUserScreenProps, RegisterUserScreenState> {
  static navigationOptions = {
    title: 'Register'
  }

  /**
   * Constructor.
   *
   * @param props Props object
   */
  constructor (props: RegisterUserScreenProps) {
    super(props)
    this.state = {
      name: '',
      lastName: '',
      firstName: '',
      email: '',
      password: ''
    }
  }

  render (): JSX.Element {
    return (
      <View style={styles.container}>
        <TextInput
          onChangeText={(text) => this.setState({ name: text })}
          value={this.state.name}
          placeholder={'Username'}
          autoCapitalize='none'
        />
        <TextInput
          onChangeText={(text) => this.setState({ lastName: text })}
          value={this.state.lastName}
          placeholder={'Last name'}
        />
        <TextInput
          onChangeText={(text) => this.setState({ firstName: text })}
          value={this.state.firstName}
          placeholder={'First name'}
        />
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
        <Button raised={true} primary={true} text='Register' onPress={() => this.register()}/>
      </View>
    )
  }

  /**
   * Sends register request to API server.
   */
  private register (): void {
    const uri = `http://${AppConfig.API_HOST}/api/user`
    const method = 'POST'
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
    const body = JSON.stringify({
      name: this.state.name,
      lastName: this.state.lastName,
      firstName: this.state.firstName,
      email: this.state.email,
      password: this.state.password
    })

    fetch(uri, { method: method, headers: headers, body: body })
      .then(response => {
        if (response.status === 200) {
          return response.json()
        } else {
          throw new Error('Could not create user. Maybe a user was created with the same email.')
        }
      })
      .then((json) => {
        Alert.alert(
          'Success',
          'You successfully registered!',
          [
            {
              text: 'Ok',
              onPress: () => this.props.navigation.navigate('Home', { response: json })
            }
          ]
        )
      })
      .catch((error: Error) => Alert.alert('Register Error', error.message))
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
