/*var menu = ["Productos", "Ventas", "Contacto"];
document.write(menu[2]);*/

/*var dofa = [ ["Fuerza", "Oportunidad"], ["Debilidades", "Amenazas"] ];

document.write(dofa[0][0])*/

function boom () {
	alert("Boom!");
	document.write("<h1>BOOM! Elegiste un area minada :D</h1>");
}

function ganaste(){
	document.write("Ganaste")
}

var campo = [ [1, 0, 0],
			  [0, 1, 0],
			  [1, 1, 1] ];

/*if(campo[1][1] == 1){
	boom();
}
else
{
	ganaste();
}*/
var texto = ["Cesped", "Bomba"];

var x, y;

alert("Estas en un campo minado\n elige una posicion para X y para Y, entre el 0 y el 2.")

x = prompt("posicion en X? (Entre 0 y 2)");
y = prompt("posicion en Y? (Entre 0 y 2)");


if(x < 3 && y < 3 ){
	var posicion = campo[x][y];

	document.write("Elegiste " + texto[posicion] + "<br>");

	if(posicion == 1){
		boom();
	}
	else
	{
		ganaste();
	}
}
else
{
	document.write("Te saliste del campo");
	boom();
}
