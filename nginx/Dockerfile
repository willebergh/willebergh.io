FROM nginx:alpine

COPY willebergh.io /etc/nginx/sites-available/willebergh.io

RUN ln -s /etc/nginx/sites-available/willebergh.io /etc/nginx/sites-enabled/willebergh.io

RUN systemctl restart nginx
