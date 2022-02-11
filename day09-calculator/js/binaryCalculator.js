var res = document.getElementById('res');
document.getElementById('btn0').onclick = () => res.innerHTML += '0';
document.getElementById('btn1').onclick = () => res.innerHTML += '1';

document.getElementById('btnSum').onclick = () => {
    res.innerHTML += '+';
} 
document.getElementById('btnSub').onclick = () => {
    res.innerHTML += '-';
} 
document.getElementById('btnMul').onclick = () => {
    res.innerHTML += '*';
} 
document.getElementById('btnDiv').onclick = () => {
    res.innerHTML += '/';
} 

document.getElementById('btnClr').onclick = () => res.innerHTML = '';
document.getElementById('btnEql').onclick = () => {
    let conteudo = res.textContent;
    if(conteudo.includes('+')) {    
        const array = conteudo.split('+');
        const n1 = parseInt(array[0], 2);
        const n2 = parseInt(array[1], 2);
        const soma = n1+n2;        
        res.innerHTML = soma.toString(2);
    }    
    else if(conteudo.includes('-')) {
        const array = conteudo.split('-');
        const n1 = parseInt(array[0], 2);
        const n2 = parseInt(array[1], 2);
        const subtracao = n1-n2;        
        res.innerHTML = subtracao.toString(2);        
    }    
    else if(conteudo.includes('*')) {
        const array = conteudo.split('*');
        const n1 = parseInt(array[0], 2);
        const n2 = parseInt(array[1], 2);
        const multiplicacao = n1*n2;        
        res.innerHTML = multiplicacao.toString(2);                   
    }    
    else if(conteudo.includes('/')) {
        const array = conteudo.split('/');
        const n1 = parseInt(array[0], 2);
        const n2 = parseInt(array[1], 2);
        const divisao = Math.floor(n1/n2);        
        res.innerHTML = divisao.toString(2);           
    }
    else {
        alert('Insira um operador valido')
    }    
}