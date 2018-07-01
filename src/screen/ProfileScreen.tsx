import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View, Button } from 'react-native'
import User from '../model/User'
import Profile from '../component/Profile'
import { NavigationScreenProps } from 'react-navigation'

export interface ProfileProps extends NavigationScreenProps {}

export interface ProfileState extends NavigationScreenProps {}

/**
 * Profile screen component.
 *
 * @author Daniel Peters
 * @version 1.0
 */
export default class ProfileScreen extends Component<ProfileProps, ProfileState> {
  static navigationOptions = (navigation: NavigationScreenProps) => {
    return {
      title: navigation.navigation.getParam('title')
    }
  }

  render () {
    const daniel = new User('af32424123', 'Dankster', 'Peters', 'Daniel', 'daniel.peters@mail.com', 'test123')
    return <Profile user={daniel}/>
  }
}
