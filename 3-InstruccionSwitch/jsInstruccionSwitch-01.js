/*al seleccionar un mes informar.
si es Enero: "que comiences bien el año!!!."
si es Marzo: "a clases!!!."
si es Julio: "se vienen las vacaciones!!!."
si es Diciembre: "Felices fiesta!!!." */

function mostrar() 
{
	let mes; //Declaro variable
 
	mes = document.getElementById("txtIdMes").value;   // Tomar el valor del mes por ID

	switch(mes){ // Determinar el mensaje según el valor del mes
		case "Enero":
			alert("Que comiences bien el año!!!.");
			break;
		case "Marzo":
			alert("A clases!!!.");
			break;
		case "Julio":
			alert("Se vienen las vacaciones!!!.");
			break;
		case "Diciembre":
			alert("Felices Fiestas!!!.");
			break;
		default:
			alert("Mes no reconocido");			
	}

}//FIN DE LA FUNCIÓN

/*RESOLUCION CON IF/ELSE
function mostrar()
{
	let mes; //Declaro variable
 
	mes = document.getElementById("txtIdMes").value;   // Tomar el valor del mes por ID

	if (mes == "Enero"){
		alert("Que comiences bien el año!!!.");
	} else if (mes == "Marzo"){
		alert("A clases!!!.");
	} else if (mes == "Julio"){
		alert("Se vienen las vacaciones!!!.");
	} else if (mes == "Diciembre"){
		alert("Felices Fiestas!!!.");
	}
}*/