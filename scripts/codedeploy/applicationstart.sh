#!/bin/bash

# django
cd /eagerewok
python wait_for_postgres.py &&
./manage.py migrate &&
./manage.py runserver 127.0.0.1:8000 &&

# angular
cd /eagerewok/angular/ &&
ng build --prod --build-optimizer &&
mkdir -p /var/www/html &&
rm -rf /var/www/html/* &&
cp dist/* /var/www/html/
