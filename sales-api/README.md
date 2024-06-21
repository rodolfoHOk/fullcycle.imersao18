# Imersão FullStack & FullCycle 18 - sales-api

> Evento realizado pela FullCycle / CodeEdu

> Microsserviços de vendas de ingressos em GoLang

## Tecnologias

- GoLang
- MySQL
- Rest
- Tests

## Go

- go mod init github.com/rodolfoHOk/fullcycle.imersao18/sales-api
- go mod tidy

## Swagger Docs

- https://github.com/swaggo/http-swagger
- add comments to api source code [see declarative comments format](https://github.com/swaggo/swag#declarative-comments-format)
- go install github.com/swaggo/swag/cmd/swag@latest
- export PATH=$(go env GOPATH)/bin:$PATH
- swag init --parseDependency --parseInternal -d internal/events/infra/http -g ../../../../cmd/events/main.go
- go get -u github.com/swaggo/http-swagger
- add import "github.com/swaggo/http-swagger" in main.go
- import with \_ the generated docs in main.go

## Rodar

### Requisitos

- Docker
- GoLang

### Comandos

- docker compose up
- go run cmd/events/main.go
