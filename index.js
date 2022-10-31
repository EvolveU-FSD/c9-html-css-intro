document.addEventListener('DOMContentLoaded', () => {
  const barcodeInput = document.querySelector('#barcode-input');
  const searchButton = document.querySelector('#search-button');
  const productNameLabel = document.querySelector('#product-name');
  const productImage = document.querySelector('#product-image');

  searchButton.addEventListener('click', async () => {
    const barcode = barcodeInput.value;

    const response = await fetch(
      `https://world.openfoodfacts.org/api/v0/product/${barcode}.json`
    );
    const result = await response.json();

    if (result.status !== 1) {
      // TODO: Show a real error message to user
      console.error('Product not found');
      return;
    }

    productNameLabel.textContent = result.product.product_name;
    productImage.src = result.product.image_url;
  });
});
