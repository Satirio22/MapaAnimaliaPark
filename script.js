const dadosPark = {
    reserva: {
        // Limites expandidos para a imagem cobrir perfeitamente a área do parque
        bounds: {
            north: -23.6120,  
            south: -23.6300,  
            east: -46.9600,   
            west: -46.9760    
        },
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
        bounds: {
            north: -23.6120,  
            south: -23.6300,  
            east: -46.9600,   
            west: -46.9760    
        },
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

// Função chamada pelo Google Maps assim que ele carrega
function carregarGoogleMapsPronto() {
    const centroInicial = { lat: -23.6215, lng: -46.9680 };

    map = new google.maps.Map(document.getElementById("mapa"), {
        zoom: 16,
        center: centroInicial,
        mapTypeId: "satellite",
        disableDefaultUI: true,
        zoomControl: false
    });

    carregarCategoriaMapa(categoriaAtual);
    iniciarGeolocalizacao();
}

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
        currentOverlay.setMap(null);
    }

    // Cria a sobreposição da imagem esticada exatamente nos limites definidos
    const imageBounds = new google.maps.LatLngBounds(
        new google.maps.LatLng(mapaInfo.bounds.south, mapaInfo.bounds.west),
        new google.maps.LatLng(mapaInfo.bounds.north, mapaInfo.bounds.east)
    );

    currentOverlay = new google.maps.GroundOverlay(
        mapaInfo.imagem,
        imageBounds,
        { opacity: 0.95 }
    );
    currentOverlay.setMap(map);

    currentMarkers.forEach(marker => marker.setMap(null));
    currentMarkers = [];

    mapaInfo.pontos.forEach(ponto => {
        const marker = new google.maps.Marker({
            position: { lat: ponto.lat, lng: ponto.lng },
            map: map,
            title: ponto.nome,
            icon: {
                url: ponto.icone,
                scaledSize: new google.maps.Size(32, 32)
            }
        });

        marker.addListener("click", () => {
            abrirLocal(ponto);
        });

        currentMarkers.push(marker);
    });

    if (mapaInfo.legenda) {
        atualizarLegenda(mapaInfo.legenda);
    }
}

function atualizarLegenda(itensLegenda) {
    const lista = document.getElementById("legendaLista");
    if (!lista) return;

    lista.innerHTML = "";
    itensLegenda.forEach(item => {
        const li = document.createElement("li");
        if (item.img) {
            li.innerHTML = `<img src="${item.img}" alt=""> <span>${item.texto}</span>`;
        } else {
            li.innerHTML = `<span>${item.texto}</span>`;
        }
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

function iniciarGeolocalizacao() {
    if (!("geolocation" in navigator)) return;

    watchId = navigator.geolocation.watchPosition(
        (position) => {
            const lat = position.coords.latitude;
            const lng = position.coords.longitude;
            const userLatLong = { lat: lat, lng: lng };

            if (!userMarker) {
                userMarker = new google.maps.Marker({
                    position: userLatLong,
                    map: map,
                    title: "Você está aqui",
                    icon: {
                        url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"
                    }
                });
            } else {
                userMarker.setPosition(userLatLong);
            }
        },
        (error) => { console.warn("Erro GPS: ", error.message); },
        { enableHighAccuracy: true }
    );
}
