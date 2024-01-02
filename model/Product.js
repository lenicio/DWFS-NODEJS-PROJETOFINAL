const knex = require('../db/database');

class Product {
  static getAll() {
    return knex('products');
  }

  static getById(id) {
    return knex('products').where('id', id);
  }

  static create(product) {
    return knex('products').insert(product);
  }

  static update(id, product) {
    return knex('products').where('id', id).update(product);
  }

  static delete(id) {
    return knex('products').where('id', id).del();
  }

}

module.exports = Product;