/**
 * Main application routes
 */

'use strict';

module.exports = function (app) {
  // Insert routes below
  app.use('/api/users', require('./api/user'));
  app.use('/api/bookings', require('./api/booking'));
};
