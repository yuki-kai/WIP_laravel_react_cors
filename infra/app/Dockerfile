#PHP8.3
#-------------------------------------------------------
FROM php:8.3-fpm as php83

ENV TZ=Asia/Tokyo

COPY --from=composer /usr/bin/composer /usr/bin/composer

RUN apt-get update && \
	apt-get install -y git unzip libzip-dev libjpeg-dev libicu-dev libonig-dev nodejs npm libfreetype6-dev libjpeg62-turbo-dev libpng-dev && \
    docker-php-ext-configure gd --with-jpeg=/usr/include/ --with-freetype=/usr/include/ && \
    docker-php-ext-install intl pdo_mysql zip bcmath gd sockets exif

COPY ./infra/app/php.ini /usr/local/etc/php/php.ini

# nodeのバージョンをUP
RUN curl -fsSL https://deb.nodesource.com/setup_16.x | bash -
RUN apt update && apt install -y nodejs

# コンテナ内で使えるalias
COPY ./infra/app/alias.sh /root/alias.sh
RUN echo "source ~/alias.sh" >> ~/.bashrc
#-------------------------------------------------------





#PHP8.2
#-------------------------------------------------------
# FROM php:8.2-fpm as php82

# ENV TZ=Asia/Tokyo

# COPY --from=composer /usr/bin/composer /usr/bin/composer

# RUN apt-get update && \
# 	apt-get install -y git unzip libzip-dev libjpeg-dev libicu-dev libonig-dev nodejs npm libfreetype6-dev libjpeg62-turbo-dev libpng-dev && \
#     docker-php-ext-configure gd --with-jpeg=/usr/include/ --with-freetype=/usr/include/ && \
#     docker-php-ext-install intl pdo_mysql zip bcmath gd sockets exif

# COPY ./infra/app/php.ini /usr/local/etc/php/php.ini

# # nodeのバージョンをUP
# RUN curl -fsSL https://deb.nodesource.com/setup_16.x | bash -
# RUN apt update && apt install -y nodejs

# # コンテナ内で使えるalias
# COPY ./infra/app/alias.sh /root/alias.sh
# RUN echo "source ~/alias.sh" >> ~/.bashrc
#-------------------------------------------------------




#PHP8.1
#-------------------------------------------------------
#FROM php:8.1-fpm as php81
#
#ENV TZ=Asia/Tokyo
#
#COPY --from=composer /usr/bin/composer /usr/bin/composer
#
#RUN apt-get update && \
#	apt-get install -y git unzip libzip-dev libjpeg-dev libicu-dev libonig-dev nodejs npm libfreetype6-dev libjpeg62-turbo-dev libpng-dev && \
#    docker-php-ext-configure gd --with-jpeg=/usr/include/ --with-freetype=/usr/include/ && \
#    docker-php-ext-install intl pdo_mysql zip bcmath gd sockets exif
#
#COPY ./infra/app/php.ini /usr/local/etc/php/php.ini
#
## nodeのバージョンをUP
#RUN curl -fsSL https://deb.nodesource.com/setup_16.x | bash -
#RUN apt update && apt install -y nodejs
#
## コンテナ内で使えるalias
#COPY ./infra/app/alias.sh /root/alias.sh
#RUN echo "source ~/alias.sh" >> ~/.bashrc
#-------------------------------------------------------



#PHP8.0
#-------------------------------------------------------
#FROM php:8.0-fpm as php80
#
#ENV TZ=Asia/Tokyo
#
#COPY --from=composer /usr/bin/composer /usr/bin/composer
#
#RUN apt-get update && \
#	apt-get install -y git unzip libzip-dev libjpeg-dev libicu-dev libonig-dev nodejs npm libfreetype6-dev libjpeg62-turbo-dev libpng-dev && \
#    docker-php-ext-configure gd --with-jpeg=/usr/include/ --with-freetype=/usr/include/ && \
#    docker-php-ext-install intl pdo_mysql zip bcmath gd sockets exif
#
#COPY ./infra/app/php.ini /usr/local/etc/php/php.ini
#
## コンテナ内で使えるalias
#COPY ./infra/app/alias.sh /root/alias.sh
#RUN echo "source ~/alias.sh" >> ~/.bashrc
#-------------------------------------------------------


#PHP7.4
#-------------------------------------------------------
#FROM php:7.4-fpm as php74
#
#ENV TZ=Asia/Tokyo
#
#COPY --from=composer /usr/bin/composer /usr/bin/composer
#
#RUN apt-get update && \
#	apt-get install -y git unzip libzip-dev libjpeg-dev libicu-dev libonig-dev nodejs npm libfreetype6-dev libjpeg62-turbo-dev libpng-dev && \
#    docker-php-ext-configure gd --with-jpeg=/usr/include/ --with-freetype=/usr/include/ && \
#    docker-php-ext-install intl pdo_mysql zip bcmath gd sockets exif
#
#COPY ./infra/app/php.ini /usr/local/etc/php/php.ini
#
## コンテナ内で使えるalias
#COPY ./infra/app/alias.sh /root/alias.sh
#RUN echo "source ~/alias.sh" >> ~/.bashrc
#-------------------------------------------------------



#PHP7.3
#-------------------------------------------------------
#FROM php:7.3-fpm as php73
#
#ENV TZ=Asia/Tokyo
#
#COPY --from=composer /usr/bin/composer /usr/bin/composer
#
#RUN apt-get update && \
#	apt-get install -y git unzip libzip-dev libjpeg-dev libicu-dev libonig-dev nodejs npm libfreetype6-dev libjpeg62-turbo-dev libpng-dev && \
#    docker-php-ext-install intl pdo_mysql zip bcmath gd sockets exif
#
#COPY ./infra/app/php.ini /usr/local/etc/php/php.ini
#
## コンテナ内で使えるalias
#COPY ./infra/app/alias.sh /root/alias.sh
#RUN echo "source ~/alias.sh" >> ~/.bashrc
#-------------------------------------------------------
