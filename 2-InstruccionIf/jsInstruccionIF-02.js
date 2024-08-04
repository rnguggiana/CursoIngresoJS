//Al ingresar una edad debemos informar solo si la persona es mayor de edad


function mostrar() {
	let edad; // Declaro la variable
 
	edad = parseInt(document.getElementById("txtIdEdad").value); // la convierto en un entero desde la caja de texto que corresponda

	if (edad >=18) // utilizo el operador de relacion que necesite
	{
		alert("Usted es mayor de edad.");
	} 
}
