import React, { Component } from 'react'
import { StyleSheet, View, FlatList, ActivityIndicator, ScrollView } from 'react-native'
import Rating from '../model/Rating'
import AppConfig from '../config/AppConfig'
import { NavigationScreenProps } from 'react-navigation'
import { ActionButton, ListItem } from 'react-native-material-ui'

export interface RatingsListProps extends NavigationScreenProps {}

export interface RatingsListState {
  isLoading: boolean
  dataSource: Rating[]
}

/**
 * Screen component which lists all ratings of a location.
 *
 * @author Daniel Peters
 * @version 1.0
 */
export default class RatingsListScreen extends Component<RatingsListProps, RatingsListState> {
  static navigationOptions = (navigation: NavigationScreenProps) => {
    return {
      title: navigation.navigation.getParam('title')
    }
  }

  /**
   * Constructor.
   *
   * @param props Props object
   */
  constructor (props: RatingsListProps) {
    super(props)
    this.state = {
      isLoading: true,
      dataSource: []
    }
    this.openAddRatingView = this.openAddRatingView.bind(this)
    this.onPressItem = this.onPressItem.bind(this)
  }

  /**
   * Load the ratings of given location when the component mounted.
   *
   * @returns
   */
  componentDidMount (): Promise<void> {
    const type = this.props.navigation.getParam('type')
    const filterId = this.props.navigation.getParam('filterId')
    const uri = `http://${AppConfig.API_HOST}/api/rating/${type}/${filterId}`
    const method = 'GET'

    return fetch(uri, { method: method })
      .then((response) => response.json())
      .then((responseJson) => this.setState({ isLoading: false, dataSource: responseJson }))
      .catch((error) => console.error(error))
  }

  /**
   * Component render method.
   *
   * @returns
   */
  render (): JSX.Element {
    return this.state.isLoading
      ? <View style={styles.container}><ActivityIndicator/></View>
      : (
        <View style={styles.container}>
          <ScrollView>
            <FlatList data={this.state.dataSource} renderItem={({ item }) => this.renderItem(item)}/>
          </ScrollView>
          <ActionButton onPress={this.openAddRatingView}/>
        </View>
      )
  }

  private renderItem = (rating: Rating) => (
    <ListItem
      divider={true}
      centerElement={{ primaryText: `${rating.text} ${this.renderStars(rating.stars)}` }}
      onPress={this.onPressItem}
    />
  )

  private renderStars (stars: number): string {
    let starsString = ''

    for (let i = 0; i < stars; i++) {
      starsString += '*'
    }

    return starsString
  }

  private openAddRatingView (): void {
    const locationId = this.props.navigation.getParam('type') === 'location'
      ? this.props.navigation.getParam('filterId')
      : ''

    this.props.navigation.navigate('AddRating', {
      title: 'Add Rating',
      userId: this.props.navigation.getParam('userId'),
      locationId: locationId,
      filterId: this.props.navigation.getParam('filterId'),
      type: this.props.navigation.getParam('type')
    })
  }

  private onPressItem (): void {
    // Do nothing
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
