/**
 * Main application file
 */

'use strict';

import { port } from './config/environment.js';
import expressConfig from './config/express.js';
import routes from './routes.js';
import express from 'express';

// Setup server
const app = express();
expressConfig(app);
routes(app);

// Start server
app.listen(port, function () {
  console.log('Express server listening on %d', port);
});
