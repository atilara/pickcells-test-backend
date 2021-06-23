import knex from 'knex';

// path padroniza caminhos de pastas

const connection = knex({
  client: 'mysql2',
  connection: {
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'pickcells_test',
  },
  useNullAsDefault: true,
});

export default connection;
