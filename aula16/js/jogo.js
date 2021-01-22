var pt = 100;
function pergunta1(){
    let alt12 = document.getElementById("alt12").checked
    let resultado = "Você acertou! Muito bem!"
    let resultado2 = "Incorreto! Tente novamente"

    if (alt12 == true ){
        document.getElementById("resp1").textContent = resultado
        document.getElementById("result").textContent = pt
        pt = pt + 100
    }
    else{
        document.getElementById("resp1").textContent = resultado2
    }
}
function pergunta2(){
    let alt21 = document.getElementById("alt21").checked
    let resultado = "Você acertou! Muito bem!"
    let resultado2 = "Incorreto! Tente novamente"

    if (alt21 == true ){
        document.getElementById("resp2").textContent = resultado
        document.getElementById("result").textContent = pt
        pt = pt + 100
    }
    else{
        document.getElementById("resp2").textContent = resultado2
    }
}
function pergunta3(){
    let alt31 = document.getElementById("alt31").checked
    let resultado = "Você acertou! Muito bem!"
    let resultado2 = "Incorreto! Tente novamente"

    if (alt31 == true ){
        document.getElementById("resp3").textContent = resultado
        document.getElementById("result").textContent = pt
        pt = pt + 100
    }
    else{
        document.getElementById("resp3").textContent = resultado2
    }
}
function pergunta4(){
    let alt42 = document.getElementById("alt42").checked
    let resultado = "Você acertou! Muito bem!"
    let resultado2 = "Incorreto! Tente novamente"

    if (alt42 == true ){
        document.getElementById("resp4").textContent = resultado
        document.getElementById("result").textContent = pt
        pt = pt + 100
    }
    else{
        document.getElementById("resp4").textContent = resultado2
    }
}
function pergunta5(){
    let alt52 = document.getElementById("alt52").checked
    let resultado = "Você acertou! Muito bem!"
    let resultado2 = "Incorreto! Tente novamente"

    if (alt52 == true ){
        document.getElementById("resp5").textContent = resultado
        document.getElementById("result").textContent = pt
        pt = pt + 100
    }
    else{
        document.getElementById("resp5").textContent = resultado2
    }
}
function pergunta6(){
    let alt63 = document.getElementById("alt63").checked
    let resultado = "Você acertou! Muito bem!"
    let resultado2 = "Incorreto! Tente novamente"

    if (alt63 == true ){
        document.getElementById("resp6").textContent = resultado
        document.getElementById("result").textContent = pt
        pt = pt + 100
    }
    else{
        document.getElementById("resp6").textContent = resultado2
    }
}
function reset(){
    document.getElementById("result").textContent = pt 
    pt = pt + 100
}
function atualizaRecord(){
    let campoRecord = document.getElementById("record");
    campoRecord.textContent = pt
    
}