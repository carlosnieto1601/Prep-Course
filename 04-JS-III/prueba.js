
var arrayvacio = [];


arrayvacio.push(1);
arrayvacio.push(2);

console.log(arrayvacio);

arrayvacio.push("hola");
arrayvacio.push(true);

console.log(arrayvacio);

var eliminado = arrayvacio.pop();

console.log(arrayvacio);
console.log(eliminado);

var abecedarios = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p"] ;

function posicionabc(letra) {
    for (let x = 0; x <= abecedarios.length - 1 ; x++){
        if (letra=== abecedarios[x]) {
            return "se encontro la letra"
        }
    }
    return "no esta la letra";
}

var array =["hello", "Work"];

console.log(array.join(" "));

console.log(posicionabc("a"));
console.log(posicionabc("h"));
console.log(posicionabc("z"));
console.log(posicionabc("w"));
