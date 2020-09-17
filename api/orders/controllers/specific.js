const pool = require('../../../database/database');

exports.specificProduct = async (req, res, next) => {
    //API to get a list of all Customers who have purchased a specific product
    // console.log(req.params.product_id)

    try {
        const customerlist = await pool.query(`SELECT customerId from orders WHERE productId=?`, [req.params.product_id]); 
        customerDetails = [];

        for (i of customerlist) {
            const customer = await pool.query(`SELECT * from customers WHERE customerId=?`, [i])
            customerDetails.push(customer);
        }

        res.status(200).json({
            message : "Customer details corresponding ProductId feetched successfully!",
            customerDetails
        })
    } catch (error) {
        res.status(404).json({ error });
    }
};

exports.specificCustomer = async (req, res, next) => {
    //API to get a list of all Products purchased by a specific customer
        // console.log(req.params.customer_id)
        try {
            const productlist = await pool.query(`SELECT productId from orders WHERE customerId=?`, [req.params.customer_id]); 
            productDetails = [];
    
            for (i of productlist) {
                const product = await pool.query(`SELECT * from products WHERE productId=?`, [i])
                productDetails.push(product);
            }
    
            res.status(200).json({
                message : "Product details corresponding CustomerId feetched successfully!",
                productDetails
            })
        } catch (error) {
            res.status(404).json({ error });
        }

};

exports.mostPurchased = async (req, res, next) => {
    //API to get list of most purchsed products in descending order
    
};