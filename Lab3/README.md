# Docker Task
## Credentials

- database: wordpress_db
- user: userdb
- password: passworddb
- host: mysql:3306

## Description

This project involves deploying WordPress with a MySQL database using Docker. The task is divided into two parts:
- Part 1: Use official Docker images for WordPress and MySQL.
- Part 2: Build custom Docker images for WordPress and MySQL based on Debian.

## Part 1: Deployment with Official Images

Go to the correct Directory
```bash
cd Teil1
```

Start the docker containers
```bash
docker-compose up -d
```

Open wordpress website and configure the database
```
http://localhost:8080/
```

## Part 2: Deployment with Custom Images
Go to the correct Directory
```bash
cd Teil2
```

Build the two images
```bash
docker build -t custom-mysql ./sql
docker build -t custom-wordpress ./wordpress
```

Start the docker containers
```bash
docker-compose up -d
```

Open wordpress website and configure the database
```
http://localhost:8080/
```