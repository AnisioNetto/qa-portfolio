# Casos de teste — SauceDemo

**Tipo:** testes funcionais manuais  
**Ambiente:** https://www.saucedemo.com/  
**Produto utilizado:** Sauce Labs Backpack

## CT-001 — Login e acesso à listagem de produtos

- **Pré-condição:** página de login acessível.
- **Passos:** informar credenciais de demonstração válidas e acionar Login.
- **Resultado esperado:** usuário autenticado e página Products exibida.
- **Resultado observado:** página Products exibida.
- **Status:** PASS.

## CT-002 — Adicionar produto ao carrinho

- **Pré-condição:** usuário autenticado na página Products.
- **Passos:** localizar Sauce Labs Backpack e clicar em Add to cart.
- **Resultado esperado:** botão muda para Remove e contador do carrinho exibe 1.
- **Resultado observado:** botão mudou para Remove e contador exibiu 1.
- **Status:** PASS.

## CT-003 — Validar produto no carrinho

- **Pré-condição:** Sauce Labs Backpack adicionado.
- **Passos:** abrir o carrinho.
- **Resultado esperado:** produto listado com quantidade 1 e preço US$ 29,99.
- **Resultado observado:** produto, quantidade e preço conferidos.
- **Status:** PASS.

## CT-004 — Acessar formulário de checkout

- **Pré-condição:** carrinho contém um produto.
- **Passos:** clicar em Checkout.
- **Resultado esperado:** tela Checkout: Your Information com First Name, Last Name e Zip/Postal Code.
- **Resultado observado:** formulário exibido com os três campos.
- **Status:** PASS.

## CT-005 — Validar First Name obrigatório

- **Pré-condição:** formulário Your Information aberto.
- **Passos:** manter os três campos vazios e clicar em Continue.
- **Resultado esperado:** avanço bloqueado e mensagem indicando First Name obrigatório.
- **Resultado observado:** mensagem “Error: First Name is required”.
- **Status:** PASS.

## CT-006 — Validar Last Name obrigatório

- **Pré-condição:** formulário Your Information aberto.
- **Passos:** preencher First Name; manter Last Name e Zip/Postal Code vazios; clicar em Continue.
- **Resultado esperado:** avanço bloqueado e mensagem indicando Last Name obrigatório.
- **Resultado observado:** mensagem “Error: Last Name is required”.
- **Status:** PASS.

## CT-007 — Validar Postal Code obrigatório

- **Pré-condição:** formulário Your Information aberto.
- **Passos:** preencher First Name e Last Name; manter Zip/Postal Code vazio; clicar em Continue.
- **Resultado esperado:** avanço bloqueado e mensagem indicando Postal Code obrigatório.
- **Resultado observado:** mensagem “Error: Postal Code is required”.
- **Status:** PASS.

## CT-008 — Validar resumo do pedido

- **Pré-condição:** formulário preenchido com dados válidos.
- **Passos:** clicar em Continue.
- **Resultado esperado:** resumo apresenta o produto, quantidade, preço, imposto e total.
- **Resultado observado:** Sauce Labs Backpack, quantidade 1, item total US$ 29,99, tax US$ 2,40 e total US$ 32,39.
- **Status:** PASS.

## CT-009 — Finalizar compra

- **Pré-condição:** tela Checkout: Overview exibida com os dados do pedido.
- **Passos:** clicar em Finish.
- **Resultado esperado:** tela de confirmação Checkout: Complete! exibida.
- **Resultado observado:** tela Checkout: Complete! com mensagem “Thank you for your order!”.
- **Status:** PASS.
