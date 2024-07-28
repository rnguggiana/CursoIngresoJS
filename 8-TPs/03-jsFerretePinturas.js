/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	let temperaturaFahrenheit = parseInt(document.getElementById("txtIdTemperatura").value);
    let celcius;
    let datoTemperatura = parseInt(document.getElementById("txtIdTemperatura").value);
   
    celcius = (temperaturaFahrenheit - 32) * 5 / 9;

    alert(datoTemperatura + " Fahrenheit son: " + celcius + " centigrados.");

}


function CentigradosFahrenheit () 
{
	let temperaturaCelsius = parseInt(document.getElementById("txtIdTemperatura").value);
    let fahrenheit;
    let datoTemperatura = parseInt(document.getElementById("txtIdTemperatura").value);

    fahrenheit = (temperaturaCelsius * 9 / 5) + 32;

    alert(datoTemperatura + " Centigrados son: " + fahrenheit + " Fahrenheit.");
}
