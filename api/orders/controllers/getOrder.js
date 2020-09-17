const pool = require('../../../database/database');

exports.getOrder = async (req, res, next) => {
    //API to get an Order
    try {
        // console.log(req.params.id)
        const order = await pool.query(`SELECT * form orders WHERE orderId=?`, [req.params.id])
        if (order.length === 0) {
            console.log("Requested order not present")
        }
        res.status(200).json({
            message: "Order fetched successfully!!",
            order
        })
    } catch (error) {
        res.status(404).json({ error });
    }
};