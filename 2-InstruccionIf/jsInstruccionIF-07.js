//Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", mostrar el siguiente mensaje: 'Es muy pequeño para NO ser soltero.'

function mostrar()
{
	let edad; // Declaro la variable
	let estadoCivil; // Declaro estado civil

	edad = parseInt(document.getElementById("txtIdEdad").value); // levanto y convierto a entero al edad
	estadoCivil = document.getElementById("estadoCivil").value; // levanto el dato de estado civil

	if (edad < 18 && estadoCivil != "Soltero") { // si edad es menor a 18 y el estado civil es "distinto" de soltero
		alert("Es muy pequeño para NO ser soltero.")
	}


}//FIN DE LA FUNCIÓN