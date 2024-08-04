//Al presionar el Botón, mostrar un número Random del 1 al 10 inclusive

function mostrar()
{ 
	let numeroRandom;

    numeroRandom = Math.floor(Math.random() * 10) + 1;

    alert("El numero aleatorio es el: " + numeroRandom);

}//FIN DE LA FUNCIÓN