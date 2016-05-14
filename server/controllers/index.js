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
      console.log("get msg")
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      console.log("post msg")
      res.writeHead(201, this.headers);
      res.end(models.messages.post(req.body));

    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      console.log("get user")

    },
    post: function (req, res) {
      console.log("post user")
      res.writeHead(201, this.headers);
      res.end(models.users.post(req.body.username));

    }
  }
};

