const elementosBotaoSort = document.querySelector('#btnOrdenarPorPreco');

elementosBotaoSort.addEventListener('click', evento => {
        const livrosOrdenados = ordenaPorPreco(livrosComDesconto);
        exibeLivrosNaTela(livrosOrdenados);
    });

// SORT 

function ordenaPorPreco(livros) {
    return livros.sort((a,b) => a.preco-b.preco);
}