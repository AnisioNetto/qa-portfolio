
import { test, expect } from '../fixtures/base.fixture.js';

// CT-001 - Login com credenciais válidas
test('CT-001 - Login com credenciais válidas', async ({ page, loginPage }) => {

  await loginPage.acessar();

  await loginPage.realizarLogin(
    process.env.SAUCE_USERNAME,
    process.env.SAUCE_PASSWORD
  );

  await expect(page).toHaveURL(/inventory.html/);
  await expect(page.locator('[data-test="title"]')).toHaveText('Products');

});

// CT-002 - Login com senha inválida
test('CT-002 - Login com senha inválida', async ({ page, loginPage }) => {

  await loginPage.acessar();

  await loginPage.realizarLogin(
    process.env.SAUCE_USERNAME,
    'senha_incorreta'
  );

  await expect(loginPage.errorMessage)
    .toContainText('Username and password do not match');

  await expect(page).toHaveURL('https://www.saucedemo.com/');

});

// CT-003 - Login com campos vazios
test('CT-003 - Login com campos vazios', async ({ page, loginPage }) => {

  await loginPage.acessar();
  await loginPage.clicarLogin();

  await expect(loginPage.errorMessage)
    .toContainText('Username is required');

  await expect(page).toHaveURL('https://www.saucedemo.com/');

});

// CT-004 - Login sem informar senha
test('CT-004 - Login sem informar senha', async ({ page, loginPage }) => {

  await loginPage.acessar();

  await loginPage.usernameInput.fill(process.env.SAUCE_USERNAME);

  await loginPage.clicarLogin();

  await expect(loginPage.errorMessage)
    .toContainText('Password is required');

  await expect(page).toHaveURL('https://www.saucedemo.com/');

});
