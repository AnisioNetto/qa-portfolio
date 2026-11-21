# API Testing — Postman

Projeto demonstrativo de testes funcionais de API REST, desenvolvido para apresentar práticas de Quality Assurance.

## Objetivo

Validar os principais comportamentos de uma API pública, verificando códigos HTTP, estrutura e conteúdo das respostas JSON, tipos de dados e comportamento dos endpoints.

## API utilizada

- **Serviço:** JSONPlaceholder
- **Documentação:** https://jsonplaceholder.typicode.com/
- **Tipo:** API REST pública para testes e demonstrações
- **Recurso em escopo:** `/posts`

> **Importante:** JSONPlaceholder simula as operações POST, PUT e DELETE. As alterações não são persistidas no servidor.

## Escopo dos testes

| ID | Cenário | Método | Endpoint | Resultado esperado |
|---|---|---|---|---|
| CT-001 | Listar publicações | GET | `/posts` | HTTP 200 e lista com 100 posts |
| CT-002 | Consultar publicação existente | GET | `/posts/1` | HTTP 200 e objeto com campos esperados |
| CT-003 | Consultar publicação inexistente | GET | `/posts/9999` | HTTP 404 e objeto JSON vazio |
| CT-004 | Criar publicação (simulado) | POST | `/posts` | HTTP 201 e retorno dos dados enviados com ID |
| CT-005 | Atualizar publicação (simulado) | PUT | `/posts/1` | HTTP 200 e retorno dos dados atualizados |
| CT-006 | Excluir publicação (simulado) | DELETE | `/posts/1` | HTTP 200 e objeto JSON vazio |

## Estratégia e validações automatizadas

Os testes foram implementados em JavaScript na área **Scripts / After response** do Postman. As asserções verificam:

- Códigos de status HTTP.
- Cabeçalho Content-Type.
- Estrutura e quantidade de itens da resposta.
- Presença de campos obrigatórios.
- Tipos de dados.
- Correspondência entre dados enviados e retornados.
- Identificador do recurso.

## Resultado da execução em lote

**Execução realizada pelo Postman Collection Runner em 21/11/2026.**

| Indicador | Resultado |
|---|---:|
| Requisições executadas | 6 |
| Iterações | 1 |
| Testes automatizados | 18 |
| Aprovados | 18 |
| Reprovados | 0 |
| Ignorados | 0 |
| Erros | 0 |
| Duração total | 1,708 s |
| Tempo médio de resposta | 133 ms |

**Resultado:** 18/18 asserções aprovadas na execução em lote.

O CT-003 teve uma primeira execução reprovada porque o critério inicial esperava HTTP 200. Após observar HTTP 404, o critério e o script foram corrigidos; a reexecução individual e a execução em lote passaram. O histórico está em [execution-results.md](execution-results.md).

## Ferramentas e tecnologias

- Postman Collection Runner
- JavaScript
- API REST
- JSON
- Git e GitHub

## Estrutura do projeto

```text
02-api-testing-postman/
├── collection/
│   └── api-testing.postman_collection.json
├── evidences/
│   ├── CT-001-listar-posts.png
│   ├── CT-002-consultar-post.png
│   ├── CT-003-post-inexistente.png
│   ├── CT-004-criar-post.png
│   ├── CT-005-atualizar-post.png
│   ├── CT-006-excluir-post.png
│   ├── CT-007-execucao-collection-runner.png
│   └── README.md
├── execution-results.md
├── final-report.md
├── requirements.md
└── test-cases.md
```

## Artefatos

- [Coleção Postman para importar](collection/api-testing.postman_collection.json)
- [Requisitos](requirements.md)
- [Casos de teste](test-cases.md)
- [Registro de execução](execution-results.md)
- [Relatório final](final-report.md)
- [Galeria de evidências](evidences/README.md)

## Próximas melhorias

- Ampliar cenários negativos para payloads inválidos, conforme contrato da API.
- Avaliar execução automatizada via Newman ou Postman CLI.

## Aviso

Este é um projeto independente de estudo e demonstração. Não contém dados, sistemas ou informações confidenciais de empregadores ou clientes.
