
import { test, expect } from '../fixtures/base.fixture.js';

// CT-005 - Adicionar produto ao carrinho
test('CT-005 - Adicionar produto ao carrinho', async ({ page, loginPage, cartPage }) => {

  await loginPage.acessar();
  await loginPage.realizarLogin('standard_user', 'secret_sauce');

  await expect(page).toHaveURL(/inventory.html/);

  await cartPage.adicionarMochila();

  await expect(cartPage.cartBadge).toHaveText('1');

  await expect(
    page.locator('[data-test="remove-sauce-labs-backpack"]')
  ).toBeVisible();

});

// CT-006 - Validar produto no carrinho
test('CT-006 - Validar produto no carrinho', async ({ page, loginPage, cartPage }) => {

  await loginPage.acessar();
  await loginPage.realizarLogin('standard_user', 'secret_sauce');

  await cartPage.adicionarMochila();
  await cartPage.acessarCarrinho();

  await expect(
    cartPage.inventoryItemName.filter({
      hasText: 'Sauce Labs Backpack'
    })
  ).toHaveCount(1);

  await expect(cartPage.itemQuantity).toHaveText('1');
  await expect(cartPage.inventoryItemPrice).toHaveText('$29.99');

});

// CT-007 - Remover produto do carrinho
test('CT-007 - Remover produto do carrinho', async ({ page, loginPage, cartPage }) => {

  await loginPage.acessar();
  await loginPage.realizarLogin('standard_user', 'secret_sauce');

  await cartPage.adicionarMochila();
  await cartPage.acessarCarrinho();

  await cartPage.removerMochila();

  await expect(cartPage.cartItems).toHaveCount(0);
  await expect(cartPage.cartBadge).toHaveCount(0);

});