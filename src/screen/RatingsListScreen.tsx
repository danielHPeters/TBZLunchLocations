import React, { Component } from 'react'
import { StyleSheet, Text, View, FlatList, ActivityIndicator } from 'react-native'
import Rating from '../model/Rating'
import AppConfig from '../config/AppConfig'
import { NavigationScreenProps } from 'react-navigation'

export interface RatingsListProps extends NavigationScreenProps {}

export interface RatingsListState {
  isLoading: boolean
  dataSource: Rating[]
}

/**
 * Screen component which lists all ratings of a location.
 *
 * @author Daniel Peters
 * @version 1.0
 */
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

  /**
   * Load the ratings of given location when the component mounted.
   *
   * @returns
   */
  componentDidMount (): Promise<void> {
    return fetch(`http://${AppConfig.API_HOST}/api/rating/${this.props.navigation.getParam('type')}/${this.props.navigation.getParam('ownerId')}`, {
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

  /**
   * Component render method.
   *
   * @returns
   */
  render (): any {
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

/**
 * Style definition of this component.
 * Always put styles in StyleSheet object.
 */
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
