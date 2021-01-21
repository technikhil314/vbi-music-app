const { DataTypes } = require("sequelize");
const db = require("../startup/db");

const model = db.define(
    "album",
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
        }
    },
    {
        tableName: "Album",
        timestamps: true,
        createdAt: true,
        updatedAt: true,
        indexes: [{ unique: true, fields: ["id"] }],
    }
);
model.sync({ alter: true });

async function create(data) {
    return model.create(data);
}

async function getAll() {
    const { song } = require("./songs");
    return await model.findAll({
        include: song
    });
}


module.exports = { getAllAlbums: getAll, createAlbum: create, album: model };
