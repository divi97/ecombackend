const express = require('express');
const bodyparser = require('body-parser')
const cors = require('cors')

const PORT = 3000;

const app = express();

// ROUTES
// require('./routes')(app)

app.use(cors());
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

app.listen(PORT, () => {
    console.log('Server is running on port:' + PORT)
})