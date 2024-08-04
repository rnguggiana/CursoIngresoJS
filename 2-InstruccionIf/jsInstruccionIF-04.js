//Al ingresar una edad debemos informar si la persona es adolescente, edad entre 13 y 17 años (inclusive) .

function mostrar()
{
	let edad; // Declaro la variable

	edad = parseInt(document.getElementById("txtIdEdad").value); // la convierto en un entero desde la caja de texto que corresponda

	if (edad >=13) // utilizo el operador de relacion que necesite
	{
		if (edad <=17) {
		alert("Usted es adolescente."); //si la condicion es verdadera
	}
}
}//FIN DE LA FUNCIÓN
/*otra resolucion del ejercicio

if (edad >=13 && edad <=17){
	alert("Usted es adolescente.");
// }
*/