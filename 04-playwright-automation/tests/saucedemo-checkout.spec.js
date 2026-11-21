
import { test, expect } from '@playwright/test';
import { CheckoutPage } from '../pages/checkout.page.js';
import { CartPage } from '../pages/cart.page.js';
import { LoginPage } from '../pages/login.page.js';


test('CT-008 - Acessar formulário de checkout', async ({ page }) => {

  const loginPage = new LoginPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);

  await loginPage.acessar();
  await loginPage.realizarLogin('standard_user', 'secret_sauce');

  await cartPage.adicionarMochila();
  await cartPage.acessarCarrinho();

  await checkoutPage.iniciarCheckout();

  // Validar acesso ao formulário
  await expect(page).toHaveURL(/checkout-step-one.html/);
  await expect(page.locator('[data-test="title"]'))
    .toHaveText('Checkout: Your Information');

  // Validar campos obrigatórios
  await expect(checkoutPage.firstNameInput).toBeVisible();
  await expect(checkoutPage.lastNameInput).toBeVisible();
  await expect(checkoutPage.postalCodeInput).toBeVisible();

});


// CT-009 - Validar First Name obrigatório
test('CT-009 - Validar First Name obrigatório', async ({ page }) => {

  const loginPage = new LoginPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);

  await loginPage.acessar();
  await loginPage.realizarLogin('standard_user', 'secret_sauce');

  await cartPage.adicionarMochila();
  await cartPage.acessarCarrinho();

  await checkoutPage.iniciarCheckout();

  // Tentar continuar sem preencher os campos
  await checkoutPage.continuar();

  // Validar mensagem de erro
  await expect(checkoutPage.errorMessage)
    .toContainText('Error: First Name is required');

});

// CT-010 - Validar Last Name obrigatório
test('CT-010 - Validar Last Name obrigatório', async ({ page }) => {

  const loginPage = new LoginPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);

  await loginPage.acessar();
  await loginPage.realizarLogin('standard_user', 'secret_sauce');

  await cartPage.adicionarMochila();
  await cartPage.acessarCarrinho();

  await checkoutPage.iniciarCheckout();

  // Preencher somente First Name
  await checkoutPage.firstNameInput.fill('Anisio');

  // Tentar continuar sem Last Name
  await checkoutPage.continuar();

  // Validar mensagem de erro
  await expect(checkoutPage.errorMessage)
    .toContainText('Error: Last Name is required');

});

// CT-011 - Validar Postal Code obrigatório
test('CT-011 - Validar Postal Code obrigatório', async ({ page }) => {

  const loginPage = new LoginPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);

  await loginPage.acessar();
  await loginPage.realizarLogin('standard_user', 'secret_sauce');

  await cartPage.adicionarMochila();
  await cartPage.acessarCarrinho();

  await checkoutPage.iniciarCheckout();

  // Preencher First Name e Last Name, sem Postal Code
  await checkoutPage.firstNameInput.fill('Anisio');
  await checkoutPage.lastNameInput.fill('Oliveira');

  await checkoutPage.continuar();

  // Validar mensagem de erro
  await expect(checkoutPage.errorMessage)
    .toContainText('Error: Postal Code is required');

});


// CT-012 - Validar resumo do pedido
test('CT-012 - Validar resumo do pedido', async ({ page }) => {

  const loginPage = new LoginPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);

  await loginPage.acessar();
  await loginPage.realizarLogin('standard_user', 'secret_sauce');

  await cartPage.adicionarMochila();
  await cartPage.acessarCarrinho();

  await checkoutPage.iniciarCheckout();

  await checkoutPage.preencherDados(
    'Anisio',
    'Oliveira',
    '38400-000'
  );

  await checkoutPage.continuar();

  await expect(page).toHaveURL(/checkout-step-two.html/);

  await expect(page.locator('[data-test="title"]'))
    .toHaveText('Checkout: Overview');

  await expect(checkoutPage.subtotalLabel).toHaveText('Item total: $29.99');
  await expect(checkoutPage.taxLabel).toHaveText('Tax: $2.40');
  await expect(checkoutPage.totalLabel).toHaveText('Total: $32.39');

});

// CT-013 - Finalizar compra com sucesso
test('CT-013 - Finalizar compra com sucesso', async ({ page }) => {

  const loginPage = new LoginPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);

  await loginPage.acessar();
  await loginPage.realizarLogin('standard_user', 'secret_sauce');

  await cartPage.adicionarMochila();
  await cartPage.acessarCarrinho();

  await checkoutPage.iniciarCheckout();

  await checkoutPage.preencherDados(
    'Anisio',
    'Oliveira',
    '38400-000'
  );

  await checkoutPage.continuar();

  await checkoutPage.finalizarCompra();

  await expect(page).toHaveURL(/checkout-complete.html/);

  await expect(checkoutPage.completeHeader)
    .toHaveText('Thank you for your order!');

  await expect(checkoutPage.completeText)
    .toContainText('Your order has been dispatched');

});