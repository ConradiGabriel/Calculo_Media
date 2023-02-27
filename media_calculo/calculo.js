function calcMedia(){
    if(validaCampo1(), validaCampo2(), validaCampo3(), validaCampo4()){
    parseFloat(numbone.value)
    parseFloat(numbtwo.value)
    parseFloat(numbthree.value)
    parseFloat(numbfor.value)

   var soma = (parseFloat(numbone.value) + parseFloat(numbtwo.value) 
   + parseFloat(numbthree.value) + parseFloat(numbfor.value));
   var midia = soma / 4;

   media.value = midia;
    }
}

/*function conferindo(){
const campos = [parseFloat(numbone.value), parseFloat(numbtwo.value), parseFloat(numbthree.value), parseFloat(numbfor.value)]
const confereCampos = ((campo, index, array) => {
    console.log(index, campo, array)
})
campos.forEach(confereCampos)

if(confereCampos === "" ){
    campos.style.background = "yellow";
    mensagem.innerHTML = "Preencha a unidade do produto!";
        $('#alerta').modal('show');
    return false
}else{
    return true
}
}*/
function validaCampo1 (){
    if(numbone.value.trim() === ""){
        numbone.style.background = "yellow";
        mensagem.innerHTML = "Preencha todos os campos!";
        $('#alerta').modal('show');
        return false;
    }else {
         numbone.style.background = "white";
            return true;
    }
}

function validaCampo2 (){
    if(numbtwo.value.trim() === ""){
        numbtwo.style.background = "yellow";
        mensagem.innerHTML = "Preencha todos os campos!";
        $('#alerta').modal('show');
        return false;
    }else {
        numbtwo.style.background = 'white';
        return true;
    }
}
function validaCampo3 (){
    if(numbthree.value.trim() === ""){
        numbthree.style.background = "yellow";
        mensagem.innerHTML = "Preencha todos os campos!";
        $('#alerta').modal('show');
        return false;
    }else {
        numbthree.style.background = 'white';
        return true;
    }
}
function validaCampo4 (){
    if(numbfor.value.trim() === ""){
        numbfor.style.background = "yellow";
        mensagem.innerHTML = "Preencha todos os campos!";
        $('#alerta').modal('show');
        return false;
    }else {
        numbfor.style.background = 'white';
        return true;
    }
}
