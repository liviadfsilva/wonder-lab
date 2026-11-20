const escolhas = ["Pedra", "Papel", "Tesoura"];

const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");

function playGame(escolhaJogador){
    const escolhaComputador = escolhas[Math.floor(Math.random() * 3)]
    let resultado = "";

    if (escolhaJogador === escolhaComputador) {
        resultado = "EMPATE!"
    } else {
        switch(escolhaJogador){
            case "Pedra":
                resultado = (escolhaComputador === "Tesoura" ? "VOCÊ GANHOU!" : "VOCÊ PERDEU!")
                break;
            case "Papel":
                resultado = (escolhaComputador === "Pedra" ? "VOCÊ GANHOU!" : "VOCÊ PERDEU!")
                break;
            case "Tesoura":
                resultado = (escolhaComputador === "Papel" ? "VOCÊ GANHOU!" : "VOCÊ PERDEU!")
                break;
        }
    }
    playerDisplay.textContent = `JOGADOR: ${escolhaJogador}`;
    computerDisplay.textContent = `COMPUTADOR: ${escolhaComputador}`;
    resultDisplay.textContent = resultado;

    resultDisplay.classList.remove("greenText", "redText", "yellowText")

    switch(resultado){
        case "VOCÊ GANHOU!":
            resultDisplay.classList.add("greenText");
            break;
        case "VOCÊ PERDEU!":
            resultDisplay.classList.add("redText");
            break;
        case "EMPATE!":
            resultDisplay.classList.add("yellowText");
            break;
    }
}


