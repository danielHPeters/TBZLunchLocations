import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View, Button, FlatList, ActivityIndicator } from 'react-native'
import Rating from '../model/Rating'
import AppConfig from '../config/AppConfig'
import { NavigationScreenProps } from 'react-navigation'

export interface RatingsListProps extends NavigationScreenProps {}

export interface RatingsListState {
  isLoading: boolean
  dataSource: Rating[]
}

export default class RatingsListScreen extends Component<RatingsListProps, RatingsListState> {
  static navigationOptions = (navigation: NavigationScreenProps) => {
    return {
      title: navigation.navigation.getParam('title')
    }
  }

  constructor (props: RatingsListProps) {
    super(props)
    this.state = {
      isLoading: true,
      dataSource: []
    }
  }

  componentDidMount () {
    return fetch(`http://${AppConfig.API_HOST}/api/rating/location/${this.props.navigation.getParam('locationId')}`, {
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
        <View style={styles.container}>
          <ActivityIndicator/>
        </View>
      )
    }

    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({ item }) => <Text style={styles.listItem}>{item.text}, {item.stars}</Text>}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  listItem: {
    backgroundColor: 'gray',
    height: 45,
    fontSize: 30,
    padding: 5,
    borderRadius: 4,
    borderWidth: 1.5,
    borderColor: '#d6d7da'
  }
})
