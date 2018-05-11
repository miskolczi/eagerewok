# eagerewok

[![Build Status](https://travis-ci.org/danielklim/eagerewok.svg?branch=master)](https://travis-ci.org/danielklim/eagerewok)
[![Built with](https://img.shields.io/badge/Built_with-Cookiecutter_Django_Rest-F7B633.svg)](https://github.com/agconti/cookiecutter-django-rest)

talent management. Check out the project's [documentation](http://danielklim.github.io/eagerewok/).

# Prerequisites

- [Docker](https://docs.docker.com/docker-for-mac/install/)  
- [Travis CLI](http://blog.travis-ci.com/2013-01-14-new-client/)
- [Heroku Toolbelt](https://toolbelt.heroku.com/)

# Local Development

Start the dev server for local development:
```bash
docker-compose up
```

Run a command inside the docker container:

```bash
docker-compose run --rm web [command]
```

Create initial admin user:

```bash
curl -d '{"username":"admin", "password1":"unobtanium", "password2":"unobtanium", "email":"test@test.com", "first_name":"test", "last_name":"user"}' \
	 -H "Content-Type: application/json" \
	 -X POST http://localhost:8000/api/rest-auth/register/
```

Test REST login:
```bash
curl -d '{"username":"admin", "password":"unobtanium"}' -H "Content-Type: application/json" -X POST http://localhost:8000/api/rest-auth/login/
```

Test token:
```bash
curl -H "Authorization: Token 75a015369025fff3912939ac3a3e20f680131a2c" -X GET http://localhost:8000/api/users
```

Test REST logout:
```bash
curl  -H "Authorization: Token 9e2ecab6ddb40fefef48da8039695bbb8200ec1b" -X POST http://localhost:8000/api/auth/logout/
```

# Continuous Deployment

Deployment is automated via Travis. When builds pass on the master or qa branch, Travis will deploy that branch to Amazon EC2 via CodeDeploy & S3.

To set up

## References:
CodeDeploy: https://docs.aws.amazon.com/codedeploy/latest/userguide/codedeploy-agent-operations-install-ubuntu.html


<!-- Initialize the production server:

```
heroku create eagerewok-prod --remote prod && \
	heroku addons:create newrelic:wayne --app eagerewok-prod && \
	heroku addons:create heroku-postgresql:hobby-dev --app eagerewok-prod && \
	heroku config:set DJANGO_SECRET_KEY=`openssl rand -base64 32` \
		DJANGO_AWS_ACCESS_KEY_ID="Add your id" \
		DJANGO_AWS_SECRET_ACCESS_KEY="Add your key" \
		DJANGO_AWS_STORAGE_BUCKET_NAME="eagerewok-prod" \
		DJANGO_CONFIGURATION="Production" \
		DJANGO_SETTINGS_MODULE="eagerewok.config" \
		--app eagerewok-prod
```

Initialize the qa server:

```
heroku create eagerewok-qa --remote qa && \
	heroku addons:create newrelic:wayne --app eagerewok-qa && \
	heroku addons:create heroku-postgresql:hobby-dev --app eagerewok-qa && \
	heroku config:set DJANGO_SECRET_KEY=`openssl rand -base64 32` \
		DJANGO_AWS_ACCESS_KEY_ID="Add your id" \
		DJANGO_AWS_SECRET_ACCESS_KEY="Add your key" \
		DJANGO_AWS_STORAGE_BUCKET_NAME="eagerewok-qa" \
		DJANGO_CONFIGURATION="Production" \
		DJANGO_SETTINGS_MODULE="eagerewok.config" \
		--app eagerewok-qa
```

Securely add your Heroku credentials to Travis so that it can automatically deploy your changes:

```bash
travis encrypt HEROKU_AUTH_TOKEN="$(heroku auth:token)" --add
```

Commit your changes and push to master and qa to trigger your first deploys:

```bash
git commit -a -m "ci(travis): add Heroku credentials" && \
git push origin master:qa && \
git push origin master
``` -->

<!-- You're now ready to continuously ship! ✨ 💅 🛳 -->
