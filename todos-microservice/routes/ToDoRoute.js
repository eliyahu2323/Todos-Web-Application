const express = require('express');

const {
  getAllNotifications,
  deleteNotification,
  updateNotification,
  getNotification,
  createNotification,
} = require('../controllers/ToDoController');

const {
  createValidations,
  updateValidations,
} = require('./../validations/business');
const validate = require('../utils/ValidateResource');

const router = express.Router();

router.post(
  '/createNotification',
  createValidations,
  validate(),
  createNotification
);
router.get('/getAllNotifications', getAllNotifications);
router.get('/getNotification', getNotification);
router.delete('/deleteNotification/:id', deleteNotification);
router.patch(
  '/updateNotification/:id',
  updateValidations,
  validate(),
  updateNotification
);

module.exports = router;
