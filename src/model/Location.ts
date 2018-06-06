import Entity from './Entity'

/**
 * Location class.
 *
 * @author Daniel Peters
 * @version 1.0
 */
export default class Location extends Entity {
  x: string
  y: string
  name: string

  /**
   * Construtor.
   *
   * @param id Location id
   * @param x Location x coordinate
   * @param y Location y coordinate
   * @param name Location name
   */
  constructor (id: string, x: string, y: string, name: string) {
    super(id)
    this.x = x
    this.y = y
    this.name = name
  }
}
