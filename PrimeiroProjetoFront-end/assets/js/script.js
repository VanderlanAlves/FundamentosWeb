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

nome.style.width = '100%'
email.style.width = '100%'

function validaNome() {

    let txt = document.querySelector('#txtNome')
    if (nome.value.length < 3) {
        txt.innerHTML = 'Nome inválido'
        txt.style.color = 'red'

    } else {
        txt.innerHTML = 'Nome válido'
        txt.style.color = 'green'
    }

}

function validaEmail() {
    let
}