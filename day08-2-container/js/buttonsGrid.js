let ordem = ['1', '2', '3', '6', '9', '8', '7', '4'];
const ids = ['1', '2', '3', '6', '9', '8', '7', '4'];

function rotaciona() {
    ordem.unshift(ordem.pop());
    for(let i=0; i<8; i++) {
        document.getElementById('btn'+ids[i]).innerHTML = ordem[i];
    }
}

let btn5 = document.getElementById('btn5');
btn5.addEventListener('click', rotaciona);