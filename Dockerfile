FROM ubuntu:20.10

WORKDIR /usr/local/app

RUN apt update && apt upgrade -y
RUN apt install -y nodejs yarnpkg
RUN yarnpkg global add nodemon

CMD yarnpkg && yarnpkg start
