/*al seleccionar un mes informar.
si es Febrero: " Este mes no tiene más de 29 días."
si NO es Febrero: "Este mes tiene 30 o más días"*/

function mostrar() 
{
	let mes; //Declaro variable
 
	mes = document.getElementById("txtIdMes").value;   // Tomar el valor del mes por ID

	switch(mes){ // Determinar el mensaje según el valor del mes
		case "Febrero":
			alert("Este mes no tiene más de 29 dias");
			break;
		default:
			alert("Este mes tiene 30 o más días");
	}
	
	
}//FIN DE LA FUNCIÓN