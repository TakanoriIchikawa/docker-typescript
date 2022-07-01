FROM php:8.1-fpm

# php設定コピー
COPY ./docker/app/php.ini /usr/local/etc/php/php.ini
COPY ./docker/app/php-fpm.d/zzz-docker.conf /usr/local/etc/php-fpm.d/zzz-docker.conf

# パッケージインストール
RUN apt update && \
    apt -y install \
    git \
    zip \
    unzip \
    vim \
    && docker-php-ext-install opcache \
    && docker-php-ext-install pdo_mysql bcmath

# Composer
COPY --from=composer:2.1 /usr/bin/composer /usr/bin/composer

WORKDIR /var/www/html