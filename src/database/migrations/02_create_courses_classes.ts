import { Knex } from 'knex';

export async function up(knex: Knex) {
  // Cria a tabela
  return knex.schema.createTable('course_classes', (table) => {
    table.increments('id').primary();
    table
      .integer('course_id')
      .unsigned()
      .index()
      .references('id')
      .inTable('course');
    table
      .integer('class_id')
      .unsigned()
      .index()
      .references('id')
      .inTable('class');
    table.integer('workload').notNullable();
    table.boolean('mandatory').notNullable();
  });
}

export async function down(knex: Knex) {
  // Voltar atrás
  return knex.schema.dropTable('course_classes');
}
