const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

const recipeRoutes = require('./routes/recipeRoutes');
const userRoutes = require('./routes/userRoutes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'dist')));
app.use(express.static(path.join(__dirname, 'node_modules')));

app.use('/recipebyname', recipeRoutes);
app.use('/users', userRoutes);

const port = 3000;

app.listen(port, () => {
    console.log('server is running in port : ' + port);
});
