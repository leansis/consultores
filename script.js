const GOZEN_APP = {
    screens: [
        {
            title: "Panel de Administración",
            description: "Gestión centralizada de empresas y usuarios con acceso maestro.",
            image: "imagenes/paneladmin.png"
        },
        {
            title: "Matriz de Polivalencia",
            description: "Visualización técnica de equipos, procesos y autoevaluaciones en tiempo real.",
            image: "imagenes/panel.png"
        }
    ]
};

const ROADMAP_APP = {
    screens: [
        {
            title: "Hoja de Ruta Digital",
            description: "Visualización de hitos, objetivos y estado de digitalización por áreas.",
            image: "imagenes/roadmap-inicio.png"
        },
        {
            title: "Análisis de Madurez",
            description: "Evaluación técnica de capacidades digitales y brechas operativas.",
            image: "imagenes/roadmap-diagrama2.png"
        }
    ]
};

function renderApps() {
    const gozenGrid = document.getElementById('grid-gozen');
    const roadmapGrid = document.getElementById('grid-roadmap');

    if (gozenGrid) {
        gozenGrid.innerHTML = GOZEN_APP.screens.map((screen) => `
            <div class="screenshot-container">
                <div class="screenshot-info">
                    <h3>${screen.title}</h3>
                    <p>${screen.description}</p>
                </div>
                <img src="${screen.image}" alt="${screen.title}" class="screenshot-img" onerror="this.src='https://placehold.co/1200x800/f8f9fa/333333?text=${encodeURIComponent(screen.title)}'">
            </div>
        `).join('');
    }

    if (roadmapGrid) {
        roadmapGrid.innerHTML = ROADMAP_APP.screens.map((screen) => `
            <div class="screenshot-container">
                <div class="screenshot-info">
                    <h3>${screen.title}</h3>
                    <p>${screen.description}</p>
                </div>
                <img src="${screen.image}" alt="${screen.title}" class="screenshot-img" onerror="this.src='https://placehold.co/1200x800/f8f9fa/333333?text=${encodeURIComponent(screen.title)}'">
            </div>
        `).join('');
    }

    initScrollReveal();
}

function initScrollReveal() {
    const observerOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal');
            }
        });
    }, observerOptions);

    // CAMBIO AQUÍ: Añadimos '.feature-row' para que los nuevos videos también se revelen
    const targetElements = document.querySelectorAll('.screenshot-container, .video-container, .feature-row');
    targetElements.forEach(el => observer.observe(el));
}

function setYear() {
    const yearEl = document.getElementById('year');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    renderApps();
    setYear();
});
