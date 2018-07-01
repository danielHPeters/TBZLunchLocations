import { Button, View } from 'react-native'
import React, { Component } from 'react'

export interface ProfileActionsProps {
  onLogoutPress: () => void
}

export interface ProfileActionsState {}

export default class ProfileActions extends Component<ProfileActionsProps, ProfileActionsState> {
  render () {
    return (
      <View>
        <Button onPress={this.openRatingView} title={'Add Rating'}/>
        <Button onPress={this.openAddLocationView} title={'Add Location'}/>
        <Button onPress={this.props.onLogoutPress} title="Sign out"/>
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
