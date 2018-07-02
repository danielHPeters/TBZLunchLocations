import React, { Component } from 'react'
import { LocationListProps } from './LocationListScreen'
import Login from '../component/Login'
import Profile from '../component/Profile'
import User from '../model/User'
import { StyleSheet, View } from 'react-native'

export interface HomeScreenProps extends LocationListProps {
}

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
  static navigationOptions = {
    title: 'Home'
  }

  constructor (props: HomeScreenProps) {
    super(props)
    this.state = {
      user: undefined,
      loggedIn: false
    }
  }

  render () {
    return <View style={styles.container}>
      {this.renderComponents()}
    </View>
  }

  renderComponents () {
    return (this.state.loggedIn && this.state.user) ?
      <Profile
        navigation={this.props.navigation}
        user={this.state.user}
        onLogoutPress={() => this.setState({
          user: undefined,
          loggedIn: false
        })}
      /> :
      <Login onLoginPress={(user: User) => this.setState({ user: user, loggedIn: true })}/>
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
