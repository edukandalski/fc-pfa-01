```sh
docker build -t edukandalski/sql sql/
docker run --rm -d --mount type=bind,source=$(pwd)/mysql,target=/var/lib/mysql edukandalski/sql
docker exec -it CONTAINER_NAME bash
```