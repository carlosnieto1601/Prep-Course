var aux = 25

var aux1 = "hola"

var aux2= false

var aux3 = undefined

var aux4 = null

var aux5 = function(){

}
var aux6 = [1,2,3]

var aux7 = {name:"carlos"}

var aux8 = 10 * 5

var aux0 = aux;

function saludo (palabra){

}


function decirHolasAlUsuario (usuario){

    return "Hola " + usuario + "! ";
}

function anonima (usuario){

    return  usuario + " Es una buena ususaria";
}
function decirAdiosAlUsuario (usuario){

    return "Adios" + usuario + "!";
}

function crearsaludo (usuario, cb, cb2){

    return cb (usuario)+ cb2 (usuario);
}

var alum = ['neito', 'carlos','navas'];

alum.forEach(function(elemento){
    console.log(elemento);
});

//alum.forEach((elemento) => console.log(elemento));



var aux = crearsaludo ("ele", decirHolasAlUsuario ,anonima);

console.log(aux);
