import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import MapView from 'react-native-maps'
import { NavigationScreenProps } from 'react-navigation'

export interface MapScreenProps extends NavigationScreenProps {}

export interface MapScreenState {}

/**
 * Google maps screen.
 *
 * @author Daniel Peters
 * @version 1.0
 */
export default class MapScreen extends Component<MapScreenProps, MapScreenState> {
  static navigationOptions = {
    title: 'Map'
  }

  /**
   * Component render method.
   *
   * @returns
   */
  render (): JSX.Element {
    const region = {
      latitude: this.props.navigation.getParam('lat'),
      longitude: this.props.navigation.getParam('lng'),
      latitudeDelta: 0.001844,
      longitudeDelta: 0.000842
    }

    return <MapView initialRegion={region} style={styles.map}/>
  }
}

/**
 * Style definition of this component.
 * Always put styles in StyleSheet object.
 */
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 400,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  map: {
    ...StyleSheet.absoluteFillObject
  }
})
