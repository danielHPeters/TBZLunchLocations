import { Button, View, StyleSheet } from 'react-native'
import React, { Component } from 'react'
import { NavigationScreenProps } from 'react-navigation'
import User from '../model/User'

export interface ProfileActionsProps extends NavigationScreenProps {
  user: User
  onLogoutPress: () => void
}

export interface ProfileActionsState {}

/**
 * Component containing profile actions like change password etc.
 *
 * @author Daniel Peters
 * @version 1.0
 */
export default class ProfileActions extends Component<ProfileActionsProps, ProfileActionsState> {
  render () {
    return (
      <View>
        <View style={styles.divider}/>
        <Button title={'Change password'} onPress={() => this.openChangePasswordView()}/>
        <View style={styles.divider}/>
        <Button title={'My Ratings'} onPress={() => this.openMyRatingsView()}/>
        <View style={styles.divider}/>
        <Button title={'Locations'} onPress={() => this.openLocationView()}/>
        <View style={styles.divider}/>
        <Button title='Sign out' onPress={() => this.props.onLogoutPress()}/>
      </View>
    )
  }

  openChangePasswordView (): void {
    this.props.navigation.navigate('ChangePassword', {
      title: `${this.props.user.name} - Password change`,
      userId: this.props.user.id
    })
  }

  openMyRatingsView (): void {
    this.props.navigation.navigate(
      'RatingList',
      {
        title: `${this.props.user.name}'s Ratings`,
        filterId: this.props.user.id,
        type: 'user',
        userId: this.props.user.id
      }
    )
  }

  openLocationView (): void {
    this.props.navigation.navigate('LocationList', { userId: this.props.user.id })
  }
}

/**
 * Style definition of this component.
 * Always put styles in StyleSheet object.
 */
const styles = StyleSheet.create({
  divider: {
    height: 10
  }
})
