// DADOS DOS MAPAS, SEUS PONTOS E CATEGORIAS DE LEGENDA
const dadosPark = {
    reserva: {
        imagem: "mapa.zoo.png",
        categoriasLegenda: [
            { id: 'Todos', texto: 'Ver Todos', img: 'icons/vila.png' },
            { id: 'Alimentacao', texto: 'Alimentação', img: 'icons/food-park.png' },
            { id: 'Banheiros', texto: 'Banheiros', img: 'icons/wc.png' },
            { id: 'Zoo', texto: 'Zoo', img: 'icons/Aviario.png' },
            { id: 'Outros', texto: 'Outros / Serviços', img: 'icons/recepçao.png' }
        ],
        pontos: [
            { id: "AMBULATÓRIO", nome: "🚑 AMBULATÓRIO", area: "Ambulatório / Bombeiros Animália", desc: "Localizado na Vila Animália.", icone: "icons/ambulatorio.png", categoria: "outros", top: 26, left: 53 },
            { id: "quiosque-leao", nome: "QUIOSQUE LEÃO", area: "🍿 Café, Salgados e pipocas", desc: "Logo após o recinto do Leão.", icone: "icons/quiosque.png", categoria: "alimentacao", top: 49, left: 41 },
            { id: "quiosque-sucuarana", nome: "QUIOSQUE SUÇUARANA", area: "🍿 Salgados e pipocas", desc: "Em frente ao recinto Suçuarana.", icone: "icons/quiosque.png", categoria: "alimentacao", top: 64, left: 43 },
            { id: "quiosque-tamandua", nome: "QUIOSQUE TAMANDUÁ", area: "🍿 Café, Salgados e pipocas", desc: "Localizado em frente ao recinto tamanduá.", icone: "icons/quiosque.png", categoria: "alimentacao", top: 60, left: 56 },
            { id: "quiosque-lobo-marinho", nome: "QUIOSQUE LOBO MARINHO", area: "🍿 Café, Salgados e pipocas", desc: "Localizado na Reserva.", icone: "icons/quiosque.png", categoria: "alimentacao", top: 80, left: 80 },
            { id: "quiosque-canguru", nome: "QUIOSQUE CANGURU", area: "🍿 Café, Salgados e pipocas.", desc: "Localizado na Reserva.", icone: "icons/quiosque.png", categoria: "alimentacao", top: 40, left: 74.5 },
            { id: "VILA ANIMALIA", nome: "VILA ANIMÁLIA", area: "Ambiente aconchegante para uma refeições e garantir uma lembrança", desc: "🚻Banheiro (Comum e Acessivel)<br>🧸Vila Adventure (Souvenier)<br>🧸Baby Zoo (Souvenier)<br>🥩Restaurante Savana (Carnes nobres)<br>🥤Shake do Bin (Sorvetes e Shakes)<br>☕Vila Cafeteria (Cafés e salgados)<br>🍔Hamburgueria da Vila (Burgues e bebidas)<br>🍕Selva de Sabores (Pizzas e Crespes)<br>🍝Vila Tratoria (Massas e Carnes)<br>🌭Hot Dog do Kiran (Hot Dog's)<br>🍨Cantinho da Girafa (Sorvetes e massas)<br>🚑Ambulatório (Saude e Bombeiros)<br>🚠Vila Estação. (Teleférico)<br>", icone: "icons/vila.png", categoria: "alimentacao", top: 20, left: 53 },
            { id: "RECEPÇÃO", nome: "RECEPÇÃO", area: "Onde tudo começa e aonde damos um até breve!", desc: "🔁Entrada/Saida<br>🚻Banheiro (Comum e Acessivel)<br>🧑‍‍💻SAV (Serviço de Atendimento ao Visitante)<br>☕Cafeteria (Cafés e salgados)<br>🧸Animalia Adventure (Souvenier)<br>📸Fotografica (Retirada de Fotos)<br>", icone: "icons/recepçao.png", categoria: "outros", top: 27, left: 48 },
            { id: "FOOD PARK", nome: "FOOD PARK", area: "Natureza e uma boa alimentação", desc: "🚻Banheiro (Comum e Acessivel)<br>🍖Espetaria/Linguiçaria<br>🍗Chicken & Fries<br>🥟Pastelaria<br>🍜Yakissoba<br>", icone: "icons/food-park.png", categoria: "alimentacao", top: 60.5, left: 70.5 },
            { id: "AVIÁRIO", nome: "AVIÁRIO", area: "Um dos Maiores Aviarios da America Latina", desc: "🚻Banheiro (Comum e Acessivel)<br>☕Cafá Caverna (Cafés e salgados)<br>🪿Aviário (Passaros e Natureza)<br>", icone: "icons/Aviario.png", categoria: "animais", top: 60, left: 33 },
            { id: "RESTAURANTE CENTRAL", nome: "RESTAURANTE CENTRAL", area: "Buffet a Vontade", desc: "🚻Banheiro (Comum e Acessivel)<br> 🍽️Restaurante Baboá (Buffet por Pessoa)<br> 🦋Jardim das Borboletas (Area de Descanso)<br>", icone: "icons/rest.central.png", categoria: "alimentacao", top: 45.5, left: 55.5 },
            { id: "DIVERSÃO INDOOR A&B", nome: "🍟🍔 ANIMALIA ALIMENTAÇÃO", area: "Diversão e refeição, tudo em um só lugar!", desc: "🚻Banheiro (Comum e Acessivel)<br>🍔 Cesta Pic Nic (Burgues e bebidas).<br>☕Carrossel (Porções e Cafés).<br>🥮Mundo Doce (Doces e Bebidas).<br>🍿Carrinho de Doce e Pipoca.(Vai um docinho ai?)", icone: "icons/div-ab.png", categoria: "alimentacao", top: 17, left: 35 },
            { id: "DIVERSÃO INDOOR DIV", nome: "🎡 ANIMALIA DIVERSÃO", area: "Atrações Magicas e divertidas!", desc: "🚻Banheiro (Comum e Acessivel)<br> 🐸Vitoria Regia<br>🛩️Eagle Flight (Aviãozinho)<br>🎈Balão Mexicano<br>👒Forte Apache (Trenzinho)<br>🦘Kanguroo Joy<br>🦒Giraffe Cool<br>🎠Bella Giostra (Carrosel)<br>🩻Joe Caveira<br>🧗Kite Dragon<br>🍭Mundo Doce<br>⛵Rise of Rome<br>🥶Bear Mountain<br>🏎️Big Chock (bate-bate)<br>🧩Cantinho do Silencio (Para Pessoas neurodivergentes)<br>🧸Diversão Adventure (Souvenier)<br>", icone: "icons/div.png", categoria: "outros", top: 21, left: 38 },
            { id: "DIVERSAO AVENTURA", nome: "🎢 ANIMALIA AVENTURA", area: "Atrações Radicaaaaais!", desc: "🚻Banheiro (Comum e Acessivel)<br> ⛵Barco Viking (Aqui tem que gritar)<br>💧Splash (Aguaaaa)<br>🥶Cyber Hawk (De ponta cabeça)<br>🎢Cyclone (Intensidade e aventura)<br>🐀Big Air Coaster (Essa é leve)<br>🔫Aqua Combat (Combate aquatico)<br>", icone: "icons/div.png", categoria: "outros", top: 10, left: 40 },
            { id: "FAZENDINHA", nome: "FAZENDINHA", area: "Ambiente aconchegante para uma refeições e garantir uma lembrança", desc: "🚻Banheiro (Comum e Acessivel)<br>🍿Quiósque Fazendinha (Doces e Bebidas)<br>🧸Estação Souvenier (Ursinhos e lembrancinhas)<br>🍔Hamburgueria Teleférico (Burgues e bebidas)<br>🚠Estação Teleférico (Vai e Vola ou só vai)<br>", icone: "icons/fazenda.png", categoria: "animais", top: 82, left: 65 },
            { id: "ESTACIONAMENTO1", nome: "ESTACIONAMENTO", area: "Vaga garantida e seu carro assegurado!", desc: "🚗Vagas Comuns<br>♿Vagas Acessiveis<br>🪫Vagas para Carros Eletrificados<br>", icone: "icons/estacionamento.png", categoria: "outros", top: 40, left: 28 },
            { id: "ESTACIONAMENTO2", nome: "ESTACIONAMENTO", area: "Estacionamento seguro e com Transfer", desc: "🚗Vagas Comuns<br>♿Vagas Acessiveis<br>", icone: "icons/estacionamento.png", categoria: "outros", top: 76, left: 46 }
        ]
    }
};

