require("dotenv").config();
const express = require("express");
const sequilize = require("./config/config");

const Product = require("./db/model/product");
const Category = require("./db/model/category");
const Brand = require("./db/model/brand");
const Review = require("./db/model/review");
const ProductVarient = require("./db/model/productVarient");
const productVarientOptions = require("./db/model/productVarientOptions");

// Associations
Product.belongsTo(Category);
Product.belongsTo(Brand);
Product.belongsTo(Review);
Product.hasMany(ProductVarient);
ProductVarient.belongsTo(Product);
ProductVarient.hasMany(productVarientOptions);

const port = process.env.PORT || 2000;

const app = express();
app.use(express.json());

const productRoutes = require("./routes/productRoutes");

app.use("/api/v1/products", productRoutes);

sequilize
    .sync({ force: false })
    .then(() => {
        console.log("DB synced !!");
        app.listen(port, () => {
            console.log(`Server is running on ${port}...`);
        });
    })
    .catch((err) => {
        console.error("Getting error while syncing the Database !", err);
    });
