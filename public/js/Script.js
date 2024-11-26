// Función de búsqueda
document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');
    const resultsContainer = document.getElementById('resultsContainer');

    // Datos de ejemplo para la búsqueda
    const contenido = [
        { titulo: 'Introducción', url: '#introduccion', descripcion: 'Información básica sobre TuProyecto' },
        { titulo: 'Instalación', url: '#instalacion', descripcion: 'Guía de instalación paso a paso' },
        { titulo: 'Uso básico', url: '#uso', descripcion: 'Aprende a usar las funciones básicas' },
        { titulo: 'Ejemplos', url: '#ejemplos', descripcion: 'Ejemplos prácticos de implementación' }
    ];

    searchInput.addEventListener('input', function (e) {
        const busqueda = e.target.value.toLowerCase();

        if (busqueda.length > 2) {
            const resultados = contenido.filter(item =>
                item.titulo.toLowerCase().includes(busqueda) ||
                item.descripcion.toLowerCase().includes(busqueda)
            );

            mostrarResultados(resultados);
            searchResults.classList.remove('hidden');
        } else {
            searchResults.classList.add('hidden');
        }
    });

    function mostrarResultados(resultados) {
        resultsContainer.innerHTML = resultados.length ? resultados.map(item => `
                <a href="${item.url}" class="block p-4 hover:bg-gray-700 rounded-lg transition duration-300">
                    <h4 class="text-primary-400 font-semibold">${item.titulo}</h4>
                    <p class="text-gray-300 text-sm">${item.descripcion}</p>
                </a>
            `).join('') : '<p class="text-gray-400 p-4">No se encontraron resultados</p>';
    }

    // Cerrar resultados al hacer clic fuera
    document.addEventListener('click', function (e) {
        if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
            searchResults.classList.add('hidden');
        }
    });
});