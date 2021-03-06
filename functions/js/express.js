// Generated by CoffeeScript 2.4.1
(function() {
  var app, express, router, serverless;

  express = require('express');

  serverless = require('serverless-http');

  app = express();

  router = express.Router();

  app.use('/.netlify/functions/express', router);

  router.get('/', function(r, s) {
    return s.send('hello express');
  });

  module.exports.handler = serverless(app);

}).call(this);
