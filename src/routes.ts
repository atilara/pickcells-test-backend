import express from 'express';

const routes = express.Router();

routes.get('/', (request: express.Request, response: express.Response) => {
  return response.json({ msg: 'Rota /' });
});

// para quando se usa controllers:
// index: listagem, show: exibir único registro, create, update, delete

export default routes;
