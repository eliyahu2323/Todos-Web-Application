const express = require('express');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const bodyParser = require('body-parser');

const globalErrorHandler = require('./controllers/ErrorController');
const app = express();
const { getAllNotifications } = require('./services/NotificationService');

const catchAsync = require('./utils/AsyncMiddleware');

const sendNotification = catchAsync(async (req, res) => {
  const currentTime = new Date();
  const oneHourFromNow = new Date(currentTime.getTime() + 60 * 60 * 1000);
  const todos = await getAllNotifications({
    deadline: { $gt: currentTime, $lt: oneHourFromNow },
  });
  todos.map(async (todo) => {
    await sendNotification(`Reminder: ${todo.content} is due soon!`);
  });
});

setInterval(sendNotification, 10 * 60 * 1000);

app.use(bodyParser.json());

app.use(mongoSanitize());

app.use(xss());

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

app.use(globalErrorHandler);

module.exports = app;
