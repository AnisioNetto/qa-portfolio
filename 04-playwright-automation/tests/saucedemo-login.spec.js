
import { test, expect } from '@playwright/test';

// CT-001 - Login com credenciais válidas
test('CT-001 - Login com credenciais válidas', async ({ page }) => {

  await page.goto('https://www.saucedemo.com/');

  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');

  await page.locator('[data-test="login-button"]').click();

  await expect(page).toHaveURL(/inventory.html/);
  await expect(page.locator('[data-test="title"]')).toHaveText('Products');

});

// CT-002 - Login com senha inválida
test('CT-002 - Login com senha inválida', async ({ page }) => {

  await page.goto('https://www.saucedemo.com/');

  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('senha_incorreta');

  await page.locator('[data-test="login-button"]').click();

  await expect(page.locator('[data-test="error"]'))
    .toContainText('Username and password do not match');

  await expect(page).toHaveURL('https://www.saucedemo.com/');

});


test('CT-003 - Login com campos vazios', async ({ page }) => {

  // Acessar a aplicação
  await page.goto('https://www.saucedemo.com/');

  // Clicar em Login sem preencher os campos
  await page.locator('[data-test="login-button"]').click();

  // Validar mensagem de erro
  await expect(page.locator('[data-test="error"]'))
    .toContainText('Username is required');

  // Validar permanência na tela de login
  await expect(page).toHaveURL('https://www.saucedemo.com/');

});


test('CT-004 - Login sem informar senha', async ({ page }) => {

  // Acessar a aplicação
  await page.goto('https://www.saucedemo.com/');

  // Preencher somente o usuário
  await page.locator('[data-test="username"]').fill('standard_user');

  // Clicar em Login sem informar a senha
  await page.locator('[data-test="login-button"]').click();

  // Validar mensagem de erro
  await expect(page.locator('[data-test="error"]'))
    .toContainText('Password is required');

  // Validar permanência na tela de login
  await expect(page).toHaveURL('https://www.saucedemo.com/');

});
