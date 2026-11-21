# API Testing — Postman

Projeto demonstrativo de testes de API REST, desenvolvido para apresentar práticas de Quality Assurance.

## Objetivo

Validar os principais comportamentos de uma API pública, verificando códigos HTTP, estrutura das respostas, tipos de dados e regras básicas dos endpoints.

## API utilizada

- Serviço: JSONPlaceholder
- Documentação: https://jsonplaceholder.typicode.com/
- Tipo: API REST pública para testes e demonstrações
- Dados: fictícios e destinados a exemplos

## Escopo planejado

| Cenário | Método | Endpoint | Resultado esperado |
|---|---|---|---|
| Consultar todos os posts | GET | /posts | HTTP 200 e lista de posts |
| Consultar um post existente | GET | /posts/1 | HTTP 200 e objeto do post |
| Consultar post inexistente | GET | /posts/9999 | A API de demonstração pode retornar HTTP 200 com objeto vazio; comportamento a documentar |
| Criar post | POST | /posts | HTTP 201 e retorno com identificador |
| Atualizar post | PUT | /posts/1 | HTTP 200 e retorno atualizado |
| Excluir post | DELETE | /posts/1 | HTTP 200 e confirmação simulada |

> Observação: JSONPlaceholder simula operações de escrita; os dados não são persistidos no servidor.

## Validações previstas

- Código de status HTTP.
- Content-Type da resposta.
- Estrutura e campos obrigatórios do JSON.
- Tipos de dados.
- Identificador correspondente ao recurso consultado.
- Tempo de resposta como observação, sem tratar um limite arbitrário como requisito funcional.

## Ferramentas

- Postman
- JavaScript para testes na aba Tests
- JSON
- GitHub

## Estrutura planejada

```text
02-api-testing-postman/
├── README.md
├── collection/
│   └── api-testing.postman_collection.json
└── evidences/
    └── README.md
```

## Status

[ ] Definir cenários e critérios de aceite  
[ ] Criar coleção Postman  
[ ] Implementar testes automatizados na coleção  
[ ] Executar os cenários e registrar resultados  
[ ] Adicionar evidências de execução  

## Aviso

Este é um projeto de estudo e demonstração independente. Não contém dados, sistemas ou informações confidenciais de empregadores ou clientes.
