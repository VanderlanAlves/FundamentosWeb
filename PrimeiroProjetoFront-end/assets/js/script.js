/*
Formas de buscar um elemento em JS:

por Tag: getElementByTagName()
por Id: getElementById()
por Nome: getElementByName()
por Classe: getElementsByClassName()
por Seletor: querySelector()

*/

let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let titulo = window.document.getElementById('titulo')
let assunto = window.document.getElementById('assunto')
let nomeOk = false
let emailOk = false
let tituloOk = false
let assuntoOk = false


nome.style.width = '100%'
email.style.width = '100%'

function validaNome() {

    let txtNome = document.querySelector('#txtNome')
    if (nome.value.length < 3) {
        txtNome.innerHTML = 'Nome inválido'
        txtNome.style.color = 'red'

    } else {
        txtNome.innerHTML = 'Nome válido'
        txtNome.style.color = 'green'
        nomeOk = true
    }

}

function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail')

    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        txtEmail.innerHTML = 'E-mail inválido'
        txtEmail.style.color = 'red'
    } 
    else {
        txtEmail.innerHTML = 'E-mail Válido'
        txtEmail.style.color = 'green'
        emailOk = true
    }
}

function validaAssunto() {
    let txtAssunto = document.querySelector('#txtAssunto')

    if (assunto.value.length >= 100) {
        txtAssunto.innerHTML = 'O texto está muito grande. Digite um texto de até 100 caracteres, por favor.'
        txtAssunto.style.color = 'red'
        txtAssunto.style.display = 'block'
    }
    else {
        txtAssunto.style.display = 'none'
        assuntoOk = true
    }
}

function validaTitulo() {
    let txtTitulo = document.querySelector('#txtTitulo')

    if (titulo.value.length >= 15) {
        txtTitulo.innerHTML = 'O título está muito grande. Digite um título com menos de 15 caracteres, por gentileza.'
        txtTitulo.style.color = 'red'
        txtTitulo.style.display = 'block'
    }
    else {
        txtTitulo.style.display = 'none'
        tituloOk = true
    }
}

function enviar() {
    if (nomeOk == true && emailOk == true && assuntoOk == true && tituloOk == true) {
        alert ('Formulário enviado com sucesso!')
    }
    else {
        alert ('Preencha o formulário corretamente.')
    }
}