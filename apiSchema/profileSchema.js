const Joi = require('joi');

module.exports.profileAdd= Joi.object().keys({
    name:Joi.string().required(),
    email:Joi.string().email().required(),
    phonenumber:Joi.number().required(),
    aboutme:Joi.string().required(),
    city:Joi.string().required(),
    country:Joi.string().required(),
    company:Joi.string().required(),
    school:Joi.string().required(),
    hometown:Joi.string().required(),
    language:Joi.string().required(),
    gender:Joi.string().required()
});

module.exports.ProfileUpdate= Joi.object().keys({
    name:Joi.string().required(),
    email:Joi.string().email().required(),
    phonenumber:Joi.number().required(),
    aboutme:Joi.string().required(),
    city:Joi.string().required(),
    country:Joi.string().required(),
    company:Joi.string().required(),
    school:Joi.string().required(),
    hometown:Joi.string().required(),
    language:Joi.string().required(),
    gender:Joi.string().required()
});
