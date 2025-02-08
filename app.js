let amigos = [];

function agregarAmigo() {
    let amigo = document.getElementById('amigo').value.trim();

    if (amigo === '') {
        alert('Por favor, inserte un nombre.')
        return;
    }

    amigos.push(amigo);
    console.log(amigos);
    document.querySelector('#amigo').value = '';
    actualizarListaAmigos();
}

function actualizarListaAmigos() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement('li');
        li.textContent = amigos[i];
        console.log(amigos[i]);
        lista.appendChild(li);
    }
    return;
}