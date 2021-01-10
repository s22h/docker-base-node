# docker-base-node

A base Dockerfile for node development.

## Build

```
docker build -t docker-base-node .
```

## Run

```
docker run -d -p 3000:3000 -v [LOCAL SRC PATH]:/usr/local/app docker-base-node
```
