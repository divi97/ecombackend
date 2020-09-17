const pool = require('../../../database/database');

exports.getAllCustomers = async (req, res, next) => {
    //API to get customer list
    try {
        const customers = await pool.query(
            `SELECT * from customers`
        );
        if (customers.length === 0) {
            console.log("No customers present")
        }
        res.status(200).json({
            message: "Customers fetched successfully!!",
            customers
        })

    } catch (error) {
        res.status(404).json({ error });
    }
};

exports.getCustomer = async (req, res, next) => {
    //API to get single customer
    try {
        // console.log(req.params.id)
        const customer = await pool.query(`SELECT * form customers WHERE customerId=?`, [req.params.id])
        if (customer.length === 0) {
            console.log("Requested customer not present")
        }
        res.status(200).json({
            message: "Customer fetched successfully!!",
            customer
        })
    } catch (error) {
        res.status(404).json({ error });
    }
};