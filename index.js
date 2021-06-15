import cipher from './cipher.js'
let senhaString = document.getElementById("senha1")
let deslocamento = document.getElementById("desloc")
let encodeText = document.getElementById("resultado1")
let button = document.getElementById("btnCrip")
let button2 = document.getElementById("btnCrip2")
let crypt = ''
let offset = ''
senhaString.addEventListener('keyup', function(event) {
 crypt = event.target.value })

deslocamento.addEventListener('keyup', function(event) {
 offset = parseInt(event.target.value)
} )

function button1(){ 
    let msgCifra = cipher.encode(offset, crypt);
    encodeText.innerHTML = msgCifra
}

button.addEventListener('click',button1)

function button3(){ 
    let msgCifra = cipher.decode(offset, crypt);
    encodeText.innerHTML = msgCifra
}

button2.addEventListener('click',button3)





