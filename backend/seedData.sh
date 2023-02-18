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

# Define SQL query to insert data into the categories table
CATEGORIES_DATA_SQL="INSERT INTO categories (name) VALUES
  ('Materiales de construccion'),
  ('Metales'),
  ('Quimicos'),
  ('Componentes electronicos'),
  ('Herramientas');"

# Execute SQL query using the mysql command
mysql -u "$MYSQL_USER" -p"$MYSQL_PASSWORD" "$MYSQL_DATABASE" -e "$CATEGORIES_DATA_SQL"

  # Define SQL query to insert data
PRODUCTS_DATA_SQL="INSERT INTO products (name, price, stock, creationDate, categoryId) VALUES
  ('Cemento', '10', '5', '2021-03-08', '1'),
  ('Arena', '50', '12', '2020-04-09', '1'),
  ('Grava', '5', '1', '2019-02-11', '1'),
  ('Ladrillos', '100', '15', '2021-11-10', '1'),
  ('Hierro', '61', '12', '2021-07-12', '1'),
  ('Aluminio', '23', '15', '2021-01-11', '2'),
  ('Cobre', '52', '61', '2021-06-21', '2'),
  ('Plomo', '50', '21', '2021-02-04', '2'),
  ('Acero', '76', '81', '2021-01-05', '2'),
  ('Solventes', '12', '23', '2021-12-12', '3'),
  ('Aditivos', '19', '54', '2021-12-02', '3'),
  ('Colorantes', '5', '62', '2021-02-06', '3'),
  ('Conservantes', '23', '72', '2021-06-11', '3'),
  ('Acidos', '26', '83', '2021-06-12', '3'),
  ('Circuitos integrados', '52', '12', '2021-06-11', '4'),
  ('Resistencias', '12', '73', '2020-02-11', '4'),
  ('Condensadores', '87', '90', '2020-01-12', '4'),
  ('Diodos', '50', '72', '2021-06-12', '4'),
  ('Transistores', '98', '27', '2020-02-11', '4'),
  ('Taladros', '68', '34', '2021-06-07', '5'),
  ('Sierras', '98', '74', '2021-06-06', '5'),
  ('Maquinaria pesada', '42', '24', '2021-02-11', '5'),
  ('Equipos de seguridad', '14', '10', '2021-07-11', '5'),
  ('Equipos de Destornilladores', '62', '15', '2021-01-11', '5');"

# Execute SQL query using the mysql command
mysql -u "$MYSQL_USER" -p"$MYSQL_PASSWORD" "$MYSQL_DATABASE" -e "$PRODUCTS_DATA_SQL"