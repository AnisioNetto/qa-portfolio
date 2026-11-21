# Relatório Final de Testes — API de Publicações

## 1. Identificação

- **Projeto:** API Testing — JSONPlaceholder
- **Sistema em teste:** JSONPlaceholder
- **Recurso:** Posts
- **Ferramenta:** Postman
- **Tipo de teste:** Testes funcionais de API REST
- **Base URL:** https://jsonplaceholder.typicode.com
- **Data das execuções registradas:** 21/11/2026

## 2. Objetivo

Validar os principais endpoints do recurso `/posts`, verificando códigos HTTP, estrutura e conteúdo das respostas JSON e comportamento das operações de consulta e escrita simulada.

## 3. Escopo executado

- GET `/posts` — listar publicações.
- GET `/posts/1` — consultar publicação existente.
- GET `/posts/9999` — consultar publicação inexistente.
- POST `/posts` — criar publicação simulada.
- PUT `/posts/1` — atualizar publicação simulada.
- DELETE `/posts/1` — excluir publicação simulada.

## 4. Resultado dos cenários

| Caso | Cenário | Resultado final |
|---|---|---|
| CT-001 | Listar publicações | Aprovado |
| CT-002 | Consultar publicação existente | Aprovado |
| CT-003 | Consultar publicação inexistente | Aprovado após correção e reexecução |
| CT-004 | Criar publicação | Aprovado |
| CT-005 | Atualizar publicação | Aprovado |
| CT-006 | Excluir publicação | Aprovado |

**Resultado funcional:** 6 de 6 cenários aprovados na execução final.

### Execução em lote — Postman Collection Runner

| Indicador | Resultado |
|---|---:|
| Requisições executadas | 6 |
| Iterações | 1 |
| Testes automatizados | 18 |
| Aprovados | 18 |
| Reprovados | 0 |
| Ignorados | 0 |
| Erros | 0 |
| Duração total observada | 1,708 s |
| Tempo médio de resposta observado | 133 ms |

**Resultado:** 18/18 asserções aprovadas (100%).

## 5. Histórico relevante — CT-003

Na primeira execução de CT-003, a API retornou HTTP 404 e objeto JSON vazio, enquanto a expectativa inicial do teste era HTTP 200. A asserção de status falhou e a asserção do corpo passou.

Após a análise, o critério e o script foram corrigidos para validar HTTP 404 e objeto vazio. O cenário foi aprovado na reexecução individual e também na execução em lote.

O histórico está detalhado em [execution-results.md](execution-results.md).

## 6. Observações técnicas

- As operações POST, PUT e DELETE do JSONPlaceholder são simuladas e não persistem alterações no servidor.
- Os tempos de resposta são observações pontuais; não foi executado teste de desempenho nem validação de SLA.
- A execução em lote ocorreu com uma iteração e sem ambiente selecionado; a coleção utiliza a variável `baseUrl`.
- Os resultados se aplicam aos endpoints e dados utilizados nas execuções documentadas.
- O projeto é demonstrativo e utiliza dados fictícios, sem informações confidenciais.

## 7. Artefatos do projeto

- [README do projeto](README.md)
- [Levantamento de requisitos](requirements.md)
- [Casos de teste](test-cases.md)
- [Coleção Postman](collection/api-testing.postman_collection.json)
- [Histórico de execução](execution-results.md)
- [Galeria de evidências](evidences/README.md)
- [Evidência da execução em lote](evidences/CT-007-execucao-collection-runner.png)

## 8. Conclusão

Os seis cenários planejados foram executados e aprovados na execução final. A execução em lote pelo Postman Collection Runner confirmou 18 asserções aprovadas, sem falhas, testes ignorados ou erros.

O projeto demonstra elaboração de requisitos e casos de teste, execução de requisições REST, criação de asserções automatizadas no Postman, análise de divergências, correção de critérios, reexecução, execução em lote e documentação de resultados.

## 9. Próximas melhorias

- Ampliar cenários negativos para payloads inválidos, conforme contrato da API.
- Avaliar execução automatizada via Newman ou Postman CLI.
