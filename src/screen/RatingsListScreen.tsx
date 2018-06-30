import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View, Button, FlatList, ActivityIndicator } from 'react-native'
import Rating from '../model/Rating'
import AppConfig from '../config/AppConfig'

export interface RatingsListOptions {

}

export interface RatingsListState {
  isLoading: boolean
  dataSource: Rating[]
}

export default class RatingsListScreen extends Component<RatingsListOptions, RatingsListState> {
  static navigationOptions = {
    title: 'Ratings'
  }

  componentDidMount () {
    return fetch(`http://${ AppConfig.API_HOST }/api/rating`, {
      method: 'GET'
    }).then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          dataSource: responseJson,
        }, () => {

        })
      })
      .catch((error) => {
        console.error(error)
      })
  }

  render () {
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, padding: 20 }}>
          <ActivityIndicator/>
        </View>
      )
    }

    return (
      <View style={{ flex: 1, paddingTop: 20 }}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({ item }) => <Text>{item.text}, {item.stars}</Text>}
        />
      </View>
    )
  }
}
