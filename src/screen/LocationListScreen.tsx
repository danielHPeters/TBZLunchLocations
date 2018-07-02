import React from 'react'
import { FlatList, ActivityIndicator, Text, View, StyleSheet, ScrollView } from 'react-native'
import Location from '../model/Location'
import AppConfig from '../config/AppConfig'
import { NavigationScreenProps } from 'react-navigation'
import { ActionButton, ListItem } from 'react-native-material-ui'

export interface LocationListProps extends NavigationScreenProps {}

export interface LocationListState {
  isLoading: boolean
  dataSource: Location[]
}

export default class LocationListScreen extends React.Component<LocationListProps, LocationListState> {
  static navigationOptions = {
    title: 'Locations'
  }

  constructor (props: LocationListProps) {
    super(props)
    this.state = {
      isLoading: true,
      dataSource: []
    }
  }

  /**
   * Load all locations when the component mounted.
   *
   * @returns
   */
  componentDidMount (): Promise<void> {
    return fetch(`http://${AppConfig.API_HOST}/api/location`, {
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
        <ScrollView>
          <FlatList
            data={this.state.dataSource}
            renderItem={({ item }) => this.renderItem(item)}
          />
        </ScrollView>
        <ActionButton/>
      </View>
    )
  }

  renderItem = (location: Location) => (
    <ListItem
      divider={true}
      centerElement={{
        primaryText: location.name,
      }}
      rightElement='arrow-forward'
      onRightElementPress={() => this.showLocationDetails(location)}
      onPress={() => this.showLocationDetails(location)}
    />
  )

  showLocationDetails (location: Location) {
    this.props.navigation.navigate(
      'LocationDetails',
      { title: `${location.name} Details`, location: location }
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
