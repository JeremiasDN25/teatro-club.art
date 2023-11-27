// Declaración de variables globales para los jugadores
var jugadores = [
  { nombre: "Jugador 1", puntuacion: 0 },
  { nombre: "Jugador 2", puntuacion: 0 },
  { nombre: "Jugador 3", puntuacion: 0 },
  // Agrega más jugadores según tus necesidades
];

// Función para actualizar la puntuación de un jugador
function actualizarPuntuacion(jugadorIndex, puntos) {
  jugadores[jugadorIndex].puntuacion += puntos;
  mostrarPuntuaciones();
}

// Función para mostrar las puntuaciones en la tabla
function mostrarPuntuaciones() {
  var tabla = document.getElementById("tablaPuntuacion");
  tabla.innerHTML = "<tr><th>Nombre</th><th>Puntuación</th></tr>";

  for (var i = 0; i < jugadores.length; i++) {
    var jugador = jugadores[i];
    tabla.innerHTML +=
      "<tr><td>" +
      jugador.nombre +
      "</td><td>" +
      jugador.puntuacion +
      "</td></tr>";
  }
}

// Llama a la función para mostrar las puntuaciones iniciales
mostrarPuntuaciones();
