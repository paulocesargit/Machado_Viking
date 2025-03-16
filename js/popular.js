const products = document.querySelectorAll(".popular");
const modal = document.getElementById("popularmodal");
const modalImage = document.getElementById("popularmodal-image");
const modalName = document.getElementById("popularmodal-name");
const modalPreco = document.getElementById("popularmodal-preco");
const modalParcelamento = document.getElementById("popularmodal-parcelamento");
const closeModal = document.querySelector(".popular-close");

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
