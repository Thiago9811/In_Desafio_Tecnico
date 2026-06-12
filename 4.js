const readline = require('readline/promises');
const {stdin: input, stdout:output} = require('process');

async function iniciar() {
    const rl = readline.createInterface({input, output});
    let frase = String(await rl.question('entre com a frase a ser consultada: ')).toLocaleLowerCase();
    frase = frase.replace(/\s+/g, '');
    palindrome(frase);
    rl.close();

}



function palindrome(frase){
    let inverso = "";
    for (let i = frase.length-1; i >= 0; i--){
        inverso += frase[i];
    }
    if(inverso === frase){
        console.log(`A frase "${frase}" é palíndromo`);
    }
    else{
        console.log(`A frase "${frase}" não é palindromo`);
    }

}
iniciar();