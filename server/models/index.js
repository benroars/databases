var db = require('../db');
db = db.connect();

module.exports = {

  messages: {
    get: function (callback) {
      db.query('SELECT * FROM messages', function(err, data) {
        if (err) throw err;
        callback(data);
      });
    }, // a function which produces all the messages
    post: function (message, callback) {
      var data = {username: message.username, text: message.text, roomname: message.roomname};
      db.query('INSERT INTO messages (username, text, roomname) VALUES (?)', data, function(err, results) {
        if (err) { 
          throw err;
        }
        callback(results);
      });

    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (message) {},

    post: function (username, callback) {
      db.query('INSERT INTO messages (username) VALUES ("' + username + '")', function(err, results) {
        if (err) {
          throw err;
        }
        callback(results);
      });
    }
  }
};
