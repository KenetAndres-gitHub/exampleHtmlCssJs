document.addEventListener("DOMContentLoaded", function() {
    // Selecciona las secciones relevantes
    const personalSection = document.querySelector(".personal-column");
    const experienceSection = document.querySelector(".work-experience");

    // Agrega un evento de escucha para el mouseenter a la sección de información personal
    personalSection.addEventListener("mouseenter", function() {
        // Aumenta el tamaño de la sección de información personal un poco
        this.style.transform = "scale(1.05)";
    });

    // Agrega un evento de escucha para el mouseleave a la sección de información personal
    personalSection.addEventListener("mouseleave", function() {
        // Restaura el tamaño original de la sección de información personal
        this.style.transform = "scale(1)";
    });

    // Agrega un evento de escucha para el mouseenter a la sección de experiencia laboral
    experienceSection.addEventListener("mouseenter", function() {
        // Aumenta el tamaño de la sección de experiencia laboral un poco
        this.style.transform = "scale(1.05)";
    });

    // Agrega un evento de escucha para el mouseleave a la sección de experiencia laboral
    experienceSection.addEventListener("mouseleave", function() {
        // Restaura el tamaño original de la sección de experiencia laboral
        this.style.transform = "scale(1)";
    });
});
