# PickCells: Back-end do Teste

## Sobre

Essa API foi desenvolvida com o intuito de cumprir o teste solicitado pela PickCells durante processo seletivo.

## Tecnologias Utilizadas

- NodeJS: para execução de códigos JS fora do navegador
- TypeScript: para utilização de tipagem
- Express: framework para criação de APIs utilizando NodeJS
- MySQL: para armazenamento das informações solicitadas (cursos e classes)
- Knex: para gerar o banco e fazer manipulação do mesmo, criando as queries de forma desacoplada do banco de dados em si 

## Rotas

```js
// Retorna uma lista de todas as classes cadastradas
routes.get('/classes');

// Retorna uma lista de todos os cursos, cada um com sua respectiva carga horária e ordenados dos que possuem maior carga, para os que possem menor
routes.get('/courses');

// Retorna um curso em específico, e todas as classes que o compõe
routes.get('/courses/:id');
```

## Resultado

![Projeto Rodando](./.github/project.gif)

## Como Utilizar?

```bash
# Para instalação das dependências do projeto
$ yarn install
# Para criar o bando, é nessário ter uma database MySQL na sua máquina chamada pickcells_test, pois é com ela que o knex faz sua conexão no arquivo connection. Após isso você deve rodar o seguinte comando, para criação das tabelas e seus relacionamentos:
$ yarn knex:migrate
# Para adicionar os dados que devem ser inseridos ao banco de forma pré-estabelecida, rode:
$ yarn knex:seed
# Para rodar a base de dados, execute:
$ yarn dev
```