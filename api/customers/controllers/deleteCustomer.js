const pool = require('../../../database/database');

exports.deleteCustomer = async (req, res, next) => {
    //API to delete a Customer
    try {
        // console.log(req.params.id)
        const customer = await pool.query(`SELECT * from customers WHERE customerId=?`, [req.params.id])
        if (customer) {
            await pool.query(`DELETE FROM customers WHERE customerId=?`, [req.params.id]);
            res.status(200).json({ 
                message: "Customer has been deleted successfully!" })
        } else {
            res.status(400).json({ 
                message: "Requested customer does not exist" })
        }
    } catch (error) {
        res.status(404).json({ error });
    }

};