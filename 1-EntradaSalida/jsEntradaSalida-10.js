/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	let importe; // Declaro las variables que necesito
	let descuento;
	let ImporteFinal;

	importe = parseInt(document.getElementById("txtIdImporte").value); //Pido el importe y lo convierto en numero
	
	descuento = importe * 0.25; //Calculo el 25% del importe y lo nombro "descuento"
	ImporteFinal = importe - descuento; // Al importe le resto el Descuento en la variable preciofinal

	document.getElementById("txtIdResultado").value = ImporteFinal; //Muestro el precio con descuento en la caja de texto que corresponde
}