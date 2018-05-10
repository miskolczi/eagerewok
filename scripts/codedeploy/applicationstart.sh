#!/bin/bash

# DATABASE_URL=localhost RESEARVED VAR!!!!!

export \
  POSTGRES_DB_URL=localhost \
  POSTGRES_PASSWORD=colonelhindsight \
  DJANGO_SECRET_KEY=sdfmjhsgfhsf
  DJANGO_CONFIGURATION=Production \
export \
  DJANGO_DB_STRING=postgres://postgres:$POSTGRES_PASSWORD@$POSTGRES_DB_URL:5432/postgres

# django
cd /eagerewok &&
pip3 install -r requirements.txt &&
python3 wait_for_postgres.py &&
./manage.py migrate &&
./manage.py runserver 127.0.0.1:8000

# angular
cd /eagerewok/angular/ &&
npm install &&
ng build --prod --build-optimizer &&
mkdir -p /var/www/html &&
cp dist/* /var/www/html/ -rf
