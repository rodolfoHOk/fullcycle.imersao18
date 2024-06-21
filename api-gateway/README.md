# Imersão FullStack & FullCycle 18 - Kong API Gateway

> Evento realizado pela FullCycle / CodeEdu

> Serviços de API Gateway com Kong

## Rodar

### Requisitos

- Docker

### Comandos

- docker compose -f docker-compose.db.yaml up

  (com DB acima) ou (sem DB abaixo)

- docker compose -f docker-compose.dbless.yaml up

## Guia exemplo

### Registrar serviço com rota e request header x-api-token

- http://localhost:8002/
- -> Gateway Services -> New Gateway Service: fields Name(example: events), Upstream URL(example: http://events:8080) -> Save
- Gateway Services -> service-name(example: events) -> Routes -> New Route: fields Name(example: events), Protocols(example: HTTP), Paths(example: /events) -> Save
- Gateway Service: events -> Plugins -> New Plugin -> Request Transformer: Add.Headers -> +Add(example X-Api-Token: 1234) -> Save

### Registrar consumidor com credentials tipo key authentication

- http://localhost:8002/
- -> Consumers -> New Consumer: fields Username(example: nextjs), Custom ID(example: nextjs) -> Save
- -> Gateway Services -> service-name(example: events) -> Routes -> route-name(example: events) -> Plugins -> New Plugin -> Key Authentication: fields Key In Query(unselect), Key Names(example: 1234) -> Save
- -> Gateway Services -> service-name(example: events) -> Routes -> route-name(example: events) -> Edit -> fields HTTP Routing Rules -> Headers(example: name: X-Api-Token, value: 1234) -> Save
- -> Consumers -> consumer-username(example: nextjs) -> Credentials -> New Key Auth Credential: fields Key(example: 1234) -> Save

### Kong Deck dump

```bash
docker run --add-host host.docker.internal:host-gateway --network host kong/deck:v1.37.0 gateway dump --kong-addr http://host.docker.internal:8001
```

- [dump gerado pego exemplo](/api-gateway/dump-example.yaml)

## Guia projeto api gateway

-

## Kong

[Kong readme](/api-gateway/kong.md)

## Dados dos projetos da imersão

[Dados dos projetos](/api-gateway/projetos.md)
