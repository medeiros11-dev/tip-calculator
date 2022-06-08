//Variáveis
let gorjetaPorPessoa = '';
let nPessoas = '';
let valor = '';
let porcentagemPersonalizada = undefined;
let valorGorjeta = '';
let contaPorPessoa = '';

//Chamada de valores

onchange = () => {
  valor = parseFloat(document.getElementById('conta').value).toFixed(2);
  nPessoas = parseInt(document.getElementById('pessoas').value);
  porcentagemPersonalizada = parseFloat(document.getElementById('personalizado').value).toFixed(2);
  
}

//Valor botões de porcentagem
onload = () => {
  document.querySelector('#opcao5').onclick = () => calculaGorjeta(5);
  document.querySelector('#opcao10').onclick = () => calculaGorjeta(10);
  document.querySelector('#opcao15').onclick = () => calculaGorjeta(15);
  document.querySelector('#opcao25').onclick = () => calculaGorjeta(25);
  document.querySelector('#opcao50').onclick = () => calculaGorjeta(50);
  
}

const atualizarDisplay = () => {
  document.getElementById('gorjeta-pessoa').innerHTML = gorjetaPorPessoa;
  document.getElementById('conta-pessoa').innerHTML = contaPorPessoa;
}

const calculaGorjeta = n => {
  valorGorjeta = valor * (n / 100);
  total = parseFloat(valor) + parseFloat(valorGorjeta);

  gorjetaPorPessoa = 'R$ ' + parseFloat(valorGorjeta / nPessoas).toFixed(2);
  contaPorPessoa =  'R$ ' +  parseFloat(total / nPessoas).toFixed(2);

  atualizarDisplay()

}

//Botão reset
const limpa = () => {}
