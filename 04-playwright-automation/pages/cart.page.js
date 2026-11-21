
export class CartPage {
  constructor(page) {
    this.page = page;

    this.cartLink = page.locator('[data-test="shopping-cart-link"]');
    this.cartBadge = page.locator('[data-test="shopping-cart-badge"]');
    this.inventoryItemName = page.locator('[data-test="inventory-item-name"]');
    this.itemQuantity = page.locator('[data-test="item-quantity"]');
    this.inventoryItemPrice = page.locator('[data-test="inventory-item-price"]');
    this.cartItems = page.locator('[data-test="inventory-item"]');
  }

  async acessarCarrinho() {
    await this.cartLink.click();
  }

  async adicionarMochila() {
    await this.page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  }

  async removerMochila() {
    await this.page.locator('[data-test="remove-sauce-labs-backpack"]').click();
  }
}
