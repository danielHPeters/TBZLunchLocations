/**
 * Entity base class.
 *
 * @author Daniel Peters
 * @version 1.0
 */
export default class Entity {
  id: string

  /**
   * Constructor. Initializes all attributes.
   *
   * @param did Entity id
   */
  constructor (id: string) {
    this.id = id
  }
}
