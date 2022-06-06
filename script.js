const entradaConta= document.querySelector('input[name="conta"]');
const entradaPessoas = document.querySelector('input[name="pessoas"]');
const totalGorjeta = document.querySelector(".numero-resultado-gorjeta");
const totalConta = document.querySelector(".numero-resultado");
const personalizado = document.querySelector("input[name='personalizado']");
const reset = document.querySelector(".botao-reset");
const resetRemove = document.querySelector(".botao-reset button");
const span1 = document.createElement("span");
const span2 = document.createElement("span");
const radios = Array.from(document.querySelectorAll("input[name='opcao'] + value"));
let value;
let key;
span1.style.color = "red";
span2.style.color = "red";

let radioValue = 0;
let divider = 0;