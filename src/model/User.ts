import Entity from './Entity'

/**
 * User entity class.
 *
 * @author Daniel Peters
 * @version 1.0
 */
export default class User extends Entity {
  name: string
  lastName: string
  firstName: string
  email: string
  password: string

  /**
   * Constructor.
   *
   * @param id User id
   * @param username User nickname
   * @param lastName User last name
   * @param firstName User first name
   * @param email User email
   * @param password User password
   */
  constructor (id: string, username: string, lastName: string, firstName: string, email: string, password: string) {
    super(id)
    this.name = username
    this.lastName = lastName
    this.firstName = firstName
    this.email = email
    this.password = password
  }
}
