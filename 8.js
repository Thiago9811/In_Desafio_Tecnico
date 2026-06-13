const consumoAparelhosKWh = [
    120.5, // Ar-condicionado (uso frequente)
    45.0,  // Geladeira Frost Free
    18.2,  // Televisão LED (ligada algumas horas por dia)
    32.0,  // Chuveiro elétrico (uso diário)
    15.8,  // Máquina de lavar roupas
    8.5,   // Micro-ondas
    5.2,   // Videogame (PS5 / Xbox Series X)
    22.4,  // Computador Desktop (Gamer/Trabalho)
    1.5,   // Carregador de celular (mensal)
    12.0,  // Ventilador de teto
    6.8,   // Sanduicheira / Grill
    4.1,   // Roteador Wi-Fi (ligado 24h)
    28.0,  // Secadora de roupas
    9.3,   // Liquidificador + Batedeira
    3.7,   // Notebook
    14.2,  // Ferro de passar roupas
    7.0,   // Cafeteira elétrica
    11.4,  // Iluminação da casa toda (Lâmpadas LED)
    19.5,  // Freezer vertical
    2.1    // Receptor de TV a cabo
];

const readline = require('readline/promises');
const {stdin: input, stdout:output} = require('process');
async function analisarConsumo(aparelhos) {
    const rl = readline.createInterface({input, output});
    resp = Number(await rl.question('Entre com um valor limite para a categoria "ECONÔMICO": '));
    rl.close();

    let classificacao = [];
    aparelhos.forEach((aparelho) => {
        if(aparelho < resp){
            classificacao.push("Econômico");
        }
        if(aparelho === resp){
            classificacao.push("No limite");
        }
        if(aparelho > resp){
            classificacao.push("Acha que é sócio da Enel");
        }
        
    });
    //console.log(classificacao);
    printClassificacao(classificacao);
}

function printClassificacao(classificados){
    classificados.forEach((classificado, i) => {
        console.log(`Aparelho ${i+1}: ${classificado}`);
    })
}

analisarConsumo(consumoAparelhosKWh);