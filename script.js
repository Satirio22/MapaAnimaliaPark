const dadosPark = {
    reserva: {
        bounds: [[-23.6165, -46.9725], [-23.6265, -46.9640]], // [[sul, oeste], [norte, leste]]
        imagem: "mapa.zoo.png",
        legenda: [
            { img: "icons/estacionamento.png", texto: "Estacionamentos" },
            { img: "icons/wc.png", texto: "Banheiros" },
            { img: "icons/ambulatorio.png", texto: "Ambulatório" },
            { img: "icons/recepçao.png", texto: "Recepção" },
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
            { id: "AMBULATÓRIO", nome: "🚑 AMBULATÓRIO", area: "Ambulatório / Bombeiros Animália", desc: "Localizado na Vila Animália.", icone: "icons/ambulatorio.png", lat: -23.6210, lng: -46.9680 },
            { id: "quiosque-leao", nome: "QUIOSQUE LEÃO", area: "🍿 Café, Salgados e pipocas", desc: "Logo após o recinto do Leão.", icone: "icons/quiosque.png", lat: -23.6225, lng: -46.9685 },
            { id: "VILA ANIMALIA", nome: "VILA ANIMÁLIA", area: "Ambiente aconchegante", desc: "Banheiro e Restaurantes disponíveis.", icone: "icons/vila.png", lat: -23.6200, lng: -46.9680 },
            { id: "RECEPÇÃO", nome: "RECEPÇÃO", area: "Entrada e Saída", desc: "SAV e Atendimento.", icone: "icons/recepçao.png", lat: -23.6205, lng: -46.9685 }
        ]
    },
    diversao: {
        bounds: [[-23.6165, -46.9705], [-23.6265, -46.9640]],
        imagem: "mapa.diversao.png",
        legenda: [
            { img: "icons/local.png", texto: "Entrada Diversão"},
            { img: "icons/estacionamento.png", texto: "Estacionamento" },
            { img: "icons/wc.png", texto: "Banheiros" },
            { img: "icons/div.png", texto: "Atrações" }
        ],
        pontos: [
            { id: "animalia diversão", nome: "🎡ANIMALIA DIVERSÃO", area: "Atrações Mágicas", desc: "Brinquedos e diversão.", icone: "icons/div.png", lat: -23.6215, lng: -46.9675 }
        ]
    }
};

let map;
let currentOverlay = null;
let currentMarkers = [];
let categoriaAtual = 'reserva';

// Inicializa o mapa assim que a página abre
document.addEventListener("DOMContentLoaded", () => {
    map = L.map('mapa', {
        attributionControl: false,
        zoomControl: false
    }).setView([-23.6215, -46.9680], 17);

    // Camada de Satélite de fundo gratuita (Esri World Imagery)
    L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
        maxZoom: 19
    }).addTo(map);

    carregarCategoriaMapa(categoriaAtual);
});

function trocarMapa(categoria, botaoClicado) {
    if (botaoClicado) {
        document.querySelectorAll('header button').forEach(btn => btn.classList.remove('active'));
        botaoClicado.classList.add('active');
    }
    categoriaAtual = categoria;
    carregarCategoriaMapa(categoria);
}

function carregarCategoriaMapa(categoria) {
    const mapaInfo = dadosPark[categoria];
    if (!mapaInfo) return;

    if (currentOverlay) {
        map.removeLayer(currentOverlay);
    }

    currentOverlay = L.imageOverlay(mapaInfo.imagem, mapaInfo.bounds, { opacity: 0.90 });
    currentOverlay.addTo(map);

    currentMarkers.forEach(marker => map.removeLayer(marker));
    currentMarkers = [];

    mapaInfo.pontos.forEach(ponto => {
        const customIcon = L.icon({
            iconUrl: ponto.icone,
            iconSize: [32, 32],
            iconAnchor: [16, 16]
        });

        const marker = L.marker([ponto.lat, ponto.lng], { icon: customIcon }).addTo(map);
        marker.on('click', () => abrirLocal(ponto));
        currentMarkers.push(marker);
    });

    atualizarLegenda(mapaInfo.legenda);
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

function abrirLocal(ponto) {
    document.getElementById("nomeLocalinnerText") = ponto.nome;
    document.getElementById("nomeLocal").innerText = ponto.nome;
    document.getElementById("areaLocal").innerText = ponto.area;
    document.getElementById("descricaoLocal").innerHTML = ponto.desc;
    document.getElementById("janelaLocal").classList.add("ativa");
}

function fecharLocal() {
    document.getElementById("janelaLocal").classList.remove("ativa");
}

function fecharAoClicarFora(e) {
    // Mantém fechamento se necessário
}
