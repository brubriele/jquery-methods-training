function lastChild () {
    console.log('aqui');
    $('#last-child .saladas:not(:last-child)').addBorda();
}

// Deafio cards - seletor cards em tag, criar uma function para pegar todos os cards adicionando borda no card

function cards() {
    const card = document.querySelectorAll('.card');
    // console.log(card[2])
    addBorda(card[4]);
}


function cardsJQuery() {
    console.log('aqui');
    // $( ".cards .col-sm-6:nth-child(5) .card").addBorda('pink');
    // $( ".cards :nth-child(5) .card").addBorda('pink');
    $( ":nth-child(5) .card").addBorda('pink');

}


(() => {
    cardsJQuery();
    // cards();
    lastChild();
})();

