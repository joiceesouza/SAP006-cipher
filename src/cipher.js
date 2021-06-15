const cipher = {encode:function (deslocamento, senhaString) {
        let novaSenha = ''
        let cript = ''
        for (let i = 0; i < senhaString.length; i++) {
            if (senhaString.charCodeAt(i) >= 65 && senhaString.charCodeAt(i)<= 90){
             cript = (((senhaString.charCodeAt(i)-65)+deslocamento)%26)+65
           }
           
            else if (senhaString.charCodeAt(i) >= 97 && senhaString.charCodeAt(i)<= 122){
             cript = (((senhaString.charCodeAt(i)-97)+ deslocamento)%26)+97
           }

           novaSenha += String.fromCharCode(cript)
        }
    return novaSenha
},
    decode:function (deslocamento2, senhaString2){
        let novaSenha2 = '', cript2;
    for (let i = 0; i < senhaString2.length; i++) {
        if (senhaString2.charCodeAt(i) >= 65 && senhaString2.charCodeAt(i)<= 90){
         cript2 = (((senhaString2.charCodeAt(i)-90)-deslocamento2)%26)+90
       }
       
        else if (senhaString2.charCodeAt(i) >= 97 && senhaString2.charCodeAt(i)<= 122){
         cript2 = (((senhaString2.charCodeAt(i)-122)- deslocamento2)%26)+122
           
       }

       novaSenha2 += String.fromCharCode(cript2)
    }
return novaSenha2
}
};

export default cipher;

     
