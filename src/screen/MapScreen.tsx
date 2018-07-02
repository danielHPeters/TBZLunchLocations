import React, { Component } from 'react'
import { StyleSheet} from 'react-native'
import MapView from 'react-native-maps'

export interface MapScreenProps {}

export interface MapScreenState {}

/**
 * Google maps screen.
 *
 * @author Daniel Peters
 * @version 1.0
 */
export default class MapScreen extends Component<MapScreenProps, MapScreenState> {
  static navigationOptions  = {
    title: 'Map'
  }

  /**
   * Component render method.
   *
   * @returns
   */
  render () {
    return <MapView
      initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      }}
     style={styles.map}/>
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
