import { StackNavigator, TabNavigator } from 'react-navigation'
import HomeScreen from '../screen/HomeScreen'
import ProfileScreen from '../screen/ProfileScreen'
import MapScreen from '../screen/MapScreen'
import LoginScreen from '../screen/LoginScreen'
import LocationListScreen from '../screen/LocationListScreen'

/**
 * Screen navigator object.
 *
 * @author Daniel Peters
 * @version 1.0
 */
export const Navigator = StackNavigator(
  {
    Login: { screen: LoginScreen },
    Home: { screen: HomeScreen },
    Profile: { screen: ProfileScreen },
    Map: { screen: MapScreen },
    LocationList: { screen: LocationListScreen }
  },
  {
    initialRouteName: 'LocationList',
  }
)
