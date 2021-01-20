const { DataTypes } = require("sequelize");
const db = require("../startup/db");

const model = db.define(
    "artist",
    {
        id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: true
        },
        image: {
            type: DataTypes.STRING,
            allowNull: true
        }
    },
    {
        tableName: "Artist",
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
    return await model.findAll();
}

module.exports = { getAllArtists: getAll, createArtist: create, artist: model };
