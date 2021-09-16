FROM node:12 AS builder
WORKDIR  /app
COPY . .
RUN npm install
RUN npm build

FROM node:12-alpine
WORKDIR /app
COPY --from=builder /app ./


CMD ["npm",  "run", "start:prod"]

