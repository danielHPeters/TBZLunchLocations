import React, { Component } from 'react'
import { Alert, StyleSheet, TextInput, View } from 'react-native'
import { Button } from 'react-native-material-ui'
import AppConfig from '../config/AppConfig'
import { NavigationScreenProps } from 'react-navigation'

export interface AddRatingScreenProps extends NavigationScreenProps {}

export interface AddRatingScreenState {
  text: string
  stars: string
}

export default class AddRatingScreen extends Component<AddRatingScreenProps, AddRatingScreenState> {
  static navigationOptions = (navigation: NavigationScreenProps) => {
    return {
      title: navigation.navigation.getParam('title')
    }
  }

  constructor (props: AddRatingScreenProps) {
    super(props)
    this.state = {
      text: '',
      stars: ''
    }
  }

  render () {
    return <View style={styles.container}>
      <TextInput
        onChangeText={(text) => this.setState({ text: text })}
        value={this.state.text}
        placeholder={'Rating text'}
        autoCapitalize='none'
      />
      <TextInput
        onChangeText={(text) => this.setState({ stars: text })}
        placeholder={'Stars'}
        value={this.state.stars.toString()}
        autoCapitalize='none'
        keyboardType={'numeric'}
      />
      <Button primary raised text={'Submit'} onPress={() => this.submitRating()}/>
    </View>
  }

  submitRating () {
    fetch(`http://${AppConfig.API_HOST}/api/rating`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        text: this.state.text,
        stars: Number(this.state.stars),
        userId: this.props.navigation.getParam('userId'),
        locationId: this.props.navigation.getParam('locationId')
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
          'You successfully added a rating!',
          [{ text: 'Ok', onPress: () => this.props.navigation.navigate('RatingList', { response: json }) }]
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
