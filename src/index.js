import cipher from './cipher.js';

let senhacrip = document.getElementById("senha1")

let deslocamento = document.getElementById("desloc")
function cifra (string){
cifrado.encode()= (senhacrip.charCodeAt() - senhacrip.charCodeAt(1) + deslocamento)%25 + senhacrip.charCodeAt(1)
return cifrado
}
let cifrado = cifra()
console.log(cipher);
document.getElementById("senhaseg").innerText = "cipher"


