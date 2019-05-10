'use strict';

/**
 * HTTP Server Settings
 *
 * Configuration for the underlying HTTP server in harbbor-js.
 *
 */

module.exports = {
  middleware: {
    order: [
      'bodyParser',
      'cookieParser',
      'helmet',
      'compression',
      'expressHystrix',
      'XGlobalTransactionId',
      'errorhandler',
    ],
  },
};
