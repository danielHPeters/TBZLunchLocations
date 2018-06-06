import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native'

export default class HomeScreen extends Component<{}, {}> {
  render () {
    return (
      <View>
        <Text style={styles.welcomeText}>Welcome!</Text>
        <Button onPress={this.openRatingView} title={'Add Rating'}/>
        <Button onPress={this.openAddLocationView} title={'Add Location'}/>
      </View>
    )
  }

  openRatingView (): void {

  }

  openAddLocationView (): void {

  }
}

const styles = StyleSheet.create({
  welcomeText: {
    textAlign: 'center',
    marginTop: 30,
    fontSize: 20,
    marginBottom: 30
  }
})