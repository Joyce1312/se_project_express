const { Joi, celebrate } = require("celebrate");
const validator = require("validator");

const validateURL = (value, helpers) => {
  if (validator.isURL(value)) {
    return value;
  }
  return helpers.error("string.uri");
};

const validateCardBody = celebrate({
  body: Joi.object()
    .keys({
      name: Joi.string().min(2).max(30).required().messages({
        "string.min": 'The minimum length of the "name" field is 2',
        "string.max": 'The maximum of the "name" field is 30',
        "string.empty": 'The "name" field must be filled in',
        "any.required": 'The "name" field is required',
      }),
      imageUrl: Joi.string().custom(validateURL).required().messages({
        "string.empty": 'The "imageUrl" field must be filled in',
        "string.uri": 'The "imageUrl" field must be a valid url',
        "any.required": 'The "imageUrl" field is required',
      }),
    })
    .unknown(true),
});

const validateUserBody = celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30).required().messages({
      "string.min": 'The minimum length of the "name" field is 2',
      "string.max": 'The maximum of the "name" field is 30',
      "string.empty": 'The "name" field must be filled in',
      "any.required": 'The "name" field is required',
    }),
    avatar: Joi.string().custom(validateURL).required().messages({
      "string.empty": 'The "avatar" field must be filled in',
      "string.uri": 'The "avatar" field must be a valid url',
      "any.required": 'The "avatar" field is required',
    }),
    email: Joi.string().email().required().messages({
      "string.empty": 'The "email" field must be filled in',
      "string.email": 'The "email" field must be a valid email',
      "any.required": 'The "email" field is required',
    }),
    password: Joi.string().required().messages({
      "string.empty": 'The "password" field must be filled in',
      "any.required": 'The "password" field is required',
    }),
  }),
});

const validateAuthentication = celebrate({
  body: Joi.object().keys({
    email: Joi.string().email().required().messages({
      "string.empty": 'The "email" field must be filled in',
      "string.email": 'The "email" field must be a valid email',
      "any.required": 'The "email" field is required',
    }),
    password: Joi.string().required().messages({
      "string.empty": 'The "password" field must be filled in',
      "any.required": 'The "password" field is required',
    }),
  }),
});

const validateId = celebrate({
  params: Joi.object().keys({
    itemId: Joi.string().hex().length(24).required().messages({
      "string.empty": 'The "id" field must be filled in',
      "string.length": 'The "id" must be exactly 24 characters long',
      "string.hex": 'The "id" must be a valid hexadecimal value',
      "any.required": 'The "id" field is required',
    }),
  }),
});

module.exports = {
  validateCardBody,
  validateUserBody,
  validateAuthentication,
  validateId,
};
