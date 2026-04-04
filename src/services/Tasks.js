import Task from "../models/Tasks.js";

const createTask = async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json(task);
};

const getTasks = async (req, res) => {
  const tasks = await Task.find();
  res.status(200).json(tasks);
};

const updateTask = async (req, res) => {
  const { id } = req.params;
  const task = await Task.findByIdAndUpdate(id, req.body, {
    new: true,
    runValidators: true,
  });
  res.status(200).json(task);
};

const deleteTask = async (req, res) => {
  const { id } = req.params;
  const task = await Task.findByIdAndDelete(id);
  res.status(200).json(task);
};

export { createTask, getTasks, updateTask, deleteTask };