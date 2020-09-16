const pool = require('../../../database/database');

exports.deleteOrder = async (req, res, next) => {
    //API to delete a Order
    try {
        // console.log(req.params.id)
        const order = await pool.query(`SELECT * from orders WHERE orderId=?`, [req.params.id])
        if (order) {
            await pool.query(`DELETE FROM orders WHERE orderId=?`, [req.params.id]);
            res.status(200).json({ 
                message: "Requested Order has been deleted successfully!" })
        } else {
            res.status(400).json({ 
                message: "Requested order does not exist" })
        }
    } catch (error) {
        console.log(error.message)
    }
};