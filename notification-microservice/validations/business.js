const { check } = require('express-validator');

exports.SignUpValidations = [
  check('name')
    .isString()
    .isLength({ min: 2 })
    .withMessage('Name must have more than 2 characters'),
  check('email').isEmail().withMessage('The email address is not valid'),
  check('password')
    .notEmpty()
    .isLength({ min: 8 })
    .withMessage('password must have more than 8 characters'),
  check('passwordConfirm')
    .notEmpty()
    .isLength({ min: 8 })
    .withMessage('passwordConfirm must have more than 8 characters'),
];

exports.SignValidations = [
  check('password')
    .not()
    .isEmpty()
    .isLength({ min: 8 })
    .withMessage('password must have more than 8 characters'),
  check('email')
    .isEmail()
    .normalizeEmail()
    .withMessage('The email address is not valid'),
];
