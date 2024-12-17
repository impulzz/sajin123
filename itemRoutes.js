const express = require('express');
const router = express.Router();
const { createItem, getItemsByMenu } = require('../controllers/itemController');

router.post('/', createItem);
router.get('/:menuId', getItemsByMenu);

module.exports = router;
