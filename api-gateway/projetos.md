# APIs da Imersão

## API dos partners (Nest.js)

Temos 2 API para os partners:

- Endereço original - http://localhost:3000 - Partner 1
- Endereço no Kong Gateway http://host.docker.internal:8000/partner1 - Partner 1

Apenas o endpoint de reserva de ingresso está protegido por autenticação key-auth.
Para fazer a chamada é necessário passar o header `X-Api-Token` com o valor `123`.

Arquivo `api.http` tem o teste da API.

- Endereço original - http://localhost:3001 - Partner 2
- Endereço no Kong Gateway http://host.docker.internal:8000/partner2 - Partner 2

Apenas o endpoint de reserva de ingresso está protegido por autenticação key-auth.
Para fazer a chamada é necessário passar o header `X-Api-Token` com o valor `000`.

## API de vendas (Golang)

- Endereço original - http://localhost:8080 - API de vendas
- Endereço no Kong Gateway http://host.docker.internal:8000/golang - API de vendas

Todos os endpoints estão protegidos por autenticação key-auth.
Para fazer a chamada é necessário passar o header `X-Api-Token` com o valor `890`.

## Front-end (Next.js)

- Endereço original http://localhost:3002 - Front-end
- Endereço no Kong Gateway http://host.docker.internal:8000/nextjs - Front-end
