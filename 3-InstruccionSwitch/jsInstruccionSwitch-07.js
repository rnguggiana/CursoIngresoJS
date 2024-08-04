/*Al selecionar un destino , 
indicar el punto cardinal de nuestro pais en donde se encuentra 
Norte, Sur, Este u Oeste*/

function mostrar()
{
	let destino;

	destino = document.getElementById("txtIdDestino").value;

	switch(destino){
		case "Bariloche":
			alert("El destino queda al Oeste.");
			break;
		case "Cataratas":
			alert("El destino queda al Norte.");
			break;
		case "Mar del plata":
			alert("El destino queda al Este.");
			break;
		case "Ushuaia":
			alert("El destino queda al Sur.");
			break;
	}

}//FIN DE LA FUNCIÓN

/*
function mostrar() //RESOLUCION CON IF
{
	let destino;

	destino = document.getElementById("txtIdDestino").value;

	if (destino == "Bariloche"){
		alert("El destino queda al Oeste.");
	} else if (destino == "Cataratas"){
		alert("El destino queda al Norte.");
	} else if (destino == "Mar del plata"){
		alert("El destino queda al Este.");
	} else {
		alert("El destino queda al Sur.");
	}

}*/