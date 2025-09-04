const Brand = require("../db/model/brand");
const Category = require("../db/model/category");
const Product = require("../db/model/product");
const ProductVarient = require("../db/model/productVarient");
const ProductVarientOptions = require("../db/model/productVarientOptions");
const Review = require("../db/model/review");

const product = async (req, res) => {
    try {
        const {
            name,
            handle,
            category,
            brand,
            ratingMin,
            ratingMax,
            priceMax,
            varientOptions,
            page = 1,
            limit = 10,
        } = req.query;

        const offset = (page - 1) * limit;

        const products = await Product.findAndCountAll({
            where: {
                ...(name && { name: { [Op.like]: `%${name}%` } }),
                ...(name && { handle: { [Op.like]: `%${handle}%` } }),
            },
            include: [
                {
                    model: Category,
                    ...(category && {
                        where: {
                            name: category,
                        },
                    }),
                },
                {
                    model: Brand,
                    ...(brand && {
                        where: {
                            name: brand,
                        },
                    }),
                },
                {
                    model: Review,
                    ...(ratingMin && {
                        rating: {
                            [Op.gte]: ratingMin,
                        },
                    }),
                    ...(ratingMax && {
                        rating: {
                            [Op.lte]: ratingMax,
                        },
                    }),
                },
                {
                    model: ProductVarient,
                    where: {
                        ...(priceMin && {
                            price: { [Op.gte]: priceMin },
                        }),
                        ...(priceMax && {
                            price: { [Op.gte]: priceMax },
                        }),
                    },
                    include: [
                        {
                            model: ProductVarientOptions,
                            ...(varientOptions && {
                                where: {
                                    value: { [Op.like]: `%{varientOptions}%` },
                                },
                            }),
                        },
                    ],
                },
            ],
            offset,
            limit: parseInt(limit),
        });

        res.json({
            total: products.count,
            page: +page,
            limit: +limit,
            data: products.rows,
        });
    } catch (error) {
        console.log("error----", error);
        res.status(400).json({
            error: "server Error",
        });
    }
};

module.exports = {
    product,
};
