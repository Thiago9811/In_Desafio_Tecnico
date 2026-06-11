const readline = require('readline/promises');
const { stdin: input, stdout: output} = require('process');

async function iniciar() {
    const rl = readline.createInterface( { input, output } );

    const valor = Number(await rl.question('Entre com um valor em R$: '));

    rl.close();
    conversao(valor);
}

function conversao(valor){
    console.log(`O valor em R$ é: R$ ${(valor)}.`);
    console.log(`O valor em USD é: $ ${(valor/5.7)}.`);
    console.log(`O valor em EURO é: € ${valor/6.1}.`);
}
iniciar();
