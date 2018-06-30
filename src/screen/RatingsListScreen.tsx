import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View, Button, FlatList, ActivityIndicator } from 'react-native'
import Rating from '../model/Rating'
import AppConfig from '../config/AppConfig'
import { NavigationScreenProps } from 'react-navigation'

export interface RatingsListOptions {

}

export interface RatingsListProps extends NavigationScreenProps {
  isLoading: boolean
  dataSource: Rating[]
}

export default class RatingsListScreen extends Component<RatingsListOptions, RatingsListProps> {
  static navigationOptions = (navigation: NavigationScreenProps) => {
    return {
      title: navigation.navigation.getParam('title')
    }
  }

  constructor (props: RatingsListProps) {
    super(props)
    this.state = {
      isLoading: true,
      dataSource: [],
      navigation: props.navigation
    }
  }

  componentDidMount () {
    return fetch(`http://${AppConfig.API_HOST}/api/rating/location/${this.state.navigation.getParam('locationId')}`, {
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
