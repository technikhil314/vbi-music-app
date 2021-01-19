const pg = require("pg");
const { Sequelize } = require("sequelize");

let url = process.env.DATABASE_URL.split(/(:\/\/|\/|:|@)/);
module.exports = new Sequelize(url[10], url[2], url[4], {
    dialect: "postgres",
    dialectModule: pg,
    host: url[6],
    dialectOptions: {
        ssl: { rejectUnauthorized: false },
    },
});
