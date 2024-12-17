const express = require('express');
const router = express.Router();
const { createMenu, getMenus } = require('../controllers/menuController');

router.post('/', createMenu);
router.get('/', getMenus);

module.exports = router;
