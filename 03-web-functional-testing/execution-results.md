# Resultados de execução — SauceDemo

## Dados da execução

- **Aplicação:** SauceDemo
- **URL:** https://www.saucedemo.com/
- **Tipo de execução:** manual
- **Data:** 21/11/2026
- **Ciclos documentados:** 1
- **Navegador e versão:** não registrados nesta execução
- **Ambiente:** aplicação de demonstração pública

## Resumo

| ID | Cenário | Resultado observado | Status | Evidência |
|---|---|---|---|---|
| CT-001 | Login e acesso à listagem de produtos | Products exibida após autenticação | PASS | [Captura](evidences/CT-001-login-produtos.png) |
| CT-002 | Adicionar produto ao carrinho | Botão Remove e contador 1 | PASS | [Captura](evidences/CT-002-adicionar-produto-carrinho.png) |
| CT-003 | Validar produto no carrinho | Backpack, quantidade 1, US$ 29,99 | PASS | [Captura](evidences/CT-003-validar-produto-carrinho.png) |
| CT-004 | Acessar formulário de checkout | Formulário Your Information exibido | PASS | [Captura](evidences/CT-004-acessar-checkout.png) |
| CT-005 | First Name obrigatório | Mensagem de campo obrigatório exibida | PASS | [Captura](evidences/CT-005-validar-first-name-obrigatorio.png) |
| CT-006 | Last Name obrigatório | Mensagem de campo obrigatório exibida | PASS | [Captura](evidences/CT-006-validar-last-name-obrigatorio.png) |
| CT-007 | Postal Code obrigatório | Mensagem de campo obrigatório exibida | PASS | [Captura](evidences/CT-007-validar-postal-code-obrigatorio.png) |
| CT-008 | Resumo do pedido | Total de US$ 32,39 conferido | PASS | [Captura](evidences/CT-008-revisar-resumo-pedido.png) |
| CT-009 | Finalizar compra | Tela Checkout: Complete! exibida | PASS | [Captura](evidences/CT-009-finalizar-compra.png) |

## Indicadores

- Total executado: 9
- PASS: 9
- FAIL: 0
- Bloqueado: 0
- Não executado: 0

**Taxa de aprovação observada:** 100% (9 de 9 cenários).

## Observações da execução

1. As três validações negativas foram exercitadas separadamente, mantendo os campos anteriores preenchidos quando aplicável.
2. O resumo apresentou item total de US$ 29,99, imposto de US$ 2,40 e total de US$ 32,39.
3. A finalização apresentou a tela Checkout: Complete!.
4. Os resultados são referentes ao ambiente de demonstração e à sessão registrada.
5. A identificação e versão do navegador não foram coletadas; por isso, não há afirmação de compatibilidade cross-browser.

## Evidências

As capturas individuais estão vinculadas na tabela acima. Consulte também [evidences/README.md](evidences/README.md) para a relação de arquivos.
