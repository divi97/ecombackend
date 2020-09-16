const mysql = require('mysql');
const config = require('../constants/config')
const { promisify } = require("util");

const database = {
    host: config.DATABASE_HOST,
    user: config.DATABASE_USER,
    password: config.DATABASE_PASSWORD,
    database: config.DATABASE_NAME,
};

const pool = mysql.createPool(database);
pool.getConnection((err, connection) => {
    if (err) {
        if (err.code === "PROTOCOL_CONNECTION_LOST") {
            console.error("Database connection was closed.");
        }
        if (err.code === "ER_CON_COUNT_ERROR") {
            console.error("Database has to many connections");
        }
        if (err.code === "ECONNREFUSED") {
            console.error("Database connection was refused");
        }
    }

    if (connection) connection.release();
    console.log("DB is Connected Successfully!!");
    return;
});

pool.query = promisify(pool.query);

module.exports = pool;