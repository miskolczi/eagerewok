#!/bin/bash

docker build . -f node.Dockerfile -t eagerewok-node
docker build . -f django.Dockerfile -t eagerewok-django
