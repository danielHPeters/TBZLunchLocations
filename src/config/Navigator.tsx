import { TabNavigator } from 'react-navigation'
import HomeScreen from '../components/HomeScreen'
import ProfileScreen from '../components/ProfileScreen'
import MapScreen from '../components/MapScreen'

/**
 * Screen navigator object.
 *
 * @author Daniel Peters
 * @version 1.0
 */
export const Navigator = TabNavigator({
  Home: { screen: HomeScreen },
  Profile: { screen: ProfileScreen },
  Map: { screen: MapScreen }
})
