import { StackNavigator } from 'react-navigation'
import HomeScreen from '../screen/HomeScreen'
import MapScreen from '../screen/MapScreen'
import LocationListScreen from '../screen/LocationListScreen'
import RatingsListScreen from '../screen/RatingsListScreen'
import LocationDetailsScreen from '../screen/LocationDetailsScreen'
import AddLocationScreen from '../screen/AddLocationScreen'
import AddRatingScreen from '../screen/AddRatingScreen'
import RegisterUserScreen from '../screen/RegisterUserScreen'
import ChangePasswordScreen from '../screen/ChangePasswordScreen'

/**
 * Screen navigator object.
 *
 * @author Daniel Peters
 * @version 1.0
 */
export const Navigator = StackNavigator(
  {
    Home: { screen: HomeScreen },
    Register: { screen: RegisterUserScreen },
    Map: { screen: MapScreen },
    LocationDetails: { screen: LocationDetailsScreen },
    AddLocation: { screen: AddLocationScreen },
    LocationList: { screen: LocationListScreen },
    RatingList: { screen: RatingsListScreen },
    AddRating: { screen: AddRatingScreen },
    ChangePassword: { screen: ChangePasswordScreen }
  },
  {
    initialRouteName: 'Home',
  }
)
