const pool = require('../../../database/database');

exports.deleteProduct = async (req, res, next) => {
    //API to delete a Product
    try {
        // console.log(req.params.id)
        const product = await pool.query(`SELECT * from products WHERE productId=?`, [req.params.id])
        if (product) {
            await pool.query(`DELETE FROM products WHERE productId=?`, [req.params.id]);
            res.status(200).json({ 
                message: "Product has been deleted successfully!" })
        } else {
            res.status(400).json({ 
                message: "Requested product does not exist" })
        }
    } catch (error) {
        res.status(404).json({ error });
    }
};