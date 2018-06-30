import React from 'react'
import { FlatList, ActivityIndicator, Text, View, StyleSheet } from 'react-native'
import Location from '../model/Location'
import AppConfig from '../config/AppConfig'
import { NavigationScreenProps } from 'react-navigation'

export interface LocationListProps extends NavigationScreenProps {

}

export interface LocationListState {
  isLoading: boolean
  dataSource: Location[]
}

export default class LocationListScreen extends React.Component<LocationListProps, LocationListState> {
  static navigationOptions: () => ({
    title: 'Locations'
  })

  constructor (props: LocationListProps) {
    super(props)
    this.state = {
      isLoading: true,
      dataSource: []
    }
  }

  componentDidMount () {
    return fetch(`http://${AppConfig.API_HOST}/api/location`, {
      method: 'GET'
    }).then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          dataSource: responseJson,
        }, () => {

        })
      })
      .catch((error) => {
        console.error(error)
      })
  }

  render () {
    if (this.state.isLoading) {
      return (
        <View style={styles.container}>
          <ActivityIndicator/>
        </View>
      )
    }

    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.dataSource}
          renderItem={
            ({ item }) =>
              <Text onPress={() => this.showLocationRatings(item.id, item.name)} style={styles.listItem}>
                {item.name}
              </Text>
          }
        />
      </View>
    )
  }

  showLocationRatings (id: string, name: string): void {
    this.props.navigation.navigate('RatingList', { title:  `${name} Ratings` ,locationId: id, locationName: name })
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    padding: 10
  },
  listItem: {
    backgroundColor: 'gray',
    height: 45,
    fontSize: 30,
    padding: 5,
    borderRadius: 4,
    borderWidth: 1.5,
    borderColor: '#d6d7da'
  }
})