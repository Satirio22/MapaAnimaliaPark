const dadosPark = {
    reserva: {
        imagem: "mapa.zoo.png",
        legenda: [
            { img: "icons/estacionamento.png", texto: "Estacionamentos" },
            { img: "icons/wc.png", texto: "Banheiros (Comum / Acessível)" },
            { img: "icons/ambulatorio.png", texto: "Ambulatório / Primeiros Socorros" },
            { img: "icons/recepçao.png", texto: "Recepção / Atendimento" },
            { img: "icons/Aviario.png", texto: "Aviário" },
            { img: "icons/fazenda.png", texto: "Fazendinha" },
            { img: "icons/rest.central.png", texto: "Restaurante Central" },
            { img: "icons/food-park.png", texto: "Food Park" },
            { img: "icons/vila.png", texto: "Vila Animália" },
            { img: "icons/div-ab.png", texto: "Diversão Alimentação" },
            { img: "icons/div.png", texto: "Animalia Diversão" },
            { img: "icons/quiosque.png", texto: "Quiosques Reserva" }
        ],
        pontos: [
            { id: "ambulatorio", nome: "🚑 AMBULATÓRIO", area: "Ambulatório / Bombeiros Animália", desc: "Localizado na Vila Animália para primeiros socorros.", icone: "icons/ambulatorio.png", x: 48, y: 52 },
            { id: "quiosque-leao", nome: "QUIOSQUE LEÃO", area: "Café, Salgados e Pipocas", desc: "Localizado logo após o recinto do Leão.", icone: "icons/quiosque.png", x: 55, y: 45 },
            { id: "vila-animalia", nome: "VILA ANIMÁLIA", area: "Área de Refeições e Lojas", desc: "Conta com banheiros (comum e acessível) e Restaurante Savana.", icone: "icons/vila.png", x: 42, y: 60 },
            { id: "recepcao", nome: "RECEPÇÃO", area: "Entrada e Atendimento Principal", desc: "Ponto de entrada, saída e informações do parque.", icone: "icons/recepçao.png", x: 50, y: 38 }
        ]
    },
    diversao: {
        imagem: "mapa.diversao.png",
        legenda: [
            { img: "icons/local.png", texto: "Entrada Diversão"},
            { img: "icons/estacionamento.png", texto: "Estacionamento" },
            { img: "icons/wc.png", texto: "Banheiros" },
            { img: "icons/div.png", texto: "Atrações" }
        ],
        pontos: [
            { id: "animalia-div", nome: "🎡 ANIMALIA DIVERSÃO", area: "Parque de Diversões", desc: "Área de brinquedos e atrações radicais e familiares.", icone: "icons/div.png", x: 50, y: 50 }
        ]
    }
};

let categoriaAtual = 'reserva';

document.addEventListener("DOMContentLoaded", () => {
    carregarCategoriaMapa(categoriaAtual);
});

function trocarMapa(categoria, botaoClicado) {
    if (botaoClicado) {
        document.querySelectorAll('header button').forEach(btn => btn.classList.remove('active'));
        botaoClicado.classList.add('active');
    }

    categoriaAtual = categoria;
    fecharLocal();
    carregarCategoriaMapa(categoria);
}

function carregarCategoriaMapa(categoria) {
    const mapaInfo = dadosPark[categoria];
    if (!mapaInfo) return;

    // Define a imagem correta do parque
    const imgElement = document.getElementById("imgParque");
    if (imgElement) {
        imgElement.src = mapaInfo.imagem;
    }

    // Atualiza a legenda lateral
    atualizarLegenda(mapaInfo.legenda);

    // Renderiza os pontos interativos sobre o mapa
    renderizarMarcadores(mapaInfo.pontos);
}

function atualizarLegenda(itensLegenda) {
    const lista = document.getElementById("legendaLista");
    if (!lista) return;

    lista.innerHTML = "";
    itensLegenda.forEach(item => {
        const li = document.createElement("li");
        li.innerHTML = `<img src="${item.img}" alt=""> <span>${item.texto}</span>`;
        lista.appendChild(li);
    });
}

function renderizarMarcadores(pontos) {
    const camada = document.getElementById("camadaMarcadores");
    if (!camada) return;

    camada.innerHTML = "";

    pontos.forEach(ponto => {
        const div = document.createElement("div");
        div.className = "ponto-marcador";
        // Posicionamento percentual (%) para se ajustar perfeitamente a qualquer tamanho de tela
        div.style.left = `${ponto.x}%`;
        div.style.top = `${ponto.y}%`;
        div.style.pointerEvents = "auto"; // Reativa o clique apenas nos ícones

        div.innerHTML = `<img src="${ponto.icone}" alt="${ponto.nome}">`;
        
        div.addEventListener("click", (e) => {
            e.stopPropagation();
            abrirLocal(ponto);
        });

        camada.appendChild(div);
    });
}

function abrirLocal(ponto) {
    document.getElementById("nomeLocal").innerText = ponto.nome;
    document.getElementById("areaLocal").innerText = ponto.area;
    document.getElementById("descricaoLocal").innerHTML = ponto.desc;
    document.getElementById("janelaLocal").classList.add("ativa");
}

function fecharLocal() {
    document.getElementById("janelaLocal").classList.remove("ativa");
}

function fecharAoClicarFora(e) {
    fecharLocal();
}
