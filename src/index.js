import cipher from './cipher.js'
let senhaString = document.getElementById("senha1")
let deslocamento = document.getElementById("desloc")
let encodeText = document.getElementById("resultado1")
let button = document.getElementById("btnCrip")
let crypt = ''
let offset = ''
senhaString.addEventListener('keyup', function(event) {
 crypt = event.target.value })

deslocamento.addEventListener('keyup', function(event) {
 offset = parseInt(event.target.value)
} )

function button1(){ 
    let msgCifra = cipher.encode(crypt, offset);
    encodeText.innerHTML = msgCifra
}

button.addEventListener('click',button1)







/*btnCrip.addEventListener('click', Cifra => {
    Cifra.preventDefault()
    const crypt = senhaString.value.trim()
    const endecode = deslocamento.value
    const encodeRes = btnCrip.encode(crypt, endecode)
    CifraText.innerHTML += encodeRes
})*/


/*console.log(encode)*/





