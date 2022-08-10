const validator = {
  isValid,
  maskify

}

function isValid(cardNumber){
  let somaTotal = 0
  let imparOuPar = cardNumber.length % 2
  for (let i = cardNumber.length - 1; i >= 0; i = i - 1){
    console.log("interador: " + i)
    if(i % 2 == imparOuPar){
      let position = parseInt(cardNumber.charAt(i))
      let multPosicao = position*2
       if (multPosicao >= 10){      
         multPosicao = multPosicao - 9
         somaTotal = somaTotal + multPosicao      
      }else{
        somaTotal = somaTotal + multPosicao
      }
    }else{
      let position = parseInt(cardNumber.charAt(i))
      console.log("Valor Position: " + position)
      somaTotal = somaTotal + position      
    }  
  }
  return somaTotal % 10 == 0
  
}
function maskify(cardNumber){
  let maskedNumber = ""
  if(cardNumber.length > 4){
    const lastDigits = cardNumber.substr(-4)
    const maskedDigits = "#".repeat(cardNumber.length - 4) 
     maskedNumber = maskedDigits + lastDigits
  }else{
    maskedNumber = cardNumber
  }

  return maskedNumber
}


export default validator;

