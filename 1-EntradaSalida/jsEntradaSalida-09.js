/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	let sueldoActual; // Declaro las variables que necesito
	let sueldoNuevo;
	let aumento; // necesito declarar variable de la operatoria

	sueldoActual = parseInt(document.getElementById("txtIdSueldo").value); // convierto el dato en numero entero
	aumento = sueldoActual * 0.10; // calculo el aumento del 10%
	sueldoNuevo = sueldoActual + aumento; // sumo el aumento al sueldo actual en la variable nuevo sueldo

	document.getElementById("txtIdResultado").value = sueldoNuevo; // presento resultado en la caja de texto segun HTML
	
}
