```sh
docker network create pfa_01
docker run --rm --name pfa_sql -d --mount type=bind,source=$(pwd)/mysql,target=/var/lib/mysql -e MYSQL_DATABASE=pfa -e MYSQL_ROOT_PASSWORD=rootpfa --network pfa_01 mysql:5.7
```
Para inicializar o container o backend Node:
```sh
docker build -t edukandalski/node node/
docker run --rm -d --name pfa_node --network pfa_01 edukandalski/node
```
