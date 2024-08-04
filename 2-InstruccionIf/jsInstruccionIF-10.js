// Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
//"EXCELENTE" para notas igual a 9 o 10,
//"APROBÓ" para notas mayores a 4,
//"Vamos, la proxima se puede" para notas menores a 4

function mostrar()
{ 
	let notaRandom;
	
	notaRandom = Math.floor(Math.random() * 10 + 1);

	
	if (notaRandom <= 4){
		alert("La nota de su examen es: " + notaRandom + ". Vamos, la proxima se puede.");
	} else if (notaRandom > 4 && notaRandom < 9) {
		alert("La nota de su examen es: " + notaRandom + ". APROBÓ.");
	} else {
		alert("La nota de su examen es: " + notaRandom + ". EXCELENTE.");
	}

}//FIN DE LA FUNCIÓN