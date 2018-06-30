import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View, Button } from 'react-native'
import User from '../model/User'
import Profile from '../component/Profile'

/**
 * Profile screen component.
 *
 * @author Daniel Peters
 * @version 1.0
 */
export default class ProfileScreen extends Component<{}, {}> {
  static navigationOptions  = {
    title: 'Profile'
  }
  render () {
    const daniel = new User('af32424123', 'Dankster', 'Peters', 'Daniel', 'daniel.peters@mail.com', 'test123')
    return <Profile user={daniel}/>
  }
}
