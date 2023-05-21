const Joi = require("joi");

const registerSchema = Joi.object({
  name: Joi.string(),
  email: Joi.string().min(5).max(100),
  password: Joi.string().min(8).max(50),
});

const loginSchema = Joi.object({
  name: Joi.string(),
  email: Joi.string().min(5).max(100),
  password: Joi.string().min(8).max(50),
});

module.exports = {
  registerSchema,
  loginSchema,
};
