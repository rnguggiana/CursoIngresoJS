/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar() {
    let precio1 = parseInt(document.getElementById("txtIdPrecioUno").value);
    let precio2 = parseInt(document.getElementById("txtIdPrecioDos").value);
    let precio3 = parseInt(document.getElementById("txtIdPrecioTres").value);
    let sumar;


    sumar = precio1 + precio2 + precio3

    alert("La suma de los 3 precios es: " + sumar);
}
function Promedio() {
    let precio1 = parseInt(document.getElementById("txtIdPrecioUno").value);
    let precio2 = parseInt(document.getElementById("txtIdPrecioDos").value);
    let precio3 = parseInt(document.getElementById("txtIdPrecioTres").value);
    let promedio;

    promedio = (precio1 + precio2 + precio3) / 3;

    alert("El promedio de los 3 precios es: " + promedio);
}
function PrecioFinal() {
    let precio1 = parseInt(document.getElementById("txtIdPrecioUno").value);
    let precio2 = parseInt(document.getElementById("txtIdPrecioDos").value);
    let precio3 = parseInt(document.getElementById("txtIdPrecioTres").value);
    let suma;
    let iva;
    let precioFinal;

    suma = precio1 + precio2 + precio3;
    iva = suma * 0.21;
    precioFinal = suma + iva;

    alert("El precio final + IVA es: " + precioFinal);
}