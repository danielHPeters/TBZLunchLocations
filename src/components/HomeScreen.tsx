import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View, Button } from 'react-native'

export interface HomeScreenProps {
}

export  interface HomeScreenState {
}

/**
 * Home screen component.
 *
 * @author Daniel Peters
 * @version 1.0
 */
export default class HomeScreen extends Component<HomeScreenProps, HomeScreenState> {
  static navigationOtions = {
    title: 'Home'
  }

  render () {
    return (
      <View>
        <Text style={styles.welcomeText}>Welcome!</Text>
        <Button onPress={this.openRatingView} title={'Add Rating'} />
        <Button onPress={this.openAddLocationView} title={'Add Location'} />
      </View>
    )
  }

  openRatingView (): void {
    // TODO: finish implementing.
  }

  openAddLocationView (): void {
    // TODO: finish implementing.
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
