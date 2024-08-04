/*al seleccionar un mes informar.
si estamos en Invierno: "Abrigate que hace frio."
si aún no llego el Invierno: "Falta para el invierno."
si ya paso el Invierno: "Ya pasamos el frio, ahora calor!!!."
ACLARAcIÓN: tomamos a Julio y Agosto como los meses de Invierno. */

function mostrar() 
{
	let mes; //Declaro variable
 
	mes = document.getElementById("txtIdMes").value;   // Tomar el valor del mes por ID

	switch(mes){ // Determinar el mensaje según el valor del mes
		case "Enero":
		case "Febrero":
		case "Marzo":
		case "Abril":	
		case "Mayo":
		case "Junio":	
			alert("Falta para el invierno.");
			break;
		case "Julio":
		case "Agosto":
			alert("Abrigate que hace frio.");
			break;
		default:
			alert("Ya pasamos el frio, ahora calor!!!.");
			break;
		
	}
}	
//FIN DE LA FUNCIÓN

/*function mostrar() //RESOLUCION CON IF
{
    let mes; //Declaro variable
 
	mes = document.getElementById("txtIdMes").value;   // Tomar el valor del mes por ID

	if (mes == "Julio" || mes == "Agosto"){
		alert("Abrigate que hace frio.");
	} else if (mes = "Septiembre" || mes == "Octubre" || mes == "Noviembre" || mes == "Diciembre"){
	    alert("Ya pasamos el frio, ahora calor!!!.");
	  } else {
	    alert("Falta para el invierno.");
	  }
}*/
