//Variáveis
let gorjetaPorPessoa = ''
let nPessoas = ''
let valor = ''

//Chamada de valores

onchange = () => {
  valor = parseInt(document.getElementById('conta').value, 10)
  nPessoas = parseInt(document.getElementById('pessoas').value, 10)

  console.log(valor)
  console.log(nPessoas)
}

console.log(valor)
console.log(nPessoas)

//Valor botões de porcentagem
onload = () => {
  document.querySelector('#opcao5').onclick = () => gorjeta(5)
  document.querySelector('#opcao10').onclick = () => gorjeta(10)
  document.querySelector('#opcao15').onclick = () => gorjeta(15)
  document.querySelector('#opcao25').onclick = () => gorjeta(25)
  document.querySelector('#opcao50').onclick = () => gorjeta(50)
}

const atualizarDisplay = () => {
  document.getElementById('gorjeta-pessoa').innerHTML = gorjetaPorPessoa
  document.getElementById('conta-pessoa').innerHTML = contaPorPessoa
}

const gorjeta = n => {
  let gorjeta = valor * (n / 100)
  let total = valor + gorjeta

  gorjetaPorPessoa = gorjeta / nPessoas
  contaPorPessoa = total / nPessoas

  atualizarDisplay()
  return gorjetaPorPessoa, contaPorPessoa
}

//Botão reset
const limpa = () => {}

/*
const entradaConta= document.querySelector("#conta");
const entradaPessoas = document.querySelector("#pessoas");
const totalGorjeta = document.querySelector(".numero-resultado-gorjeta");
const totalConta = document.querySelector(".numero-resultado");
const personalizado = document.querySelector("input[name='personalizado']");
const reset = document.querySelector(".botao-reset");
const resetRemove = document.querySelector(".botao-reset button");*/
