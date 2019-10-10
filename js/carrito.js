document.getElementById('formCarrito').addEventListener('submit', agregarComida);

function agregarComida(e){
    
    let nombrePlato = document.getElementById('tituloPlato').innerHTML;
    let precioPlato = document.getElementById('precioPlato').value;

    const plato = {
        nombrePlato,
        precioPlato
    }

    if(localStorage.getItem('platos') === null){
        let platos = [];
        platos.push(plato);
        localStorage.setItem('platos', JSON.stringify(platos));
    } else{
        let platos = JSON.parse(localStorage.getItem('platos'));
        platos.push(plato);
        localStorage.setItem('platos', JSON.stringify(platos));
    }

    obtenerPlato();
    document.getElementById('formCarrito').reset();
    e.preventDefault();
}

function obtenerPlato(){
    let platos = JSON.parse(localStorage.getItem('platos'));
    let vistaPlatos = document.getElementById('carrito');

    vistaPlatos.innerHTML= " ";

    for(let i = 0; i < platos.length; i++){
        let nombrePlato = platos[i].nombrePlato;
        let precioPlato = platos[i].precioPlato;

        vistaPlatos.innerHTML += `<div class="elementoPlato">
            <p> ${nombrePlato} - ${precioPlato} </p>
            <a class="btnEliminarPlato" onclick="eliminarPlato('${nombrePlato}')">Eliminar</a>
        </div>`;
    }
}

function eliminarPlato(nombrePlato){
    let platos = JSON.parse(localStorage.getItem('platos'));

    for(let i = 0; i < platos.length; i++){
        if(platos[i].nombrePlato == nombrePlato){
            platos.splice(i, 1);
        }
    }

    localStorage.setItem('platos', JSON.stringify(platos));
    obtenerPlato();
}

obtenerPlato();