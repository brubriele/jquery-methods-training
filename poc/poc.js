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
        $("<tbody>")
            .append($("<tr>")
                .append("<th scope='row' data-id='number'>"+id.length+"</th>")
                .append("<td>"+nome+"</td>")
                .append("<td>"+sobrenome+"</td>")
                .append("<td>"+peso+"</td>")
                .append("<td>"+altura+"</td>")
                .append("<td>"+imc+"</td>")
                .append("<td><i data-key='"+id.length+"' title='vamos Para cima' class='fas fa-sort-up'></i></td>")
                .append("<td><i title='vamos para baixo' class='fas fa-sort-down'></i></td>")
                .append("<td><i title='vamos para baixo' class='far fa-edit'></i></td>")
                .append("<td><i title='Excluir' class='fas fa-trash-alt'></i></td>"))
            .appendTo("#table");
            replaceRow ()
    });
    

}

function replaceRow () {
    $('.fa-sort-down').click(() => alert('oi'));
    console.log($("th:nth-child(5) td").css("background-color", "red"))
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