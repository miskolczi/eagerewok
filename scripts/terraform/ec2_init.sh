#!/bin/bash

# add-apt-repository ppa:jonathonf/python-3.6 -y
add-apt-repository ppa:deadsnakes/ppa -y
add-apt-repository ppa:certbot/certbot -y

# xenial
PKGS="ruby wget nginx postgresql python3.6 python3.6-dev python3-pip software-properties-common python-certbot-nginx apache2-utils"
apt update
apt install $PKGS -y
# ln -s /usr/lib/python3/dist-packages/apt_pkg.cpython-35m-x86_64-linux-gnu.so /usr/lib/python3/dist-packages/apt_pkg.so

# setup python 3.6
# rm /usr/bin/python3
# ln -s /usr/bin/python3.6 /usr/bin/python3
# apt purge python3-apt && apt install python3-apt
alias pip3.6="python3.6 -m pip"
pip3.6 install --upgrade pip
pip3.6 install uwsgi

# node
curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
apt install -y nodejs
npm install -g npm
npm install -g @angular/cli
npm install -g karma

# jic vpc dns hostname resolution dont work
# https://forums.aws.amazon.com/thread.jspa?threadID=104765
sh -c "echo 127.0.0.1 $(hostname) >> /etc/hosts"

# install codedeploy agent
cd ~
wget https://aws-codedeploy-us-east-1.s3.amazonaws.com/latest/install
chmod +x ./install
./install auto
service codedeploy-agent start

# setup local postgres
sudo -u postgres psql -c "ALTER USER postgres PASSWORD 'colonelhindsight';"
service postgresql restart

# passwd for restricting nginx
htpasswd -b -c /etc/nginx/.htpasswd admin colonelhindsight

# sudo certbot --nginx -m lim@friends.dds.mil -d eagerewok.dds.codes --agree-tos

# certbot
# apt update &&
# apt install python-certbot-nginx -y

# bionic
# add-apt-repository ppa:brightbox/ruby-ng
# PKGS="libssl1.0-dev rbenv ruby-build wget nginx"
# # rbenv because ruby<2.4 hates normal openssl
# apt update
# apt purge $PKGS -y
# apt install $PKGS -y

# rvm for ruby 2.4 because codedeploy doesnt like ruby2.5
# https://github.com/rbenv/rbenv
# sudo apt-add-repository -y ppa:rael-gc/rvm
# git clone https://github.com/rbenv/rbenv.git ~/.rbenv
# cd ~/.rbenv && src/configure && make -C src
# echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.bash_profile
# source ~/.bash_profile
# source /etc/profile.d/rvm.sh
# sudo rvm install 2.4
# rvm use 2.4