# 03 — Testes Funcionais Web | SauceDemo

Projeto de testes funcionais manuais realizado na aplicação de demonstração [SauceDemo](https://www.saucedemo.com/).

## Objetivo

Validar o fluxo principal de compra de uma loja virtual, desde a autenticação até a confirmação do pedido, incluindo regras de obrigatoriedade dos campos do checkout.

## Escopo executado

- Login com usuário de demonstração.
- Inclusão de produto no carrinho.
- Conferência do produto, quantidade e preço no carrinho.
- Acesso ao formulário de checkout.
- Validação dos campos obrigatórios First Name, Last Name e Postal Code.
- Conferência do resumo do pedido.
- Finalização da compra.

## Resultado

Foram executados 9 cenários manuais. Os 9 apresentaram o comportamento esperado durante esta execução.

| Indicador | Resultado |
|---|---:|
| Cenários executados | 9 |
| Aprovados (PASS) | 9 |
| Reprovados (FAIL) | 0 |
| Não executados | 0 |

> Resultado referente à execução documentada neste projeto, no ambiente de demonstração, e não uma garantia de ausência de defeitos na aplicação.

## Estrutura

- [Casos de teste](test-cases.md)
- [Requisitos e regras verificadas](requirements.md)
- [Relatório de execução](execution-results.md)
- [Relatório final](final-report.md)
- [Evidências](evidences/README.md)

## Observações

- Os testes foram executados manualmente pela interface web.
- O fluxo foi realizado com o produto Sauce Labs Backpack.
- A aplicação é um ambiente de demonstração; os dados de compra não representam uma transação comercial real.
- Não foi implementada automação neste projeto.

## Tecnologias e práticas

- Testes funcionais manuais
- Testes positivos e negativos
- Validação de interface e regras de negócio
- Documentação de casos de teste
- Registro de evidências e resultados
