/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar() {
	let nombre; //declaro la variable que necesito

	nombre = prompt("Por favor ingrese su nombre"); //le pido el datyo al usuario

	document.getElementById("txtIdNombre").value = nombre // lo devuelvo por getelement igualando a la variable

}

