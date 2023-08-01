const Notification = require('../models/NotificationModel');

exports.getNotification = (query) => {
  return Notification.find(query);
};

exports.getAllNotifications = (query) => {
  return Notification.find(query);
};
