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
    post: function (message) {
      db.query('INSERT INTO messages (username, msg, roomname) VALUES ("' + message.username + '","' + message.message + '","' + message.roomname + '")', function(err, results) {
        if (err) throw err
        console.log(results);
      });

    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (message) {
      db.query('SELECT * FROM messages');


    },
    post: function (username) {
      db.query('INSERT INTO messages (username) VALUES ("' + username + '")', function(err, results) {
        if (err) throw err
        console.log(results);
      });
    }
  }
};
