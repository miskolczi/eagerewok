FROM node:latest

# Adds our application code to the image
COPY . code
WORKDIR code

EXPOSE 4200

CMD npm run-script dev
