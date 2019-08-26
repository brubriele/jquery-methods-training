//Preenchimento da tabela com os dados do form
function appendRow() {

    $('#submit-form').click((e) => {
        e.preventDefault();
        // alert('foi');
        // let users = []
        let nome = $( "input[type=text][name=nome]" ).val();
        let sobrenome = $( "input[type=text][name=sobrenome]" ).val();
        let peso = Number($( "input[type=text][name=peso]" ).val());
        let altura = Number($( "input[type=text][name=altura]" ).val());
        // Peso dividido pelo quadrado da altura: 70 / 2,89 = 24,22
        let imc = (peso / (altura * altura)) ;
        // users.push(nome)
        let teste = Object.assign({}, appendRow());

        
        $("<tbody>")
            .append(`<tr>
            <th scope="row">${'id'}</th>
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
            console.log(teste);
    });
   
}


    // Captura dados do form
function getFormData() {
    let nome = $( "input[type=text][name=nome]" ).val();
}
// Cálculo do IMC no insert dos dados

// Para cima, para baixo no limite certo

//Delete linha

//Edit in modal

//Ordenar por categorias ** hacker edition

(() => {
    appendRow();
    getFormData();
})();