import React from 'react'
import { FlatList, ActivityIndicator, Text, View } from 'react-native'
import Location from './../model/Location'

export interface LocationListProps {

}

export interface LocationListState {
  isLoading: boolean
  dataSource: Location[]
}

export default class LocationListScreen extends React.Component<LocationListProps, LocationListState> {
  static navigationOptions = {
    title: 'Locations'
  }

  constructor (props: LocationListProps) {
    super(props)
    this.state = {
      isLoading: true,
      dataSource: []
    }
  }

  componentDidMount () {
    return fetch('http://localhost:3000/api/location', {
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
        <View style={{ flex: 1, padding: 20 }}>
          <ActivityIndicator/>
        </View>
      )
    }

    return (
      <View style={{ flex: 1, paddingTop: 20 }}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({ item }) => <Text>{item.name}, {item.lat + ':' + item.lng}</Text>}
        />
      </View>
    )
  }
}