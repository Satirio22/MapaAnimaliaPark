// ==========================================
// DADOS DO ANIMÁLIA PARK & FILTROS
// ==========================================
const dadosPark = {
    nome: "Animália Park",
    imagem: "mapa.zoo.png",
    // Coordenadas ajustadas para expandir o tamanho e encaixar perfeitamente no satélite
    bounds: {
        north: -23.611500, // Topo do parque
        south: -23.623500, // Base do parque
        west: -46.974000,  // Limite esquerdo
        east: -46.960500   // Limite direito
    },
    // ... (o restante da legenda e pontos continua igual embaixo)
};
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
        { img: "icons/div.png", texto: "Animalia Park / Atrações" },
        { img: "icons/quiosque.png", texto: "Quiosques" }
    ],
    pontos: [
        // --- BANHEIROS (Categoria: 'banheiro') ---
        { id: "wc-vila", nome: "🚻 BANHEIRO - Vila Animália", area: "Vila Animália", desc: "Banheiro comum e acessível localizado na Vila Animália.", icone: "icons/wc.png", categoria: "banheiro", top: 20, left: 53 },
        { id: "wc-recepcao", nome: "🚻 BANHEIRO - Recepção", area: "Recepção", desc: "Banheiro comum e acessível na entrada/recepção.", icone: "icons/wc.png", categoria: "banheiro", top: 27, left: 48 },
        { id: "wc-foodpark", nome: "🚻 BANHEIRO - Food Park", area: "Food Park", desc: "Banheiro comum e acessível próximo ao Food Park.", icone: "icons/wc.png", categoria: "banheiro", top: 60.5, left: 70.5 },
        { id: "wc-aviario", nome: "🚻 BANHEIRO - Aviário", area: "Aviário", desc: "Banheiro comum e acessível na área do Aviário.", icone: "icons/wc.png", categoria: "banheiro", top: 60, left: 33 },
        { id: "wc-restcentral", nome: "🚻 BANHEIRO - Restaurante Central", area: "Restaurante Central", desc: "Banheiro comum e acessível junto ao Restaurante Central.", icone: "icons/wc.png", categoria: "banheiro", top: 45.5, left: 55.5 },
        { id: "wc-fazendinha", nome: "🚻 BANHEIRO - Fazendinha", area: "Fazendinha", desc: "Banheiro comum e acessível na Fazendinha.", icone: "icons/wc.png", categoria: "banheiro", top: 82, left: 65 },

        // --- ANIMAIS / RECINTOS (Categoria: 'animal') ---
        { id: "recinto-leao", nome: "🦁 RECINTO DO LEÃO", area: "Área da Reserva", desc: "Localizado na trilha principal da Reserva.", icone: "icons/div.png", categoria: "animal", top: 49, left: 41 },
        { id: "recinto-sucuarana", nome: "🐆 RECINTO DA SUÇUARANA", area: "Área da Reserva", desc: "Localizado na trilha da Reserva.", icone: "icons/div.png", categoria: "animal", top: 64, left: 43 },
        { id: "recinto-tamandua", nome: "🐻 RECINTO DO TAMANDUÁ", area: "Área da Reserva", desc: "Localizado no percurso principal.", icone: "icons/div.png", categoria: "animal", top: 60, left: 56 },
        { id: "recinto-lobo-marinho", nome: "🦭 LOBO MARINHO", area: "Área da Reserva", desc: "Recinto aquático dos lobos marinhos.", icone: "icons/div.png", categoria: "animal", top: 80, left: 80 },
        { id: "recinto-canguru", nome: "🦘 CANGURUS", area: "Área da Reserva", desc: "Área dos cangurus na Reserva.", icone: "icons/div.png", categoria: "animal", top: 40, left: 74.5 },
        { id: "aviario-principal", nome: "🪿 AVIÁRIO", area: "Um dos Maiores Aviários da América Latina", desc: "Pássaros e natureza com passarela imersiva.", icone: "icons/Aviario.png", categoria: "animal", top: 60, left: 33 },
        { id: "fazendinha-animais", nome: "🐐 FAZENDINHA", area: "Fazendinha Animália", desc: "Contato direto com animais de fazenda.", icone: "icons/fazenda.png", categoria: "animal", top: 82, left: 65 },

        // --- ALIMENTAÇÃO (Categoria: 'alimentacao') ---
        { id: "rest-savana", nome: "🥩 RESTAURANTE SAVANA", area: "Vila Animália", desc: "Carnes nobres.", icone: "icons/vila.png", categoria: "alimentacao", top: 20, left: 53 },
        { id: "shake-bin", nome: "🥤 SHAKE DO BIN", area: "Vila Animália", desc: "Sorvetes e Shakes.", icone: "icons/vila.png", categoria: "alimentacao", top: 20, left: 53 },
        { id: "vila-cafeteria", nome: "☕ VILA CAFETERIA", area: "Vila Animália", desc: "Cafés e salgados.", icone: "icons/vila.png", categoria: "alimentacao", top: 20, left: 53 },
        { id: "hamburgueria-vila", nome: "🍔 HAMBURGUERIA DA VILA", area: "Vila Animália", desc: "Hambúrgueres e bebidas.", icone: "icons/vila.png", categoria: "alimentacao", top: 20, left: 53 },
        { id: "selva-sabores", nome: "🍕 SELVA DE SABORES", area: "Vila Animália", desc: "Pizzas e crepes.", icone: "icons/vila.png", categoria: "alimentacao", top: 20, left: 53 },
        { id: "vila-tratoria", nome: "🍝 VILA TRATORIA", area: "Vila Animália", desc: "Massas e carnes.", icone: "icons/vila.png", categoria: "alimentacao", top: 20, left: 53 },
        { id: "hotdog-kiran", nome: "🌭 HOT DOG DO KIRAN", area: "Vila Animália", desc: "Hot dogs especiais.", icone: "icons/vila.png", categoria: "alimentacao", top: 20, left: 53 },
        { id: "cantinho-girafa", nome: "🍨 CANTINHO DA GIRAFA", area: "Vila Animália", desc: "Sorvetes e massas.", icone: "icons/vila.png", categoria: "alimentacao", top: 20, left: 53 },
        { id: "rest-baboá", nome: "🍽️ RESTAURANTE BABOÁ", area: "Restaurante Central", desc: "Buffet livre por pessoa.", icone: "icons/rest.central.png", categoria: "alimentacao", top: 45.5, left: 55.5 },
        { id: "food-park-geral", nome: "🍖 FOOD PARK", area: "Food Park", desc: "Espetaria, Linguiçaria, Chicken & Fries, Pastelaria, Yakissoba.", icone: "icons/food-park.png", categoria: "alimentacao", top: 60.5, left: 70.5 },
        { id: "div-ab-geral", nome: "🍟🍔 ANIMALIA ALIMENTAÇÃO", area: "Área Indoor", desc: "Cesta Pic Nic, Carrossel (Porções e Cafés), Mundo Doce, Carrinhos de Pipoca.", icone: "icons/div-ab.png", categoria: "alimentacao", top: 17, left: 35 },
        { id: "quiosque-leao", nome: "🍿 QUIOSQUE LEÃO", area: "Café e Salgados", desc: "Logo após o recinto do Leão.", icone: "icons/quiosque.png", categoria: "alimentacao", top: 49, left: 41 },
        { id: "quiosque-sucuarana", nome: "🍿 QUIOSQUE SUÇUARANA", area: "Salgados e Pipocas", desc: "Em frente ao recinto Suçuarana.", icone: "icons/quiosque.png", categoria: "alimentacao", top: 64, left: 43 },
        { id: "quiosque-tamandua", nome: "🍿 QUIOSQUE TAMANDUÁ", area: "Café e Salgados", desc: "Em frente ao recinto tamanduá.", icone: "icons/quiosque.png", categoria: "alimentacao", top: 60, left: 56 },
        { id: "quiosque-lobo-marinho", nome: "🍿 QUIOSQUE LOBO MARINHO", area: "Café e Salgados", desc: "Localizado na Reserva.", icone: "icons/quiosque.png", categoria: "alimentacao", top: 80, left: 80 },
        { id: "quiosque-canguru", nome: "🍿 QUIOSQUE CANGURU", area: "Café e Salgados", desc: "Localizado na Reserva.", icone: "icons/quiosque.png", categoria: "alimentacao", top: 40, left: 74.5 },
        { id: "quiosque-splash", nome: "🍿 QUIÓSQUE SPLASH", area: "Área de Diversão", desc: "Próximo ao vulcão.", icone: "icons/quiosque.png", categoria: "alimentacao", top: 41, left: 15 },
        { id: "quiosque-viking", nome: "🍿 QUIÓSQUE VIKING", area: "Área de Diversão", desc: "Na entrada do Outdoor.", icone: "icons/quiosque.png", categoria: "alimentacao", top: 40, left: 35 },

        // --- ATRAÇÕES (Categoria: 'atracao') ---
        { id: "diversao-indoor", nome: "🎡 ANIMALIA DIVERSÃO INDOOR", area: "Atrações Mágicas", desc: "Vitória Régia, Eagle Flight, Balão Mexicano, Forte Apache, Kanguroo Joy, Giraffe Cool, Bella Giostra, Joe Caveira, Kite Dragon, Mundo Doce, Rise of Rome, Bear Mountain, Big Chock, Cantinho do Silêncio.", icone: "icons/div.png", categoria: "atracao", top: 21, left: 38 },
        { id: "diversao-aventura", nome: "🎢 ANIMALIA AVENTURA", area: "Atrações Radicais", desc: "Barco Viking, Splash, Cyber Hawk, Cyclone, Big Air Coaster, Aqua Combat.", icone: "icons/div.png", categoria: "atracao", top: 10, left: 40 },
        { id: "vila-estacao", nome: "🚠 VILA ESTAÇÃO (Teleférico)", area: "Vila Animália", desc: "Teleférico para transporte e passeio panorâmico.", icone: "icons/vila.png", categoria: "atracao", top: 20, left: 53 },

        // --- OUTROS (Categoria: 'outro') ---
        { id: "ambulatorio", nome: "🚑 AMBULATÓRIO / BOMBEIROS", area: "Vila Animália", desc: "Atendimento médico de urgência e bombeiros.", icone: "icons/ambulatorio.png", categoria: "outro", top: 26, left: 53 },
        { id: "recepcao", nome: "RECEPÇÃO / SAV", area: "Entrada Principal", desc: "Atendimento ao visitante, achados e perdidos, entrada e saída.", icone: "icons/recepçao.png", categoria: "outro", top: 27, left: 48 },
        { id: "estacionamento-1", nome: "🚗 ESTACIONAMENTO PRINCIPAL", area: "Estacionamento", desc: "Vagas comuns, acessíveis e para carros eletrificados.", icone: "icons/estacionamento.png", categoria: "outro", top: 40, left: 28 },
        { id: "estacionamento-2", nome: "🚗 ESTACIONAMENTO 2", area: "Estacionamento com Transfer", desc: "Vagas comuns e acessíveis.", icone: "icons/estacionamento.png", categoria: "outro", top: 76, left: 46 },
        { id: "souvenirs", nome: "🧸 LOJAS DE SOUVENIRS", area: "Vila Animália e Fazendinha", desc: "Vila Adventure, Baby Zoo e Estação Souvenier.", icone: "icons/vila.png", categoria: "outro", top: 20, left: 53 }
    ]
};

