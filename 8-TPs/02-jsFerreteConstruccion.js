/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo() {
    let largo = parseInt(document.getElementById("txtIdLargo").value); //declaro todas las variables y las que puedo las convierto a entero
    let ancho = parseInt(document.getElementById("txtIdAncho").value);
    let perimetro;
    let cantidadAlambre;

    perimetro = (largo + ancho) / 2; // calculo el perimetro

    cantidadAlambre = perimetro * 3; // lo multiplico por cantidad de hilo de alambre

    alert("La cantidad de alambre a comprar es de: " + cantidadAlambre); // muestro resultado

}
function Circulo() {
    let radio = parseInt(document.getElementById("txtIdRadio").value);
    let circunferencia;
    let cantidadAlambre;

    circunferencia = radio * radio;

    cantidadAlambre = circunferencia * 3;

    alert("La cantidad de alambre a comprar es de: " + cantidadAlambre);
}
function Materiales() {
    let largo = parseInt(document.getElementById("txtIdLargo").value);
    let ancho = parseInt(document.getElementById("txtIdAncho").value);
    let area;
    let bolsaCemento;
    let bolsaCal;
    
    area = largo * ancho;

    bolsaCemento = area * 2;
    bolsaCal = area * 3;

    alert("Para el contrapiso se necesitan " + bolsaCemento + " bolsas de cemento y " + bolsaCal + " bolsas de cal.");
}