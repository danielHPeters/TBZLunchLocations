import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import User from '../model/User'
import ProfileActions from './ProfileActions'
import { NavigationScreenProps } from 'react-navigation'
import { Card } from 'react-native-material-ui'

export interface ProfileProps extends NavigationScreenProps {
  user: User
  onLogoutPress: () => void
}

export interface ProfileState {}

/**
 * User profile component.
 *
 * @author Daniel Peters
 * @version 1.0
 */
export default class Profile extends Component<ProfileProps, ProfileState> {
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Welcome {this.props.user.name}!</Text>
        <Card>
          <Text style={styles.text}>
            {`Last name: ${this.props.user.lastName}\n`}
            {`First name: ${this.props.user.firstName}\n`}
            {`Email: ${this.props.user.email}\n`}
          </Text>
        </Card>
        <ProfileActions
          user={this.props.user}
          navigation={this.props.navigation}
          onLogoutPress={this.props.onLogoutPress}
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
    padding: 5,
    flex: 1,
    flexDirection: 'column'
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold'
  },
  text: {
    fontSize: 20
  }
})
