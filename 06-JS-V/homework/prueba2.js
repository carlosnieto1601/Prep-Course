function crearUsuario() {
    // Crea una Clase de ES6 o una función constructor llamada "Usuario"
    // Debe aceptar un objeto "opciones" con las propiedades "usuario", "nombre", "email" y "password"
    // En el `contructor`, define el usuario, el nombre, el email y la contraseña
    // El `contructor` debe tener un método llamado "saludar" en su `prototype` que devuelva una string 'Hola, mi nombre es {{nombre}}'
    // {{nombre}} debe ser el nombre definido en cada instancia
    // Devuelve la clase
    // Tu código:
    function Usuario (opciones){
      this.usuario= opciones.usuario,
      this.nombre = opciones.nombre,
      this.email = opciones.email,
      this.password = opciones.password
        
    }
    Usuario.prototype.saluda = function (){
      return `Hola, mi nombre es ${this.nombre}`;
    };
    return Usuario;
  }
  function agregarStringInvertida() {
    // Agrega un método al prototype de String que devuelva la misma cadena de caracteres, pero invertida.
    // El método debe llamarse "reverse"
    // Ej: 'menem'.reverse() => menem
    // 'toni'.reverse() => 'inot'
    // Pista: Necesitarás usar "this" dentro de "reverse"
  
  String.prototype.reverse= function (){
        let invertida ="";
        for(let i = this.length -1 ; i >= 0; i --){
          invertida = invertida + this-this.charAt(i);
          
        }
        return invertida;
    };
  
  }


  

  var aux = crearUsuario();
  var her = new aux({usuario:"her",nombre:"hernan",email:"ghg.com",password:"1234"})
  console.log(her);