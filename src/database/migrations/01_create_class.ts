import { Knex } from 'knex';

export async function up(knex: Knex) {
  // Cria a tabela
  return knex.schema.createTable('class', (table) => {
    table.increments('id').primary();
    table.string('name').notNullable();
  });
}

export async function down(knex: Knex) {
  // Voltar atrás
  return knex.schema.dropTable('class');
}
