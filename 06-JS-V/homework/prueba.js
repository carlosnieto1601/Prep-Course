function Persona (name){
    this.fristname= name;
    this.lastname= "juan";

}

var Persona = {
   getnombre: function (){
       
   }
}
var juan = {
    nombre: "juan",
    apellido :"perez"
}

juan.__proto__= Persona;

var juan = new Persona("juan");
var hernan = new Persona("hernan");
console.log(juan,hernan);