# Registro de Execução — API Testing

## Execuções individuais

Os registros detalhados das seis requisições e o histórico de correção de CT-003 estão documentados abaixo.

## Execução 001 — CT-001: Listar publicações

| Campo | Resultado |
|---|---|
| Data da execução | 21/11/2026 |
| Ferramenta | Postman |
| Método | GET |
| Endpoint | `{{baseUrl}}/posts` |
| Status HTTP | 200 OK |
| Tempo de resposta observado | 64 ms |
| Tamanho da resposta observado | 7.78 KB |
| Quantidade de itens retornados | 100 |
| Resultado | APROVADO |

### Validações automatizadas

| Validação | Resultado |
|---|---|
| Status code igual a 200 | PASS |
| Cabeçalho Content-Type indica JSON | PASS |
| Corpo é uma lista com 100 publicações | PASS |
| Primeiro item possui userId, id, title e body | PASS |

**Resumo do Postman:** 4/4 testes aprovados.

A requisição retornou HTTP 200 OK e uma lista com 100 publicações. Os campos esperados foram identificados no primeiro item. O tempo e o tamanho da resposta são observações, não critérios de aprovação, pois não foi definido SLA.

## Execução 002 — CT-002: Consultar publicação existente

| Campo | Resultado |
|---|---|
| Data da execução | 21/11/2026 |
| Ferramenta | Postman |
| Método | GET |
| Endpoint | `{{baseUrl}}/posts/1` |
| Status HTTP | 200 OK |
| Tempo de resposta observado | 53 ms |
| Tamanho da resposta observado | 1.1 KB |
| ID retornado | 1 |
| Resultado | APROVADO |

### Validações automatizadas

| Validação | Resultado |
|---|---|
| Status code igual a 200 | PASS |
| ID retornado igual a 1 | PASS |
| Campos principais presentes | PASS |
| Tipos dos campos válidos | PASS |

**Resumo do Postman:** 4/4 testes aprovados.

A API retornou HTTP 200 OK e o objeto JSON da publicação de ID 1, com os campos e tipos esperados. Tempo e tamanho são observações, sem SLA definido.

## Execução 003 — CT-003: Consultar publicação inexistente (primeira execução)

| Campo | Resultado |
|---|---|
| Data da execução | 21/11/2026 |
| Ferramenta | Postman |
| Método | GET |
| Endpoint | `{{baseUrl}}/posts/9999` |
| Status HTTP observado | 404 Not Found |
| Tempo de resposta observado | 160 ms |
| Tamanho da resposta observado | 913 B |
| Corpo observado | Objeto JSON vazio (`{}`) |
| Resultado da automação inicial | REPROVADO — 1/2 |

A primeira versão do teste esperava HTTP 200, por isso uma asserção falhou. A validação do objeto JSON vazio passou. A análise identificou divergência no resultado esperado do teste, não evidência suficiente de defeito na API.

### Ação corretiva

- Ajustar RF-003 e CT-003 para esperar HTTP 404 e objeto vazio.
- Atualizar o script da coleção Postman.
- Reexecutar CT-003.

## Reexecução 004 — CT-003: Consultar publicação inexistente

| Campo | Resultado |
|---|---|
| Data da execução | 21/11/2026 |
| Ferramenta | Postman |
| Método | GET |
| Endpoint | `{{baseUrl}}/posts/9999` |
| Status HTTP observado | 404 Not Found |
| Tempo de resposta observado | 56 ms |
| Tamanho da resposta observado | 929 B |
| Corpo observado | Objeto JSON vazio (`{}`) |
| Resultado | APROVADO |

### Validações automatizadas

| Validação | Resultado |
|---|---|
| Status code igual a 404 | PASS |
| Resposta é objeto JSON vazio | PASS |

**Resumo do Postman:** 2/2 testes aprovados.

Após a correção do critério e do script, as duas asserções passaram. A execução inicial foi preservada como histórico de rastreabilidade.

## Execução 005 — CT-004: Criar publicação com dados válidos

| Campo | Resultado |
|---|---|
| Data da execução | 21/11/2026 |
| Ferramenta | Postman |
| Método | POST |
| Endpoint | `{{baseUrl}}/posts` |
| Status HTTP | 201 Created |
| Tempo de resposta observado | 197 ms |
| Tamanho da resposta observado | 1.15 KB |
| ID retornado | 101 |
| Resultado | APROVADO |

### Validações automatizadas

