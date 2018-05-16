#!/bin/bash

# DATABASE_URL=localhost RESEARVED VAR!!!!!

export \
  POSTGRES_DB_URL=localhost \
  POSTGRES_PASSWORD=colonelhindsight \
  DJANGO_SECRET_KEY=sdfmjhsgfhsf \
  DJANGO_CONFIGURATION=Production
export \
  DJANGO_DB_STRING=postgres://postgres:$POSTGRES_PASSWORD@$POSTGRES_DB_URL:5432/postgres

alias pip3.6="python3.6 -m pip"

# django
mkdir -p /run/uwsgi
chown www-data:www-data /run/uwsgi

cd /eagerewok &&
pip3.6 install -r requirements.txt -t /usr/lib/python3/dist-packages &&
python3.6 wait_for_postgres.py &&
python3.6 manage.py migrate &&
# python3.6 manage.py runserver 127.0.0.1:8000
# uwsgi --http :8000 --wsgi-file eagerewok/wsgi.py
# uwsgi --uid www-data --gid www-data --socket /run/uwsgi/uwsgi.sock --wsgi-file /eagerewok/eagerewok/wsgi.py --chmod-socket=664 --env DJANGO_SECRET_KEY=sdfmjhsgfhsf --env DJANGO_DB_STRING=postgres://postgres:$POSTGRES_PASSWORD@$POSTGRES_DB_URL:5432/postgres

/usr/local/bin/uwsgi \
	--socket /run/uwsgi/uwsgi.sock \
	--wsgi-file /eagerewok/eagerewok/wsgi.py \
	--chmod-socket=664 \
	--uid www-data \
	--gid www-data \
	--pythonpath /home/ubuntu/.local/lib/python3.6/site-packages/ \
	--env DJANGO_SECRET_KEY=sdfmjhsgfhsf \
	--env DJANGO_DB_STRING=postgres://postgres:$POSTGRES_PASSWORD@$POSTGRES_DB_URL:5432/postgres \
	--daemonize /var/log/uwsgi-eagerewok.log

# angular
cd /eagerewok/angular/ &&
npm install &&
ng build --prod --build-optimizer --base-href . &&
mkdir -p /var/www/html &&
cp dist/* /var/www/html/ -rf
