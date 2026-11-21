# Requisitos e regras verificadas — SauceDemo

## Objetivo e origem

Este documento registra os comportamentos funcionais observados na aplicação SauceDemo durante a exploração e execução dos testes manuais. Os itens abaixo são requisitos/regras identificados para estruturar este exercício de portfólio; **não são uma especificação oficial fornecida pela equipe responsável pelo produto**.

## Requisitos cobertos

| ID | Requisito / regra observada | Critério verificado |
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

## Rastreabilidade — requisito, cenário e evidência

| Requisito | Caso de teste | Evidência |
|---|---|---|
| RF-001 | [CT-001](test-cases.md#ct-001--login-e-acesso-à-listagem-de-produtos) | [Captura](evidences/CT-001-login-produtos.png) |
| RF-002 | [CT-002](test-cases.md#ct-002--adicionar-produto-ao-carrinho) | [Captura](evidences/CT-002-adicionar-produto-carrinho.png) |
| RF-003 | [CT-003](test-cases.md#ct-003--validar-produto-no-carrinho) | [Captura](evidences/CT-003-validar-produto-carrinho.png) |
| RF-004 | [CT-004](test-cases.md#ct-004--acessar-formulário-de-checkout) | [Captura](evidences/CT-004-acessar-checkout.png) |
| RF-005 | [CT-005](test-cases.md#ct-005--validar-first-name-obrigatório) | [Captura](evidences/CT-005-validar-first-name-obrigatorio.png) |
| RF-006 | [CT-006](test-cases.md#ct-006--validar-last-name-obrigatório) | [Captura](evidences/CT-006-validar-last-name-obrigatorio.png) |
| RF-007 | [CT-007](test-cases.md#ct-007--validar-postal-code-obrigatório) | [Captura](evidences/CT-007-validar-postal-code-obrigatorio.png) |
| RF-008 | [CT-008](test-cases.md#ct-008--validar-resumo-do-pedido) | [Captura](evidences/CT-008-revisar-resumo-pedido.png) |
| RF-009 | [CT-009](test-cases.md#ct-009--finalizar-compra) | [Captura](evidences/CT-009-finalizar-compra.png) |

## Limites do escopo

Este projeto registra somente os comportamentos efetivamente exercitados e observados nas evidências. Não foram avaliados pagamentos reais, integração logística, persistência de pedidos em sistemas externos, segurança, desempenho ou compatibilidade entre navegadores.
