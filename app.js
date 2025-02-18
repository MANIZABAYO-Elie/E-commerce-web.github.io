document.addEventListener("DOMContentLoaded", () => {
  const addToCartButtons = document.querySelectorAll(".add-to-cart");

  addToCartButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const product = button.closest(".product-card");
      const productName = product.querySelector("h3").innerText;
      const productPrice = product.querySelector("p").innerText;

      alert(`Added ${productName} to cart for ${productPrice}`);
    });
  });
});
