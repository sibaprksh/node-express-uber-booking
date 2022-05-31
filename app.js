/**
 * Main application file
 */

'use strict';

const config = require('./config/environment');
const express = require('express');

// Setup server
const app = express();
require('./config/express')(app);
require('./routes')(app);

// Start server
app.listen(config.port, function () {
  console.log('Express server listening on %d', config.port);
});

// Expose app
exports = module.exports = app;
