import { Request, Response } from 'express';
import knex from '../database/connection';

class CourseController {
  async index(request: Request, response: Response) {
    const courses = await knex('course').select('*');

    const serializedCourses = courses.map(({ id, name, type }) => {
      return {
        id,
        name,
        type,
      };
    });
    return response.json(serializedCourses);
  }
}

export default CourseController;
