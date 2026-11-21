
import { test, expect } from '../fixtures/base.fixture.js';

// CT-001 - Login com credenciais válidas
test('CT-001 - Login com credenciais válidas', async ({ page, loginPage }) => {

  await loginPage.acessar();
  await loginPage.realizarLogin('standard_user', 'secret_sauce');

  await expect(page).toHaveURL(/inventory.html/);
  await expect(page.locator('[data-test="title"]')).toHaveText('Products');

});

test('CT-002 - Login com senha inválida', async ({ page, loginPage }) => {

  await loginPage.acessar();
  await loginPage.realizarLogin('standard_user', 'senha_incorreta');

  await expect(loginPage.errorMessage)
    .toContainText('Username and password do not match');

  await expect(page).toHaveURL('https://www.saucedemo.com/');
});

test('CT-003 - Login com campos vazios', async ({ page, loginPage }) => {

  await loginPage.acessar();
  await loginPage.clicarLogin();

  await expect(loginPage.errorMessage)
    .toContainText('Username is required');

  await expect(page).toHaveURL('https://www.saucedemo.com/');
});

test('CT-004 - Login sem informar senha', async ({ page, loginPage }) => {

  await loginPage.acessar();
  await loginPage.usernameInput.fill('standard_user');
  await loginPage.clicarLogin();

  await expect(loginPage.errorMessage)
    .toContainText('Password is required');

  await expect(page).toHaveURL('https://www.saucedemo.com/');
});