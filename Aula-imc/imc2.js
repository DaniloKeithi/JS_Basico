function calcula_imc(event){
    event.preventDefault(); 

    var altura = document.imcForm.altura.value;
    var peso = document.imcForm.peso.value;

    var calculo = (peso/(altura*altura));

    var resultado;

    if (calculo < 18.5){
        resultado = "Você esta magro com esse indice: " + calculo;
    }
    else if (calculo>= 18.5 && calculo < 24.9  ){
        resultado = "Você esta com peso normal com esse indice: " + calculo;
    }
    else if (calculo>= 25 && calculo < 29.9  ){
        resultado = "Você esta com sobre peso com esse indice: " + calculo;
    }
    else if (calculo>= 30 && calculo < 39.9  ){
        resultado = "Você esta com obesidade com esse indice: " + calculo;
    }
    else if (calculo<=40  ){
        resultado = "Você esta com obesidade grave com esse indice: " + calculo;
    }
    
    document.getElementById('resul').innerHTML = resultado;

}