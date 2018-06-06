import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native'
import User from '../model/User'
import ChangePassword from './ChangePassword'

interface UserDetailsProps {
  user: User
}

export default class UserDetails extends Component<UserDetailsProps, {}> {
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{this.props.user.username}</Text>
        <Text style={styles.text}>{'Last name: ' + this.props.user.lastName}</Text>
        <Text style={styles.text}>{'First name: ' + this.props.user.firstName}</Text>
        <Text style={styles.text}>{'Email: ' + this.props.user.email}</Text>
        <ChangePassword/>
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