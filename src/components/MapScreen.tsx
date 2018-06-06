import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native'
import MapView from 'react-native-maps'

export default class MapScreen extends Component<{}, {}> {
  render () {
    // const { navigate } = this.props.navigation
    return <MapView
      initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
     style={styles.map}/>
  }
}
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 400,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
})