const pool = require('../../../database/database');
const date = new Date();

exports.createOrder = async (req, res, next) => {
    //API to create a Order
    try {
        const quantity = await pool.query(`SELECT quantityInventory from products WHERE productId=?`, [req.body.productId]);
        quantity = (quantity - req.body.quantityPurchased)

        await pool.query(`INSERT INTO orders SET ?`, [
            {
                customerId: req.body.customerId,
                productId: req.body.productId,
                orderDate: date,
                amountPaid: req.body.amountPaid,
                quantityPurchased: req.body.quantityPurchased
            }
        ]);
        
        await pool.query(`UPDATE products SET quantityInventory=? WHERE productId=?`, [quantity, req.body.productId]);

        res.status(200).json({
            message: "New order has been created successfully!! "
        });

    } catch (error) {
        console.log(error.message)
    }
};