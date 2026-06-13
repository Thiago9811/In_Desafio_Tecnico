let clientes = [
    "João",
    "Maria",
    "Pedro",
    "Ana",
    "Lucas",
    "Julia",
    "Carlos",
    "Beatriz",
    "Mateus",
    "Mariana",
    "Gabriel",
    "Camila",
    "Thiago",
    "Larissa",
    "Rafael",
    "Amanda",
    "Leonardo",
    "Bruna",
    "Vinícius",
    "Isabela"
];


const readline = require('readline/promises');
const {stdin: input, stdout:output} = require('process');

async function iniciar() {
    const rl = readline.createInterface({input, output});
    let resp;
    //resp = String(await rl.question('Deseja ADICIONAR um novo cliente[A]\nATENDER um cliente[B]\nSAIR do programa[C]?\nDigite a letra correspondente:  '));
    /*while(resp !== "a" && resp !== "b" && resp !== "c"){
            console.log("Responda com [A], [B] ou [C]!");
            resp = String(await rl.question('Deseja ADICIONAR um novo cliente[A]\nATENDER um cliente[B]\nSAIR do programa[C]?\nDigite a letra correspondente:  ')).toLocaleLowerCase();
        }
    */
    while(resp !== "c"){
        /*for (const cliente of clientes){
            console.log(`${clientes.findIndex(x => x === cliente)+1}° ${cliente}`)
        }*/
        clientes.forEach((cliente, i) => {
            console.log(`${i+1}° ${cliente}`);
        })
        //let num = Number(await rl.question('entre com o valor a ser calculado: '));
        //while(num < 0 && num !== Number){
          //  console.log("Entre com um número válido");
            //num = Number(await rl.question('Entre com o valor a ser calculado: '));
        //}
        //factorial(num);
        resp = String(await rl.question('Deseja ADICIONAR um novo cliente[A]\nATENDER um cliente[B]\nSAIR do programa[C]?\nDigite a letra correspondente:  '));
        resp = resp.toLocaleLowerCase();
        /*while(resp !== "a" && resp !== "b" && resp !== "c"){
            console.log("Responda com [A], [B] ou [C]!");
            resp = String(await rl.question('Deseja ADICIONAR um novo cliente[A]\nATENDER um cliente[B]\nSAIR do programa[C]?\nDigite a letra correspondente:  ')).toLocaleLowerCase();
        }*/
       
        //let nome;
        if (resp === "a"){
            let nome = String(await rl.question('Entre com o nome do cliente a ser cadastrado: '));
            clientes.push(nome);
            console.log(`${nome} foi cadastrado com sucesso!`);
        }
        if(resp === "b"){
            console.log(`${clientes[0]} foi atendido`);
            clientes.shift();
        }
        

        
    }

    rl.close();
}

iniciar();