let scale = 1;
let pointX = 0;
let pointY = 0;
let startX = 0;
let startY = 0;
let isDragging = false;
let startDistance = 0;
let watchId = null;

function atualizarTransformacao() {
    const mapa = document.getElementById("mapa");
    if (!mapa) return;
    
    mapa.style.setProperty("--map-scale", scale);
    mapa.style.transform = `translate(${pointX}px, ${pointY}px) scale(${scale})`;
}

function renderizarPontos(categoriaFiltro = 'todos') {
    const camada = document.getElementById("camadaPontos");
    if (!camada) return;
    
    camada.innerHTML = "";
    
    const pontos = dadosPark.reserva.pontos;
    pontos.forEach(ponto => {
        if (categoriaFiltro === 'todos' || ponto.categoria === categoriaFiltro) {
            const el = document.createElement("div");
            el.className = "ponto";
            el.style.top = ponto.top + "%";
            el.style.left = ponto.left + "%";

            if (ponto.icone.includes("/") || ponto.icone.endsWith(".png") || ponto.icone.endsWith(".jpg")) {
                el.innerHTML = `<img src="${ponto.icone}" alt="${ponto.nome}" class="icone-marcador">`;
            } else {
                el.innerHTML = `<span>${ponto.icone}</span>`;
            }

            el.onclick = (e) => {
                e.stopPropagation();
                abrirLocal(ponto);
            };
            camada.appendChild(el);
        }
    });
}

