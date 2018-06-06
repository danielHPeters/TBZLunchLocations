import { TabNavigator } from 'react-navigation'
import HomeScreen from '../components/HomeScreen'
import ProfileScreen from '../components/ProfileScreen'
import MapScreen from '../components/MapScreen'

export const Navigator = TabNavigator({
  Home: {screen: HomeScreen},
  Profile: {screen: ProfileScreen},
  Map: {screen: MapScreen}
})