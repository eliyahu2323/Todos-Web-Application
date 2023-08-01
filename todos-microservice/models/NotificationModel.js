const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
  content: {
    type: String,
    required: [true, 'Please confirm content of notification'],
  },
  deadline: Date,
});

const Notification = mongoose.model('Notification', notificationSchema);

module.exports = Notification;
