const Menu = require('../models/Menu');

exports.createMenu = async (req, res) => {
  try {
    const { name, description } = req.body;
    const menu = await Menu.create({ name, description });
    res.status(201).json(menu);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getMenus = async (req, res) => {
  try {
    const menus = await Menu.find();
    res.json(menus);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
