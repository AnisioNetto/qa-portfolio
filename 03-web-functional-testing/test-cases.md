# Casos de teste — SauceDemo

**Tipo:** testes funcionais manuais  
**Ambiente:** https://www.saucedemo.com/  
**Produto utilizado:** Sauce Labs Backpack  
**Data da execução documentada:** 21/11/2026

> Os cenários e resultados abaixo representam a execução manual registrada neste projeto. As prioridades são uma classificação sugerida para organização do portfólio, não prioridades oficiais do produto.

## CT-001 — Login e acesso à listagem de produtos

- **Prioridade sugerida:** Alta
- **Pré-condição:** página de login acessível.
- **Dados:** credenciais válidas da conta de demonstração.
- **Passos:** informar as credenciais e acionar Login.
- **Resultado esperado:** usuário autenticado e página Products exibida.
- **Resultado observado:** página Products exibida.
- **Status:** PASS.
- **Evidência:** [CT-001 — Login e Products](evidences/CT-001-login-produtos.png)

## CT-002 — Adicionar produto ao carrinho

- **Prioridade sugerida:** Alta
- **Pré-condição:** usuário autenticado na página Products.
- **Dados:** Sauce Labs Backpack.
- **Passos:** localizar o produto e clicar em Add to cart.
- **Resultado esperado:** botão muda para Remove e contador do carrinho exibe 1.
- **Resultado observado:** botão mudou para Remove e contador exibiu 1.
- **Status:** PASS.
- **Evidência:** [CT-002 — Adicionar ao carrinho](evidences/CT-002-adicionar-produto-carrinho.png)

## CT-003 — Validar produto no carrinho

- **Prioridade sugerida:** Alta
- **Pré-condição:** Sauce Labs Backpack adicionado.
- **Dados:** produto Sauce Labs Backpack.
- **Passos:** abrir o carrinho.
- **Resultado esperado:** produto listado com quantidade 1 e preço US$ 29,99.
- **Resultado observado:** produto, quantidade e preço conferidos.
- **Status:** PASS.
- **Evidência:** [CT-003 — Validar carrinho](evidences/CT-003-validar-produto-carrinho.png)

## CT-004 — Acessar formulário de checkout

- **Prioridade sugerida:** Alta
- **Pré-condição:** carrinho contém um produto.
- **Passos:** clicar em Checkout.
- **Resultado esperado:** tela Checkout: Your Information com First Name, Last Name e Zip/Postal Code.
- **Resultado observado:** formulário exibido com os três campos.
- **Status:** PASS.
- **Evidência:** [CT-004 — Formulário de checkout](evidences/CT-004-acessar-checkout.png)

## CT-005 — Validar First Name obrigatório

- **Prioridade sugerida:** Média
- **Pré-condição:** formulário Your Information aberto.
- **Dados:** três campos vazios.
- **Passos:** manter os três campos vazios e clicar em Continue.
- **Resultado esperado:** avanço bloqueado e mensagem indicando First Name obrigatório.
- **Resultado observado:** mensagem “Error: First Name is required”.
- **Status:** PASS.
- **Evidência:** [CT-005 — First Name obrigatório](evidences/CT-005-validar-first-name-obrigatorio.png)

## CT-006 — Validar Last Name obrigatório

- **Prioridade sugerida:** Média
- **Pré-condição:** formulário Your Information aberto.
- **Dados:** First Name preenchido; Last Name e Zip/Postal Code vazios.
- **Passos:** preencher First Name, manter os outros dois campos vazios e clicar em Continue.
- **Resultado esperado:** avanço bloqueado e mensagem indicando Last Name obrigatório.
- **Resultado observado:** mensagem “Error: Last Name is required”.
- **Status:** PASS.
- **Evidência:** [CT-006 — Last Name obrigatório](evidences/CT-006-validar-last-name-obrigatorio.png)

## CT-007 — Validar Postal Code obrigatório

- **Prioridade sugerida:** Média
- **Pré-condição:** formulário Your Information aberto.
- **Dados:** First Name e Last Name preenchidos; Zip/Postal Code vazio.
- **Passos:** preencher First Name e Last Name, manter Zip/Postal Code vazio e clicar em Continue.
- **Resultado esperado:** avanço bloqueado e mensagem indicando Postal Code obrigatório.
- **Resultado observado:** mensagem “Error: Postal Code is required”.
- **Status:** PASS.
- **Evidência:** [CT-007 — Postal Code obrigatório](evidences/CT-007-validar-postal-code-obrigatorio.png)

## CT-008 — Validar resumo do pedido

- **Prioridade sugerida:** Alta
- **Pré-condição:** formulário preenchido com dados válidos.
- **Passos:** clicar em Continue.
- **Resultado esperado:** resumo apresenta produto, quantidade, preço, imposto e total.
- **Resultado observado:** Sauce Labs Backpack, quantidade 1, item total US$ 29,99, tax US$ 2,40 e total US$ 32,39.
- **Status:** PASS.
- **Evidência:** [CT-008 — Resumo do pedido](evidences/CT-008-revisar-resumo-pedido.png)

## CT-009 — Finalizar compra

- **Prioridade sugerida:** Alta
- **Pré-condição:** tela Checkout: Overview exibida com os dados do pedido.
- **Passos:** clicar em Finish.
- **Resultado esperado:** tela de confirmação Checkout: Complete! exibida.
- **Resultado observado:** tela Checkout: Complete! com mensagem “Thank you for your order!”.
- **Status:** PASS.
- **Evidência:** [CT-009 — Compra finalizada](evidences/CT-009-finalizar-compra.png)
