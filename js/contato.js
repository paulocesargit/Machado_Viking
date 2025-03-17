document.querySelectorAll(".copiar").forEach((botao) => {
  botao.addEventListener("click", () => {
    const texto =
      botao.previousElementSibling.querySelector(".texto-copiavel").dataset
        .text;
    navigator.clipboard
      .writeText(texto)
      .then(() => alert(`Copiado: ${texto}`))
      .catch((err) => console.error("Erro ao copiar: ", err));
  });
});
