document.getElementById("mySubmit").onclick = function(){
    let numero = document.getElementById("myNumber").value;
    let error = document.getElementById("myError");
    let lista = document.getElementById("myList");

    error.textContent = "";
    lista.innerHTML = "";

    if (numero < 1 || numero > 10 || isNaN(numero) || document.getElementById("myNumber").value === ""){
        error.textContent = "Você só pode escolher um número de 1 a 10.";
        document.getElementById("myH1").textContent = `Resultado Inválido`;
        return;
    } else {
        document.getElementById("myH1").textContent = `Tabuada do Número ${numero}`;

        for (let i = 1; i <= 10; i++){
            lista.innerHTML += `<li>${numero} x ${i} = ${numero * i}</li>`;
        }
        
    }
}