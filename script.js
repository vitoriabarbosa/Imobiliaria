function showMessage() {
    alert("Aqui você encontra as melhores ofertas!");
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}

document.getElementById('refresh').addEventListener('click', function () {
    location.reload();
});

function validationForm() {
    var nome = document.forms[1].nome.value;
    var email = document.forms[1].email.value;
    var celular = document.forms[1].celular.value;
    var telefone = document.forms[1].telefone.value;
    var cidade = document.forms[1].cidade.value;
    var uf = document.forms[1].uf.value;
    var endereco = document.forms[1].endereco.value;

    if (nome == "" || email == "" || celular == "" || telefone == "" || cidade == "" || uf == "" || endereco == "") {
        alert("HUM... PARECE QUE VOCÊ ESQUECEU DE PREENCHER OS CAMPOS...");
        return false;
    }
}

function newsCopacabana() {
    open("https://oglobo.globo.com/economia/imoveis/dono-de-apartamento-em-ipanema-rejeita-oferta-de-50-milhoes-14532979");
}

function newsTemporada() {
    open("https://www.temporadalivre.com/aluguel-temporada/brasil/santa-catarina/garopaba/praia-do-silveira");
}

function newsTerreno() {
    open("https://www.imovelweb.com.br/propriedades/terreno-vargem-pequena-2958332414.html");
}