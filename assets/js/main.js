function limpiar() {
    document.getElementById('resultado').innerHTML =''
    document.getElementById('resultado').style.display = 'none';
}

function mostrarletra(letra){
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = '';

    if(!letra) {
        resultado.innerText = 'No se encontró la letra';
        resultado.style.display = 'block';
        return
    }

    const lineas = letra.trim().split('\n')
    lineas.forEach(linea => {
        if(linea.trim() !== ''){
            const p = document.createElement('p')
            p.innerText = linea
            resultado.appendChild(p)
        }
    })
    resultado.style.display = 'block';
}


document.getElementById('buscar').addEventListener('click', () => {
    const artista = document.getElementById('Artista').value;
    const cancion = document.getElementById('Cancion').value;

    fetch(`https://api.lyrics.ovh/v1/${artista}/${cancion}`)
    .then(res => res.json())
    .then(data => {
        let letra = data.lyrics 

        mostrarletra(letra)
    })
    .catch(()=> {
        document.getElementById('resultado').innerText = 'Ocurrio algun error al realizar la busqueda'
        document.getElementById('resultado').style.display = 'block';
    })
    
})

document.getElementById('artista').addEventListener('input', limpiar)
document.getElementById('Cancion').addEventListener('input', limpiar)