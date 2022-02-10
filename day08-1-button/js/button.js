var botao = document.getElementById('btn');
var valor = Number(botao.value)+1;

function incrementa() {
    botao.innerHTML = valor++;
}

botao.addEventListener('click', incrementa);