| Validação | Resultado |
|---|---|
| Status code igual a 201 | PASS |
| Título retornado igual ao enviado | PASS |
| userId retornado igual a 1 | PASS |

**Resumo do Postman:** 3/3 testes aprovados.

A API retornou HTTP 201 Created e os valores enviados no payload. JSONPlaceholder simula a criação e não persiste o registro; o ID 101 é o identificador retornado pela simulação.

## Execução 006 — CT-005: Atualizar publicação com dados válidos

| Campo | Resultado |
|---|---|
| Data da execução | 21/11/2026 |
| Ferramenta | Postman |
| Método | PUT |
| Endpoint | `{{baseUrl}}/posts/1` |
| Status HTTP | 200 OK |
| Tempo de resposta observado | 405 ms |
| Tamanho da resposta observado | 1017 B |
| ID retornado | 1 |
| Resultado | APROVADO |

### Validações automatizadas

| Validação | Resultado |
|---|---|
| Status code igual a 200 | PASS |
| ID retornado igual a 1 | PASS |
| Título retornado igual ao enviado | PASS |

**Resumo do Postman:** 3/3 testes aprovados.

A API retornou HTTP 200 OK e os valores enviados, incluindo ID 1 e o título atualizado. JSONPlaceholder simula a atualização e não persiste as alterações.

## Execução 007 — CT-006: Excluir publicação

| Campo | Resultado |
|---|---|
| Data da execução | 21/11/2026 |
| Ferramenta | Postman |
| Método | DELETE |
| Endpoint | `{{baseUrl}}/posts/1` |
| Status HTTP | 200 OK |
| Tempo de resposta observado | 159 ms |
| Tamanho da resposta observado | 910 B |
| Corpo observado | Objeto JSON vazio (`{}`) |
| Resultado | APROVADO |

### Validações automatizadas

| Validação | Resultado |
|---|---|
| Status code igual a 200 | PASS |
| Resposta é um objeto JSON vazio | PASS |

**Resumo do Postman:** 2/2 testes aprovados.

A API retornou HTTP 200 OK e objeto JSON vazio. JSONPlaceholder simula a exclusão; a operação não remove dados persistidos no servidor.

---

## Execução 008 — Execução em lote da coleção (Collection Runner)

| Campo | Resultado |
|---|---|
| Data da execução | 21/11/2026 |
| Ferramenta | Postman Collection Runner |
| Coleção | QA Portfolio - JSONPlaceholder API Testing |
| Iterações | 1 |
| Requisições executadas | 6 |
| Total de asserções automatizadas | 18 |
| Testes aprovados | 18 |
| Testes reprovados | 0 |
| Testes ignorados | 0 |
| Erros | 0 |
| Duração total observada | 1,708 s |
| Tempo médio de resposta observado | 133 ms |
| Ambiente | Nenhum (variável baseUrl da coleção) |
| Resultado | APROVADO |

### Resultado por cenário

| ID | Cenário | Testes aprovados | Resultado |
|---|---|---:|---|
| CT-001 | Listar publicações (GET) | 4/4 | APROVADO |
| CT-002 | Consultar publicação existente (GET) | 4/4 | APROVADO |
| CT-003 | Consultar publicação inexistente (GET) | 2/2 | APROVADO |
| CT-004 | Criar publicação (POST simulado) | 3/3 | APROVADO |
| CT-005 | Atualizar publicação (PUT simulado) | 3/3 | APROVADO |
| CT-006 | Excluir publicação (DELETE simulado) | 2/2 | APROVADO |
| **Total** | **6 requisições** | **18/18** | **APROVADO** |

### Análise do QA

A coleção foi executada integralmente pelo Collection Runner, com uma iteração e sem seleção de ambiente. As seis requisições foram processadas e todas as 18 asserções automatizadas passaram. O Runner registrou zero falhas, zero testes ignorados e zero erros.

A duração de 1,708 segundo e a média de resposta de 133 ms são métricas observadas nesta execução específica; não representam validação de SLA ou teste de desempenho.

### Conclusão da execução em lote

A execução automatizada em lote confirmou os resultados dos seis cenários da coleção. CT-003 permaneceu aprovado após a correção documentada anteriormente. As operações POST, PUT e DELETE continuam sendo simulações da API JSONPlaceholder, sem persistência de dados.

### Evidência

Captura de tela do Postman Collection Runner com o resumo de 18 testes aprovados, zero falhas e os resultados dos seis cenários. Arquivo de evidência a ser versionado em `evidences/`.
