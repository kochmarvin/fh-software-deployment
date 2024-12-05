FROM debian:buster

RUN apt-get update && \
    apt-get -y install mariadb-server && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

COPY init.sql /init.sql
# COPY config.conf /etc/mysql/conf.d/

RUN mkdir -p /run/mysqld && \
    chown -R mysql:mysql /run/mysqld && \
    sed -i 's/bind-address.*/bind-address = 0.0.0.0/' /etc/mysql/my.cnf && \
    chown -R mysql:mysql /var/lib/mysql /var/run/mysqld && \
    chmod 1777 /var/run/mysqld /var/lib/mysql

RUN mkdir -p /var/log/mysql && \
    chown -R mysql:mysql /var/log/mysql

RUN rm -rf /run/mysqld/mysqld.sock && \
    mkdir -p /run/mysqld && \
    chown -R mysql:mysql /run/mysqld

EXPOSE 3306

RUN echo 'bind-address = 0.0.0.0' >> /etc/mysql/my.cnf

VOLUME ["/var/lib/mysql", "/var/log/mysql"]

CMD ["mysqld", "--init-file=/init.sql"]