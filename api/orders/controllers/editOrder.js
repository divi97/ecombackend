const pool = require('../../../database/database');

exports.editOrder = async (req, res, next) => {
    //API to edit an Order
    try {
        // console.log(req.params.id)
        let [customerId, productId, amountPaid, quantityPurchased] = Object.values(req.body)
        const order = await pool.query(`SELECT * from orders WHERE orderId=?`, [req.params.id]);
        if (order.length === 0) {
            console.log("Requested order not present")
        } else {
            await pool.query(`UPDATE orders SET customerId=?,productId=?,amountPaid=?,quantityPurchased=? WHERE orderId=?`,
                [customerId, productId, amountPaid, quantityPurchased, req.params.id]);

            const result = await pool.query(`SELECT * from orders WHERE oderId=?`, [req.params.id]);
           
            const quantity = await pool.query(`SELECT quantityInventory from products WHERE productId=?`, [req.body.productId]);
            quantity = (quantity - req.body.quantityPurchased)
            await pool.query(`UPDATE products SET quantityInventory=? WHERE productId=?`, [quantity, req.body.productId])


            res.status(200).json({
                message: "Order details have been successfully updated",
                result
            })
        }
    } catch (error) {
        res.status(404).json({ error });
    }
};