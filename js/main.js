// Array de viajes

class Viaje{
    constructor(pais, precios){
        this.pais = pais
        this.precios = precios
    }
}

const Destinos = [
new Viaje('Bariloche, Argentina', 550000),
new Viaje('Buzios, Brasil', 650000),
new Viaje('Cancún, Mexico', 1200000),
new Viaje('Paris, Francia', 2200000),
new Viaje('Islas Malvidas', 10000000),
new Viaje('Viña del mar', 340000),
]


const ulDestinos = document.getElementById('destino')
const destinosElementos = ulDestinos.getElementsByClassName('destino')

function destinos(){
    for (let i = 0; i < destinosElementos.length; i++) {
        const destinoInfo = destinosElementos[i].querySelector('.destino-info');
        const destinoContent = destinosElementos[i].querySelector('.destino-content');
        const precio = i < Destinos.length ? `$${Destinos[i].precios.toLocaleString()}` : 'Destino no disponible';
        
        destinoInfo.innerHTML = `
            ${Destinos[i]?.pais || 'Destino no disponible'} - ${precio}
            <a href="../pages/buy.html "class="destino-button">Seleccionar</a>
        `;
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
mode ()
destinos()

