-- CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  /* Describe your table here.*/
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `roomname` TEXT NULL DEFAULT NULL,
  `username` TEXT NULL DEFAULT NULL,
  `msg` TEXT NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

