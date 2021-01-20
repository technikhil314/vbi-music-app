const { DataTypes } = require("sequelize");
const db = require("../startup/db");

const model = db.define(
    "user",
    {
        id: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        image: {
            type: DataTypes.STRING,
            allowNull: true
        }
    },
    {
        tableName: "User",
        timestamps: true,
        createdAt: true,
        updatedAt: true,
        indexes: [{ unique: true, fields: ["id"] }],
    }
);
model.sync({ alter: true });

async function create({ userId, firstName, lastName, image, email }) {
    return await model.create({
        id: userId,
        firstName,
        lastName,
        email,
        image
    });
}
async function getById(userId) {
    return await model.findByPk(userId)
}

module.exports = { getUserById: getById, createUser: create, user: model };
