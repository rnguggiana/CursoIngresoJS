/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/

  //TODAS LAS VARIABLERS SE CARGAN DENTRO DE CADA FUNCION, NUNCA GLOBALES
function sumar() 
{
	let numero1; //decalro las variables necesarias
	let numero2;
	let sumar;

	numero1 = parseInt(document.getElementById("txtIdNumeroUno").value); //las asigno y parseo sabiendo que siempre van a ser numeros
	numero2 = parseInt(document.getElementById("txtIdNumeroDos").value);

	sumar = numero1 + numero2 // realizo la operacion correspondiente

	alert("La Suma es: " + sumar); //devuelvo el dato por alert
}

function restar() 
{
	let numero1; //declaro las variables necesarias
	let numero2;
	let restar;

	numero1 = parseInt(document.getElementById("txtIdNumeroUno").value); //las asigno y parseo sabiendo que siempre van a ser numeros
	numero2 = parseInt(document.getElementById("txtIdNumeroDos").value);

	restar = numero1 - numero2 // realizo la operacion correspondiente

	alert("La Resta es: " + restar); //devuelvo el dato por alert
}

function multiplicar() 
{
	let numero1; //declaro las variables necesarias
	let numero2;
	let multiplicar;

	numero1 = parseInt(document.getElementById("txtIdNumeroUno").value); //las asigno y parseo sabiendo que siempre van a ser numeros
	numero2 = parseInt(document.getElementById("txtIdNumeroDos").value);

	multiplicar = numero1 * numero2 // realizo la operacion correspondiente

	alert("El producto es: " + multiplicar); //devuelvo el dato por alert
}

function dividir() 
{
	let numero1; //declaro las variables necesarias
	let numero2;
	let dividir;

	numero1 = parseInt(document.getElementById("txtIdNumeroUno").value); //las asigno y parseo sabiendo que siempre van a ser numeros
	numero2 = parseInt(document.getElementById("txtIdNumeroDos").value);

	dividir = numero1 / numero2 // realizo la operacion correspondiente

	alert("La Division es: " + dividir); //devuelvo el dato por alert
}

