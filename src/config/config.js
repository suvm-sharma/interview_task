const dotenv = require("dotenv");
const { Sequelize } = require("sequelize");
dotenv.config = {
    path: "./.env",
};

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: "localhost",
        dialect: "postgres",
    }
);

module.exports = sequelize;
