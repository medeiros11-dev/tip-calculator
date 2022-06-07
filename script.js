//Variáveis
let gorjetaPorPessoa = '';
let nPessoas = '';
let valor = '';
let porcentagemPersonalizada = undefined;
let valorGorjeta = '';

//Chamada de valores

onchange = () => {
  valor = parseInt(document.getElementById('conta').value, 10);
  nPessoas = parseInt(document.getElementById('pessoas').value, 10);
  porcentagemPersonalizada = parseInt(document.getElementById('personalizado').value, 10);
  
}


//Valor botões de porcentagem
onload = () => {
  document.querySelector('#opcao5').onclick = () => gorjeta(5);
  document.querySelector('#opcao10').onclick = () => gorjeta(10);
  document.querySelector('#opcao15').onclick = () => gorjeta(15);
  document.querySelector('#opcao25').onclick = () => gorjeta(25);
  document.querySelector('#opcao50').onclick = () => gorjeta(50);
}

const atualizarDisplay = () => {
  document.getElementById('gorjeta-pessoa').innerHTML = gorjetaPorPessoa;
  document.getElementById('conta-pessoa').innerHTML = contaPorPessoa;
}

const gorjeta = n => {
  valorgorjeta = valor * (n / 100);
  total = valor + valorgorjeta;

  gorjetaPorPessoa = 'R$ ' + valorgorjeta / nPessoas;
  contaPorPessoa =  'R$ ' +  total / nPessoas;

  atualizarDisplay()
  return gorjetaPorPessoa, contaPorPessoa;
}

//Botão reset
const limpa = () => {}
