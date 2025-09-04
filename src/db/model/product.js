// Product
// - id
// - name
// - handle
// - categoryId → Category
// - brandId → Brand
// - reviewID → Review
// - variants: [ProductVariant]

const { DataTypes } = require("sequelize");
const sequelize = require("../../config/config.js");

const Product = sequelize.define("Product", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
    },
    handle: {
        type: DataTypes.STRING,
    },
});

module.exports = Product;
