module.exports = {
  production: {
    client: 'sqlite3',
    connection: {
      filename: './db/db.sqlite3'
    },
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds'
    },
    useNullAsDefault: true
  }
};
