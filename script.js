
var botao = document.getElementById("action");
botao.addEventListener("click", clicar);

function clicar(){
    var begin = document.querySelector("input#begin");
    var end = document.querySelector("input#end");
    var step = document.querySelector("input#step");

    if (begin.value.length == 0){
        window.alert("Falta o número inicial!");
    }

    if (end.value.length == 0){
        window.alert("Falta o número final!");
    }

    if (step.value.length == 0){
        window.alert("Passo inválido! Considerando passo 1");
    }

    var numbeg = Number(begin.value);
    var numend = Number(end.value);
    var numstep = Number(step.value);
    var res = document.querySelector("div.box");

    if (numstep < 0){
        numstep *= -1;
    }
    else if (numstep == 0){
        numstep = 1;
    }

    if (numbeg < numend){
        res.innerHTML = "";
        while(numbeg <= numend){
            res.innerHTML += `${numbeg} &#128073;`;
            numbeg += numstep;
        }
        res.innerHTML += "&#127937;"
    }
    else if (numbeg > numend){
        res.innerHTML = "";
        while(numbeg >= numend){
            res.innerHTML += `${numbeg} &#128073;`;
            numbeg -= numstep;
        }
        res.innerHTML += "&#127937;"
    }
}