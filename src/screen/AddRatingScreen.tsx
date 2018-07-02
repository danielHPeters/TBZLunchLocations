import React, { Component } from 'react'
import { Alert, StyleSheet, TextInput, View } from 'react-native'
import { Button } from 'react-native-material-ui'
import AppConfig from '../config/AppConfig'
import { NavigationScreenProps } from 'react-navigation'

export interface AddRatingScreenProps extends NavigationScreenProps {}

export interface AddRatingScreenState {
  text: string,
  stars: number
}

export default class AddRatingScreen extends Component<AddRatingScreenProps, AddRatingScreenState> {
  render () {
    return <View style={styles.container}>
      <TextInput placeholder={'Rating text'}/>
      <TextInput placeholder={'Stars'}/>
      <Button primary raised text={'Submit'} onPress={() => this.submitRating()}/>
    </View>
  }

  submitRating () {
    fetch(`http://${AppConfig.API_HOST}/api/rating`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        text: this.state.text,
        stars: this.state.stars,
        userId: this.props.navigation.getParam('userId'),
        locationId: this.props.navigation.getParam('ratingId')
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
      }).catch((error: Error) => {
      Alert.alert('Error', error.message)
    })
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
