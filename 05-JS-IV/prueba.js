

const usuario = {
pripiedad : "Toni",
password: "carlos",
love: true ,
favorinumero:42,
};

// for (let clave in usuario){
//     console.log(clave);
//     if (array[clave]=== 42) {
        
//     }
// }

var carlos = {
    nombre : "carlos",
    apellido: "nieto",
    edad: 33,
    saludar:function(){
        console.log("hola, toni");

    },

    hobbies:["escalar" , "foto","dar clase"],

    
    
    };


    function nuevoUsuario(nombre, email, password) {
        // Crea un nuevo objeto con las propiedades coincidiendo con los argumentos que se pasan a la función
        // Devuelve el objeto
        // Tu código:
        let obj ={
           nombre,
           email,
          password
        };
        return obj
      
      }

      let aux ={};
      console.log(nuevoUsuario("dwdwdwdd","dwddw","hola"));


    console.log(carlos.nombre);
    console.log(carlos.hobbies);
    carlos.saludar();