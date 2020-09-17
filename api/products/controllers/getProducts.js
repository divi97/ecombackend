const pool = require('../../../database/database');

exports.getAllProducts = async (req, res, next) => {
    //API to get Product list

    try {
        const products = await pool.query(
            `SELECT * from products`
        );
        if (products.length === 0) {
            console.log("No products present")
        }
        res.status(200).json({
            message: "Products fetched successfully!!",
            products
        })

    } catch (error) {
        res.status(404).json({ error });
    }
};

exports.getProduct = async (req, res, next) => {
    //API to get single Product
    try {
        // console.log(req.params.id)
        const product = await pool.query(`SELECT * form products WHERE productId=?`, [req.params.id])
        if (product.length === 0) {
            console.log("No product present")
        }
        res.status(200).json({
            message: "Product fetched successfully!!",
            product
        })
    } catch (error) {
        res.status(404).json({ error });
    }
};