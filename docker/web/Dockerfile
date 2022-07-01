FROM nginx:1.20.1

COPY ./docker/web/nginx.conf /etc/nginx/nginx.conf
COPY ./docker/web/conf.d/default.conf /etc/nginx/conf.d/default.conf

WORKDIR /var/www/html