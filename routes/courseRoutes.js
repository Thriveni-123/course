const express = require('express');
const router = express.Router();
const joiSchemaValidation = require('../middleware/joiSchemaValidation');
const courseController = require('../controller/courseController');
const courseSchema = require('../apiSchema/courseSchema');

module.exports = router;

router.post('/create', joiSchemaValidation.validateBody(courseSchema.coursecreate),
courseController.courseCreate
);

router.post('/allcourse', 
courseController.Allcourse
);

router.post('/studentcreate', 
courseController.studentCourse
);


