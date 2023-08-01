const Notification = require('../models/NotificationModel');

exports.getNotification = (query) => {
  return Notification.find(query);
};

exports.getAllNotifications = () => {
  return Notification.find();
};

exports.findNotificationAndDelete = (query) => {
  return Notification.findByIdAndDelete(query, { active: false });
};

exports.findNotificationAndUpdate = (body, query) => {
  return Notification.findByIdAndUpdate(body, query);
};

exports.createNotification = async (query) => {
  return Notification.create({ content: query });
};
