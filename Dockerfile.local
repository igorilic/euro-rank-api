FROM node:10-alpine
LABEL author="Igor Ilic"
ENV APP_DIR /usr/app
WORKDIR ${APP_DIR}

COPY ["./package.json", "./"]
# COPY ./src ./src
RUN ["npm", "install", "--quiet"]
COPY . .
