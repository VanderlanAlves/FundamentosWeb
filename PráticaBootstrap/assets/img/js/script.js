let nome = window.document.getElementById('nome')
let email = window.document.getElementById('email')
let observacoes = window.document.getElementById('observacoes')

let nomeOk = false
let emailOk = false
let observacaoOk = false

function validaNome() {
    let txtNome = document.querySelector('#txtNome')
    if (nome.value.length < 3) {
        txtNome.innerHTML = 'Nome inválido'
        txtNome.style.color = 'red'
    }

    else {
        txtNome.innerHTML = 'Nome válido!'
        txtNome.style.color = 'green'
        nomeOk = true
    }
}