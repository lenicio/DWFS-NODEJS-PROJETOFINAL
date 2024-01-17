const knex = require('../db/database');

class User {


  static getAll() {
    return knex('users');
  }

  static getById(id) {
    return knex('users').where('id', id);
  }

  static getByEmail(email) {
    return knex('users').where('email', email);
  }


  static create(user) {
    return knex('users').insert(user);
  }

  static update(id, user) {
    return knex('users').where('id', id).update(user);
  }

  static delete(id) {
    return knex('users').where('id', id).del();
  }
}

module.exports = User;