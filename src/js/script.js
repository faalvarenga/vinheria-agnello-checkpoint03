// array de objetos

const vinhos = [
    { nome: "Alvarenga", tipo: "tinto", safra: 2019, estoque: 12 },
    { nome: "Perrignon", tipo: "branco", safra: 2021, estoque: 3 },
    { nome: "Rosé Reyna", tipo: "rosé", safra: 2022, estoque: 8 },
    { nome: "Cabernet", tipo: "tinto", safra: 2018, estoque: 2 }
];

// adiciona um vinho novo na lista
function adicionarVinho(nome, tipo, safra, estoque) {
    const novoVinho = { nome: nome, tipo: tipo, safra: safra, estoque: estoque};
    vinhos.push(novoVinho);
    console.log("Vinho adicionado: " + nome);
}

// mostra todos os vinhos
function listarVinhos() {
    console.log("=== LISTA DE VINHOS ===");
    vinhos.forEach(function (vinho) {
        console.log(vinho.nome + " | " + vinho.tipo + " | Safra: " + vinho.safra + " | Estoque: " + vinho.estoque);
    });
}

// pega só os vinhos com estoque menor que 5
function vinhosEstoqueBaixo() {
    return vinhos.filter(function (vinho) {
        return vinho.estoque < 5;
    });
}

// soma o estoque de todos os vinhos
function estoqueTotal() {
    return vinhos.reduce(function (total, vinho) {
        return total + vinho.estoque;
    }, 0);
}

// deixa os nomes em maiúsculo
function nomesEmCaixaAlta() {
    return vinhos.map(function (vinho) {
        return vinho.nome.toUpperCase();
    });
}

// adicionando um vinho novo
adicionarVinho("Atel Blanc", "branco", 2023, 4);

// lista completa
listarVinhos();

// vinhos com estoque baixo
console.log("VINHOS COM ESTOQUE ABAIXO DE 5");
vinhosEstoqueBaixo().forEach(function (vinho) {
    console.log(vinho.nome + " - " + vinho.estoque + " unidades");
});

// estoque total
console.log("ESTOQUE TOTAL");
console.log(estoqueTotal() + " garrafas");

// nomes em caixa alta
console.log("NOMES EM CAIXA ALTA");
console.log(nomesEmCaixaAlta());

// resumo no alert
alert("Vinheria Agnello\n\nEstoque total: " + estoqueTotal() + " garrafas\nVinhos com estoque baixo: " + vinhosEstoqueBaixo().length + "\n\nVeja os detalhes no console (F12)");