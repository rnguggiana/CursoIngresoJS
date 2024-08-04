//Al ingresar una edad que sea igual a 15, mostrar el mensaje "niña bonita".


function mostrar() {
	let edad; // Declaro la variable
 
	edad = parseInt(document.getElementById("txtIdEdad").value); // la convierto en un entero desde la caja de texto que corresponda

	if (edad == 15) // == es el operador de relacion
	{
		alert("Niña Bonita");
	}

}