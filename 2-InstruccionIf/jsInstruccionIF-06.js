//Al ingresar una edad debemos informar si la persona es mayor de edad (mas de 18 años) o adolescente (entre 13 y 17 años) o niño (menor a 13 años).

function mostrar()
{  
	let edad; // Declaro la variable

	edad = parseInt(document.getElementById("txtIdEdad").value); // la convierto en un entero desde la caja de texto que corresponda

	if (edad > 17) { //descarto opcion de adultos
	  alert("Usted es un Adulto");
	} else if (edad >=13){ // pregunto si es mayor a 13 sabiendo que no es mayor a 17, descarto o no adolescentes
	  alert("Usted es un Adolescente");
	  } else{ // ultima opcion por descarte
		alert("Usted es un Niño");
	  }
}
//FIN DE LA FUNCIÓN