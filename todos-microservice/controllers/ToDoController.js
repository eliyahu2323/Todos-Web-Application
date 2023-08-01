const {
  findNotificationAndDelete,
  findNotificationAndUpdate,
  getAllNotifications,
  getNotification,
  createNotification,
} = require('../services/NotificationService');

const AppError = require('../utils/AppError');

const catchAsync = require('../utils/AsyncMiddleware');

exports.createNotification = catchAsync(async (req, res, next) => {
  const { deadline, content } = req.body;

  const newNotification = await createNotification(content);
  newNotification.deadline = new Date(deadline);
  await newNotification.save();

  res.status(200).json({
    status: 'success',
    newNotification,
  });
});

exports.getNotification = catchAsync(async (req, res, next) => {
  const query = await getNotification({ _id: req.body.id });
  if (!query) {
    return next(new AppError('No notification found with that ID', 404));
  }

  res.status(200).json({
    status: 'success',
    data: {
      data: query,
    },
  });
});

exports.getAllNotifications = catchAsync(async (req, res, next) => {
  const page = req.query.page || 0;
  const docPerPage = 20;

  let documents = [];

  documents = await getAllNotifications()
    .sort()
    .skip(page * docPerPage)
    .limit(docPerPage);

  res.status(200).json({
    status: 'success',
    results: documents.length,
    data: {
      data: documents,
    },
  });
});

exports.updateNotification = catchAsync(async (req, res, next) => {
  const { deadline } = req.body;

  const Notification = await findNotificationAndUpdate(req.params.id, req.body);

  if (!Notification) {
    return next(new AppError('No notification found with that ID', 404));
  }

  if (deadline) {
    Notification.deadline = new Date(deadline);
    await Notification.save();
  }

  res.status(200).json({
    status: 'success',
    data: Notification,
  });
});

exports.deleteNotification = catchAsync(async (req, res, next) => {
  const notification = await findNotificationAndDelete(req.params.id);

  if (!notification) {
    return next(new AppError('No notification found with that ID', 404));
  }

  res.status(204).json({
    status: 'success',
    data: null,
  });
});
