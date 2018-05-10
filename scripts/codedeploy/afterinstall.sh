#!/bin/bash
sudo su
mv /etc/nginx/sites-enabled/nginx.conf /etc/nginx/sites-enabled/eagerewok
rm -rf /etc/nginx/sites-enabled/default
service nginx restart