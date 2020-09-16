const express = require('express');
const bodyparser = require('body-parser')
const cors = require('cors')
const database = require('./database/database')

const PORT = 3000;

const app = express();

app.use(cors());
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

// ROUTES use
require('./routes/routes')(app)

app.listen(PORT, () => {
    console.log('Server is running on port:' + PORT)
})

module.exports = app