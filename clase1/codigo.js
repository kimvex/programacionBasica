var peso;
var pesoEnMarte;

alert("¿Quieres saber tu peso en marte?");

peso = prompt("¿Cual es tu peso en kg?", 
	"100");
peso = parseInt(peso);

pesoEnMarte = (peso / 9.81) * 3.711;

alert("Peso en marte es igual a: " + pesoEnMarte);

//Comentario con doble slahs
//alert("Benjamin");
//var nombre = "Benjamin";
//var apellido = "De la cruz";
//var edad = 20;

//alert(nombre + " " + apellido + " \n"+ edad +" años" );