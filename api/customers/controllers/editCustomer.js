const pool = require('../../../database/database');

exports.editCustomer = async (req, res, next) => {
    //API to edit a Customer
    try {
        // console.log(req.params.id)
        let [fistname, lastname, address, phonenumber, email] = Object.values(req.body)
        const customer = await pool.query(
            `SELECT * from customers WHERE customerId=?`, [req.params.id]
        );
        if (customer.length === 0) {
            console.log("Requested customer not present")
        } else {
            await pool.query(`UPDATE customers SET firstname=?,lastname=?,address=?,phonenumber=?,email=? WHERE customerId=?`,
                [fistname, lastname, address, phonenumber, email, req.params.id]);

            const result = await pool.query(`SELECT * from customers WHERE customerId=?`, [req.params.id]);
            res.status(200).json({
                message: "Customer details have been successfully updated",
                result
            })
        }
    } catch (error) {
        res.status(404).json({ error });
    }
};