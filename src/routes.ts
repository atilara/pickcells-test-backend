import express from 'express';

import CourseController from './controllers/CourseController';
import ClassController from './controllers/ClassController';

const routes = express.Router();

const courseController = new CourseController();
const classController = new ClassController();

routes.get('/courses', courseController.index);

routes.get('/classes', classController.index);

// para quando se usa controllers:
// index: listagem, show: exibir único registro, create, update, delete

export default routes;
