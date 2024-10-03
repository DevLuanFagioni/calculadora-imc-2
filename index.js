
const calcular = document.getElementById("calcular")

calcular.addEventListener('click', ()=>{
  const nome = document.getElementById("nome").value
  const altura = document.getElementById("altura").value
  const peso = document.getElementById("peso").value

  if(nome != "" && altura != "" && peso != ""){
    const imc = (peso / (altura**2)).toFixed(2)
    let classificacao = ''

    if (imc < 18.5){
      classificacao = 'abaixo do peso.';
    }else if (imc < 25) {
        classificacao = 'com peso ideal. Parabéns!!!';
    }else if (imc < 30){
        classificacao = 'levemente acima do peso.';
    }else if (imc < 35){
        classificacao = 'com obesidade grau I.';
    }else if (imc < 40){
        classificacao = 'com obesidade grau II';
    }else {
        classificacao = 'com obesidade grau III. Cuidado!!';
    }

    const resultado = document.getElementById("resultado")
    resultado.textContent = `${nome} seu IMC é: ${imc}, ${classificacao}`
  } else{
    alert("informações invalidas")
  }
})
