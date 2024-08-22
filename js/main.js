
class Viaje{
    constructor(pais, precios){
        this.pais = pais
        this.precios = precios
    }
}

const imagenes = {
    "Bariloche, Argentina": "bariloche.jpg",
    "Buzios, Brasil": "buzios.jpg",
    "Cancún, Mexico": "cancun.jpg",
    "Paris, Francia": "free-tour-torre-eiffel-589x392.avif",
    "Islas Maldivas": "malvidas.webp",
    "Viña del mar": "viñadelmardos.jpg"
};

const ulDestinos = document.getElementById('destino')
const destinosElementos = ulDestinos.getElementsByClassName('destino')

function mostrarDestinos(destinos) {
    const ulDestinos = document.getElementById('destino');
    ulDestinos.innerHTML = ''; 

    destinos.forEach((viaje) => {
        const li = document.createElement('li');
        li.classList.add('destino');

        const imagen = imagenes[viaje.pais] || 'default.jpg';

        li.innerHTML = `
            <div class="destino-content">
                <img src="img/${imagen}" alt="${viaje.pais}">
                <div class="destino-info">
                    <p>${viaje.pais} - $${viaje.precios.toLocaleString()}</p>
                    <a href="../pages/buy.html" class="destino-button">Seleccionar</a>
                </div>
            </div>
        `;

        ulDestinos.appendChild(li);
    });
}

document.addEventListener('DOMContentLoaded', cargarDestinos);

async function cargarDestinos() {
    try {
        const response = await fetch('js/db.json'); 
        const data = await response.json();

        mostrarDestinos(data);
    } catch (error) {
        console.error('Error al cargar los destinos:', error);
    }
}

//darkmode-lightmode

function mode (){
    const boton = document.querySelector('.input__check');
    const body = document.body;
    
    const modo_usuario = localStorage.getItem('modo')
    body.className = modo_usuario

    boton.addEventListener('click', () => {
        if (body.className === 'light-mode') {
            body.className = 'dark-mode';
        } else {
            body.className = 'light-mode';
        }

        localStorage.setItem('modo', body.className)
    });
}


document.addEventListener('DOMContentLoaded', function () {
    const accessKey = 'We3K25c0D2CNfQDLlRnPZRxkaljNYB0RTx0artPfXmQ'; 
    const query = 'cityscape tourist destination';
    const endpoint = `https://api.unsplash.com/photos/random?count=3&query=travel&client_id=${accessKey}`;

    fetch(endpoint)
        .then(response => response.json())
        .then(images => {
            const destinosLista = document.getElementById('destino');
            
            images.forEach(image => {
                const li = document.createElement('li');
                li.classList.add('destino');

                const destinoContent = `
                <div class="destinoApi">
                        <h2>¡Viaja con nosotros!</h2>
                        <img src="${image.urls.regular}" alt="${image.alt_description}">
                    </div>
                `;
                
                li.innerHTML = destinoContent;
                destinosLista.appendChild(li);
            });
        })
        .catch(error => console.error('Error al cargar imágenes de Unsplash:', error));
});

mode ()
destinos()
cargarDestinos()