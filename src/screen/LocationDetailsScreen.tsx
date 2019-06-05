import React, { Component } from 'react'
import { Button } from 'react-native-material-ui'
import { NavigationScreenProps } from 'react-navigation'
import { StyleSheet, View } from 'react-native'

export interface LocationDetailsScreenProps extends NavigationScreenProps {}

export interface LocationDetailsScreenState {}

/**
 * Location detail view component.
 *
 * @author Daniel Peters
 * @version 1.0
 */
export default class LocationDetailsScreen extends Component<LocationDetailsScreenProps, LocationDetailsScreenState> {
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
  constructor (props: LocationDetailsScreenProps) {
    super(props)
    this.showLocationRatings = this.showLocationRatings.bind(this)
    this.openMapView = this.openMapView.bind(this)
  }

  render (): JSX.Element {
    return (
      <View style={styles.container}>
        <Button primary={true} raised={true} text={'Show Ratings'} onPress={this.showLocationRatings}/>
        <View style={styles.divider}/>
        <Button primary={true} raised={true} text={'Show on Map'} onPress={this.openMapView}/>
      </View>
    )
  }

  /**
   * Show the Ratings of a location.
   */
  private showLocationRatings (): void {
    const location = this.props.navigation.getParam('location')
    this.props.navigation.navigate(
      'RatingList',
      {
        title: `${location.name} Ratings`,
        filterId: location.id,
        type: 'location',
        userId: this.props.navigation.getParam('userId')
      }
    )
  }

  /**
   * Navigate to map view of location.
   */
  private openMapView (): void {
    const location = this.props.navigation.getParam('location')
    this.props.navigation.navigate(
      'Map',
      { title: `${location.name}`, lat: location.lat, lng: location.lng }
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
  divider: {
    height: 10
  }
})
