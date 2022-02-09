'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

function regexVar() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match a string that starts and ends with the same vowel (i.e., {a, e, i, o, u})
     */
    
    let re = /^([aeiou]).+\1$/;
    return re;
}

/* Anotacoes:
    ^ => primeira letra
    . => qualquer caractere
    + => 1 ou mais ocorrencias
    * => 0 ou mais ocorrencias
    \1 => combina com o combinado anteriormente
    $ => certifica que o item combinado esta no final da sequencia
*/

function main() {
    const re = regexVar();
    const s = readLine();
    
    console.log(re.test(s));
}