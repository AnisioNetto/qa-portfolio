
import { test, expect } from '@playwright/test';
import { CartPage } from '../pages/cart.page.js';
import { LoginPage } from '../pages/login.page.js';

// CT-005 - Adicionar produto ao carrinho
test('CT-005 - Adicionar produto ao carrinho', async ({ page }) => {

  const loginPage = new LoginPage(page);
  const cartPage = new CartPage(page);

  await loginPage.acessar();
  await loginPage.realizarLogin('standard_user', 'secret_sauce');

  await expect(page).toHaveURL(/inventory.html/);

  await cartPage.adicionarMochila();

  await expect(cartPage.cartBadge).toHaveText('1');

  await expect(
    page.locator('[data-test="remove-sauce-labs-backpack"]')
  ).toBeVisible();

});

test('CT-006 - Validar produto no carrinho', async ({ page }) => {

  const loginPage = new LoginPage(page);
  const cartPage = new CartPage(page);

  await loginPage.acessar();
  await loginPage.realizarLogin('standard_user', 'secret_sauce');

  await cartPage.adicionarMochila();
  await cartPage.acessarCarrinho();

  // Validar nome do produto
  await expect(
    cartPage.inventoryItemName.filter({
      hasText: 'Sauce Labs Backpack'
    })
  ).toHaveCount(1);

  // Validar quantidade
  await expect(cartPage.itemQuantity).toHaveText('1');

  // Validar preço
  await expect(cartPage.inventoryItemPrice).toHaveText('$29.99');

});

test('CT-007 - Remover produto do carrinho', async ({ page }) => {

  const loginPage = new LoginPage(page);
  const cartPage = new CartPage(page);

  await loginPage.acessar();
  await loginPage.realizarLogin('standard_user', 'secret_sauce');

  await cartPage.adicionarMochila();
  await cartPage.acessarCarrinho();

  await cartPage.removerMochila();

  // Validar que o produto foi removido
  await expect(cartPage.cartItems).toHaveCount(0);

  // Validar que o indicador do carrinho desapareceu
  await expect(cartPage.cartBadge).toHaveCount(0);

});
