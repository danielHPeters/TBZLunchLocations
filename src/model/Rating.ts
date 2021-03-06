import Entity from './Entity'

/**
 * User rating entity class.
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
   * @param text Rating name
   * @param stars Rating stars
   */
  constructor (id: string, userId: string, locationId: string, text: string, stars: number) {
    super(id)
    this.userId = userId
    this.text = text
    this.stars = stars
  }
}
