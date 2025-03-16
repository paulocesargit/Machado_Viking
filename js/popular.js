const products = document.querySelectorAll(".popular");
const modal = document.getElementById("modal");
const modalImage = document.getElementById("modal-image");
const modalName = document.getElementById("modal-name");
const modalPreco = document.getElementById("modal-preco");
const modalParcelamento = document.getElementById("modal-parcelamento");
const closeModal = document.querySelector(".close");

products.forEach((product) => {
  product.addEventListener("click", () => {
    const imageSrc = product.querySelector(".popular-image").src;
    const name = product.querySelector(".popular-name").innerText;
    const preco = product.querySelector(".popular-preco").innerText;
    const parcelamento = product.querySelector(
      ".popular-parcelamento"
    ).innerText;

    modalImage.src = imageSrc;
    modalName.innerText = name;
    modalPreco.innerText = preco;
    modalParcelamento.innerText = parcelamento;

    modal.style.display = "block";
  });
});

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
