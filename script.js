let campoCPF = document.querySelector("#cpf");
let campoRG = document.querySelector("#rg");
let campoCNPJ = document.querySelector("#cnpj");
let campoTEL = document.querySelector("#tel");

campoCPF.addEventListener("keypress", () => {
    if (campoCPF.value.length === 3 || campoCPF.value.length === 7) {
        campoCPF.value += ".";
    } else if (campoCPF.value.length === 11) {
        campoCPF.value += "-";
    }
})

campoRG.addEventListener("keypress", () => {
    if (campoRG.value.length === 2 || campoRG.value.length === 6) {
        campoRG.value += ".";
    } else if (campoRG.value.length === 10) {
        campoRG.value += "-";
    }
})
campoCNPJ.addEventListener("keypress", () => {
    if (campoCNPJ.value.length === 2 || campoCNPJ.value.length === 6) {
        campoCNPJ.value += ".";
    } else if (campoCNPJ.value.length === 10) {
        campoCNPJ.value += "/";
    }else if (campoCNPJ.value.length === 15) {
        campoCNPJ.value += "-";
    }
})
campoTEL.addEventListener("keypress", () => {
    if (campoTEL.value.length === 0) {
        campoTEL.value += "(";
    } else if (campoTEL.value.length === 3) {
        campoTEL.value += ") ";
    } else if (campoTEL.value.length === 9) {
        campoTEL.value += "-";
    }
})

