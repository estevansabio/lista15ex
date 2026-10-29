// Exercicio 01

console.log(`
Exercício 01
    `);

let personagem = {nome: "Steve",
    classe: "Minerador",
    nivel: 100,
    vida: 100,
    força: 10,
    };

    console.log(`Personagem nome: ${personagem.nome}`);
    console.log(`Personagem classe: ${personagem.classe}`);
    console.log(`Personagem nível: ${personagem.nivel}`);
    console.log(`Personagem vida: ${personagem.vide}`);
    console.log(`Personagem força: ${personagem.força}`);
    


    console.log("------------------------");
// -----------------------------------------------------

// Exercicio 02

console.log(`
Exercício 02
    `);

    let carro =  {marca:"Toyota", modelo:"Corola", ano: 2026, cor:"Prata", preco: 210000};

    console.log(`Marca do Carro: ${carro.marca}`);
    console.log(`Modelo do Carro : ${carro.modelo}`);
    console.log(`Ano do Carro: ${carro.ano}`);
    console.log(`Cor do Carro: ${carro.cor}`);
    console.log(`Preço do Carro: ${carro.preco}`);


console.log("------------------------");

// -----------------------------------------------------
// Exercicio 03

console.log(`
Exercício 03
    `);
let produto = {
    nome: "Teclado",
    preco: 100,
    estoque: 20
};

    console.log(`O Produto ${produto.nome}, custa R$${produto.preco} reais, e tem ${produto.estoque} no estoque`);



console.log("------------------------");


// -----------------------------------------------------
// Exercicio 04

console.log(`
Exercício 04
    `);

    let filme = {
    titulo: "Interestelar",
    ano: 2014,
    diretor: "Christopher Nolan",
    genero: "Ficção científica",
    nota: "86",
};

    console.log(`Em ${filme.ano}, laça o filme ${filme.titulo}, dirigido por ${filme.diretor}, com gênero ${filme.genero}, nota ${filme.nota}%`);
    

console.log("------------------------");

// -----------------------------------------------------
// Exercicio 05

console.log(`
Exercício 05
    `);


let animal = {
    nome: "Gato",
    especie: "Mamífero",
    idade: 2,
    peso: 5
 };

 console.log(`O ${animal.nome}, é da espécie ${animal.especie}, que tem ${animal.idade} anos e ${animal.peso} kilos`);

console.log("------------------------");


// -----------------------------------------------------
// Exercicio 06

console.log(`
Exercício 06
    `);

    let aluno = {
    nome: "Mariana",
    nota1: 8,
    nota2: 6,
};
let media = (aluno.nota1 + aluno.nota2)/ 2;

console.log(`A aluna ${aluno.nome}, teve notas ${aluno.nota1} e ${aluno.nota2}`);

if(media >= 7){
    console.log(`O aluno teve nota final ${media}, portanto passou de ano!`);
}else{
    console.log(`O aluno teve nota final ${media}, portanto, não passou de ano!`);
}


console.log("------------------------");


// -----------------------------------------------------
// Exercicio 07

console.log(`
Exercício 07
    `);
let produto1 = {
    nome: "Monitor",
    preco: 900,
    desconto: 15
};
let descontoFinal = produto1.desconto/100;
let valorFinal = ((produto1.preco * descontoFinal) - produto1.preco);

console.log(`O produto ${produto1.nome}, custa R$${produto1.preco} reais e tem ${produto1.desconto}%, ou seja, você pagaráR$ ${valorFinal} reais`);





console.log("------------------------");

// -----------------------------------------------------
// Exercicio 08

console.log(`
Exercício 08
    `);
    let personagem1 = {
    nome: "Guerreiro",
    vida: 100,
    ataque: 25,
    defesa: 10,
    dano: 30
};

let danoCausado = personagem1.vida + personagem1.defesa - personagem1.dano
console.log(`O personagem ${personagem1.nome}, recebeu 30 de dano, agora sua vida é ${danoCausado}`);




console.log("------------------------");

// -----------------------------------------------------
// Exercicio 09

console.log(`
Exercício 09
    `);

    let conta = {
    titular: "Ana",
    saldo: 1500,
    valorSaque: 200
};
let valorConta = conta.saldo - conta.valorSaque
if(conta.valorSaque <= conta.saldo){
    console.log(`Você pode sacar, valor da conta agora ${valorConta}`);
}else{
    console.log(`Você não tem saldo suficiente`);
}

console.log("------------------------");

// -----------------------------------------------------
// Exercicio 10

console.log(`
Exercício 10
    `);
let atleta = {
    nome: "Carlos",
    idade: 19,
    altura: 1.85,
    pontos: 120
};

if(atleta.pontos < 50){
    console.log(`O jogador ${atleta.nome}, fez ${atleta.pontos}, ou seja, ele é iniciante`);
}else if(atleta.pontos >= 50 && atleta.pontos <= 99){
    console.log(`O jogador ${atleta.nome}, fez ${atleta.pontos}, ou seja, ele é Intermediário`);
}else{
    console.log(`O jogador ${atleta.nome}, fez ${atleta.pontos}, ou seja, ele é Avançado`);
}



console.log("------------------------");

// -----------------------------------------------------
// Exercicio 11

console.log(`
Exercício 11
    `);

let alunos = [
    { nome: "Ana", idade: 17 },
    { nome: "Bruno", idade: 18 },
    { nome: "Carlos", idade: 16 },
    { nome: "Daniela", idade: 19 }
];

// O loop começa em 0 e vai até o tamanho total do array (menor que 4)
for (let i = 0; i < alunos.length; i++) {
    console.log(`Nome: ${alunos[i].nome} | Idade: ${alunos[i].idade}`);
}

console.log("------------------------");

// -----------------------------------------------------
// Exercicio 12

console.log(`
Exercício 12
    `);
let alunos1 = [
    { nome: "Ana", nota: 8 },
    { nome: "Bruno", nota: 5 },
    { nome: "Carlos", nota: 9 },
    { nome: "Daniela", nota: 7 },
    { nome: "Eduardo", nota: 4 }
];
let contador = 0;
for (let i = 0; i < alunos1.length; i++) {
   if(alunos1[i].nota >= 7){
    contador++
    
   }
}
console.log(`O total de alunos que foram aprovados são ${contador}`);


console.log("------------------------");

// -----------------------------------------------------
// Exercicio 13

console.log(`
Exercício 13
    `);
    let produtos = [
    { nome: "Mouse", preco: 50, quantidade: 10 },
    { nome: "Teclado", preco: 120, quantidade: 5 },
    { nome: "Monitor", preco: 900, quantidade: 3 }
];

let valorEstoque = 0;

for (let i = 0; i < produtos.length; i++) {
    valorEstoque += produtos[i].preco*produtos[i].quantidade
   }
console.log(`Valor total do estoque é ${valorEstoque}`);



console.log("------------------------");

// -----------------------------------------------------
// Exercicio 14

console.log(`
Exercício 14
    `);

    let jogadores = [
    { nome: "Lucas", pontos: 150 },
    { nome: "Mariana", pontos: 230 },
    { nome: "Carlos", pontos: 180 },
    { nome: "Ana", pontos: 310 }
];
let maiorPt = 0;
let maiorJogador = null;
for(let i=0; i <jogadores.length;i++){
    if(jogadores[i].pontos > maiorPt){
        maiorPt = jogadores[i].pontos
        maiorJogador = jogadores[i].nome
    }
}
console.log(`Jogador com maior ponto ${maiorJogador}, e fez ${maiorPt}`);


console.log("------------------------");

// -----------------------------------------------------