var models = require('../models');

module.exports = {
  headers: {
    'access-control-allow-origin': '*',
    'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'access-control-allow-headers': 'content-type, accept',
    'access-control-max-age': 10 // Seconds.
  },

  messages: {
    get: function (req, res) {
      res.writeHead(200, this.headers);
      models.messages.get(function(result) {
        res.end(JSON.stringify(result));
      });
    }, // a function which handles a get request for all messages
    
    post: function (req, res) {
      res.writeHead(201, this.headers);
      res.end(models.messages.post(req.body));
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},

    post: function (req, res) {
      res.writeHead(201, this.headers);
      res.end(models.users.post(req.body.username));
    }
  },

  login: {
    // Ditto as above
    get: function (req, res) {},

    post: function (req, res) {
      console.log('at the controller?');
      console.log("THE REQUEST", req.body.username, req.body.password);
      //res.writeHead(201, this.headers);
      //res.end(models.login.post(req.body));
      //res.end(req.body.username);
      res.end(models.login.post(req.body));
    }
  }
};

