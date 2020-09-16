const pool = require('../../../database/database');

exports.removeAllCustomers = async (req, res, next) => {
    //API to remove all Customers
    try {
        const customers = await pool.query(
            `SELECT * from customers`
        );
        if (customers.length === 0) {
            console.log("No customers present")
        } else {
            await pool.query(`DELETE FROM customers`);
            res.status(200).json({
                message: "All Customers deleted successfully!!"
            })
        }

    } catch (error) {
        console.log(error.message)
    }
};