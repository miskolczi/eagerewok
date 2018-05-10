#!/bin/bash

sudo su

# xenial
PKGS="ruby wget nginx postgresql"
apt update
apt install $PKGS -y

# jic vpc dns hostname resolution dont work
# https://forums.aws.amazon.com/thread.jspa?threadID=104765
sh -c "echo 127.0.0.1 $(hostname) >> /etc/hosts"

# install codedeploy agent
cd ~
wget https://aws-codedeploy-us-east-1.s3.amazonaws.com/latest/install
chmod +x ./install
./install auto

# setup local postgres
sudo -u postgres psql -c "ALTER USER postgres PASSWORD '';"

# passwd for restricting nginx
htpasswd -b -c /etc/nginx/.htpasswd admin colonelhindsight

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