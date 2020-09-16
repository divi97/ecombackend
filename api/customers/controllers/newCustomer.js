const pool = require('../../../database/database');

exports.createCustomer = async (req, res, next) => {
    //API to create new Customer


    try {

        // console.log(req.body);
        let [user] = await pool.query("SELECT * from customers WHERE email=?", [req.body.email]);
        // console.log(user)
        
        if (!user) {

           await pool.query(`INSERT INTO customers SET ?`, [
                {
                    firstname: req.body.firstname,
                    lastname: req.body.lastname,
                    address: req.body.address,
                    phonenumber: req.body.phonenumber,
                    email: req.body.email
                }
            ]);

            res.status(200).json({
                message: "Customer has been added successfully!! "
            });
        } else {
            res.status(409).json({
                message: "Customer already exists, Enter a different email"
            })
        }
    } catch (err) {
        console.log(err.message, 400);
    }
};