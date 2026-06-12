const readline = require('readline/promises');
const {stdin: input, stdout:output} = require('process');

async function iniciar() {
    const rl = readline.createInterface({input, output});
    let resp = "s";
    while(resp === "s"){
        let num = Number(await rl.question('entre com o valor a ser calculado: '));
        while(num < 0 && num !== Number){
            console.log("Entre com um número válido");
            num = Number(await rl.question('Entre com o valor a ser calculado: '));
        }
        factorial(num);
        resp = String(await rl.question('Deseja calcular outro número? Digite [S] ou [N]: '));
        resp = resp.toLocaleLowerCase();
        while(resp !== "s" && resp !== "n"){
            console.log("Responda com [S] ou [N]");
            resp = String(await rl.question('Deseja calcular outro número? Digite [S] ou [N]: ')).toLocaleLowerCase();
        }
        
    }

    rl.close();
}

function factorial(num){
    let res = 1;
    if (num === 0){
        console.log(`${num}! = ${1}`);
    }
    
    else{
        for(let i = num; i > 0; i--){
            res = res * i;     
        }    
        console.log(`${num}! = ${res}`);
    }

}
iniciar();