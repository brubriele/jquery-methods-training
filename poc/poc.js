//Preenchimento da tabela com os dados do form
// Cálculo do IMC no insert dos dados
// Peso dividido pelo quadrado da altura: 70 / 2,89 = 24,22
const id = [1]
function appendRow() {
    $('#submit-form').click(function generateRow(e) {
        e.preventDefault();
        let nome = $("input[type=text][name=nome]").val();
        let sobrenome = $("input[type=text][name=sobrenome]").val();
        let peso = Number($("input[type=text][name=peso]").val());
        let altura = Number($("input[type=text][name=altura]").val());
        let imc = (peso / (altura * altura));
        imc = Number(imc).toFixed(2);
        $("#table")
            .append($("<tr>")
                .append("<td scope='row' data-id='number'>" + id.length + "</td>")
                .append("<td>" + nome + "</td>")
                .append("<td>" + sobrenome + "</td>")
                .append("<td>" + peso + "</td>")
                .append("<td>" + altura + "</td>")
                .append("<td>" + imc + "</td>")
                .append("<td><i data-key='" + id.length + "' title='vamos Para cima' class='fas fa-sort-up'></i></td>")
                .append("<td><i title='vamos para baixo' class='fas fa-sort-down table-down'></i></td>")
                .append("<td><i title='vamos para baixo' class='far fa-edit'></i></td>")
                .append("<td><i title='Excluir' class='fas fa-trash-alt'></i></td>"))
            .append("</tr>");
        // .appendTo("#table");
        replaceRow()
        replaceRowDown()

    });


}

function replaceRow() {
    $('.fa-sort-up').click(function (event) {
        event.preventDefault(); 
        var row_index = $(this).parent().index();
        console.log(row_index)
        var row = $(this).parents('tr');
        if (row.index() === 0) return; 
        row.next().insertBefore(row);
    });
}

function replaceRowDown() {
    $('.table-down').click(function (event) {
        event.preventDefault(); 
        var row_index = $(this).parent().index();
        console.log(row_index)
        var row = $(this).parents('tr');
        row.prev().insertAfter(row);
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
