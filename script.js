console.log("Teste JS")

function calculaIMC () {
  let peso, altura, resp;

  peso = parseFloat(document.getElementById("edtPeso").value );
  altura = parseFloat(document.getElementById("edtAltura").value );
  resp = peso/(altura*altura) ;

  if (resp <= 18.9) {
    classificacao= "Abaixo do peso"
  } else if (resp <= 24.9) {
    classificacao = "Peso Ideal"
  } else if (resp <=29.9) {
    classificacao = "Levemente acima do Peso"
  } else {
    classificacao = "Programador preguiçoso"
  }

  document.getElementById("resp").innerText = "O seu IMC é: " + resp +
  " A sua classificação é: "+ classificacao; 
}