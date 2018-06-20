import { StackNavigator, TabNavigator } from 'react-navigation'
import HomeScreen from '../components/HomeScreen'
import ProfileScreen from '../components/ProfileScreen'
import MapScreen from '../components/MapScreen'
import LoginScreen from '../components/LoginScreen'
import LocationListScreen from '../components/LocationListScreen'

/**
 * Screen navigator object.
 *
 * @author Daniel Peters
 * @version 1.0
 */
export const Navigator = StackNavigator({
    Login: { screen: LoginScreen },
    Home: { screen: HomeScreen },
    Profile: { screen: ProfileScreen },
    Map: { screen: MapScreen },
    LocationList: { screen: LocationListScreen }
  },
  {
    initialRouteName: 'LocationList',
  })
