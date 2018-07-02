import React, { Component } from 'react'
import { Animated, Text } from 'react-native'
import View = Animated.View
import { Button } from 'react-native-material-ui'
import Location from '../model/Location'
import { NavigationScreenProps } from 'react-navigation'

export interface LocationDetailsScreenProps extends NavigationScreenProps {}

export interface LocationDetailsScreenState {}

export default class LocationDetailsScreen extends Component<LocationDetailsScreenProps, LocationDetailsScreenState> {
  static navigationOptions = (navigation: NavigationScreenProps) => {
    return {
      title: navigation.navigation.getParam('title')
    }
  }
  render () {
    return (
      <View>
        <Button primary raised text={'Show Ratings'} onPress={() => this.showLocationRatings()}/>
        <Button primary raised text={'Show on Map'} onPress={() => this.openMapView()}/>
      </View>
    )
  }

  showLocationRatings (): void {
    const location = this.props.navigation.getParam('location')
    this.props.navigation.navigate(
      'RatingList',
      { title: `${location.name} Ratings`, ownerId: location.id, type: 'location' }
    )
  }

  openMapView (): void {
    const location = this.props.navigation.getParam('location')
    this.props.navigation.navigate(
      'Map',
      { title: `${location.name}`, lat: location.lat, lng: location.lng }
    )
  }
}