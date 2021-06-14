import cipher from './cipher.js';
let senhaString = document.getElementById("senha1")
let deslocamento = document.getElementById("desloc")
let CifraText = document.getElementById("resultado1")
let button = document.getElementById("btnCrip")
btnCrip.addEventListener('click', Cifra => {
    Cifra.preventDefault()
    const crypt = senhaString.value.trim()
    const endecode = deslocamento.value

    const encodeRes = btnCrip.encode(crypt, endecode)
    CifraText.innerHTML += encodeRes
})


console.log(encode)





