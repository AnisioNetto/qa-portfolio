# Projeto 04 — Automação de Testes Web com Playwright

![Playwright](https://img.shields.io/badge/Playwright-Automation-2EAD33?logo=playwright&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6%2B-yellow?logo=javascript)
![Node.js](https://img.shields.io/badge/Node.js-22-339933?logo=node.js&logoColor=white)
![Tests](https://img.shields.io/badge/Tests-39%20Passed-success)

## Sobre o projeto

Projeto de automação de testes funcionais end-to-end (E2E), desenvolvido com **JavaScript e Playwright**, utilizando a aplicação de demonstração [SauceDemo](https://www.saucedemo.com/).

O objetivo é automatizar e validar os principais fluxos de uma aplicação de comércio eletrônico, contemplando autenticação, gerenciamento do carrinho de compras e processo de checkout.

A arquitetura utiliza os padrões **Page Object Model (POM)** e **Fixtures**, promovendo reutilização de código, organização, facilidade de manutenção e escalabilidade da suíte de testes.

O projeto também conta com integração contínua utilizando **GitHub Actions**, permitindo a execução automatizada dos testes em diferentes navegadores.

## Tecnologias e ferramentas

- JavaScript (ES6+)
- Node.js
- Playwright
- Visual Studio Code
- Git e GitHub
- GitHub Actions
- dotenv (gerenciamento de variáveis de ambiente)

## Arquitetura e padrões utilizados

### Page Object Model (POM)

O padrão Page Object Model separa os elementos e as ações das páginas da lógica dos testes automatizados.

Classes implementadas:

- `LoginPage`: gerenciamento do login e validações relacionadas.
- `CartPage`: gerenciamento dos produtos no carrinho.
- `CheckoutPage`: preenchimento dos dados e finalização da compra.

Essa abordagem reduz duplicidade de código e facilita a manutenção dos testes.

### Fixtures personalizadas

Foram implementadas Fixtures utilizando `base.extend()` do Playwright.

O arquivo `base.fixture.js` disponibiliza automaticamente os objetos das páginas para os testes, evitando instanciações manuais e promovendo reutilização.

Fixtures implementadas:

- `loginPage`
- `cartPage`
- `checkoutPage`

## Cenários automatizados

A suíte contempla 13 cenários funcionais:

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

## Testes cross-browser

Os testes são executados em três projetos configurados no Playwright:

| Navegador | Projeto | Testes |
|---|---|---:|
| Chromium | `chromium` | 13 |
| Firefox | `firefox` | 13 |
| WebKit (Safari) | `webkit` | 13 |
| **Total** | | **39** |

A execução cross-browser permite verificar o comportamento da aplicação em diferentes motores de navegador.

## Resultado da execução

**Última execução validada no GitHub Actions:**

| Indicador | Resultado |
|---|---:|
| Total de execuções | 39 |
| Aprovados | 39 |
| Falhas | 0 |
| Navegadores | 3 |
| Tempo dos testes | 46,7 segundos |

**Status:** todos os 39 testes aprovados.

[Consultar execuções no GitHub Actions](https://github.com/AnisioNetto/qa-portfolio/actions)

## Integração contínua — GitHub Actions

O projeto utiliza GitHub Actions para automatizar a execução dos testes.

O workflow está localizado em:

`.github/workflows/playwright.yml`

O pipeline contempla:

1. Checkout do repositório.
2. Configuração do Node.js.
3. Instalação das dependências.
4. Instalação dos navegadores Chromium, Firefox e WebKit.
5. Execução dos testes automatizados.
6. Upload do relatório HTML.
7. Upload das evidências de falhas, quando disponíveis.

A execução é configurada para ocorrer em eventos de push e pull request direcionados à branch `main`.

### Evidências de execução

O Playwright está configurado para gerar:

- Screenshots quando um teste falha.
- Vídeos preservados em caso de falha.
- Traces preservados em caso de falha.
- Relatório HTML da execução.

Os artefatos são disponibilizados pelo GitHub Actions para consulta e análise.

## Como executar o projeto localmente

### 1. Clonar o repositório

```bash
git clone https://github.com/AnisioNetto/qa-portfolio.git
```

### 2. Acessar a pasta do projeto

```bash
cd qa-portfolio/04-playwright-automation
```

### 3. Instalar as dependências

```bash
npm ci
```

### 4. Instalar os navegadores

```bash
npx playwright install chromium firefox webkit
```

### 5. Configurar as variáveis de ambiente

Copie o arquivo de exemplo:

```powershell
Copy-Item .env.example .env
```

O arquivo `.env` deve conter as credenciais utilizadas nos testes:

```env
SAUCE_USERNAME=standard_user
SAUCE_PASSWORD=secret_sauce
```

O arquivo `.env` não deve ser enviado ao repositório. As credenciais de demonstração devem ser utilizadas apenas para essa aplicação de testes.

### 6. Executar todos os testes

```bash
npx playwright test
```

### 7. Executar em um navegador específico

Chromium:

```bash
npx playwright test --project=chromium
```

Firefox:

```bash
npx playwright test --project=firefox
```

WebKit:

```bash
npx playwright test --project=webkit
```

### 8. Visualizar o relatório HTML

```bash
npx playwright show-report
```

## Estrutura do projeto

```text
qa-portfolio/
├── .github/
│   └── workflows/
│       └── playwright.yml
│
└── 04-playwright-automation/
    ├── fixtures/
    │   └── base.fixture.js
    │
    ├── pages/
    │   ├── login.page.js
    │   ├── cart.page.js
    │   └── checkout.page.js
    │
    ├── tests/
    │   ├── saucedemo-login.spec.js
    │   ├── saucedemo-cart.spec.js
    │   └── saucedemo-checkout.spec.js
    │
    ├── .env.example
    ├── .gitignore
    ├── package.json
    ├── package-lock.json
    ├── playwright.config.js
    └── README.md
```

## Objetivo profissional

Este projeto faz parte do meu portfólio de QA e demonstra conhecimentos práticos em:

- Automação de testes funcionais e end-to-end.
- JavaScript e Playwright.
- Organização de testes utilizando Page Object Model.
- Fixtures personalizadas.
- Testes cross-browser.
- Gerenciamento de variáveis de ambiente.
- Evidências e relatórios de execução.
- Integração contínua com GitHub Actions.

**Repositório:** [github.com/AnisioNetto/qa-portfolio](https://github.com/AnisioNetto/qa-portfolio)

**Aplicação utilizada:** [SauceDemo](https://www.saucedemo.com/)