FROM mysql:5.7

WORKDIR /app

COPY ./initialize.sql .

ENV MYSQL_DATABASE=pfa \
  MYSQL_ROOT_PASSWORD=rootpfa