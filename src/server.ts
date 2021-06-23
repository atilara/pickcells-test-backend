import express from 'express';
import routes from './routes';

const app = express();

// Fará com que o express entenda o fomato JSON
app.use(express.json());
// Usará as rotas localizadas em routes.ts
app.use(routes);
// indica em que porta a aplicação será executada
app.listen(3333);