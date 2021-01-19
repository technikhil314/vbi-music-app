
let express = require('express');
let router = express.Router();
const { createDemo } = require("../models/users");
/* GET users listing. */
router.get('/', function (req, res, next) {
  createDemo();
  res.send('respond with a resource');
});

module.exports = router;
