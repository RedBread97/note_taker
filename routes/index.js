const express = require('express');
const app = express();
const notesRoute = require('./notes');

app.use('/notes', notesRoute);

module.exports.app