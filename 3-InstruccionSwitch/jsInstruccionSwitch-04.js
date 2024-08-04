/*al seleccionar un mes informar.
si tiene 28 días.
si tiene 30 días.
si tiene 31 días.*/

function mostrar()
{
	let mes; //Declaro variable
 
	mes = document.getElementById("txtIdMes").value;   // Tomar el valor del mes por ID

	switch(mes){ // Determinar el mensaje según el valor del mes
		case "Febrero":
			alert("Este mes tiene 28 días.");
			break;
		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
			alert("Este mes tiene 30 días.");
			break;
		default:
			alert("Este mes tiene 31 días.");
			break;
		
	}

}//FIN DE LA FUNCIÓN