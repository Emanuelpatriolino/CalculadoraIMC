
var peso;
var altura;
var imc;
var resultado;

function CalcularIMC (e){
    e.preventDefault();

    peso = document.querySelector("#peso").value;
    altura = document.querySelector("#altura").value;
    imc =  peso / (altura * altura);
    resultado = document.querySelector("#resultado");

    if(imc < 16){
        resultado.innerHTML = `Seu IMC é : ${imc.toFixed(2)} está muito abaixo do peso, o ideal seria: IMC entre 18.50 e 24.99`
    } else if(imc > 17 && imc < 18.49){
        resultado.innerHTML = `Seu IMC é : ${imc.toFixed(2)} está um pouco abaixo do peso, o ideal seria: IMC entre 18.50 e 24.99`
    } else if(imc >= 18.50 && imc < 24.99){
        resultado.innerHTML = `Seu IMC é : ${imc.toFixed(2)}. Parabéns, está no peso ideal! IMC entre 18.50 e 24.99 `
    } else if(imc >= 25 && imc < 29.99){
        resultado.innerHTML = `Seu IMC é : ${imc.toFixed(2)}. Está acima do peso! O ideal é IMC entre 18.50 e 24.99. Por favor, procure ajuda profissional.`
    } else if(imc > 29.99){
        resultado.innerHTML = `Seu IMC é : ${imc.toFixed(2)}. O ideal seria IMC entre 18.50 e 24.99. Poxa, você está obeso, por favor, procure ajuda profissional! `
    }

    document.querySelector("#peso").value = "";
    document.querySelector("#altura").value = "";
}