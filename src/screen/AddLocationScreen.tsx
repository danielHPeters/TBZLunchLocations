import React, { Component } from 'react'
import { Alert, StyleSheet, TextInput, View } from 'react-native'
import { Button } from 'react-native-material-ui'
import AppConfig from '../config/AppConfig'
import { NavigationScreenProps } from 'react-navigation'

export interface AddLocationScreenProps extends NavigationScreenProps {}

export interface AddLocationScreenState {
  name: string
  lat: number
  lng: number
}

/**
 * Screen where user can add a location.
 *
 * @author Daniel Peters
 * @version 1.'0
 */
export default class AddLocationScreen extends Component<AddLocationScreenProps, AddLocationScreenState> {
  static navigationOptions = {
    title: 'Add Location'
  }
  constructor (props: AddLocationScreenProps) {
    super(props)
    this.state = {
      name: '',
      lat: 0,
      lng: 0
    }
  }

  render () {
    return <View style={styles.container}>
      <TextInput
        onChangeText={(text) => this.setState({ name: text })}
        value={this.state.name}
        placeholder={'Rating text'}
        autoCapitalize='none'
      />
      <TextInput
        placeholder={'Latitude'}
      />
      <TextInput
        placeholder={'Longitude'}
      />
      <Button primary raised text={'Submit'} onPress={() => this.submitLocation()}/>
    </View>
  }

  submitLocation (): void {
    fetch(`http://${AppConfig.API_HOST}/api/location`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: this.state.name,
        lat: this.state.lat,
        lng: this.state.lng
      })
    }).then(response => {
      if (response.status === 200) {
        return response.json()
      } else {
        throw new Error('An unexpected error occurred.')
      }
    })
      .then((json) => {
        Alert.alert(
          'Success',
          'You successfully added a location!',
          [{ text: 'Ok', onPress: () => this.props.navigation.navigate('LocationList', { response: json }) }]
        )
      })
      .catch((error: Error) => Alert.alert('Error', error.message))
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
