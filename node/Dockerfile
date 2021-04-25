FROM node:15-alpine

WORKDIR /app

COPY ./index.js .

RUN npm init -y && \
  npm install mysql && \
  npm install express

EXPOSE 3000

ENTRYPOINT [ "node", "index.js" ]