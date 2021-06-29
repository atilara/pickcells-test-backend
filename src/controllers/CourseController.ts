import { Request, Response } from 'express';
import knex from '../database/connection';

class CourseController {
  async index(request: Request, response: Response) {
    const coursesIds = await knex('course').pluck('course.id');

    const course_classes = await knex('course_classes')
      .join('course', 'course.id', '=', 'course_classes.course_id')
      .whereIn('course_classes.course_id', coursesIds)
      .where('course_classes.mandatory', '=', '1')
      .select([
        { id: 'course_classes.course_id' },
        { name: 'course.name' },
        'course.type',
      ])
      .groupBy('course_classes.course_id')
      .sum({ mandatory_workload: 'course_classes.workload' })
      .orderBy([
        { column: 'mandatory_workload', order: 'desc' },
        { column: 'course.type', order: 'desc' },
      ]);

    return response.json({
      course_classes,
    });
  }

  async show(request: Request, response: Response) {
    const id = request.params.id;

    const course = await knex('course').where('id', id).first();

    if (!course) return response.status(400).json({ msg: 'course not found' });

    /**
     *  SELECT name FROM items AND workload, mandatory FROM corse_classes
     *  JOIN course_classes on class.id = course_classes.class_id
     *  WHERE course_classes.course_id = {id passado na requisição};
     */
    const classes = await knex('class')
      .join('course_classes', 'class.id', '=', 'course_classes.class_id')
      .where('course_classes.course_id', id)
      .select([
        'class.id',
        'class.name',
        'course_classes.workload',
        'course_classes.mandatory',
      ]);

    const mandatory_workload = await knex('class')
      .join('course_classes', 'class.id', '=', 'course_classes.class_id')
      .where('course_classes.course_id', id)
      .andWhere('course_classes.mandatory', '=', '1')
      .sum({ sum: 'course_classes.workload' })
      .first();

    return response.json({
      course: { name: course.name, type: course.type },
      classes,
      mandatory_workload,
    });
  }
}

export default CourseController;
