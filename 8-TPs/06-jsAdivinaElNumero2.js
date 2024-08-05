/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

let numeroIngresado;
let numeroSecreto; 
let contadorIntentos;
let mensaje;

function comenzar()
{
	numeroSecreto = Math.floor(Math.random() * 100) + 1;
  	contadorIntentos = 0;
}

function verificar()
{
	numeroIngresado = parseInt(document.getElementById("txtIdNumero").value);
  	contadorIntentos++;
	document.getElementById("txtIdIntentos").value = contadorIntentos;

  if( numeroIngresado == numeroSecreto){
    switch(contadorIntentos){
		case 1:
			mensaje = "Usted es un Psiquico!!!";
			break;
		case 2:
			mensaje = "Excelente persepción.";
			break;
		case 3:
			mensaje = "Esto es suerte.";
			break;	
		case 4:
			mensaje = "Excelente técnica.";
			break;	
		case 5:
			mensaje = "Usted está en la media.";
			break;	
		default:
			if(contadorIntentos <= 10){
				mensaje = "Falta técnica!!"
			}else{
				mensaje = "Afortunado en el amor!!"
			}
	}
	
	  }else if ( numeroIngresado < numeroSecreto){
   			mensaje = "Falta para llegar al numero secreto.";
  		}else{
    		mensaje = "Usted se paso del numero secreto.";
 		}

  			alert(mensaje);

  	document.getElementById("txtIdIntentos").value = contadorIntentos;
	

}