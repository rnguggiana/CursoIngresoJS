/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	let dividendo // declaro las variables a utilizar
	let divisor;
	let resto; // se conoce con el simbolo %

	dividendo = parseInt(document.getElementById("txtIdNumeroDividendo").value); //Asigno y convierto a enteros
	divisor = parseInt(document.getElementById("txtIdNumeroDivisor").value);

	resto = dividendo % divisor; //Realizo la operacion

	alert("El resto es: " + resto); //muestro el resultado
}
