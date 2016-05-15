var Sequelize = require('sequelize');
var db = new Sequelize('chat', 'root', 'onepiece14');

var Message = db.define('Message', {
  username: Sequelize.STRING,
  text: Sequelize.STRING,
  roomname: Sequelize.STRING
}, {
  timestamps: false
});

var User = db.define('User', {
  user: Sequelize.STRING,
  password: Sequelize.STRING
}, {
  timestamps: false,
  tableName: 'users'
});

var db = require('../db');
db = db.connect();

module.exports = {

  messages: {
    get: function (callback) {
      
      Message.sync()
        .then(function() {
          return Message.findAll({attributed: ['username', 'text', 'roomname']});
        }).then(function(results) {
          callback(results);
        });

    }, // a function which produces all the messages
    post: function (message, callback) {

      Message.sync()
        .then(function() {
          return Message.create({username: message.username, text: message.text, roomname: message.roomname});
        }).then(function(results) {
          callback(results);
        }).catch(function(err) {
          console.log(err);
        });

    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (message) {},

    post: function (username, callback) {
      
      Message.sync()
        .then(function() {
          return Message.create({username: username, text: 'sup', roomname: '1'});
        }).then(function(results) {
          callback(results);
        }).catch(function(err) {
          console.log(err);
        });

    }
  },

  login: {
    // Ditto as above.
    get: function (message) {},

    post: function (userinfo, callback) {
      
      User.sync()
        .then(function() {
          return User.findAll({attributed: ['user', 'password']});
        })
        .then(function(results) {
          _.each(results, function(value){
            console.log('#$%!%!@#%!@#%!@#!@%!@#', value);
          })
         // console.log('____! _@_!@_$_@_$_@THE RESULTS', results);
          return User.create({password: userinfo.password,user: userinfo.username});
        }).then(function(results) {
          callback(results);
        }).catch(function(err) {
          console.log(err);
        });


    }
  }
};
