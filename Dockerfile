FROM centos:latest
# MAINTAINER Name Here <username@localhost>
RUN rpm -Uvh http://mirror.pnl.gov/epel/7/x86_64/Packages/e/epel-release-7-12.noarch.rpm
RUN yum install nodejs npm -y 
COPY ./src/package.json /app/src/package.json
WORKDIR /app/src
COPY ./src /app/src
RUN cd /app/src; npm install; npm install -g nodemon
EXPOSE 8080
CMD ["nodemon", "/app/src/app.js"]
