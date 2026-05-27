const TIMING_APP = {
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

const CRM_APP = {
    screens: [
        {
            title: "Guia de la aplicacion",
            description: "Tour de muestra por todos los sistemas y apartados de la aplicación.",
            image: "https://www.youtube.com/embed/5W4t12gKm3M?si=1eSJzuO5vgAhFm3P"
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
    const timingGrid = document.getElementById('grid-timing');
    const roadmapGrid = document.getElementById('grid-roadmap');
    const crmGrid = document.getElementById('grid-crm');

    
    if (timingGrid) {
        timingGrid.innerHTML = TIMING_APP.screens.map((screen) => `
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

    if (crmGrid) {
        crmGrid.innerHTML = CRM_APP.screens.map((screen) => `
            <div class="screenshot-container">
                <div class="screenshot-info">
                    <h3>${screen.title}</h3>
                    <p>${screen.description}</p>
                </div>
                    <iframe width="560" height="315" class="screenshot-img" src="${screen.image}" alt="${screen.title}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
        `).join('');
    }

    initScrollReveal();
}

// Carrusel logica

  const images = ["imagenes/bpmnG-ej1.png", "imagenes/bpmnG-ej2.png", "imagenes/bpmnG-ej3.png"];
  let index = 0;

  const slide = document.getElementById("slide");

  function show() {
    slide.style.opacity = 0;
    setTimeout(() => {
      slide.src = images[index];
      slide.style.opacity = 1;
    }, 150);
  }

  function next() {
    index = (index + 1) % images.length;
    show();
  }

  function prev() {
    index = (index - 1 + images.length) % images.length;
    show();
  }

// 

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
