# Relatório Final — Testes Funcionais Web

## 1. Identificação

- **Projeto:** 03 — Testes Funcionais Web
- **Aplicação:** SauceDemo
- **URL:** https://www.saucedemo.com/
- **Tipo:** testes funcionais manuais
- **Data da execução:** 21/11/2026
- **Navegador e versão:** não registrados nesta execução

## 2. Objetivo

Validar o fluxo principal de compra pela interface web, verificando autenticação, carrinho, regras de obrigatoriedade do checkout, resumo e confirmação do pedido.

## 3. Escopo executado

Foram executados nove cenários, cobrindo o fluxo de login até a conclusão da compra, incluindo três cenários negativos para os campos obrigatórios do checkout.

## 4. Resultado

| Indicador | Quantidade |
|---|---:|
| Cenários executados | 9 |
| Aprovados | 9 |
| Reprovados | 0 |
| Bloqueados | 0 |
| Não executados | 0 |

A taxa de aprovação observada foi de 100%.

## 5. Principais validações

- Autenticação e acesso à listagem de produtos.
- Inclusão e consulta de produto no carrinho.
- Quantidade e preço do produto.
- Obrigatoriedade dos campos First Name, Last Name e Postal Code.
- Conferência do subtotal, imposto e total.
- Exibição da confirmação de compra.

## 6. Conferência de valores

| Descrição | Valor |
|---|---:|
| Item total | US$ 29,99 |
| Tax | US$ 2,40 |
| Total | US$ 32,39 |

A soma dos valores exibidos confere: US$ 29,99 + US$ 2,40 = US$ 32,39.

## 7. Rastreabilidade

| Requisito | Caso de teste | Evidência |
|---|---|---|
| RF-001 — Autenticação | [CT-001](test-cases.md#ct-001--login-e-acesso-à-listagem-de-produtos) | [Captura](evidences/CT-001-login-produtos.png) |
| RF-002 — Inclusão no carrinho | [CT-002](test-cases.md#ct-002--adicionar-produto-ao-carrinho) | [Captura](evidences/CT-002-adicionar-produto-carrinho.png) |
| RF-003 — Consulta do carrinho | [CT-003](test-cases.md#ct-003--validar-produto-no-carrinho) | [Captura](evidences/CT-003-validar-produto-carrinho.png) |
| RF-004 — Acesso ao checkout | [CT-004](test-cases.md#ct-004--acessar-formulário-de-checkout) | [Captura](evidences/CT-004-acessar-checkout.png) |
| RF-005 — First Name obrigatório | [CT-005](test-cases.md#ct-005--validar-first-name-obrigatório) | [Captura](evidences/CT-005-validar-first-name-obrigatorio.png) |
| RF-006 — Last Name obrigatório | [CT-006](test-cases.md#ct-006--validar-last-name-obrigatório) | [Captura](evidences/CT-006-validar-last-name-obrigatorio.png) |
| RF-007 — Postal Code obrigatório | [CT-007](test-cases.md#ct-007--validar-postal-code-obrigatório) | [Captura](evidences/CT-007-validar-postal-code-obrigatorio.png) |
| RF-008 — Resumo do pedido | [CT-008](test-cases.md#ct-008--validar-resumo-do-pedido) | [Captura](evidences/CT-008-revisar-resumo-pedido.png) |
| RF-009 — Finalização | [CT-009](test-cases.md#ct-009--finalizar-compra) | [Captura](evidences/CT-009-finalizar-compra.png) |

## 8. Conclusão

Na execução documentada, todos os nove cenários apresentaram os resultados esperados. O fluxo principal de compra foi concluído e as três regras de obrigatoriedade verificadas impediram o avanço quando o respectivo campo estava vazio.

Não foram identificados defeitos nos cenários executados. Essa conclusão está limitada ao escopo, aos dados e ao ambiente de demonstração utilizados.

## 9. Limitações

Os testes foram manuais. Não foram executados testes automatizados, de carga, segurança, acessibilidade, compatibilidade cross-browser ou integrações externas. A aplicação é de demonstração e não representa uma compra comercial real. Como navegador e versão não foram registrados, este relatório não afirma validação em navegadores específicos.
