# Relatório Final — Testes Funcionais Web

## 1. Identificação

- **Projeto:** 03 — Testes Funcionais Web
- **Aplicação:** SauceDemo
- **Tipo:** testes funcionais manuais
- **Data da execução:** 21/11/2026

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

## 7. Conclusão

Na execução documentada, todos os nove cenários apresentaram os resultados esperados. O fluxo principal de compra foi concluído e as três regras de obrigatoriedade verificadas impediram o avanço quando o respectivo campo estava vazio.

Não foram identificados defeitos nos cenários executados. Essa conclusão está limitada ao escopo, aos dados e ao ambiente de demonstração utilizados.

## 8. Limitações

Os testes foram manuais. Não foram executados testes automatizados, de carga, segurança, acessibilidade, compatibilidade cross-browser ou integrações externas. A aplicação é de demonstração e não representa uma compra comercial real.
