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

## 4. Resumo dos resultados

| Caso | Cenário | Resultado final |
|---|---|---|
| CT-001 | Listar publicações | Aprovado |
| CT-002 | Consultar publicação existente | Aprovado |
| CT-003 | Consultar publicação inexistente | Aprovado após correção e reexecução |
| CT-004 | Criar publicação | Aprovado |
| CT-005 | Atualizar publicação | Aprovado |
| CT-006 | Excluir publicação | Aprovado |

**Resultado funcional:** 6 de 6 cenários aprovados.

### Resultado da execução em lote — Collection Runner

| Indicador | Resultado |
|---|---:|
| Requisições executadas | 6 |
| Testes automatizados | 18 |
| Aprovados | 18 |
| Reprovados | 0 |
| Ignorados | 0 |
| Erros | 0 |
| Duração total observada | 1,708 s |
| Tempo médio de resposta observado | 133 ms |

**Resultado da execução em lote:** 18/18 asserções aprovadas (100%).

## 5. Histórico relevante

Durante a primeira execução de CT-003, o Postman recebeu HTTP 404 e objeto JSON vazio, enquanto o teste esperava HTTP 200. A asserção de status falhou e a asserção do corpo passou.

Após analisar a resposta observada, o critério de aceite e o script foram ajustados para validar HTTP 404 e objeto vazio. Na reexecução individual, as duas asserções passaram. Na execução posterior da coleção pelo Runner, CT-003 também foi aprovado.

Esse histórico foi mantido em [execution-results.md](execution-results.md) para preservar a rastreabilidade da execução e da correção.

## 6. Observações técnicas

- As operações POST, PUT e DELETE do JSONPlaceholder são simuladas e não persistem alterações no servidor.
- Os tempos de resposta registrados são observações pontuais e não representam validação de SLA ou teste de desempenho.
- A execução em lote foi realizada com uma iteração e sem ambiente selecionado; a coleção utiliza a variável `baseUrl`.
- Os resultados se aplicam aos endpoints e dados utilizados nestas execuções.
- O projeto é demonstrativo e utiliza dados fictícios, sem informações confidenciais.

## 7. Artefatos do projeto

- [README do projeto](README.md)
- [Levantamento de requisitos](requirements.md)
- [Casos de teste](test-cases.md)
- [Coleção Postman](collection/api-testing.postman_collection.json)
- [Histórico de execução](execution-results.md)
- [Evidências visuais](evidences/README.md)

## 8. Conclusão

Os seis cenários planejados foram executados e aprovados na execução final. A execução em lote pelo Postman Collection Runner confirmou 18 asserções aprovadas, sem falhas, testes ignorados ou erros.

O projeto demonstra elaboração de requisitos e casos de teste, execução de requisições REST, criação de asserções automatizadas no Postman, análise de divergências, correção de critérios, reexecução, execução em lote e documentação de resultados.

## 9. Próximas melhorias

- Versionar a captura de tela do Collection Runner na pasta de evidências.
- Ampliar cenários negativos para payloads inválidos, conforme contrato da API.
- Avaliar execução automatizada via Newman ou Postman CLI.
