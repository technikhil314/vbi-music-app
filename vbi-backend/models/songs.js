const { DataTypes } = require("sequelize");
const db = require("../startup/db");
const model = db.define(
    "song",
    {
        id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        image: {
            type: DataTypes.STRING,
            allowNull: true
        },
        genre: {
            type: DataTypes.TEXT,
            allowNull: true
        }
    },
    {
        tableName: "Song",
        timestamps: true,
        createdAt: true,
        updatedAt: true,
        indexes: [{ unique: true, fields: ["id"] }],
    }
);
model.sync({ alter: true });

async function create() {
    return model.create();
}

async function getAll() {
    const {
        songAlbum,
        songArtist,
        songPlaylist,
        playlistUser
    } = require("./relations");
    return await model.findAll({
        include: songAlbum
    });
}

module.exports = { getAllSongs: getAll, createSong: create, song: model };
