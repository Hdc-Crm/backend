import Lead from "../models/Lead.js";

const createLead = async (req, res) => {
  const lead = await Lead.create(req.body);
  res.status(201).json(lead);
  
};

const getLeads = async (req, res) => {
  const leads = await Lead.find();
  res.status(200).json(leads);
};

const updateLead = async (req, res) => {
  const { id } = req.params;
  const lead = await Lead.findByIdAndUpdate(id, req.body, {
    new: true,
    runValidators: true,
  });
  res.status(200).json(lead);
};

const deleteLead = async (req, res) => {
  const { id } = req.params;
  const lead = await Lead.findByIdAndDelete(id);
  res.status(200).json(lead);
};

export { createLead, getLeads, updateLead, deleteLead };