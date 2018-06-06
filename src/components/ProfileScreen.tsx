import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View, Button } from 'react-native'
import User from '../model/User'
import UserDetails from './UserDetails'

/**
 * Profile screen component.
 *
 * @author Daniel Peters
 * @version 1.0
 */
export default class ProfileScreen extends Component<{}, {}> {
  render () {
    const daniel = new User('af32424123', 'Dankster', 'Peters', 'Daniel', 'daniel.peters@mail.com', 'test123')
    return <UserDetails user={daniel}/>
  }
}
