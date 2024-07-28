/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar() 
{
	let numero1; //declaro las variables para los datos que necesito y la operacion a realizar
	let numero2;
	let suma;

	numero1 = document.getElementById("txtIdNumeroUno").value; //A cada variable la pido con el get de la caja de texto correspondiente en html
	numero2 = document.getElementById("txtIdNumeroDos").value;

	numero1 = parseInt(numero1); //convierto el dato en numero entero
	numero2 = parseInt(numero2);

	suma = numero1 + numero2; //uso la variable de la operacion y en este caso los sumo

	alert("La suma de ambos numeros es: " + suma); //devuelvo el dato por prompt


}

