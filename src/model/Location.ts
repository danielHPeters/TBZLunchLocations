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
   * @param lat Location latitude
   * @param lng Location longitude
   * @param name Location name
   */
  constructor (id: string, lat: number, lng: number, name: string) {
    super(id)
    this.lat = lat
    this.lng = lng
    this.name = name
  }
}
