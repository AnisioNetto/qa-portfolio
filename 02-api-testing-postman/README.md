# API Testing — Postman

Projeto demonstrativo de testes funcionais de API REST, desenvolvido para apresentar práticas de Quality Assurance.

## Objetivo

Validar os principais comportamentos de uma API pública, verificando códigos HTTP, estrutura e conteúdo das respostas JSON, tipos de dados e comportamento dos endpoints.

## API utilizada

- **Serviço:** JSONPlaceholder
- **Documentação:** https://jsonplaceholder.typicode.com/
- **Tipo:** API REST pública para testes e demonstrações
- **Dados:** fictícios e destinados a exemplos

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

## Validações automatizadas

Os testes foram implementados em JavaScript na área **Scripts / After response** do Postman, utilizando asserções para validar:

- Códigos de status HTTP.
- Cabeçalho Content-Type.
- Estrutura e quantidade de itens da resposta.
- Presença de campos obrigatórios.
- Tipos de dados.
- Correspondência entre os dados enviados e retornados.
- Identificador do recurso.

## Resultado da execução em lote

**Execução realizada pelo Postman Collection Runner em 21/11/2026.**

| Indicador | Resultado |
|---|---:|
| Requisições executadas | 6 |
| Testes automatizados | 18 |
| Aprovados | 18 |
| Reprovados | 0 |
| Ignorados | 0 |
| Erros | 0 |
| Duração total | 1,708 s |
| Tempo médio de resposta | 133 ms |

**Resultado:** 100% das asserções aprovadas na execução em lote.

O cenário CT-003 teve uma execução inicial com critério de status incorreto. Após análise da resposta HTTP 404, o critério e o script foram corrigidos e o cenário foi aprovado na reexecução. O histórico está registrado em [execution-results.md](execution-results.md).

## Ferramentas e tecnologias

- Postman
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
│   └── README.md
├── execution-results.md
├── final-report.md
├── requirements.md
└── test-cases.md
```

## Artefatos

- [Coleção Postman](collection/api-testing.postman_collection.json)
- [Requisitos](requirements.md)
- [Casos de teste](test-cases.md)
- [Registro de execução](execution-results.md)
- [Relatório final](final-report.md)
- [Evidências](evidences/)

## Próximas melhorias

- Versionar as capturas de tela da execução em lote.
- Ampliar os cenários negativos com base no contrato da API.
- Avaliar execução automatizada via Newman ou Postman CLI.

## Aviso

Este é um projeto independente de estudo e demonstração. Não contém dados, sistemas ou informações confidenciais de empregadores ou clientes.
