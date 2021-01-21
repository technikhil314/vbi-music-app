let express = require('express');
let router = express.Router();
const { getAllArtists } = require("../models/artists");

router.get('/all', async function (req, res) {
    const all = await getAllArtists();
    res.send(JSON.stringify(all, null, 2));
});

module.exports = router;
