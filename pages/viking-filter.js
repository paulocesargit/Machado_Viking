// Adicione este script no final do seu HTML, antes da tag de fechamento </body>

document.addEventListener('DOMContentLoaded', function() {
  // Obtém referências para os botões e seções de produtos
  const botoesCategoria = document.querySelectorAll('.botoes_personalizados img');
  const secaoActionFigures = document.querySelector('.action_figures_container');
  const secaoCamisas = document.querySelector('.camisa_container');
  const secaoMangas = document.querySelector('.manga_container');
  const secaoCosplay = document.querySelector('.cosplay_container');
  
  // Obtém todas as seções de produtos para mostrar/ocultar
  const todasSecoes = [
    secaoActionFigures,
    secaoCamisas,
    secaoMangas,
    secaoCosplay
  ];
  
  // Função para rolar suavemente até uma seção
  function rolarParaSecao(secao) {
    secao.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
  
  // Função para mostrar apenas uma categoria e ocultar as outras
  function mostrarCategoria(indiceCategoria) {
    todasSecoes.forEach((secao, indice) => {
      if (indice === indiceCategoria) {
        secao.style.display = 'grid';
        rolarParaSecao(secao);
      } else {
        secao.style.display = 'none';
      }
    });
  }
  
  // Função para mostrar todas as categorias
  function mostrarTodasCategorias() {
    todasSecoes.forEach(secao => {
      secao.style.display = 'grid';
    });
  }
  
  // Adiciona event listeners de clique para cada botão
  botoesCategoria.forEach((botao, indice) => {
    botao.addEventListener('click', function() {
      // Mapeia o índice do botão para a seção correspondente
      mostrarCategoria(indice);
    });
    
    // Adiciona cursor pointer para indicar que é clicável
    botao.style.cursor = 'pointer';
  });
  
  // Adiciona botão "Todos os Produtos" à página
  const containerBotoes = document.querySelector('.botoes_personalizados');
  const botaoTodosProdutos = document.createElement('img');
  botaoTodosProdutos.src = "../assets/Produtos/plano_fundo/todos-produtos.png"; // Você precisará criar esta imagem
  botaoTodosProdutos.alt = "Todos os Produtos";
  botaoTodosProdutos.style.cursor = 'pointer';
  
  // Adiciona evento de clique para o botão "Todos os Produtos"
  botaoTodosProdutos.addEventListener('click', mostrarTodasCategorias);
  
  // Opcionalmente, adiciona o botão "Todos os Produtos" à página
  // containerBotoes.appendChild(botaoTodosProdutos);
  
  // Adiciona títulos de categoria para tornar a navegação mais clara
  
  
  todasSecoes.forEach((secao, indice) => {
    const titulo = document.createElement('h2');
    titulo.textContent = titulosCategorias[indice];
    titulo.className = 'titulo-categoria';
    titulo.style.textAlign = 'center';
    titulo.style.margin = '2rem 0';
    titulo.style.fontSize = '2rem';
    titulo.style.fontWeight = 'bold';
    
    // Insere o título antes da grade de produtos
    secao.parentNode.insertBefore(titulo, secao);
  });
});