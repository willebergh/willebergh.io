server {
    
    listen 80;
    listen [::]:80;

    server_name willebergh.io;
    return 301 https://willebergh.io$request_uri;

}

server {

    listen 443 http2 ssl;
    listen [::]:443 http2 ssl;

    server_name willebergh.io;

    ssl_certificate /etc/letsencrypt/live/willebergh.io/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/willebergh.io/privkey.pem;
    include /etc/letsencrypt/options-ssl-nginx.conf;
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem;

    location / {
        proxy_pass http://localhost:8080;
    }

    location /api {
        proxy_pass http://localhost:5000;
    }

}