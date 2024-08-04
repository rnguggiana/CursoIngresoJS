// Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
//"EXCELENTE" para notas igual a 9 o 10,
//"APROBÓ" para notas mayores a 4,
//"Vamos, la proxima se puede" para notas menores a 4

function mostrar()
{
	let numeroRandom;

    numeroRandom = Math.floor(Math.random() * 10) + 1;

	if (numeroRandom <= 4){
		alert("La nota de su examen es: " + numeroRandom + ". Vamos, la proxima se puede.");
	} else if (numeroRandom > 4 && numeroRandom < 9) {
		alert("La nota de su examen es: " + numeroRandom + ". APROBÓ.");
	} else {
		alert("La nota de su examen es: " + numeroRandom + ". EXCELENTE.");
	}

}//FIN DE LA FUNCIÓN