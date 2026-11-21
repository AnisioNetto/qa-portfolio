
import { test, expect } from '@playwright/test';

test('CT-008 - Acessar formulário de checkout', async ({ page }) => {

  // Acessar a aplicação
  await page.goto('https://www.saucedemo.com/');

  // Realizar login
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();

  // Adicionar produto ao carrinho
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();

  // Acessar carrinho
  await page.locator('[data-test="shopping-cart-link"]').click();

  // Iniciar checkout
  await page.locator('[data-test="checkout"]').click();

  // Validar acesso ao formulário
  await expect(page).toHaveURL(/checkout-step-one.html/);
  await expect(page.locator('[data-test="title"]'))
    .toHaveText('Checkout: Your Information');

  // Validar campos obrigatórios
  await expect(page.locator('[data-test="firstName"]')).toBeVisible();
  await expect(page.locator('[data-test="lastName"]')).toBeVisible();
  await expect(page.locator('[data-test="postalCode"]')).toBeVisible();

});


test('CT-009 - Validar First Name obrigatório', async ({ page }) => {

  await page.goto('https://www.saucedemo.com/');

  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();

  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await page.locator('[data-test="shopping-cart-link"]').click();
  await page.locator('[data-test="checkout"]').click();

  // Tentar continuar sem preencher os campos
  await page.locator('[data-test="continue"]').click();

  // Validar mensagem de erro
  await expect(page.locator('[data-test="error"]'))
    .toContainText('Error: First Name is required');

});


test('CT-010 - Validar Last Name obrigatório', async ({ page }) => {

  await page.goto('https://www.saucedemo.com/');

  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();

  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await page.locator('[data-test="shopping-cart-link"]').click();
  await page.locator('[data-test="checkout"]').click();

  // Preencher somente First Name
  await page.locator('[data-test="firstName"]').fill('Anisio');

  // Tentar continuar sem Last Name
  await page.locator('[data-test="continue"]').click();

  // Validar mensagem de erro
  await expect(page.locator('[data-test="error"]'))
    .toContainText('Error: Last Name is required');

});


test('CT-011 - Validar Postal Code obrigatório', async ({ page }) => {

  await page.goto('https://www.saucedemo.com/');

  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();

  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await page.locator('[data-test="shopping-cart-link"]').click();
  await page.locator('[data-test="checkout"]').click();

  // Preencher First Name e Last Name
  await page.locator('[data-test="firstName"]').fill('Anisio');
  await page.locator('[data-test="lastName"]').fill('QA Tester');

  // Tentar continuar sem Postal Code
  await page.locator('[data-test="continue"]').click();

  // Validar mensagem de erro
  await expect(page.locator('[data-test="error"]'))
    .toContainText('Error: Postal Code is required');

});


test('CT-012 - Validar resumo do pedido', async ({ page }) => {

  await page.goto('https://www.saucedemo.com/');

  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();

  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await page.locator('[data-test="shopping-cart-link"]').click();
  await page.locator('[data-test="checkout"]').click();

  // Preencher dados do cliente
  await page.locator('[data-test="firstName"]').fill('Anisio');
  await page.locator('[data-test="lastName"]').fill('QA Tester');
  await page.locator('[data-test="postalCode"]').fill('38400-000');

  // Avançar para o resumo
  await page.locator('[data-test="continue"]').click();

  // Validar página de resumo
  await expect(page).toHaveURL(/checkout-step-two.html/);
  await expect(page.locator('[data-test="title"]'))
    .toHaveText('Checkout: Overview');

  // Validar produto
  await expect(
    page.locator('[data-test="inventory-item-name"]')
      .filter({ hasText: 'Sauce Labs Backpack' })
  ).toHaveCount(1);

  // Validar preço e total
  await expect(page.locator('[data-test="subtotal-label"]'))
    .toHaveText('Item total: $29.99');

  await expect(page.locator('[data-test="tax-label"]'))
    .toHaveText('Tax: $2.40');

  await expect(page.locator('[data-test="total-label"]'))
    .toHaveText('Total: $32.39');

});


test('CT-013 - Finalizar compra com sucesso', async ({ page }) => {

  await page.goto('https://www.saucedemo.com/');

  // Login
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();

  // Adicionar produto e acessar checkout
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await page.locator('[data-test="shopping-cart-link"]').click();
  await page.locator('[data-test="checkout"]').click();

  // Preencher dados
  await page.locator('[data-test="firstName"]').fill('Anisio');
  await page.locator('[data-test="lastName"]').fill('QA Tester');
  await page.locator('[data-test="postalCode"]').fill('38400-000');

  await page.locator('[data-test="continue"]').click();

  // Finalizar compra
  await page.locator('[data-test="finish"]').click();

  // Validar confirmação
  await expect(page).toHaveURL(/checkout-complete.html/);

  await expect(page.locator('[data-test="complete-header"]'))
    .toHaveText('Thank you for your order!');

  await expect(page.locator('[data-test="complete-text"]'))
    .toContainText('Your order has been dispatched');

});
