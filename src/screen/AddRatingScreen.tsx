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

/**
 * Add rating form component.
 *
 * @author Daniel Peters
 * @version 1.0
 */
export default class AddRatingScreen extends Component<AddRatingScreenProps, AddRatingScreenState> {
  static navigationOptions = (navigation: NavigationScreenProps) => {
    return {
      title: navigation.navigation.getParam('title')
    }
  }

  /**
   * Constructor.
   *
   * @param props Props object
   */
  constructor (props: AddRatingScreenProps) {
    super(props)
    this.state = {
      text: '',
      stars: ''
    }
  }

  render (): JSX.Element {
    return (
      <View style={styles.container}>
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
        <Button primary={true} raised={true} text={'Submit'} onPress={() => this.submitRating()}/>
      </View>
    )
  }

  private submitRating (): void {
    const uri = `http://${AppConfig.API_HOST}/api/rating`
    const method = 'POST'
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
    const body = JSON.stringify({
      text: this.state.text,
      stars: Number(this.state.stars),
      userId: this.props.navigation.getParam('userId'),
      locationId: this.props.navigation.getParam('locationId')
    })

    fetch(uri, { method: method, headers: headers, body: body })
      .then(response => {
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
          [
            {
              text: 'Ok',
              onPress: () => this.props.navigation.navigate('RatingList', { response: json })
            }
          ]
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
