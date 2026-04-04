import Activity from "../models/Activity.js";

const createActivity = async (req, res) => {
  const activity = await Activity.create(req.body);
  res.status(201).json(activity);
};

const getActivities = async (req, res) => {
  const activities = await Activity.find();
  res.status(200).json(activities);
};

const updateActivity = async (req, res) => {
  const { id } = req.params;
  const activity = await Activity.findByIdAndUpdate(id, req.body, {
    new: true,
    runValidators: true,
  });
  res.status(200).json(activity);
};

const deleteActivity = async (req, res) => {
  const { id } = req.params;
  const activity = await Activity.findByIdAndDelete(id);
  res.status(200).json(activity);
};

export { createActivity, getActivities, updateActivity, deleteActivity };