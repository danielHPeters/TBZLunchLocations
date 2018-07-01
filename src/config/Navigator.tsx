import { StackNavigator } from 'react-navigation'
import HomeScreen from '../screen/HomeScreen'
import MapScreen from '../screen/MapScreen'
import LocationListScreen from '../screen/LocationListScreen'
import RatingsListScreen from '../screen/RatingsListScreen'

/**
 * Screen navigator object.
 *
 * @author Daniel Peters
 * @version 1.0
 */
export const Navigator = StackNavigator(
  {
    Home: { screen: HomeScreen },
    Map: { screen: MapScreen },
    LocationList: { screen: LocationListScreen },
    RatingList: { screen: RatingsListScreen }
  },
  {
    initialRouteName: 'Home',
  }
)
