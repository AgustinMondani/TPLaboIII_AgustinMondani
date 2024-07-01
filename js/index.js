document.addEventListener('DOMContentLoaded', function() {
    const casaContainer = document.querySelector('.house-articles');
    const verTodasB = document.getElementById('btn-todas');

    function crearTarjeta(imagenSrc, titulo, descripcion, precio, baños, autosEst, dormitorios) {
      const articulo = document.createElement('article');
      articulo.classList.add('card', 'house-article');

      articulo.innerHTML = `
        <div class="card-img">
          <img src="${imagenSrc}" alt="${titulo}" />
        </div>
        <div class="card-body">
          <h3>${titulo}</h3>
          <p>${descripcion}</p>
          <b>${precio}</b>
          <div class="house-details">
            <div class="house-detail">
              <img src="./assets/images/icono_wc.svg" alt="Icono Baños" />
              <span>${baños}</span>
            </div>
            <div class="house-detail">
              <img src="./assets/images/icono_estacionamiento.svg" alt="Icono Estacionamiento" />
              <span>${autosEst}</span>
            </div>
            <div class="house-detail">
              <img src="./assets/images/icono_dormitorio.svg" alt="Icono Dormitorio" />
              <span>${dormitorios}</span>
            </div>
          </div>
          <a href="#">
            <button class="btn">Ver Propiedad</button>
          </a>
        </div>
      `;

      casaContainer.appendChild(articulo);
    }

    function añadirMas() {
      crearTarjeta(
        './assets/images/anuncio4.jpg',
        'Casa con Jardín Amplio',
        'Casa con un hermoso jardín, ideal para familias.',
        'u$s320.000',
        2, 
        2, 
        3
      );

      crearTarjeta(
        './assets/images/anuncio5.jpg',
        'Departamento Moderno', 
        'Departamento con tecnología moderna y acabados de lujo.',
        'u$s210.000',
        1,
        1,
        2
      );

      verTodasB.textContent = 'Ver Menos';
    }

    verTodasB.addEventListener('click', toggleArticles);

    function toggleArticles() {
      if (verTodasB.textContent === 'Ver Todas') {
        añadirMas();
      } else {
        recargarPagina();
      }
    }

    function recargarPagina() {
        location.reload();
      }
  });