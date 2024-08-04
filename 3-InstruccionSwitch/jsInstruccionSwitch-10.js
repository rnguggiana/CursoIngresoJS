/*una agencia de viajes nos piden informar si hacemos viajes a lugares 
según la estación del año estemos, 
informar si "Se viaja" o "No se viaja" a ese lugar

en Invierno: Solo Bariloche informa "se viaja" los demas destinos "No se viaja"

en Verano: Se viaja a Mar del plata y Cataratas solamente

en Otoño: Se viaja a todos los destinos.

primavera: solo no se viaja a Bariloche*/

function mostrar()
{
	let destino; // declaro variables a utilizar
	let estacion;
	let resultado; // invento una variable resultado para evitar un alert por if
	
	estacion = document.getElementById("txtIdEstacion").value; // tomo datos de la caja de texto que corresponda
	destino = document.getElementById("txtIdDestino").value;

	switch(estacion){
		case "Invierno":
			if (destino == "Bariloche"){
				resultado = "Se viaja.";
			}else {
				resultado = "No se viaja.";
			}
			break;
		case "Verano":
			if (destino == "Mar del plata" || destino == "Cataratas"){
				resultado = "Se viaja.";
			}else {
				resultado = "No se viaja.";
			}
			break;
		case "Primavera":
			if (destino != "Bariloche"){
				resultado = "Se viaja.";
			}else {
				resultado = "No se viaja.";
			}
			break;
		default:
			resultado = "Se viaja.";
	}
		alert(resultado);

}//FIN DE LA FUNCIÓN