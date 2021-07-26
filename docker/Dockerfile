FROM node:16.5.0-alpine3.14
WORKDIR /cubbit-vault
COPY yarn.lock package.json tsconfig.json ./
COPY src src
COPY server server
COPY public public
RUN yarn 