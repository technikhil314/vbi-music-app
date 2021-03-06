
let express = require('express');
let router = express.Router();
const { getAllSongs } = require("../models/songs");

router.get('/all', async function (req, res) {
  const allSongs = await getAllSongs();
  res.send(JSON.stringify(allSongs, null, 2));
});

module.exports = router;
