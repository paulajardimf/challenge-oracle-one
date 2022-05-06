const input = document.querySelector(".input-texto");
const output = document.querySelector(".output-texto");

function btnCriptografar() {
    const textoCriptografado = criptografar(input.value);
    output.value = textoCriptografado;
    let desliga = document.getElementById("off");
    desliga.style.display = "none";
}

function criptografar(stringCriptografada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringCriptografada = stringCriptografada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringCriptografada.includes(matrizCodigo[i][0])) {
            stringCriptografada = stringCriptografada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringCriptografada;
}

function btnDescriptografar() {
    const textoDescriptografado = descriptografar(input.value);
    output.value = textoDescriptografado;
    let desliga = document.getElementById("off");
    desliga.style.display = "none";
}

function descriptografar(stringDescriptografada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDescriptografada = stringDescriptografada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDescriptografada.includes(matrizCodigo[i][0])) {
            stringDescriptografada = stringDescriptografada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDescriptografada;
}

function btnCopiar () {
    const conteudoCopia = document.querySelector(".output-texto");
    conteudoCopia.select();
    document.execCommand("copy");
    alert("Texto copiado!");
}