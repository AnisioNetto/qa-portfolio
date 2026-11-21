# Resultados de execução — SauceDemo

**Tipo de execução:** manual  
**Quantidade de ciclos documentados:** 1  
**Data da execução:** 21/11/2026

## Resumo

| ID | Cenário | Resultado | Status |
|---|---|---|---|
| CT-001 | Login e acesso à listagem de produtos | Products exibida após autenticação | PASS |
| CT-002 | Adicionar produto ao carrinho | Botão Remove e contador 1 | PASS |
| CT-003 | Validar produto no carrinho | Backpack, quantidade 1, US$ 29,99 | PASS |
| CT-004 | Acessar formulário de checkout | Formulário Your Information exibido | PASS |
| CT-005 | First Name obrigatório | Mensagem de campo obrigatório exibida | PASS |
| CT-006 | Last Name obrigatório | Mensagem de campo obrigatório exibida | PASS |
| CT-007 | Postal Code obrigatório | Mensagem de campo obrigatório exibida | PASS |
| CT-008 | Resumo do pedido | Total de US$ 32,39 conferido | PASS |
| CT-009 | Finalizar compra | Tela Checkout: Complete! exibida | PASS |

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

## Evidências

Consulte [evidences/README.md](evidences/README.md) para a relação de capturas de tela.
