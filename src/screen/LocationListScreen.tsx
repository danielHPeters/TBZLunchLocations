import React from 'react'
import { FlatList, ActivityIndicator, Text, View, StyleSheet, ScrollView } from 'react-native'
import Location from '../model/Location'
import AppConfig from '../config/AppConfig'
import { NavigationScreenProps } from 'react-navigation'
import { ListItem } from 'react-native-material-ui'

export interface LocationListProps extends NavigationScreenProps {}

export interface LocationListState {
  loading: boolean
  locations: Location[]
}

/**
 * List component for locations.
 *
 * @author Daniel Peters
 * @version 1.0
 */
export default class LocationListScreen extends React.Component<LocationListProps, LocationListState> {
  static navigationOptions = {
    title: 'Locations'
  }

  /**
   * Constructor.
   *
   * @param props Props object
   */
  constructor (props: LocationListProps) {
    super(props)
    this.state = {
      loading: true,
      locations: []
    }
  }

  /**
   * Load all locations when the component mounted.
   *
   * @returns
   */
  componentDidMount (): Promise<void> {
    const uri = `http://${AppConfig.API_HOST}/api/location`
    const method = 'GET'

    return fetch(uri, { method: method })
      .then((response) => response.json())
      .then((responseJson) => this.setState({ loading: false, locations: responseJson }))
      .catch((error) => console.error(error))
  }

  /**
   * Component render method.
   *
   * @returns
   */
  render (): JSX.Element {
    return this.state.loading
      ? <View style={styles.container}><ActivityIndicator/></View>
      : (
        <View style={styles.container}>
          <ScrollView>
            <FlatList data={this.state.locations} renderItem={({ item }) => this.renderItem(item)}/>
          </ScrollView>
        </View>
      )
  }

  /**
   * Render a single location item.
   * @param location
   */
  private renderItem = (location: Location) => (
    <ListItem
      divider={true}
      centerElement={{ primaryText: location.name }}
      rightElement='arrow-forward'
      onRightElementPress={() => this.showLocationDetails(location)}
      onPress={() => this.showLocationDetails(location)}
    />
  )

  private showLocationDetails (location: Location) {
    this.props.navigation.navigate(
      'LocationDetails',
      { title: `${location.name} Details`, location: location, userId: this.props.navigation.getParam('userId') }
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
