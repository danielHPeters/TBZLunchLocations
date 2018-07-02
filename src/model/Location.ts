import Entity from './Entity'

/**
 * Location entity class.
 *
 * @author Daniel Peters
 * @version 1.0
 */
export default class Location extends Entity {
  lat: number
  lng: number
  name: string

  /**
   * Constructor.
   *
   * @param id Location id
   * @param x Location x coordinate
   * @param y Location y coordinate
   * @param name Location name
   */
  constructor (id: string, x: number, y: number, name: string) {
    super(id)
    this.lat = x
    this.lng = y
    this.name = name
  }
}
