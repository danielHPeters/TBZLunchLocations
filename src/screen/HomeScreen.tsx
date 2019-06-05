import React, { Component } from 'react'
import { LocationListProps } from './LocationListScreen'
import Login from '../component/Login'
import Profile from '../component/Profile'
import User from '../model/User'
import { StyleSheet, View } from 'react-native'

export interface HomeScreenProps extends LocationListProps {}

export interface HomeScreenState {
  user?: User
  loggedIn: boolean
}

/**
 * Home screen component.
 *
 * @author Daniel Peters
 * @version 1.0
 */
export default class HomeScreen extends Component<HomeScreenProps, HomeScreenState> {
  static readonly DEFAULT_STATE = {
    user: undefined,
    loggedIn: false
  }

  static navigationOptions = {
    title: 'Home'
  }

  /**
   * Constructor.
   *
   * @param props Props object
   */
  constructor (props: HomeScreenProps) {
    super(props)
    this.state = HomeScreen.DEFAULT_STATE
    this.login = this.login.bind(this)
    this.logout = this.logout.bind(this)
  }

  render (): JSX.Element {
    return (
      <View style={styles.container}>
        {this.renderComponents()}
      </View>
    )
  }

  private renderComponents (): JSX.Element {
    return (this.state.loggedIn && this.state.user) ? (
      <Profile
        navigation={this.props.navigation}
        user={this.state.user}
        onLogoutPress={this.logout}
      />
    ) : (
      <Login
        navigation={this.props.navigation}
        onLoginPress={this.login}
      />
    )
  }

  /**
   * Login method.
   *
   * @param user Login user
   */
  private login (user: User): void {
    this.setState({ user: user, loggedIn: true })
  }

  /**
   * Logout method.
   */
  private logout (): void {
    this.setState(HomeScreen.DEFAULT_STATE)
  }
}

/**
 * Style definition of this component.
 * Always put styles in StyleSheet object.
 */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  }
})
