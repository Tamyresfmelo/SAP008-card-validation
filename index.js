import validator from './validator.js';

const nome = document.getElementById("nomeSobrenome")
let cartao = document.getElementById("numeroCartao")
let btnConfirmar = document.getElementById("pegarDadosCartao") 
const mensagemValidacao = document.getElementById("validacao")


btnConfirmar.addEventListener("click", function() {
     let cartaoValido = validator.isValid(cartao.value)
      if (cartaoValido == true){
            mensagemValidacao.innerHTML = nome.value + ", Cartão Válido!"   
       }else {
          mensagemValidacao.innerHTML = nome.value + ", Cartão inválido!"
       }
       
      let mascaraCartao = validator.maskify(cartao.value)

      cartao.value = mascaraCartao
})







