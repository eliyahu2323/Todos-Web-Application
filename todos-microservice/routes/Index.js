const express = require('express');
const app = express();

const todoRouter = require('./ToDoRoute');

app.use('/api/v1/todo', todoRouter);

module.exports = app;
