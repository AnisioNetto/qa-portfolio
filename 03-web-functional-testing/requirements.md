# Requisitos e regras verificadas — SauceDemo

## Objetivo

Registrar os comportamentos funcionais observados e utilizados como base para os testes manuais do fluxo de compra.

## Requisitos cobertos

| ID | Requisito / regra | Critério verificado |
|---|---|---|
| RF-001 | Autenticação | Usuário de demonstração consegue acessar a página Products |
| RF-002 | Inclusão no carrinho | Ao adicionar o Sauce Labs Backpack, o botão muda para Remove e o indicador do carrinho mostra 1 |
| RF-003 | Consulta do carrinho | O carrinho apresenta Sauce Labs Backpack, quantidade 1 e preço US$ 29,99 |
| RF-004 | Acesso ao checkout | O botão Checkout abre o formulário Your Information |
| RF-005 | Obrigatoriedade de First Name | Sem First Name, o sistema impede o avanço e informa que o campo é obrigatório |
| RF-006 | Obrigatoriedade de Last Name | Com First Name preenchido e Last Name vazio, o sistema impede o avanço e informa que o campo é obrigatório |
| RF-007 | Obrigatoriedade de Postal Code | Com os campos anteriores preenchidos e Postal Code vazio, o sistema impede o avanço e informa que o campo é obrigatório |
| RF-008 | Resumo do pedido | O resumo apresenta produto, quantidade, preço, imposto e total |
| RF-009 | Finalização | O sistema apresenta a tela Checkout: Complete! após Finish |

## Dados utilizados

- Produto: Sauce Labs Backpack
- Quantidade: 1
- Preço do item: US$ 29,99
- Imposto exibido: US$ 2,40
- Total exibido: US$ 32,39
- Primeiro nome utilizado no teste: Anisio
- Sobrenome utilizado no teste: QA Tester
- Código postal utilizado: 38400-000

## Limites do escopo

Este projeto registra somente os comportamentos efetivamente exercitados e observados nas evidências. Não foram avaliados pagamentos reais, integração logística, persistência de pedidos em sistemas externos, segurança, desempenho ou compatibilidade entre navegadores.
