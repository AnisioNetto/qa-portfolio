
import { test, expect } from '@playwright/test';

test('CT-005 - Adicionar produto ao carrinho', async ({ page }) => {

  // Acessar a aplicação
  await page.goto('https://www.saucedemo.com/');

  // Realizar login
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();

  // Validar acesso à página de produtos
  await expect(page).toHaveURL(/inventory.html/);

  // Adicionar Sauce Labs Backpack ao carrinho
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();

  // Validar contador do carrinho
  await expect(page.locator('[data-test="shopping-cart-badge"]'))
    .toHaveText('1');

  // Validar que o botão mudou para Remove
  await expect(page.locator('[data-test="remove-sauce-labs-backpack"]'))
    .toBeVisible();

});


test('CT-006 - Validar produto no carrinho', async ({ page }) => {

  // Acessar a aplicação
  await page.goto('https://www.saucedemo.com/');

  // Realizar login
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();

  // Adicionar produto ao carrinho
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();

  // Acessar o carrinho
  await page.locator('[data-test="shopping-cart-link"]').click();

// Validar nome do produto
await expect(
  page.locator('[data-test="inventory-item-name"]')
    .filter({ hasText: 'Sauce Labs Backpack' })
).toHaveCount(1);

  // Validar quantidade
  await expect(page.locator('[data-test="item-quantity"]'))
    .toHaveText('1');

  // Validar preço
  await expect(page.locator('[data-test="inventory-item-price"]'))
    .toHaveText('$29.99');

});


test('CT-007 - Remover produto do carrinho', async ({ page }) => {

  // Acessar a aplicação
  await page.goto('https://www.saucedemo.com/');

  // Realizar login
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();

  // Adicionar produto
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();

  // Acessar carrinho
  await page.locator('[data-test="shopping-cart-link"]').click();

  // Remover produto
  await page.locator('[data-test="remove-sauce-labs-backpack"]').click();

    // Validar que o produto não aparece mais no carrinho
  await expect(
    page.locator('[data-test="inventory-item"]')
  ).toHaveCount(0);

  // Validar que o indicador do carrinho desapareceu
  await expect(
    page.locator('[data-test="shopping-cart-badge"]')
  ).toHaveCount(0);
});
