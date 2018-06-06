import Entity from './Entity'

/**
 * User rating class.
 *
 * @author Daniel Peters
 * @version 1.0
 */
export default class Rating extends Entity {
  userId: string
  text: string
  stars: number

  /**
   * Constructor.
   *
   * @param id Rating id
   * @param userId Owning user id
   * @param locationId Rated location
   * @param text Rating text
   * @param stars Rating stars
   */
  constructor (id: string, userId: string, locationId: string, text: string, stars: number) {
    super(id)
    this.userId = userId
    this.text = text
    this.stars = stars
  }
}