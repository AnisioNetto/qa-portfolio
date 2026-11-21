# Casos de Teste — API de Publicações

## 1. Identificação

- **Projeto:** API Testing — JSONPlaceholder
- **Documento:** Casos de Teste
- **Versão:** 1.0
- **Base URL:** https://jsonplaceholder.typicode.com
- **Requisito relacionado:** RF-001 a RF-006 do documento `requirements.md`

## 2. Convenções

- **Prioridade Alta:** fluxo principal ou validação essencial.
- **Prioridade Média:** cenário complementar ou comportamento de limite.
- **Tipo Positivo:** entrada e fluxo válidos.
- **Tipo Negativo/limite:** recurso inexistente ou condição que merece observação.
- Os resultados obtidos serão preenchidos após a execução real no Postman.
- JSONPlaceholder simula operações de escrita; POST, PUT e DELETE não alteram dados persistidos.

## 3. Casos de teste

### CT-001 — Listar publicações

| Campo | Detalhe |
|---|---|
| Requisito | RF-001 |
| Tipo | Positivo |
| Prioridade | Alta |
| Método | GET |
| Endpoint | `/posts` |

**Pré-condições**
- API acessível.
- Nenhuma autenticação necessária para este endpoint público.

**Passos**
1. Abrir uma nova requisição no Postman.
2. Selecionar o método GET.
3. Informar `{{baseUrl}}/posts`.
4. Enviar a requisição.

**Resultado esperado**
- HTTP 200.
- Corpo da resposta em formato JSON.
- Retorno em formato de lista.
- A lista contém 100 publicações na API de demonstração.
- Os itens possuem os campos `userId`, `id`, `title` e `body`.

**Resultado obtido:** Pendente de execução automatizada.

### CT-002 — Consultar publicação existente

| Campo | Detalhe |
|---|---|
| Requisito | RF-002 |
| Tipo | Positivo |
| Prioridade | Alta |
| Método | GET |
| Endpoint | `/posts/1` |

**Pré-condições**
- API acessível.

**Passos**
1. Abrir uma nova requisição no Postman.
2. Selecionar GET.
3. Informar `{{baseUrl}}/posts/1`.
4. Enviar a requisição.

**Resultado esperado**
- HTTP 200.
- Corpo JSON em formato de objeto.
- Campo `id` igual a 1.
- Presença dos campos `userId`, `id`, `title` e `body`.
- Tipos: `userId` e `id` numéricos; `title` e `body` textuais.

**Resultado obtido:** Execução manual inicial aprovada. HTTP 200, 77 ms e 1.09 KB; os quatro campos foram visualizados. A automação ainda está pendente.

### CT-003 — Consultar publicação inexistente

| Campo | Detalhe |
|---|---|
| Requisito | RF-003 |
| Tipo | Negativo / limite |
| Prioridade | Média |
| Método | GET |
| Endpoint | `/posts/9999` |

**Pré-condições**
- API acessível.

**Passos**
1. Abrir uma nova requisição no Postman.
2. Selecionar GET.
3. Informar `{{baseUrl}}/posts/9999`.
4. Enviar a requisição.

**Resultado esperado para esta execução da API de demonstração**
- HTTP 404 Not Found.
- Corpo JSON como objeto vazio (`{}`).

**Observação de QA**
- Na execução realizada, JSONPlaceholder retornou HTTP 404 e objeto JSON vazio. Em outro sistema, a resposta para recurso inexistente deve ser definida pelo contrato da API.

**Resultado obtido:** Pendente de execução.

### CT-004 — Criar publicação com dados válidos

| Campo | Detalhe |
|---|---|
| Requisito | RF-004 |
| Tipo | Positivo |
| Prioridade | Alta |
| Método | POST |
| Endpoint | `/posts` |

**Pré-condições**
- API acessível.
- Body configurado como raw / JSON.

**Dados de entrada**
```json
{
  "title": "QA Portfolio - Novo post",
  "body": "Post criado para demonstrar testes de API com Postman.",
  "userId": 1
}
```

**Passos**
1. Abrir uma nova requisição no Postman.
2. Selecionar POST.
3. Informar `{{baseUrl}}/posts`.
4. Definir `Content-Type: application/json`.
5. Inserir o JSON de entrada no Body.
6. Enviar a requisição.

**Resultado esperado**
- HTTP 201.
- Resposta JSON.
- Campos enviados retornados com os mesmos valores.
- Campo `id` retornado como número.

**Observação:** a criação é simulada e não persiste no servidor.

**Resultado obtido:** Pendente de execução.

### CT-005 — Atualizar publicação com dados válidos

| Campo | Detalhe |
|---|---|
| Requisito | RF-005 |
| Tipo | Positivo |
| Prioridade | Alta |
| Método | PUT |
| Endpoint | `/posts/1` |

**Pré-condições**
- API acessível.
- Body configurado como raw / JSON.

**Dados de entrada**
```json
{
  "id": 1,
  "title": "Post atualizado pelo QA",
  "body": "Conteúdo atualizado para validar PUT.",
  "userId": 1
}
```

**Passos**
1. Abrir uma nova requisição no Postman.
2. Selecionar PUT.
3. Informar `{{baseUrl}}/posts/1`.
4. Definir `Content-Type: application/json`.
5. Inserir o JSON de entrada no Body.
6. Enviar a requisição.

**Resultado esperado**
- HTTP 200.
- Resposta JSON.
- ID igual a 1.
- Título e conteúdo retornados conforme os valores enviados.

**Observação:** a atualização é simulada e não persiste no servidor.

**Resultado obtido:** Pendente de execução.

### CT-006 — Excluir publicação

| Campo | Detalhe |
|---|---|
| Requisito | RF-006 |
| Tipo | Positivo |
| Prioridade | Alta |
| Método | DELETE |
| Endpoint | `/posts/1` |

**Pré-condições**
- API acessível.

**Passos**
1. Abrir uma nova requisição no Postman.
2. Selecionar DELETE.
3. Informar `{{baseUrl}}/posts/1`.
4. Enviar a requisição.

**Resultado esperado**
- HTTP 200.
- Corpo da resposta como objeto vazio (`{}`).

**Observação:** a exclusão é simulada e não remove dados persistidos no servidor.

**Resultado obtido:** Pendente de execução.

## 4. Resumo dos casos

| ID | Cenário | Método | Prioridade | Situação |
|---|---|---|---|---|
| CT-001 | Listar publicações | GET | Alta | Pendente |
| CT-002 | Consultar publicação existente | GET | Alta | Execução manual aprovada |
| CT-003 | Consultar publicação inexistente | GET | Média | Pendente |
| CT-004 | Criar publicação válida | POST | Alta | Pendente |
| CT-005 | Atualizar publicação válida | PUT | Alta | Pendente |
| CT-006 | Excluir publicação | DELETE | Alta | Pendente |

## 5. Observações finais

- Não registrar um caso como aprovado antes de executá-lo e comparar o resultado real com o esperado.
- Quando o resultado real divergir do esperado, registrar como reprovado e avaliar abertura de bug.
- Não tratar o comportamento de uma API de demonstração como regra universal de APIs REST.
- Os testes negativos adicionais de validação de payload poderão ser incluídos após análise do contrato e dos comportamentos suportados pela API.
