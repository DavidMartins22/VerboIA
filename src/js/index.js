/*
 O que precisamos fazer? - Quando o usuário clicar no botão "Aplicar filtros", vamos filtrar cartas baseado na categoria e no preço máximo selecionado
    OBJETIVO 1 - Criar a funcionalidade de filtrar as cartas
        Passo 1 - pegar o botão de aplicar filtros do HTML e mandar para o JS
        Passo 2 - escutar o clique no botão de aplicar filtros
        Passo 3 - pegar os valores dos campos de categoria de preço
        Passo 4 - para cada carta, verificar se ela deve ser mostrada ou escondida
*/

// Passo 1 - pegar o botão de aplicar filtros do HTML e mandar para o JS
const botaoFiltrar = document.querySelector('.btn-filtrar');

// Passo 2 - escutar o clique no botão de aplicar filtros
botaoFiltrar.addEventListener('click', function () {

    // Passo 3 - pegar os valores dos campos de categoria de preço
    const categoriaSelecionado = document.querySelector('#categoria').value;
    const precoMaximoSelecionado = document.querySelector('#preco').value


    // Passo 4 - para cada carta, verificar se ela deve ser mostrada ou escondida baseando nos filtros que a pessoa digitou
    const cartas = document.querySelectorAll('.carta');

    cartas.forEach(function (carta) {
        const categoriaCarta = carta.dataset.categoria;
        const precoCarta = carta.dataset.preco;

        let mostrarCarta = true;

        console.log(categoriaSelecionado);

        const temFiltroDeCategoria = categoriaSelecionado != ''

        const cartaoNaoBateComFiltroCategoria = categoriaSelecionado.toLowerCase() != categoriaCarta.toLowerCase()

        if (temFiltroDeCategoria && cartaoNaoBateComFiltroCategoria) {
            mostrarCarta = false
        };

        const temFiltroDePreco = precoMaximoSelecionado != '';
        const cartaoNaoBateComFiltroDePreco = parseFloat(precoCarta) > parseFloat(precoMaximoSelecionado);


        if (temFiltroDePreco && cartaoNaoBateComFiltroDePreco) {
            mostrarCarta = false;
        };

        if (mostrarCarta) {
            carta.classList.add("mostrar");
            carta.classList.remove("esconder");
        } else {
            carta.classList.remove('mostrar');
            carta.classList.add('esconder')
        };
    });
});