function atualizarLegenda() {
    const lista = document.getElementById("legendaLista");
    if (!lista) return;

    lista.innerHTML = "";
    const categorias = dadosPark.reserva.categoriasLegenda;

    categorias.forEach(cat => {
        const li = document.createElement("li");
        li.style.cursor = "pointer";
        li.style.padding = "6px 8px";
        li.style.borderRadius = "6px";
        li.style.transition = "background 0.2s";
        
        li.innerHTML = `<img src="${cat.img}" alt="${cat.texto}"> <span><b>${cat.texto}</b></span>`;
        
        li.onmouseover = () => li.style.background = "#f3e5f5";
        li.onmouseout = () => li.style.background = "transparent";

        li.onclick = () => {
            renderizarPontos(cat.id);
        };

        lista.appendChild(li);
    });
}

function resetZoom() {
    const container = document.getElementById("mapaContainer");
    const imgMapa = document.getElementById("imagemMapa");
    const mapaWrapper = document.getElementById("mapa");

    if (!container || !imgMapa || imgMapa.naturalWidth === 0) return;

    const realWidth = imgMapa.naturalWidth;
    const realHeight = imgMapa.naturalHeight;

    mapaWrapper.style.width = realWidth + "px";
    mapaWrapper.style.height = realHeight + "px";

    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;

    const scaleX = containerWidth / realWidth;
    const scaleY = containerHeight / realHeight;
    scale = Math.min(scaleX, scaleY);

    pointX = (containerWidth - realWidth * scale) / 2;
    pointY = (containerHeight - realHeight * scale) / 2;

    atualizarTransformacao();
}

function inicializarMapa() {
    const imgMapa = document.getElementById("imagemMapa");
    const mapaInfo = dadosPark.reserva;

    imgMapa.onload = () => {
        resetZoom();
        renderizarPontos('todos');
    };

    imgMapa.src = mapaInfo.imagem;

    if (imgMapa.complete && imgMapa.naturalWidth !== 0) {
        imgMapa.onload();
    }

    atualizarLegenda();
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

function zoomIn() {
    scale = Math.min(scale + 0.25, 3.0);
    atualizarTransformacao();
}

function zoomOut() {
    scale = Math.max(scale - 0.25, 0.2);
    atualizarTransformacao();
}

// ==========================================
// GEOLOCALIZAÇÃO
// ==========================================

function iniciarGeolocalizacao() {
    if (!("geolocation" in navigator)) return;

    const options = { enableHighAccuracy: true, timeout: 15000, maximumAge: 0 };

    watchId = navigator.geolocation.watchPosition(
        (position) => {
            const lat = position.coords.latitude;
            const lng = position.coords.longitude;
            // Mantido estruturado para compatibilidade
        },
        (error) => { console.warn(`Erro de geolocalização: ${error.message}`); },
        options
    );
}

function centralizarNoUsuario() {
    const userMarker = document.getElementById("userLocation");
    if (!userMarker || userMarker.style.display === "none") {
        alert("Aguardando sinal de GPS ou permissão de localização...");
        return;
    }
}

// ==========================================
// GESTOS
// ==========================================

function inicializarGestos() {
    const container = document.getElementById("mapaContainer");
    if (!container) return;

    container.addEventListener("mousedown", (e) => {
        isDragging = true;
        startX = e.clientX - pointX;
        startY = e.clientY - pointY;
    });

    window.addEventListener("mousemove", (e) => {
        if (!isDragging) return;
        pointX = e.clientX - startX;
        pointY = e.clientY - startY;
        atualizarTransformacao();
    });

    window.addEventListener("mouseup", () => { isDragging = false; });

    container.addEventListener("touchstart", (e) => {
        if (e.touches.length === 1) {
            isDragging = true;
            startX = e.touches[0].clientX - pointX;
            startY = e.touches[0].clientY - pointY;
        } else if (e.touches.length === 2) {
            isDragging = false;
            startDistance = Math.hypot(
                e.touches[0].clientX - e.touches[1].clientX,
                e.touches[0].clientY - e.touches[1].clientY
            );
        }
    });

    container.addEventListener("touchmove", (e) => {
        if (isDragging && e.touches.length === 1) {
            pointX = e.touches[0].clientX - startX;
            pointY = e.touches[0].clientY - startY;
            atualizarTransformacao();
        } else if (e.touches.length === 2) {
            const currentDist = Math.hypot(
                e.touches[0].clientX - e.touches[1].clientX,
                e.touches[0].clientY - e.touches[1].clientY
            );
            const factor = currentDist / startDistance;
            scale = Math.min(Math.max(scale * factor, 0.2), 3.0);
            startDistance = currentDist;
            atualizarTransformacao();
        }
    }, { passive: true });

    container.addEventListener("touchend", () => { isDragging = false; });
    window.addEventListener("resize", resetZoom);
}

document.addEventListener("DOMContentLoaded", () => {
    inicializarMapa();
    inicializarGestos();
    iniciarGeolocalizacao();
});
