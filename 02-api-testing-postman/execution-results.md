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
