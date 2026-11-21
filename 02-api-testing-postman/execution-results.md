# Registro de Execução — API Testing

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

### Análise do QA

A requisição retornou HTTP 200 OK. O corpo da resposta contém uma lista com 100 publicações. A estrutura do primeiro item contém os campos esperados (`userId`, `id`, `title` e `body`). As quatro asserções automatizadas configuradas na requisição foram aprovadas.

O tempo de 64 ms e o tamanho de 7.78 KB foram registrados como observações desta execução, não como critérios de aprovação, pois não foi definido um SLA de desempenho.

### Evidência

A captura de tela da execução no Postman deve ser mantida como evidência visual deste resultado.

### Observação

Este registro corresponde à execução de CT-001 (listar publicações). Os demais casos de teste permanecem pendentes até serem executados individualmente.


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

### Análise do QA

A requisição retornou HTTP 200 OK e um objeto JSON correspondente à publicação de ID 1. Os campos `userId`, `id`, `title` e `body` foram retornados. As quatro asserções automatizadas configuradas na requisição foram aprovadas.

O tempo de 53 ms e o tamanho de 1.1 KB foram registrados como observações desta execução, não como critérios de aprovação, pois não foi definido um SLA de desempenho.

### Evidência

A captura de tela da execução no Postman deve ser mantida como evidência visual deste resultado.

### Observação

Este registro corresponde à execução de CT-002 (consultar publicação existente). CT-001 e CT-002 estão aprovados; os demais casos permanecem pendentes.


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

### Análise do QA

A API retornou HTTP 404 Not Found e corpo JSON vazio. A primeira versão do teste esperava HTTP 200, por isso uma das duas asserções falhou. A segunda asserção, que verifica o objeto vazio, passou.

A análise identificou uma incorreção no resultado esperado documentado, e não evidência suficiente de defeito na API. O critério e o script foram corrigidos para validar HTTP 404 e objeto vazio, conforme o comportamento observado.

### Ação corretiva

- Atualizar RF-003 e CT-003 para registrar HTTP 404 e objeto vazio.
- Atualizar o script da coleção Postman para validar HTTP 404.
- Reexecutar CT-003 após atualizar a requisição local no Postman.

**Situação:** aguardando reexecução com a asserção corrigida.


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

### Análise do QA

Após a correção do critério e do script, a requisição foi executada novamente. A API retornou HTTP 404 Not Found e objeto JSON vazio. As duas asserções automatizadas passaram, confirmando que o comportamento observado corresponde ao resultado esperado documentado para este cenário.

O tempo de 56 ms e o tamanho de 929 B foram registrados como observações, não como critérios de aprovação.

### Situação do caso

CT-003 aprovado na reexecução. A execução inicial reprovada foi preservada neste relatório como histórico da identificação e correção da divergência no teste.
