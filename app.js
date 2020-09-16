const express = require('express');
const bodyparser = require('body-parser')
const cors = require('cors')
const database = require('./database/database')

const PORT = 3000;

const app = express();

// ROUTES use
const routes = require('./routes/routes');

app.use(cors());
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

// ROUTES use
app.use('/', routes);

app.listen(PORT, () => {
    console.log('Server is running on port:' + PORT)
})
