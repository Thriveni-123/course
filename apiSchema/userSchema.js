const Joi = require('joi');

module.exports.signup= Joi.object().keys({
    name:Joi.string().required(),
    email:Joi.string().required(),
    password:Joi.string().email().required()
});

module.exports.signin= Joi.object().keys({
    email:Joi.string().email().required(),
    password:Joi.string().required()
});