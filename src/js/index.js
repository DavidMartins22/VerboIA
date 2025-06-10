// Passo 1 - Pegar o botão de aplicar filtros
const botaoFiltrar = document.querySelector('.btn-filtrar');

// Passo 2 - Adicionar o evento de clique no botão
botaoFiltrar.addEventListener('click', aplicarFiltros);

// Função principal chamada quando o botão é clicado
function aplicarFiltros() {
    const categoriaSelecionada = pegarCategoriaSelecionada();
    const precoMaximoSelecionado = pegarPrecoMaximoSelecionado();

    const cartas = document.querySelectorAll('.carta');

    cartas.forEach(function (carta) {
        const deveMostrar = verificarSeCartaPassaNosFiltros(carta, categoriaSelecionada, precoMaximoSelecionado);
        mostrarOuEsconderCarta(carta, deveMostrar);
    });
}

// Função para pegar o valor selecionado no campo de categoria
function pegarCategoriaSelecionada() {
    return document.querySelector('#categoria').value;
}

// Função para pegar o valor selecionado no campo de preço
function pegarPrecoMaximoSelecionado() {
    return document.querySelector('#preco').value;
}

// Função que verifica se uma carta deve ser mostrada ou não
function verificarSeCartaPassaNosFiltros(carta, categoriaSelecionada, precoMaximoSelecionado) {
    const categoriaCarta = carta.dataset.categoria.toLowerCase();
    const precoCarta = parseFloat(carta.dataset.preco);

    let passouCategoria = true;
    let passouPreco = true;

    if (categoriaSelecionada !== '') {
        passouCategoria = categoriaCarta === categoriaSelecionada.toLowerCase();
    }

    if (precoMaximoSelecionado !== '') {
        passouPreco = precoCarta <= parseFloat(precoMaximoSelecionado);
    }

    return passouCategoria && passouPreco;
}

// Função que mostra ou esconde a carta
function mostrarOuEsconderCarta(carta, deveMostrar) {
    if (deveMostrar) {
        carta.classList.add('mostrar');
        carta.classList.remove('esconder');
    } else {
        carta.classList.remove('mostrar');
        carta.classList.add('esconder');
    }
}
