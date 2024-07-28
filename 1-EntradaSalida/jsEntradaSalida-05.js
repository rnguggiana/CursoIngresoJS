/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	let nombre; //declaro als variables que necesito
	let edad;

	nombre = document.getElementById("txtIdNombre").value; //A cada variable elijo como pedirla, en este caso con un document
	edad = document.getElementById("txtIdEdad").value;

	alert("Su nombre es: " + nombre + " y tiene: " + edad + " años."); //muestro als variables concatenando string y dato

}

