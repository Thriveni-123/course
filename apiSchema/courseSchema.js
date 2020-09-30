const Joi = require('joi');

module.exports.coursecreate= Joi.object().keys({
    coursename:Joi.string().required(),
    coursedepartment:Joi.string().required(),
    coursedescription:Joi.string().required(),
    courseroom:Joi.number().required(),
    waitinglistcapacity:Joi.number().required(),
    courseteam:Joi.string().required()
});
