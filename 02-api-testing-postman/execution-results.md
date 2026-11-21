# Registro de Execução — API Testing

## Resumo da execução individual

Os detalhes das execuções individuais e o histórico da correção de CT-003 estão registrados abaixo.

| Caso | Cenário | Resultado final |
|---|---|---|
| CT-001 | Listar publicações | Aprovado |
| CT-002 | Consultar publicação existente | Aprovado |
| CT-003 | Consultar publicação inexistente | Aprovado após correção e reexecução |
| CT-004 | Criar publicação (simulada) | Aprovado |
| CT-005 | Atualizar publicação (simulada) | Aprovado |
| CT-006 | Excluir publicação (simulada) | Aprovado |

## Execução individual 001 — CT-001: Listar publicações

| Campo | Resultado |
|---|---|
| Data | 21/11/2026 |
| Ferramenta | Postman |
| Método / endpoint | GET `{{baseUrl}}/posts` |
| Status HTTP | 200 OK |
| Tempo observado | 64 ms |
| Tamanho da resposta | 7.78 KB |
| Itens retornados | 100 |
| Resultado | APROVADO — 4/4 |

Validações: status 200; Content-Type JSON; lista com 100 itens; primeiro item com `userId`, `id`, `title` e `body`.

## Execução individual 002 — CT-002: Consultar publicação existente

| Campo | Resultado |
|---|---|
| Data | 21/11/2026 |
| Ferramenta | Postman |
| Método / endpoint | GET `{{baseUrl}}/posts/1` |
| Status HTTP | 200 OK |
| Tempo observado | 53 ms |
| Tamanho da resposta | 1.1 KB |
| ID retornado | 1 |
| Resultado | APROVADO — 4/4 |

Validações: status 200; ID igual a 1; campos principais presentes; tipos de dados válidos.

## Execução individual 003 — CT-003: Consultar publicação inexistente (primeira execução)

| Campo | Resultado |
|---|---|
| Data | 21/11/2026 |
| Método / endpoint | GET `{{baseUrl}}/posts/9999` |
| Status HTTP observado | 404 Not Found |
| Tempo observado | 160 ms |
| Tamanho da resposta | 913 B |
| Corpo | Objeto JSON vazio (`{}`) |
| Resultado inicial | REPROVADO — 1/2 |

A primeira versão esperava HTTP 200. A asserção do status falhou e a asserção do objeto vazio passou. A análise identificou uma expectativa incorreta no teste, sem evidência suficiente de defeito na API.

### Ação corretiva

O critério de aceite e o script foram atualizados para validar HTTP 404 e objeto JSON vazio. O caso foi reexecutado.

## Reexecução individual 004 — CT-003: Consultar publicação inexistente

| Campo | Resultado |
|---|---|
| Data | 21/11/2026 |
| Método / endpoint | GET `{{baseUrl}}/posts/9999` |
| Status HTTP | 404 Not Found |
| Tempo observado | 56 ms |
| Tamanho da resposta | 929 B |
| Corpo | Objeto JSON vazio (`{}`) |
| Resultado | APROVADO — 2/2 |

As duas validações passaram: status 404 e objeto JSON vazio. A execução inicial reprovada foi mantida como histórico de rastreabilidade.

## Execução individual 005 — CT-004: Criar publicação com dados válidos

| Campo | Resultado |
|---|---|
| Data | 21/11/2026 |
| Método / endpoint | POST `{{baseUrl}}/posts` |
| Status HTTP | 201 Created |
| Tempo observado | 197 ms |
| Tamanho da resposta | 1.15 KB |
| ID retornado | 101 |
| Resultado | APROVADO — 3/3 |

Validações: status 201; título retornado igual ao enviado; `userId` igual a 1. O JSONPlaceholder simula a criação e não persiste o registro.

## Execução individual 006 — CT-005: Atualizar publicação

| Campo | Resultado |
|---|---|
| Data | 21/11/2026 |
| Método / endpoint | PUT `{{baseUrl}}/posts/1` |
| Status HTTP | 200 OK |
| Tempo observado | 405 ms |
| Tamanho da resposta | 1017 B |
| ID retornado | 1 |
| Resultado | APROVADO — 3/3 |

Validações: status 200; ID igual a 1; título retornado igual ao enviado. O JSONPlaceholder simula a atualização e não persiste as alterações.

## Execução individual 007 — CT-006: Excluir publicação

| Campo | Resultado |
|---|---|
| Data | 21/11/2026 |
| Método / endpoint | DELETE `{{baseUrl}}/posts/1` |
| Status HTTP | 200 OK |
| Tempo observado | 159 ms |
| Tamanho da resposta | 910 B |
| Corpo | Objeto JSON vazio (`{}`) |
| Resultado | APROVADO — 2/2 |

Validações: status 200 e corpo JSON vazio. O JSONPlaceholder simula a exclusão; os dados não são removidos de forma persistente no servidor.

---

## Execução em lote 008 — Postman Collection Runner

| Campo | Resultado |
|---|---|
| Data da execução | 21/11/2026 |
| Ferramenta | Postman Collection Runner |
| Coleção executada | QA Portfolio - JSONPlaceholder API Testing |
| Iterações | 1 |
| Requisições | 6 |
| Asserções automatizadas | 18 |
| Aprovados | 18 |
| Reprovados | 0 |
| Ignorados | 0 |
| Erros | 0 |
| Duração total | 1,708 s |
| Tempo médio de resposta | 133 ms |
| Ambiente | Nenhum; utilizada variável da coleção `baseUrl` |
| Resultado | APROVADO |

### Resultado por cenário

| ID | Cenário | Resultado |
|---|---|---|
| CT-001 | GET — Listar publicações | 4/4 PASS |
| CT-002 | GET — Consultar publicação existente | 4/4 PASS |
| CT-003 | GET — Consultar publicação inexistente | 2/2 PASS |
| CT-004 | POST — Criar publicação simulada | 3/3 PASS |
| CT-005 | PUT — Atualizar publicação simulada | 3/3 PASS |
| CT-006 | DELETE — Excluir publicação simulada | 2/2 PASS |
| **Total** | **6 requisições** | **18/18 PASS** |

### Análise do QA

A coleção foi executada integralmente pelo Collection Runner, em uma iteração. As seis requisições foram processadas e as 18 asserções passaram. O Runner registrou zero falhas, zero testes ignorados e zero erros.

A duração de 1,708 segundo e a média de resposta de 133 ms são métricas observadas nessa execução específica; não representam validação de SLA ou teste de desempenho.

### Conclusão

A execução em lote confirmou os resultados dos seis cenários da coleção. CT-003 permaneceu aprovado após a correção documentada. POST, PUT e DELETE são simulações da API JSONPlaceholder, sem persistência dos dados.

### Evidência

- Captura do resultado do Collection Runner: [CT-007-execucao-collection-runner.png](evidences/CT-007-execucao-collection-runner.png)
- Galeria de evidências: [evidences/README.md](evidences/README.md)
