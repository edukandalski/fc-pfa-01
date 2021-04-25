FROM node:15-alpine

WORKDIR /app

COPY ./index.js .

RUN npm init -y && \
  npm install mysql

ENTRYPOINT [ "node", "index.js" ]

