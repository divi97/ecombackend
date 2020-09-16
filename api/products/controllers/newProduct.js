const pool = require('../../../database/database');

exports.createProduct = async (req, res, next) => {
    //API to create new Product
    try {

        // console.log(req.body);
        let [product] = await pool.query("SELECT * from products WHERE productName=?", [req.body.productName]);
        // console.log(product)

        if (!product) {
            await pool.query(`INSERT INTO customers SET ?`, [
                {
                    productName: req.body.productName,
                    brand: req.body.brand,
                    price: req.body.price,
                    quantityInventory: req.body.quantityInventory,
                    description: req.body.description
                }
            ]);

            res.status(200).json({
                message: "Product has been added successfully!! "
            });
        } else {
            res.status(409).json({
                message: "Product already exists, Enter a different product name"
            })
        }
    } catch (err) {
        console.log(err.message, 400);
    }
};
