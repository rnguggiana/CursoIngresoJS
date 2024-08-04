/*una agencia de viajes debe sacar las tarifas de los viajes , 
se cobra $15.000 por cada estadia como base, 
se pide el ingreso de una estacion del año y localidad para vacacionar 
para poder calcular el precio final

en Invierno: 
bariloche tiene un aumento del 20% 
cataratas y Cordoba tiene un descuento del 10% 
Mar del plata tiene un descuento del 20%

en Verano: 
bariloche tiene un descuento del 20% 
cataratas y Cordoba tiene un aumento del 10% 
Mar del plata tiene un aumento del 20%

en Otoño y Primavera: 
bariloche tiene un aumento del 10% 
cataratas tiene un aumento del 10% 
Mar del plata tiene un aumento del 10% 
Cordoba tiene el precio sin descuento*/

function mostrar()
{
	let destino; // declaro variables a utilizar
	let estacion;
	let precioBase = 15000; //declaro y le doy valor al precio base
	let precioFinal;

	estacion = document.getElementById("txtIdEstacion").value; // tomo datos de la caja de texto que corresponda
	destino = document.getElementById("txtIdDestino").value;


	switch(estacion){ //dependiendo al estacion, aplico descuentos por destino
		case "Invierno":
			if (destino == "Bariloche"){
				precioFinal = precioBase * 1.20;
			}else if (destino == "Mar del plata"){
				precioFinal = precioBase * 0.80;
			}else {
				precioFinal = precioBase * 0.90;	
			}
			break;

		case "Verano":  
			if (destino == "Bariloche"){
				precioFinal = precioBase * 0.80;      
			}else if (destino == "Mar del plata"){
				precioFinal = precioBase * 1.20;
		    }else{
				precioFinal = precioBase * 1.10;
			}	
			break;

		case "Otoño":
		case "Primavera":
			if (destino == "Cordoba"){
				precioFinal = precioBase;
			}else{
				precioFinal = precioBase * 1.10;
			}
			break;
	}		
		alert("El precio final es: " + precioFinal);
}
