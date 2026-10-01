const dadosPark = {
    reserva: {
        // Ajuste fino dos limites geográficos para esticar e cobrir toda a área do parque perfeitamente
        bounds: [[-23.6150, -46.9750], [-23.6280, -46.9620]], 
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
            { id: "AMBULATÓRIO", nome: "🚑 AMBULATÓRIO", area: "Ambulatório / Bombeiros Animália", desc: "Localizado na Vila Animália.", icone: "icons/ambulatorio.png", lat: -23.6210, lng: -46.9680 },
            { id: "quiosque-leao", nome: "QUIOSQUE LEÃO", area: "🍿 Café, Salgados e pipocas", desc: "Logo após o recinto do Leão.", icone: "icons/quiosque.png", lat: -23.6225, lng: -46.9685 },
            { id: "VILA ANIMALIA", nome: "VILA ANIMÁLIA", area: "Ambiente aconchegante para refeições", desc: "🚻Banheiro (Comum e Acessível)<br>🥩Restaurante Savana<br>", icone: "icons/vila.png", lat: -23.6200, lng: -46.9680 },
            { id: "RECEPÇÃO", nome: "RECEPÇÃO", area: "Onde tudo começa!", desc: "🔁Entrada/Saída<br>🚻Banheiro<br>", icone: "icons/recepçao.png", lat: -23.6205, lng: -46.9685 }
        ]
    },
    diversao: {
        bounds: [[-23.6150, -46.9750], [-23.6280, -46.9620]],
        imagem: "mapa.diversao.png",
        legenda: [
            { img: "icons/local.png", texto: "Entrada Diversão"},
            { img: "icons/estacionamento.png", texto: "Estacionamento" },
            { img: "icons/wc.png", texto: "Banheiros" },
            { img: "icons/div.png", texto: "Atrações" }
        ],
        pontos: [
            { id: "animalia diversão", nome: "🎡 ANIMALIA DIVERSÃO", area: "Atrações Mágicas", desc: "Brinquedos e diversão.", icone: "icons/div.png", lat: -23.6215, lng: -46.9675 }
        ]
    }
};

let map;
let currentOverlay = null;
let currentMarkers = [];
let userMarker = null;
let watchId = null;
let categoriaAtual = 'reserva';

document.addEventListener("DOMContentLoaded", () => {
    map = L.map('mapa', {
        attributionControl: false,
        zoomControl: false
    }).setView([-23.6215, -46.9680], 17);

    // Camada de Satélite de fundo
    L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
        maxZoom: 19
    }).addTo(map);

    carregarCategoriaMapa(categoriaAtual);
    iniciarGeolocalizacao();
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

    currentOverlay = L.imageOverlay(mapaInfo.imagem, mapaInfo.bounds, { opacity: 0.95 });
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
    document.getElementById("nomeLocal").innerText = ponto.nome;
    document.getElementById("areaLocal").innerText = ponto.area;
    document.getElementById("descricaoLocal").innerHTML = ponto.desc;
    document.getElementById("janelaLocal").classList.add("ativa");
}

function fecharLocal() {
    document.getElementById("janelaLocal").classList.remove("ativa");
}

function fecharAoClicarFora(e) {
    if (e.target.id === "janelaLocal") {
        fecharLocal();
    }
}

// Controles de Zoom
function zoomIn() { map.zoomIn(); }
function zoomOut() { map.zoomOut(); }
function resetZoom() { map.setView([-23.6215, -46.9680], 17); }

// Geolocalização
function iniciarGeolocalizacao() {
    if (!("geolocation" in navigator)) return;

    watchId = navigator.geolocation.watchPosition(
        (position) => {
            const lat = position.coords.latitude;
            const lng = position.coords.longitude;
            const userLatLng = [lat, lng];

            if (!userMarker) {
                const blueIcon = L.icon({
                    iconUrl: 'https://maps.google.com/mapfiles/ms/icons/blue-dot.png',
                    iconSize: [32, 32],
                    iconAnchor: [16, 16]
                });
                userMarker = L.marker(userLatLng, { icon: blueIcon }).addTo(map);
            } else {
                userMarker.setLatLng(userLatLng);
            }
        },
        (error) => { console.warn("Erro GPS: ", error.message); },
        { enableHighAccuracy: true }
    );
}

function centralizarNoUsuario() {
    if (userMarker) {
        map.setView(userMarker.getLatLng(), 18);
    } else {
        alert("Aguardando sinal de GPS...");
    }
}
