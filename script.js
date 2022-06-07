

//Valor botões de porcentagem
onload = () => {
    document.querySelector('#opcao5').onclick = () => porcentagem(5);
    document.querySelector('#opcao10').onclick = () => porcentagem(10);
    document.querySelector('#opcao15').onclick = () => porcentagem(15);
    document.querySelector('#opcao25').onclick = () => porcentagem(25);
    document.querySelector('#opcao50').onclick = () => porcentagem(50);
}

//Atualiza valor da gorjeta
let gValor = 'R$ 0,00'

const atualizaGorjeta = () => {
    document.querySelector('.numero-resultado-gorjeta').innertText = 
}







//Botão reset
const limpa = () => {

}

/*
const entradaConta= document.querySelector("#conta");
const entradaPessoas = document.querySelector("#pessoas");
const totalGorjeta = document.querySelector(".numero-resultado-gorjeta");
const totalConta = document.querySelector(".numero-resultado");
const personalizado = document.querySelector("input[name='personalizado']");
const reset = document.querySelector(".botao-reset");
const resetRemove = document.querySelector(".botao-reset button");*/