let Joi = require('joi');

module.exports = {
    '/signup' : Joi.object({
        name: Joi.string().required(),
        email: Joi.string().email().required(),
        password: Joi.string().required(),
        phone: Joi.string().optional()
    }),
    '/login' : Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().required()
    }),
}