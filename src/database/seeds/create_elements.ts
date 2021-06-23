import { Knex } from 'knex';

export async function seed(knex: Knex) {
  await knex('course').insert([
    { name: 'Ciência da Computação', type: 0 },
    { name: 'Sistemas de Informação', type: 0 },
    { name: 'Engenharia de Software', type: 1 },
    { name: 'Inteligência Computacional', type: 1 },
    { name: 'Ciência da Computação', type: 2 },
    { name: 'Inteligência Artificial', type: 2 },
  ]);

  await knex('class').insert([
    { name: 'Algoritmos e Programação' },
    { name: 'Matemática Computacional' },
    { name: 'Estatística' },
    { name: 'Empreendedorismo e Inovação' },
    { name: 'Tópicos Avançados em Bancos de Dados' },
  ]);

  await knex('course_classes').insert([
    // CIÊNCIA DA COMPUTAÇÃO - Graduação
    { course_id: 1, class_id: 1, workload: 6, mandatory: 1 },
    { course_id: 1, class_id: 2, workload: 4, mandatory: 1 },
    { course_id: 1, class_id: 3, workload: 2, mandatory: 0 },
    { course_id: 1, class_id: 5, workload: 6, mandatory: 1 },
    // SISTEMAS DE INFORMAÇÃO - Graduação
    { course_id: 2, class_id: 1, workload: 4, mandatory: 0 },
    { course_id: 2, class_id: 3, workload: 4, mandatory: 1 },
    { course_id: 2, class_id: 4, workload: 4, mandatory: 1 },
    { course_id: 2, class_id: 5, workload: 6, mandatory: 1 },
    // ENGENHARIA DE SOFTWARE - Mestrado
    { course_id: 3, class_id: 1, workload: 4, mandatory: 1 },
    { course_id: 3, class_id: 2, workload: 6, mandatory: 0 },
    { course_id: 3, class_id: 3, workload: 6, mandatory: 1 },
    { course_id: 3, class_id: 5, workload: 4, mandatory: 1 },
    // INTELIGÊNCIA COMPUTACIONAL - Mestrado
    { course_id: 4, class_id: 1, workload: 4, mandatory: 0 },
    { course_id: 4, class_id: 2, workload: 4, mandatory: 0 },
    { course_id: 4, class_id: 3, workload: 6, mandatory: 1 },
    { course_id: 4, class_id: 4, workload: 6, mandatory: 0 },
    // CIÊNCIA DA COMPUTAÇÃO - Doutorado
    { course_id: 5, class_id: 1, workload: 6, mandatory: 1 },
    { course_id: 5, class_id: 2, workload: 6, mandatory: 1 },
    { course_id: 5, class_id: 3, workload: 4, mandatory: 0 },
    { course_id: 5, class_id: 5, workload: 4, mandatory: 4 },
    // INTELIGÊNCIA ARTIFICAL - Doutorado
    { course_id: 6, class_id: 1, workload: 6, mandatory: 1 },
    { course_id: 6, class_id: 2, workload: 4, mandatory: 0 },
    { course_id: 6, class_id: 3, workload: 6, mandatory: 0 },
    { course_id: 6, class_id: 4, workload: 2, mandatory: 1 },
    { course_id: 6, class_id: 5, workload: 2, mandatory: 0 },
  ]);
}
