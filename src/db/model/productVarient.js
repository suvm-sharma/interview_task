const { DataTypes } = require("sequelize");
const sequelize = require("../../config/config.js");

const ProductVarient = sequelize.define("ProductVarient", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
    },
    price: {
        type: DataTypes.FLOAT,
    },
});

module.exports = ProductVarient;
