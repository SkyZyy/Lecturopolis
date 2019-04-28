const path = require('path');
const express = require('express');
const routes = require('./routes/index');
const bodyParser = require('body-parser');

const app = express();
const cons = require('consolidate');

app.engine('html', cons.swig)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

app.use('/', routes);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'views')));

module.exports = app;