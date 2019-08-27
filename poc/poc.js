//Preenchimento da tabela com os dados do form
// Cálculo do IMC no insert dos dados
// Peso dividido pelo quadrado da altura: 70 / 2,89 = 24,22
const id = []
function appendRow() {
    $('#submit-form').click(function generateRow(e) {
        e.preventDefault();
        let nome = $("input[type=text][name=nome]").val();
        let sobrenome = $("input[type=text][name=sobrenome]").val();
        let peso = Number($("input[type=text][name=peso]").val());
        let altura = Number($("input[type=text][name=altura]").val());
        
        let imc = (peso / (altura * altura));


        $("<tbody>")
            .append(`<tr class="teste">
            <th scope="row" data-id="number">${id.length + 1}</th>
            <td>${nome}</td>
            <td>${sobrenome}</td>
            <td>${peso}</td>
            <td>${altura}</td>
            <td>${imc}</td>
            <td><i title="vamos Para cima" class="fas fa-sort-up"></i></td>
            <td><i title="vamos para baixo" class="fas fa-sort-down"></i></td>
            <td><i title="vamos para baixo" class="far fa-edit"></i></td>
            <td><i title="Excluir" class="fas fa-trash-alt"></i></td>
        </tr>`)
            .appendTo("#table");
    });

}

function generateId() {
    $("#submit-form").click(function () {
        let dataId = parseInt($(this).attr("data-id"));
        id.push(isNaN(dataId) ? 0 : dataId)
    });
}



// Para cima, para baixo no limite certo

//Delete linha

//Edit in modal

//Ordenar por categorias ** hacker edition

(() => {
    appendRow();
    generateId();
})();