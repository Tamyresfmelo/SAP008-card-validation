import validator from './validator.js';

const nome = document.getElementById("nomeSobrenome")
let cartao = document.getElementById("numeroCartao")
let btnConfirmar = document.getElementById("pegarDadosCartao") 


btnConfirmar.addEventListener("click", function() {
     let cartaoValido = validator.isValid(cartao.value)
      if (cartaoValido == true){
            alert (nome.value + ", Cartão Válido!")     
       }else {
            alert (nome.value + ", Cartão inválido!")
       }
})



console.log(validator.maskify(""))



