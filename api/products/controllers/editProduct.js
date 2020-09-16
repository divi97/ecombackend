const pool = require('../../../database/database');

exports.editProduct = async (req, res, next) => {
    //API to edit a Product
    try {
        // console.log(req.params.id)
        let [productName, brand, price, quantityInventory, description] = Object.values(req.body)
        const product = await pool.query(
            `SELECT * from products WHERE productId=?`, [req.params.id]
        );
        if (product.length === 0) {
            console.log("Requested product not present")
        } else {
            await pool.query(`UPDATE products SET productName=?,brand=?,price=?,quantityInventory=?,description=? WHERE productId=?`,
                [productName, brand, price, quantityInventory, description, req.params.id]);

            const result = await pool.query(`SELECT * from products WHERE productId=?`, [req.params.id]);
            res.status(200).json({
                message: "Customer details have been successfully updated",
                result
            })
        }
    } catch (error) {
        console.log(error.message)
    }
};