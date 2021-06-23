import { Request, Response } from 'express';
import knex from '../database/connection';

class ClassController {
  async index(request: Request, response: Response) {
    const classes = await knex('class').select('*');

    const serializedClasses = classes.map(({ id, name }) => {
      return {
        id,
        name,
      };
    });
    return response.json(serializedClasses);
  }
}

export default ClassController;
