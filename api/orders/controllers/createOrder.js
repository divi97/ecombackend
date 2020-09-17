const pool = require('../../../database/database');
const date = new Date();

exports.createOrder = async (req, res, next) => {
    //API to create a Order
    try {
        const customer = pool.query(`SELECT * from customers WHERE customerId=?`, [req.body.customerId]);
        const product = pool.query(`SELECT * from products WHERE productId=?`, [req.body.productId]);

        if (customer && product) {
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
        } else if (!customer) {
            res.status(404).json({
                message : "Customer does not exist"
            })
        } else if (!product) {
            res.status(404).json({
                message : "Product does not exist"
            })
        } else {
            res.send("Something bad happened!")
        }

    } catch (error) {
        res.status(404).json({ error });
    }
};