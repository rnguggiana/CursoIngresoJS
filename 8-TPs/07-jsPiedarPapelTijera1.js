/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
let eleccionMaquina;
let eleccionJugador;
let resultado;

function comenzar() {
    // Generar la selección aleatoria de la máquina (1 = piedra, 2 = papel, 3 = tijera)
    eleccionMaquina = Math.floor(Math.random() * 3) + 1;
    console.log("Elección de la máquina (para depuración): " + eleccionMaquina); // Opcional, para depuración
}

function piedra() {
    comenzar(); // Llama a comenzar para refrescar la elección de la máquina
    eleccionJugador = 1; // Piedra
    determinarResultado();
}

function papel() {
    comenzar(); // Llama a comenzar para refrescar la elección de la máquina
    eleccionJugador = 2; // Papel
    determinarResultado();
}

function tijera() {
    comenzar(); // Llama a comenzar para refrescar la elección de la máquina
    eleccionJugador = 3; // Tijera
    determinarResultado();
}

function determinarResultado() {
    // Comparar la selección del jugador con la selección de la máquina
    if (eleccionJugador == eleccionMaquina) {
        resultado = "Empate";
    } else if (
        (eleccionJugador == 1 && eleccionMaquina == 3) || // Piedra vence a Tijera
        (eleccionJugador == 2 && eleccionMaquina == 1) || // Papel vence a Piedra
        (eleccionJugador == 3 && eleccionMaquina == 2)    // Tijera vence a Papel
    ) {
        resultado = "Ganaste";
    } else {
        resultado = "Perdiste";
    }
    
    // Mostrar el resultado
    alert("La máquina eligió: " + opcionNombre(eleccionMaquina) + ". " + resultado);
}

// Función para convertir el número de la opción en texto
function opcionNombre(opcion) {
    switch(opcion) {
        case 1:
            return "Piedra";
        case 2:
            return "Papel";
        case 3:
            return "Tijera";
        default:
            return "Opción desconocida";
    }
}
