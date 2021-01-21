let indexRouter = require('../routes/index');
let songsRouter = require('../routes/songs');
let playlistsRouter = require('../routes/playlists');
let artistsRouter = require('../routes/artists');
let albumsRouter = require('../routes/albums');
module.exports = function (app) {
    app.use('/api', indexRouter);
    app.use('/api/songs', songsRouter)
    app.use('/api/playlists', playlistsRouter)
    app.use('/api/artists', artistsRouter)
    app.use('/api/albums', albumsRouter)
};
