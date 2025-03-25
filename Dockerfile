FROM oven/bun:latest

WORKDIR /app

COPY . .

RUN bun i

ENTRYPOINT [ "bun", "start" ]