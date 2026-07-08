const musica = document.getElementById("musica");

window.addEventListener("click", () => {
    if (musica.paused) {
        musica.play();
    }
}, { once: true });

function confirmarAsistencia() {
    const mensaje = "¡Hola! Confirmo mi asistencia a los XV de Yamileth. ✨";
    const numero = "525632462685";
    window.open(`https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`, "_blank");
}
