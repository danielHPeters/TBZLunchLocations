import React, { Component } from 'react'
import { StyleSheet, Text, View} from 'react-native'
import User from '../model/User'
import ChangePassword from './ChangePassword'
import ProfileActions from './ProfileActions'

export interface ProfileProps {
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
        <Text style={styles.text}>{'Last name: ' + this.props.user.lastName}</Text>
        <Text style={styles.text}>{'First name: ' + this.props.user.firstName}</Text>
        <Text style={styles.text}>{'Email: ' + this.props.user.email}</Text>
        <ChangePassword/>
        <ProfileActions onLogoutPress={this.props.onLogoutPress}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
    flex: 1,
    flexDirection: 'column'
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold'
  },
  text: {
    fontSize: 20
  }
})