let map = null;
let groundOverlay = null;
let marcadoresAtivos = [];

// ==========================================
// INICIALIZAÇÃO DO GOOGLE MAPS + OVERLAY
// ==========================================
function initMap() {
    const centroParque = { lat: -23.617500, lng: -46.967200 };

    map = new google.maps.Map(document.getElementById("mapaGoogle"), {
        center: centroParque,
        zoom: 16,
        mapTypeId: 'hybrid',
        disableDefaultUI: true,
        zoomControl: false,
        streetViewControl: false,
        mapTypeControl: false
    });

    const imageBounds = {
        north: dadosPark.bounds.north,
        south: dadosPark.bounds.south,
        west: dadosPark.bounds.west,
        east: dadosPark.bounds.east
    };

    // OPACIDADE EM 0.6: Deixa a imagem semi-transparente para você ajustar o encaixe
    // Quando estiver perfeito, você pode mudar para 0.95 ou 1.
    groundOverlay = new google.maps.GroundOverlay(
        dadosPark.imagem,
        imageBounds,
        { opacity: 0.6 } 
    );
    groundOverlay.setMap(map);

    carregarPontosNoMapa();
    atualizarLegenda(dadosPark.legenda);

// ==========================================
// GERENCIAMENTO DE PONTOS E FILTROS
// ==========================================
function carregarPontosNoMapa(categoriaFiltro = 'todos') {
    // Limpa marcadores anteriores do Google Maps
    marcadoresAtivos.forEach(m => m.setMap(null));
    marcadoresAtivos = [];

    dadosPark.pontos.forEach(ponto => {
        // Se houver filtro ativo e não bater com a categoria, pula
        if (categoriaFiltro !== 'todos' && ponto.categoria !== categoriaFiltro) {
            return;
        }

        // Converte as porcentagens (top/left) da imagem para Coordenadas Geográficas (Lat/Lng) reais dentro dos bounds
        const lat = dadosPark.bounds.north + (ponto.top / 100) * (dadosPark.bounds.south - dadosPark.bounds.north);
        const lng = dadosPark.bounds.west + (ponto.left / 100) * (dadosPark.bounds.east - dadosPark.bounds.west);

        // Cria elemento HTML personalizado para o marcador
        const markerDiv = document.createElement("div");
        markerDiv.className = "ponto-personalizado";
        
        if (ponto.icone && (ponto.icone.includes(".png") || ponto.icone.includes(".jpg"))) {
            markerDiv.innerHTML = `<img src="${ponto.icone}" alt="${ponto.nome}">`;
        } else {
            markerDiv.innerHTML = `<span>📍</span>`;
        }

        // Usamos OverlayView customizado ou marcadores customizados do Google Maps
        const marker = new google.maps.Marker({
            position: { lat, lng },
            map: map,
            title: ponto.nome,
            icon: {
                url: ponto.icone,
                scaledSize: new google.maps.Size(36, 36)
            }
        });

        marker.addListener("click", () => {
            abrirLocal(ponto);
            map.panTo(marker.getPosition());
        });

        marcadoresAtivos.push(marker);
    });
}

function filtrarCategoria(categoria, botao) {
    // Atualiza botão ativo na barra de filtros
    document.querySelectorAll('.filtros button').forEach(btn => btn.classList.remove('active'));
    if (botao) botao.classList.add('active');

    carregarPontosNoMapa(categoria);
}

// ==========================================
// LEGENDA E MODAL
// ==========================================
function atualizarLegenda(itensLegenda) {
    const lista = document.getElementById("legendaLista");
    if (!lista) return;

    lista.innerHTML = "";
    itensLegenda.forEach(item => {
        const li = document.createElement("li");
        li.innerHTML = `<img src="${item.img}" alt="${item.texto}"> <span>${item.texto}</span>`;
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

// ==========================================
// CONTROLES DE ZOOM E GPS
// ==========================================
function zoomIn() {
    map.setZoom(map.getZoom() + 1);
}

function zoomOut() {
    map.setZoom(map.getZoom() - 1);
}

function resetZoom() {
    map.setCenter({ lat: -23.6025, lng: -46.9050 });
    map.setZoom(16);
}

function centralizarNoUsuario() {
    if (!navigator.geolocation) {
        alert("Geolocalização não suportada pelo seu navegador.");
        return;
    }

    navigator.geolocation.getCurrentPosition(
        (position) => {
            const pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };
            map.setCenter(pos);
            map.setZoom(18);
        },
        () => {
            alert("Não foi possível obter sua localização atual.");
        },
        { enableHighAccuracy: true }
    );
}

// Inicializa o Google Maps assim que a página carregar
window.onload = initMap;
