CREATE DATABASE heroku_data;
CREATE TABLE restaurant
(
	id SERIAL PRIMARY KEY NOT NULL,
	name VARCHAR(100) NOT NULL,
	food_type VARCHAR(100),
	location VARCHAR(100)
);

INSERT INTO restaurant(name, food_type, location) VALUES
  ('Mex Grill', 'Mexican', 'Orem, UT'),
  ('Burgerville', 'American', 'Pleasent Grove, UT'),
  ('Micks', 'Chinese', 'Orem, UT');
