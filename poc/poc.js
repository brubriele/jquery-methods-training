//Preenchimento da tabela com os dados do form
function appendRow() {

    $('#submit-form').click((e) => {
        e.preventDefault();
        // alert('foi');
        $("<tbody>")
            .append(`<tr>
            <th scope="row">${'id'}</th>
            <td>${''}</td>
            <td>${''}</td>
            <td>${''}</td>
            <td>${''}</td>
            <td>${''}</td>
            <td><i title="vamos Para cima" class="fas fa-sort-up"></i></td>
            <td><i title="vamos para baixo" class="fas fa-sort-down"></i></td>
            <td><i title="vamos para baixo" class="far fa-edit"></i></td>
            <td><i title="Excluir" class="fas fa-trash-alt"></i></td>
        </tr>`)
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