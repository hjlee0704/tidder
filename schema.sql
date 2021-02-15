/*  Execute this file from the command line by typing:
 *    sqlite3 items.db < schema.sql
 *  to create the database and the tables.*/

CREATE DATABASE groceries;

USE groceries;

CREATE TABLE groceries (
  id INT PRIMARY KEY AUTO_INCREMENT,
  item VARCHAR(255) NOT NULL,
  quantity INT NOT NULL
);