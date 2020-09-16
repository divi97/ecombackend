const pool = require('../../../database/database');

exports.editCustomer = async (req, res, next) => {
    //API to edit a Customer
    try {
        // console.log(req.params.id)
        const customer = await pool.query(
            `SELECT * from customers WHERE customerID=?`, [req.params.id]
        );
        if (customer.length === 0) {
            console.log("Requested customer not present")
        }

    } catch (error) {
        console.log(error.message)
    }
};