global.router = require('express').Router();
let router = global.router;
router = require('./food')
router = require('./category')

module.exports = router;
