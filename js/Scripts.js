document.getElementById("openModalDiv").addEventListener("click", function () {
  document.getElementById("modal").style.display = "block";
});

document.getElementById("closeModal").addEventListener("click", function () {
  document.getElementById("modal").style.display = "none";
});

document.getElementById("checkoutBtn").addEventListener("click", function () {
  alert("Compra finalizada!");
  document.getElementById("modal").style.display = "none";
});

document.addEventListener("DOMContentLoaded", function () {
  const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  const cartItemsContainer = document.getElementById("cartItems");
  const cartCount = document.querySelector(".cart-count");

  if (cartItems.length === 0) {
    cartItemsContainer.innerHTML = "<p>Sua sacola está vazia.</p>";
  } else {
    cartItems.forEach((item) => {
      const itemElement = document.createElement("div");
      itemElement.classList.add("cart-item");
      itemElement.innerHTML = `
                        <img src="${item.img}" alt="${item.name}">
                        <p>${item.name}</p>
                        <button class="remove-item">Excluir</button>
                    `;
      cartItemsContainer.appendChild(itemElement);

      itemElement
        .querySelector(".remove-item")
        .addEventListener("click", () => {
          const index = cartItems.indexOf(item);
          if (index !== -1) {
            cartItems.splice(index, 1);
            localStorage.setItem("cartItems", JSON.stringify(cartItems));
            itemElement.remove();
          }
        });
    });
  }

  cartCount.textContent = cartItems.length;
});

document.getElementById("closeModal").addEventListener("click", () => {
  window.location.href = "carrinho.html";
});

document.getElementById("checkoutBtn").addEventListener("click", () => {
  alert("Compra finalizada!");
  localStorage.removeItem("cartItems");
  window.location.href = "carrinho.html";
});
