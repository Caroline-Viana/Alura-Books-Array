//sort vai classificar os elementos do array e retornar um array ordenado. Ele transformou tudo para string, a ordenação dele não vai ser estável.

let btnOrdenarPorPreco = document.getElementById("btnOrdenarPorPreco");
btnOrdenarPorPreco.addEventListener("click", ordernarLivrosPorPreco);

function ordernarLivrosPorPreco (){
    let livrosOrdenados = livros.sort((a, b) => a.preco - b.preco);
    exibirOsLivrosNaTela(livrosOrdenados);
}