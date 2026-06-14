const readline = require('readline/promises');
const { stdin: input, stdout: output } = require('process');

let time = [];

async function adicionarJogador(rl) {
    console.log("Cadastrar Novo Jogador");
    const nome = await rl.question('Nome: ');
    const idade = Number(await rl.question('Idade: '));
    const posicao = await rl.question('Posição: ');
    const pontuacao = Number(await rl.question('Pontuação: '));

    const novoJogador = {
        nome: nome,
        idade: idade,
        posicao: posicao.toLowerCase(),
        pontuacao: pontuacao
    };

    time.push(novoJogador);
    console.log(`Jogador ${nome} adicionado com sucesso`);
}

async function buscarPosicao(rl) {
    console.log("Buscar por Posição");
    if (time.length === 0) {
        console.log("O time não possui jogadores cadastrados");
        return;
    }
    const posicaoBusca = (await rl.question('Digite a posição que deseja buscar: ')).toLowerCase();
    const jogadoresEncontrados = time.filter(jogador => jogador.posicao === posicaoBusca);

    if (jogadoresEncontrados.length > 0) {
        console.log(`JOgadores da posição "${posicaoBusca}":`);
        jogadoresEncontrados.forEach(jogador => {
            console.log(` ${jogador.nome}, ${jogador.idade} anos, Pontuação: ${jogador.pontuacao}, ${jogador.posicao} `);
        });
    } else {
        console.log(`Nenhum jogador encontrado de posição "${posicaoBusca}".`);
    }
}


function listarTime() {
    console.log("Elenco do Time: ");
    if (time.length === 0) {
        console.log("O time está vazio");
        return;
    }

    time.forEach((jogador, i) => {
        console.log(`${i + 1} ${jogador.nome}, Idade: ${jogador.idade}, Posição: ${jogador.posicao}, Pontos: ${jogador.pontuacao}`);
    });
}

function calcularPontuacaoMedia() {
    console.log("Média de Pontuação");
    if (time.length === 0) {
        console.log("Sem jogadores cadastrados para calcular média");
        return;
    }

    let i = 0;

    for (const jogador of time) {
        i = i + jogador.pontuacao;
    }

    //const somaTotal = i;
    const media = i / time.length;

    console.log(`A pontuação média do time é: ${media}`);
}

async function iniciar() {
    const rl = readline.createInterface({ input, output });
    let a = true;

    while (a) {
        console.log("1 - Adicionar jogador");
        console.log("2 - Buscar por posição");
        console.log("3 - Listar time");
        console.log("4 - Calcular pontuação média");
        console.log("5 - Sair");
        
        const resp = await rl.question('Escolha uma opção: ');

        switch (resp) {
            case '1':
                await adicionarJogador(rl);
                break;
            case '2':
                await buscarPosicao(rl);
                break;
            case '3':
                listarTime();
                break;
            case '4':
                calcularPontuacaoMedia();
                break;
            case '5':
                console.log("Programa Encerrado");
                a = false;
                break;
            default:
                console.log("Entre com uma opção válida!");
        }
    }

    rl.close();
}
iniciar();