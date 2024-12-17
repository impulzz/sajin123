const Item = require('../models/Item');

exports.createItem = async (req, res) => {
  try {
    const { menuId, name, description, price } = req.body;
    const item = await Item.create({ menuId, name, description, price });
    res.status(201).json(item);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getItemsByMenu = async (req, res) => {
  try {
    const items = await Item.find({ menuId: req.params.menuId });
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
