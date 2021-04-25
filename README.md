# Code Education - Docker PFA - Desafio 1

## Descrição
Para resolução do desafio eu escolhi usar a imagem padrão do MySQL (5.7), e criar duas imagens, uma para o backend NodeJs e outra para o Nginx servir de proxy reverso para requisições na porta 8080 serem encaminhadas para o backend que roda na porta 3000.
O backend é responsável por criar a tabela de tópicos do curso, limpar ela inicialmente e inserir alguns dados. Após isso uma consulta ao banco é feita e o resultado fica no Log.
As requisições para http://localhost:8080 também vão disparar a consulta ao banco de dados e retornar um JSON com os dados vindos do MySQL.

## Execução
Para subir o banco de dados MySQL, executar os comandos:
```sh
docker network create pfa_01
docker run --rm --name pfa_sql -d --mount type=bind,source=$(pwd)/mysql,target=/var/lib/mysql -e MYSQL_DATABASE=pfa -e MYSQL_ROOT_PASSWORD=rootpfa --network pfa_01 mysql:5.7
```
Em seguida, para inicializar o container do backend Node:
```sh
docker build -t edukandalski/node node/
docker run --rm -d --name pfa_node --network pfa_01 edukandalski/node
```
Por fim, para inicializar o container do Nginx:
```sh
docker build -t edukandalski/nginx nginx/
docker run --rm -d --name pfa_nginx --network pfa_01 -p 8080:80 edukandalski/nginx
```
Após isso já é possível disparar requisições GET na porta 8080 do localhost.

## Imagens no DockerHub
As imagens do Node e Nginx também estão disponíveis no DockerHub:
- [edukandalski/node](https://hub.docker.com/repository/docker/edukandalski/node)
- [edukandalski/nginx](https://hub.docker.com/repository/docker/edukandalski/nginx)