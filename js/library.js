
const botones = document.getElementsByClassName('buttonReservar');


for (let i = 0; i < botones.length; i++) {
    botones[i].addEventListener('click', (event) => {
        event.preventDefault(); 
        
        Swal.fire({
            title: "¿Quieres reservar este viaje?",
            showDenyButton: true,
            confirmButtonText: "Si, deseo reservar",
            denyButtonText: `No, no deseo reservar`
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
            Swal.fire("Disfruta de tu viaje!", "", "success");
            } else if (result.isDenied) {
            Swal.fire("", "", "error");
            }
        });
})}

Toastify({
    
    text: "¡Bienvenido a nuestra página!",
    
    duration: 3000
    
}).showToast();


const boton = document.getElementById('buttoncontact').addEventListener('click', (e)=>{
    e.preventDefault();
    Toastify({
    
        text: "Mensaje enviado!",
        gravity: 'bottom',
        position: 'center',
        duration: 3000
        
    }).showToast();
})
