const elementoSecaoLivos = document.querySelector('#livros');

// FOREACH //
function exibeLivrosNaTela(livros) {
    elementoSecaoLivos.innerHTML = '';
    livros.forEach((livro) => {
        let disponibilidade = livro.quantidade < 1 ? 'livro__imagem indisponivel' : 'livro__imagem'
        
        elementoSecaoLivos.innerHTML += `
        <div class="livro">
            <img class="${disponibilidade}" src="${livro.imagem}" alt="${livros.alt}" />
            <h2 class="livro__titulo">
            ${livro.titulo}
            </h2>
            <p class="livro__descricao">${livro.autor}</p>
            <p class="livro__preco" id="preco">R$${livro.preco.toFixed(2)}</p>
            <div class="tags">
            <span class="tag">${livro.categoria}</span>
            </div>
        </div>
        `
    });
}