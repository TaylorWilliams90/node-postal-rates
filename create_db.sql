CREATE DATABASE heroku_data;
CREATE TABLE users
(
	id SERIAL PRIMARY KEY NOT NULL,
	name VARCHAR(100) NOT NULL,
	last VARCHAR(100),
	password VARCHAR(100)
);

INSERT INTO users(name, last, password) VALUES
  ('Taylor', 'Williams', 'taylor90'),
  ('Max', 'Williams', 'max90'),
  ('Mike', 'Jack', 'jack2');
