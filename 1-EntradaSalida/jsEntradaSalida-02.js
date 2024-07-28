/*
Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	/*Declaracion de una variable, palabra reservada para obtener dato del usuario
	se utiliza let nombre*/

	let nombre;
	
	nombre = prompt("Ingrese su nombre"); 

	alert("Su nombre es: " + nombre);
	
}

