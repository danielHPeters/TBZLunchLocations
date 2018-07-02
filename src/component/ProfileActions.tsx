import { Button, View } from 'react-native'
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
        <Button title={'Change password'} onPress={() => this.openChangePasswordView()}/>
        <Button title={'My Ratings'} onPress={() => this.openRatingView()}/>
        <Button title={'Locations'} onPress={() => this.openAddLocationView()}/>
        <Button title="Sign out" onPress={() => this.props.onLogoutPress()}/>
      </View>
    )
  }

  openChangePasswordView (): void {
    this.props.navigation.navigate('ChangePassword', {
      title: `${this.props.user.name} - Password change`,
      userId: this.props.user.id
    })
  }

  openRatingView (): void {
    this.props.navigation.navigate(
      'RatingList',
      { title: `${this.props.user.name}'s Ratings`, ownerId: this.props.user.id, type: 'user' }
    )
  }

  openAddLocationView (): void {
    this.props.navigation.navigate('LocationList')
  }
}
