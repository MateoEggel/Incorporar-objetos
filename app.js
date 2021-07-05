

//Quiere generar un nuevo contacto?
//Ingrese nombre
//numero de telefono


alert("¿Quiere generar un nuevo contacto?");


class Contacto{
   constructor(nombre, numero) {
       this.nombre = nombre;
       this.numero  = numero;
   }
   confirmacion(){
    alert("Has guardado un nuevo contato con el nombre "+ this.nombre);
   }
   reconfrimacion(){
    alert("El número celular de "+ this.nombre + " es " + this.numero);    
   }

}

let nombre = prompt("Ingrese nombre de contacto");
let numero = prompt("Ingrese numero de contacto");

const Contacto1 = new Contacto(nombre, numero);
Contacto1.confirmacion();
Contacto1.reconfrimacion();
Contacto1.numero = prompt("Si pusiste mal el numero aca tenes una oportunidad de cambiarlo por ultima vez ;)");
