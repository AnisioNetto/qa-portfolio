# Levantamento de Requisitos — API de Publicações

## 1. Identificação

- **Projeto:** API Testing — JSONPlaceholder
- **Sistema em teste:** JSONPlaceholder
- **Recurso em escopo:** Posts
- **Base URL:** https://jsonplaceholder.typicode.com
- **Tipo de projeto:** Demonstrativo / portfólio de QA

## 2. Objetivo

Validar o comportamento dos endpoints do recurso `/posts`, verificando códigos HTTP, estrutura e conteúdo das respostas e comportamento observado nas operações de consulta e escrita simulada.

## 3. Escopo

### Dentro do escopo

- Listar publicações: `GET /posts`
- Consultar publicação por ID: `GET /posts/{id}`
- Criar publicação: `POST /posts`
- Atualizar publicação: `PUT /posts/{id}`
- Excluir publicação: `DELETE /posts/{id}`
- Validar status HTTP, cabeçalhos relevantes e corpo JSON.
- Registrar resultados, evidências e eventuais divergências.

### Fora do escopo

- Interface gráfica ou front-end.
- Autenticação e autorização.
- Persistência real das operações de escrita.
- Testes de carga, segurança ou desempenho especializado.
- Recursos diferentes de `/posts`.

## 4. Requisitos funcionais e critérios de aceite

| ID | Requisito | Critério de aceite / comportamento a validar |
|---|---|---|
| RF-001 | Listar publicações | `GET /posts` retorna HTTP 200 e uma lista JSON de publicações. Na API de demonstração, a lista contém 100 itens. |
| RF-002 | Consultar publicação existente | `GET /posts/1` retorna HTTP 200 e um objeto com `userId`, `id`, `title` e `body`; o ID deve ser 1. |
| RF-003 | Consultar publicação inexistente | Para `GET /posts/9999`, registrar o comportamento real da API. JSONPlaceholder retorna HTTP 200 com objeto vazio nesse cenário; isso não deve ser confundido com uma regra universal de APIs REST. |
| RF-004 | Criar publicação | `POST /posts` com JSON válido retorna HTTP 201 e uma resposta contendo os dados enviados e um ID. A criação é simulada. |
| RF-005 | Atualizar publicação | `PUT /posts/1` com JSON válido retorna HTTP 200 e uma resposta que representa os dados enviados. A atualização é simulada. |
| RF-006 | Excluir publicação | `DELETE /posts/1` retorna HTTP 200 e objeto vazio. A exclusão é simulada. |

## 5. Regras e observações da API de demonstração

- JSONPlaceholder é uma API pública destinada a testes e prototipação.
- As operações de criação, atualização e exclusão simulam respostas, mas não persistem alterações no servidor.
- O comportamento de recurso inexistente será documentado conforme a resposta observada, sem assumir que todas as APIs devem responder da mesma forma.
- Os critérios deste projeto descrevem o comportamento esperado desta API específica, não requisitos de um produto comercial real.

## 6. Estratégia de testes

- Testes funcionais de API.
- Cenários positivos e negativos quando aplicáveis.
- Validação de status HTTP.
- Validação de estrutura JSON e tipos de dados.
- Validação de campos e valores relevantes.
- Registro do tempo de resposta como dado observado, sem estabelecer SLA não fornecido.

## 7. Evidência inicial

- **Caso executado:** consulta de publicação existente — `GET /posts/1`
- **Resultado observado:** HTTP 200
- **Tempo observado:** 77 ms
- **Tamanho da resposta observado:** 1.09 KB
- **Campos visualizados:** `userId`, `id`, `title`, `body`
- **Avaliação inicial:** resultado compatível com o critério RF-002.
- **Observação:** execução manual inicial; as asserções automatizadas ainda serão implementadas.

## 8. Pendências

- [ ] Revisar os requisitos e critérios de aceite.
- [ ] Elaborar casos de teste detalhados.
- [ ] Importar e executar a coleção Postman.
- [ ] Registrar resultados reais de cada cenário.
- [ ] Anexar evidências de execução.
- [ ] Consolidar relatório final.
