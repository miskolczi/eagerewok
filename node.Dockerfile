FROM node:latest

# install global node packages
RUN npm install -g npm --loglevel=error && \
	npm install -g @angular/cli --loglevel=error && \
	npm install -g karma --loglevel=error

# copy just node deps 
COPY ./angular/package.json /eagerewok/angular/package.json

# install project node packages
# RUN cd /eagerewok/angular && npm install --loglevel=error

VOLUME /eagerewok
WORKDIR /eagerewok/angular

EXPOSE 4200

# CMD npm run dev
CMD ["/bin/sh"]