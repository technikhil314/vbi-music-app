
let express = require('express');
let router = express.Router();
const { create: createUser } = require("../models/users");
/* GET users listing. */
router.get('/', function (req, res, next) {
  createUser();
  res.send('respond with a resource');
});

module.exports = router;
