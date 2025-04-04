document.addEventListener("DOMContentLoaded", function () {
  const botoesCategoria = document.querySelectorAll(
    ".botoes_personalizados img"
  );
  const secaoActionFigures = document.querySelector(
    ".action_figures_container"
  );
  const secaoCamisas = document.querySelector(".camisa_container");
  const secaoMangas = document.querySelector(".manga_container");
  const secaoCosplay = document.querySelector(".cosplay_container");

  const todasSecoes = [
    secaoActionFigures,
    secaoCamisas,
    secaoMangas,
    secaoCosplay,
  ];

  function rolarParaSecao(secao) {
    secao.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  function mostrarCategoria(indiceCategoria) {
    todasSecoes.forEach((secao, indice) => {
      if (indice === indiceCategoria) {
        secao.style.display = "grid";
        rolarParaSecao(secao);
      } else {
        secao.style.display = "none";
      }
    });
  }

  function mostrarTodasCategorias() {
    todasSecoes.forEach((secao) => {
      secao.style.display = "grid";
    });
  }

  botoesCategoria.forEach((botao, indice) => {
    botao.addEventListener("click", function () {
      mostrarCategoria(indice);
    });

    botao.style.cursor = "pointer";
  });

  const botaoTodosProdutos = document.createElement("img");
  botaoTodosProdutos.src = "../assets/Produtos/plano_fundo/todos-produtos.png";
  botaoTodosProdutos.alt = "Todos os Produtos";
  botaoTodosProdutos.style.cursor = "pointer";

  botaoTodosProdutos.addEventListener("click", mostrarTodasCategorias);

  todasSecoes.forEach((secao, indice) => {
    const titulo = document.createElement("h2");
    titulo.textContent = titulosCategorias[indice];
    titulo.className = "titulo-categoria";
    titulo.style.textAlign = "center";
    titulo.style.margin = "2rem 0";
    titulo.style.fontSize = "2rem";
    titulo.style.fontWeight = "bold";

    secao.parentNode.insertBefore(titulo, secao);
  });
});
