const db = require("../startup/db");
const { playlist } = require("./playlists");
const { song } = require("./songs");
const { user } = require("./user");
const { album } = require("./albums");
const { artist } = require("./artists");

async function createRelations() {
    album.belongsToMany(song, { through: 'SongAlbum' });
    artist.belongsToMany(song, { through: 'SongArtist' });
    playlist.belongsToMany(song, { through: 'SongPlaylist' });
    song.belongsToMany(album, { through: 'SongAlbum' });
    song.belongsToMany(artist, { through: 'SongArtist' });
    song.belongsToMany(playlist, { through: 'SongPlaylist' });
    db.sync();

    playlist.belongsTo(user, { as: 'User' });
    playlist.sync({ alter: true });
}

createRelations();