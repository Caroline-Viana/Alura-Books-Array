const elementoParaInserirLivros = document.getElementById("livros");
const elementoComValorTotalDeLivrosDisponiveis = document.getElementById('valor_total_livros_disponiveis')

// forEach() vai pegar cada elemento da nossa lista e executar a mesma função em cada um deles
function exibirOsLivrosNaTela(listaDeLivros) {
    elementoComValorTotalDeLivrosDisponiveis.innerHTML = ''
    elementoParaInserirLivros.innerHTML = ''
    listaDeLivros.forEach(livro => {
        //let disponibilidade = verificarDisponibilidade(livro);
        //(? é uma pergunta) livro.quantidade é maior que 0? se for coloca 'livro__imagens (: se não for) coloca 'indisponivel'
        let disponibilidade = livro.quantidade > 0 ? 'livro__imagens' : 'indisponivel'
        elementoParaInserirLivros.innerHTML += `
        <div class="livro">
        <img class="${disponibilidade}" src="${livro.imagem}" alt="${livro.alt}"/>
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
    })
}

/*function verificarDisponibilidade(livro){
    if (livro.quantidade > 0){
        return 'livro__imagens'
    } else {
        return 'indisponivel'
    }
}*/