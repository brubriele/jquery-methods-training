//Preenchimento da tabela com os dados do form
function appendRow() {

    $('#submit-form').click(function teste(e) {
        e.preventDefault();
        alert('foi')
        $("<table>")
            .append("default " + event.type + " prevented")
            .appendTo("#table");
    });
}
// Cálculo do IMC no insert dos dados

// Para cima, para baixo no limite certo

//Delete linha

//Edit in modal

//Ordenar por categorias ** hacker edition

(() => {
    appendRow();
})();