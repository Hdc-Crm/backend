import Deal from "../models/Deals.js";

const createDeal = async (req, res) => {
  const deal = await Deal.create(req.body);
  res.status(201).json(deal);
};

const getDeals = async (req, res) => {
  const deals = await Deal.find();
  res.status(200).json(deals);
};

const updateDeal = async (req, res) => {
  const { id } = req.params;
  const deal = await Deal.findByIdAndUpdate(id, req.body, {
    new: true,
    runValidators: true,
  });
  res.status(200).json(deal);
};

const deleteDeal = async (req, res) => {
  const { id } = req.params;
  const deal = await Deal.findByIdAndDelete(id);
  res.status(200).json(deal);
};

export { createDeal, getDeals, updateDeal, deleteDeal };