-- init.sql
ALTER USER 'root'@'localhost' IDENTIFIED BY 'root';
CREATE DATABASE IF NOT EXISTS `wordpress_db`;
CREATE USER IF NOT EXISTS 'userdb'@'%' IDENTIFIED BY 'passworddb';
GRANT ALL PRIVILEGES ON wordpress_db.* TO 'userdb'@'%';
FLUSH PRIVILEGES;