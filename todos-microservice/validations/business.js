const { check } = require('express-validator');

exports.createValidations = [
  check('content')
    .isString()
    .isLength({ min: 5 })
    .withMessage('Content must have more than 2 characters'),
  check('deadline')
    .notEmpty()
    .withMessage('Date cannot be empty')
    .isISO8601()
    .withMessage('Invalid date format YYYY-MM-DD HH:mm:ss'),
];

exports.updateValidations = [
  check('content')
    .optional()
    .isString()
    .isLength({ min: 5 })
    .withMessage('Content must have more than 2 characters'),
  check('deadline')
    .optional()
    .isISO8601()
    .withMessage('Invalid date format YYYY-MM-DD HH:mm:ss'),
];
