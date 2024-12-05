FROM debian:buster

RUN apt update && apt upgrade -y
RUN apt install -y apache2 \
    php \
    libapache2-mod-php \
    php-mysql \
    php-zip \
    php-mbstring \
    php-curl \
    && rm /var/www/html/index.html
        
WORKDIR /var/www/html

ADD https://wordpress.org/latest.tar.gz .
RUN tar -xzvf latest.tar.gz --strip-components=1 && \
    rm latest.tar.gz && \
    mkdir -p /var/www/html/wp-content/uploads && \
    chmod -R 777 /var/www/html

RUN echo "ServerName localhost" >> /etc/apache2/apache2.conf

EXPOSE 80

VOLUME ["/var/www/html"]

CMD ["apachectl", "-D", "FOREGROUND"]