# Projeto 04 — Automação de Testes Web com Playwright

## Sobre o projeto

Projeto de automação de testes funcionais end-to-end desenvolvido com Playwright e JavaScript, utilizando a aplicação de demonstração [SauceDemo](https://www.saucedemo.com/).

O objetivo é automatizar cenários relacionados ao login, gerenciamento do carrinho e processo de checkout.

O projeto utiliza o padrão **Page Object Model (POM)** para organizar os elementos e as ações das páginas, promovendo reutilização de código, organização e facilidade de manutenção dos testes.

## Tecnologias utilizadas

- JavaScript
- Playwright
- Node.js
- Visual Studio Code

## Padrão de projeto

Foi implementado o padrão Page Object Model (POM), separando os elementos e as ações das páginas da lógica dos testes.

Classes implementadas:

- `LoginPage`: gerenciamento do login e validações relacionadas.
- `CartPage`: gerenciamento dos produtos no carrinho.
- `CheckoutPage`: preenchimento dos dados e finalização da compra.

## Cenários automatizados

| ID | Cenário |
|---|---|
| CT-001 | Login com credenciais válidas |
| CT-002 | Login com senha inválida |
| CT-003 | Login com campos vazios |
| CT-004 | Login sem informar senha |
| CT-005 | Adicionar produto ao carrinho |
| CT-006 | Validar produto no carrinho |
| CT-007 | Remover produto do carrinho |
| CT-008 | Acessar formulário de checkout |
| CT-009 | Validar First Name obrigatório |
| CT-010 | Validar Last Name obrigatório |
| CT-011 | Validar Postal Code obrigatório |
| CT-012 | Validar resumo do pedido |
| CT-013 | Finalizar compra com sucesso |

## Resultado da execução

- **Total de testes:** 13
- **Aprovados:** 13
- **Falhas:** 0
- **Ignorados:** 0
- **Navegador:** Chromium
- **Data da execução:** 21/11/2026
- **Tempo total:** 2,7 segundos
- **Workers:** 6

Execução realizada com sucesso utilizando o comando `npx playwright test --project=chromium`.

## Como executar o projeto

### 1. Instalar dependências

```bash
npm ci
```

### 2. Executar todos os testes no Chromium

```bash
npx playwright test --project=chromium
```

### 3. Abrir relatório HTML

```bash
npx playwright show-report
```

## Estrutura do projeto

```text
04-playwright-automation/
├── tests/
│   ├── saucedemo-login.spec.js
│   ├── saucedemo-cart.spec.js
│   └── saucedemo-checkout.spec.js
├── pages/
│   ├── login.page.js
│   ├── cart.page.js
│   └── checkout.page.js
├── .gitignore
├── package.json
├── package-lock.json
├── playwright.config.js
└── README.md
```

## Ambiente de teste

- **Aplicação:** https://www.saucedemo.com/
- **Tipo de teste:** Automação funcional end-to-end.
- **Navegador:** Chromium.
- **Execução:** Local, utilizando Playwright.

## Observação

Projeto desenvolvido para fins de estudo, prática de automação de testes e composição de portfólio profissional de QA.