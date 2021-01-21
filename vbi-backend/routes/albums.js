let express = require('express');
let router = express.Router();
const { getAllAlbums } = require("../models/albums");

router.get('/all', async function (req, res) {
    const all = await getAllAlbums();
    res.send(JSON.stringify(all, null, 2));
});

module.exports = router;
