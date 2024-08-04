//Al ingresar una edad solo debemos informar si la persona NO es adolescente.

function mostrar()
{ 
	let edad; // Declaro la variable

	edad = parseInt(document.getElementById("txtIdEdad").value); // la convierto en un entero desde la caja de texto que corresponda

	if (edad < 13 || edad >17){

		alert("Usted NO es adolescente");
	}

}//FIN DE LA FUNCIÓN
/* otra forma de resolverlo seria negando la condicion

if (! (edad < 13 && edad > 17)){

		alert("Usted NO es adolescente");
	}
*/
