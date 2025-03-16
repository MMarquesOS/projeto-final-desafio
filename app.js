let amigos = [];
let sorteados = {};

function adicionarAmigo() {
    const amigoCadastrado = document.getElementById('amigo');
    const amigoNome = amigoCadastrado.value.trim();

    if (amigoNome) {
        amigos.push(amigoNome);
        const listaAmigos = document.getElementById('listaAmigos');
        const novoAmigo = document.createElement('li');
        novoAmigo.textContent = amigoNome;
        listaAmigos.appendChild(novoAmigo);
        amigoCadastrado.value = '';
    }
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert('Adicione pelo menos dois amigos para o sorteio.');
        return;
    }

    const amigoAtual = amigos[Object.keys(sorteados).length];

    if (!amigoAtual) {
        alert('Todos os amigos já foram sorteados!');
        return;
    }

    let sorteio = amigos.filter(amigo => !Object.values(sorteados).includes(amigo) && amigo !== amigoAtual);

    if (sorteio.length === 0) {
        alert('Não há mais opções de sorteio para este amigo.');
        return;
    }

    const amigoSorteado = sorteio[Math.floor(Math.random() * sorteio.length)];
    sorteados[amigoAtual] = amigoSorteado;

    const resultadoLista = document.getElementById('resultado');
    resultadoLista.innerHTML = `<li>${amigoAtual} tirou ${amigoSorteado}</li>`;
}