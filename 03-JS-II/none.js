var resultado = 100;

function verificacar (num){
if (num!==100) return "es diferente" 
    return "es 100"
}

function verificar1(num) {
    if (num<100 && num < 50 && num > 10) {
        return "hola";
    }else if (num ===10 || num ===32 || num ===8) {
        return "adios";

    }else{
        return "no se cumplio";
    }
}

var aux = verificar1 (35);
var aux2= verificar1 (8);
var aux3= verificar1("dcdc");
console.log(aux);
console.log(aux2);
console.log(aux3);

//var auxiliar = verificacar (resultado);

//console.log(auxiliar);
//console.log("holis");
//console.log(verificacar(100));

// a b c d f g h i 
//   i             buscan s

for (let i = 0 ; i <10 ; i++){
    console.log(i);
}