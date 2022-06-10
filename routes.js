/**
 * Main application routes
 */

'use strict';

import userRoutes from './api/user/index.js';
import bookingRoutes from './api/booking/index.js';

export default function (app) {
  // Insert routes below
  app.use('/api/users', userRoutes);
  app.use('/api/bookings', bookingRoutes);
}
