var db = require('../db');
db = db.connect();


module.exports = {

  messages: {
    get: function () {

    }, // a function which produces all the messages
    post: function (message) {
      db.query('INSERT INTO messages (username, msg, roomname) VALUES ("' + message.username + '","' + message.message + '","' + message.roomname + '")', function(err, results) {
        if (err) throw err
        console.log(results);
      });


      // db.query('INSERT ' + message + 'INTO messsages');
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {

    },
    post: function (username) {
      db.query('INSERT INTO messages (username) VALUES ("' + username + '")', function(err, results) {
        if (err) throw err
        console.log("results",results)
      });
    }
  }
};
