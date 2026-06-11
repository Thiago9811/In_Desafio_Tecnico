const readline = require('readline/promises');
const {stdin: input, stdout:output} = require('process');

async function iniciar() {
    const rl = readline.createInterface({input, output});
    console.log(`Entre com os dados para a função quadrática de formato 𝑎𝑥² + 𝑏𝑥 + 𝑐 = 0`);
    const a = Number(await rl.question('entre com o valor de A: '));
    const b = Number(await rl.question('entre com o valor de B: '));
    const c = Number(await rl.question('entre com o valor de C: '));

    rl.close();
    bhaskara(a,b,c,discriminante(a,b,c));


}

function discriminante(a,b,c){
    const det = ((b**2)-(4*a*c));
    console.log(`O discriminante da equação ${a}𝑥² + ${b}𝑥 + ${c} = ${det}`);
    return det;
}

function bhaskara(a,b,c,discriminante){
    let x1;
    let x2;
    if(discriminante>=0){
        x1 = ((-b+(discriminante**0.5))/(2*a));
        x2 = ((-b-(discriminante**0.5))/(2*a));
    }
    if(discriminante>0){
        console.log(`Como Δ > 0, temos as raízes ${x1} e ${x2}`);
    }
    if(discriminante === 0){
        console.log(`Como Δ = 0, temos a raíz ${x1}`);
    }
    if(discriminante<0){
        console.log(`Como Δ < 0, a equação não possui raízes reais`);
    }
}
iniciar();