import isValid from './validator.js';

const nome = document.getElementById("nomeSobrenome")
let cartao = document.getElementById("numeroCartao")
let btnConfirmar = document.getElementById("pegarDadosCartao") 

btnConfirmar.addEventListener("click", function() {
      console.log(isValid(cartao.value))
})


console.log("validator")


