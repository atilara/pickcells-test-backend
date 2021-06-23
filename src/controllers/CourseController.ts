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
        'class.name',
        'course_classes.workload',
        'course_classes.mandatory',
      ]);

    // SOMATÓRIA DA CARGA HORÁRIA OBRIGATÓRIA UTILIZANDO SUM DO SQL
    // const summedMandatoryWordload = await knex('class')
    //   .join('course_classes', 'class.id', '=', 'course_classes.class_id')
    //   .where('course_classes.course_id', id)
    //   .andWhere('course_classes.mandatory', 1)
    //   .sum('course_classes.workload')
    //   .first();

    var mandatoryWorkload = 0;
    classes.map((collegeClass) => {
      if (collegeClass.mandatory) mandatoryWorkload += collegeClass.workload;
    });

    return response.json({
      course: { name: course.name, type: course.type },
      classes,
      mandatoryWorkload,
    });
  }
}

export default CourseController;
