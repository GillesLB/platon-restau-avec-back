const express = require('express');
const bodyParser = require('body-parser');
const restauRoutes = require('./routes/restau');

const app = express();

const cors = require('cors');

// Gestion des cors
app.use(cors({
    credentials: true,
    origin: '*',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}));

app.use(bodyParser.json());

app.use('/restau', restauRoutes);

app.listen(3000);
