/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar() {
	// Tomar el valor del campo de texto por ID, declaro la variable dato
	let nombre;

	nombre = document.getElementById("txtIdNombre").value; //le asigno a la variable el valor del getelement

	// Mostrar el dato con alert
	alert("Su nombre es: " + nombre);
}



