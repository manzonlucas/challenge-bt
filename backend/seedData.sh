#!/bin/bash

# Prompt the user to enter their MySQL username
read -p "Enter your MySQL username: " MYSQL_USER

# Prompt the user to enter their MySQL password
read -sp "Enter your MySQL password: " MYSQL_PASSWORD

# Define the name of the new database to create
NEW_DB_NAME="challenge_bt"

# Define SQL query to create the new database if it does not already exist
CREATE_DB_SQL="CREATE DATABASE IF NOT EXISTS ${NEW_DB_NAME};"

# Execute SQL query to create the new database using the mysql command
mysql -u "$MYSQL_USER" -p"$MYSQL_PASSWORD" -e "$CREATE_DB_SQL"

# Define MySQL connection details for the new database
MYSQL_DATABASE="$NEW_DB_NAME"

# Define SQL query to create the products table
PRODUCTS_SQL="CREATE TABLE IF NOT EXISTS products (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name varchar(255),
  price decimal(10,2),
  stock int,
  creationDate datetime,
  categoryId int
);"

# Execute SQL query using the mysql command
mysql -u "$MYSQL_USER" -p"$MYSQL_PASSWORD" "$MYSQL_DATABASE" -e "$PRODUCTS_SQL"

# Define SQL query to create the categories table
CATEGORIES_SQL="CREATE TABLE IF NOT EXISTS categories (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name varchar(255)
);"

# Execute SQL query using the mysql command
mysql -u "$MYSQL_USER" -p"$MYSQL_PASSWORD" "$MYSQL_DATABASE" -e "$CATEGORIES_SQL"

# Define SQL query to insert data into the my_table table
MY_TABLE_SQL="INSERT INTO categories (id, name) VALUES
  (1, 'John Doe'),
  (2, 'Jane Doe'),
  (3, 'Bob Smith'),
  (4, 'Alice Johnson');"

# Execute SQL query using the mysql command
mysql -u "$MYSQL_USER" -p"$MYSQL_PASSWORD" "$MYSQL_DATABASE" -e "$MY_TABLE_SQL"

# Define SQL query to insert data into the categories table
CATEGORIES_DATA_SQL="INSERT INTO categories (name) VALUES
  ('Category 1'),
  ('Category 2'),
  ('Category 3');"

# Execute SQL query using the mysql command
mysql -u "$MYSQL_USER" -p"$MYSQL_PASSWORD" "$MYSQL_DATABASE" -e "$CATEGORIES_DATA_SQL"

  # Define SQL query to insert data
PRODUCTS_DATA_SQL="INSERT INTO products (name, price, stock, creationDate, categoryId) VALUES
  ('Manzana', '10', '5', '2020-03-08', '1'),
  ('Banana', '50', '52', '2020-03-09', '1'),
  ('Tomate', '12', '1', '2020-03-10', '1');"

# Execute SQL query using the mysql command
mysql -u "$MYSQL_USER" -p"$MYSQL_PASSWORD" "$MYSQL_DATABASE" -e "$PRODUCTS_DATA_SQL"