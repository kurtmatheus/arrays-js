const elementosBotaoFiltro = document.querySelectorAll('[data-filtro]');
const elementoValorTotalDisponiveis = document.querySelector('#valor_total_livros_disponiveis');

elementosBotaoFiltro.forEach(element => {
    element.addEventListener('click', evento => {
        const categoria = evento.target.value;
        const livrosFiltrados = categoria == 'disponivel' ? filtrarPorDisponibilidade() : filtrarPorCategoria(categoria); 
        exibeLivrosNaTela(livrosFiltrados);

        if(categoria == 'disponivel') {
            const valorTotal = calcularValorTotalDisponiveis(livrosFiltrados);
            exibeValorTotalDisponiveis(valorTotal);
        }
        
    }) 
 });

function filtrarPorCategoria(categoria) {
    return livros.filter(livro => livro.categoria === categoria);
}

function filtrarPorDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0);
}

function exibeValorTotalDisponiveis(valor){
    elementoValorTotalDisponiveis.innerHTML += `
    <div class="livros__disponiveis">
        <p>Todos os livros disponíveis por R$ <span id="valor">${valor}</span></p>
    </div>
    `
}

