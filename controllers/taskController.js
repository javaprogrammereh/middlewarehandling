const Task = require("../model/Task");
const asyncWrapper = require("../middlewares/async");
const { createCustomError } = require("../errors/custom_errors");

const createTask = asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json({ task });
});

const getTask = asyncWrapper(async (req, res, next) => {
  const task = await Task.findOne({ _id: req.params.id });
  if (!task) {
    return next(createCustomError(`No task with id : ${taskID}`, 404));
  }
  res.status(200).json({ task });
});

const getAllTask = asyncWrapper(async (req, res, next) => {
  const tasks = await Task.find({});
  res.status(200).json({ tasks });
});

const deleteTask = asyncWrapper(async (req, res, next) => {
  const task = await Task.findOneAndDelete({ _id: req.params.id });
  if (!task) {
    return next(createCustomError(`No task with id : ${taskID}`, 404));
  }
  res.status(200).json({ task });
});

const updateTask = asyncWrapper(async (req, res, next) => {
  const { name, completed } = req.body;
  const task = await Task.findOne({ _id: req.params.id });
  if (!task) {
    return next(createCustomError(`No task with id : ${taskID}`, 404));
  }
  task.name = name;
  task.completed= completed;
   await task.save();
  res.status(200).json({ message:"successfuly..." });
});

module.exports = {
  createTask,
  getTask,
  getAllTask,
  deleteTask,
  updateTask,
};
