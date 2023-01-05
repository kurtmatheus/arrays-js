let livros = [];
const endpointAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';
getLivrosDaAPI();
let livrosComDesconto = [];

async function getLivrosDaAPI() {
    const res = await fetch(endpointAPI);
    livros = await res.json();
    livrosComDesconto = aplicaDesconto(livros);
    exibeLivrosNaTela(livrosComDesconto);
}

