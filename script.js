// ==========================================
// DADOS DO PARQUE
// ==========================================
const dadosPark = {
    reserva: {
        imagem: "mapa.zoo.png",
        categoriasLegenda: [
            { id: 'alimentacao', texto: 'ALIMENTAÇÃO' },
            { id: 'banheiros', texto: 'BANHEIROS' },
            { id: 'animais', texto: 'ZOOLOGICO' },
            { id: 'outros', texto: 'OUTROS / SERVIÇOS' }
        ],
        pontos: [
            // Outros / Serviços
            { id: "AMBULATÓRIO", nome: "AMBULATÓRIO", area: "Ambulatório Animália Park", desc: "Localizado na Vila Animália.", icone: "icons/ambulatorio.png", categoria: "outros", top: 26, left: 53 },
            { id: "ESTACIONAMENTO2", nome: "ESTACIONAMENTO", area: "Estacionamento seguro e com Transfer", desc: "🚗 Vagas Comuns<br>♿ Vagas Acessíveis<br>", icone: "icons/estacionamento.png", categoria: "outros", top: 76, left: 46 },
            { id: "ESTACIONAMENTO1", nome: "ESTACIONAMENTO", area: "Vaga garantida e seu carro assegurado!", desc: "🚗 Vagas Comuns<br>♿ Vagas Acessíveis<br>🪫 Vagas para Carros Eletrificados<br>", icone: "icons/estacionamento.png", categoria: "outros", top: 40, left: 28 },
            { id: "RECEPÇÃO", nome: "RECEPÇÃO", area: "Onde tudo começa e aonde damos um até breve!", desc: "🔁 Entrada/Saída<br>🚻 Banheiro (Comum e Acessível)<br>💻 SAV (Serviço de Atendimento ao Visitante)<br>☕ Cafeteria (Cafés e salgados)<br>🧸 Animalia Adventure (Souvenir)<br>📸 Fotográfica (Retirada de Fotos)<br>", icone: "icons/recepçao.png", categoria: "outros", top: 27, left: 48 },
            { id: "DIVERSÃO INDOOR DIV", nome: "🎡 ANIMALIA DIVERSÃO", area: "Atrações Mágicas e divertidas!", desc: "🚻 Banheiro (Comum e Acessível)<br>🐸 Vitória Regia<br>🛩️ Eagle Flight (Aviãozinho)<br>🎈 Balão Mexicano<br>👒 Forte Apache (Trenzinho)<br>🦘 Kanguroo Joy<br>🦒 Giraffe Cool<br>🎠 Bella Giostra (Carrossel)<br>🩻 Joe Caveira<br>🧗 Kite Dragon<br>🍭 Mundo Doce<br>⛵ Rise of Rome<br>🥶 Bear Mountain<br>🏎️ Big Chock (bate-bate)<br>🧩 Cantinho do Silêncio (Para pessoas neurodivergentes)<br>🧸 Diversão Adventure (Souvenir)<br>", icone: "icons/div.png", categoria: "outros", top: 21, left: 38 },
            { id: "DIVERSAO AVENTURA", nome: "🎢 ANIMALIA AVENTURA", area: "Atrações Radicaaaaais!", desc: "🚻 Banheiro (Comum e Acessível)<br>⛵ Barco Viking (Aqui tem que gritar)<br>💧 Splash (Águaaaa)<br>🥶 Cyber Hawk (De ponta cabeça)<br>🎢 Cyclone (Intensidade e aventura)<br>🐀 Big Air Coaster (Essa é leve)<br>🔫 Aqua Combat (Combate aquático)<br>", icone: "icons/div.png", categoria: "outros", top: 10, left: 40 },

            // Banheiros
            { id: "WC FOOD PARK", nome: "WC FOOD PARK", area: "Localizado no Food Park", desc: "🚻 Banheiro (Comum e Acessível)", icone: "icons/banheiro.png", categoria: "banheiros", top: 60.5, left: 70.5 },
            { id: "VILA ANIMALIA", nome: "WC VILA ANIMÁLIA", area: "Localizado na Saída do Zoológico", desc: "🚻 Banheiro (Comum e Acessível)", icone: "icons/banheiro.png", categoria: "banheiros", top: 20, left: 53 },
            { id: "WC RESTAURANTE CENTRAL", nome: "WC RESTAURANTE CENTRAL", area: "Localizado na parte externa do Buffet", desc: "🚻 Banheiro (Comum e Acessível)", icone: "icons/banheiro.png", categoria: "banheiros", top: 45.5, left: 55.5 },
            { id: "WC FAZENDINHA", nome: "WC FAZENDINHA", area: "Localizado perto do desembarque Estação 2.", desc: "🚻 Banheiro (Comum e Acessível)", icone: "icons/banheiro.png", categoria: "banheiros", top: 82, left: 65 },
            { id: "WC RECEPÇÃO", nome: "WC RECEPÇÃO", area: "Localizado na Recepção", desc: "🔁 Entrada/Saída<br>🚻 Banheiro (Comum e Acessível)", icone: "icons/banheiro.png", categoria: "banheiros", top: 27, left: 48 },
            { id: "WC AVIÁRIO", nome: "WC AVIÁRIO", area: "Localizado dentro do Aviário", desc: "🚻 Banheiro (Comum e Acessível)", icone: "icons/banheiro.png", categoria: "banheiros", top: 60, left: 33 },
            { id: "WC DIV INDOOR", nome: "WC DIV INDOOR", area: "Localizado dentro do Animália Diversão", desc: "🚻 Banheiro (Comum e Acessível)", icone: "icons/banheiro.png", categoria: "banheiros", top: 17, left: 35 },

            // Alimentação
            { id: "quiosque-leao", nome: "QUIOSQUE LEÃO", area: "🍿 Café, Salgados e pipocas", desc: "Logo após o recinto do Leão.", icone: "icons/quiosque.png", categoria: "alimentacao", top: 49, left: 41 },
            { id: "quiosque-sucuarana", nome: "QUIOSQUE SUÇUARANA", area: "🍿 Salgados e pipocas", desc: "Em frente ao recinto Suçuarana.", icone: "icons/quiosque.png", categoria: "alimentacao", top: 64, left: 43 },
            { id: "quiosque-tamandua", nome: "QUIOSQUE TAMANDUÁ", area: "🍿 Café, Salgados e pipocas", desc: "Localizado em frente ao recinto tamanduá.", icone: "icons/quiosque.png", categoria: "alimentacao", top: 60, left: 56 },
            { id: "quiosque-lobo-marinho", nome: "QUIOSQUE LOBO MARINHO", area: "🍿 Café, Salgados e pipocas", desc: "Localizado na Reserva.", icone: "icons/quiosque.png", categoria: "alimentacao", top: 80, left: 80 },
            { id: "quiosque-canguru", nome: "QUIOSQUE CANGURU", area: "🍿 Café, Salgados e pipocas", desc: "Localizado na Reserva.", icone: "icons/quiosque.png", categoria: "alimentacao", top: 40, left: 74.5 },
            { id: "FOOD PARK", nome: "FOOD PARK", area: "Natureza e uma boa alimentação", desc: "🚻 Banheiro (Comum e Acessível)<br>🍖 Espetaria/Linguiçaria<br>🍗 Chicken & Fries<br>🥟 Pastelaria<br>🍜 Yakissoba<br>", icone: "icons/food-park.png", categoria: "alimentacao", top: 60.5, left: 70.5 },
            { id: "RESTAURANTE CENTRAL", nome: "RESTAURANTE CENTRAL", area: "Buffet a Vontade", desc: "🚻 Banheiro (Comum e Acessível)<br>🍽️ Restaurante Baboá (Buffet por Pessoa)<br>🦋 Jardim das Borboletas (Área de Descanso)<br>", icone: "icons/rest.central.png", categoria: "alimentacao", top: 45.5, left: 55.5 },
            { id: "DIVERSÃO INDOOR A&B", nome: "🍟🍔 ANIMALIA ALIMENTAÇÃO", area: "Diversão e refeição, tudo em um só lugar!", desc: "🚻 Banheiro (Comum e Acessível)<br>🍔 Cesta Pic Nic (Burgers e bebidas)<br>☕ Carrossel (Porções e Cafés)<br>🥮 Mundo Doce (Doces e Bebidas)<br>🍿 Carrinho de Doce e Pipoca", icone: "icons/div-ab.png", categoria: "alimentacao", top: 17, left: 35 },
            { id: "RECEPÇÃO", nome: "RECEPÇÃO", area: "Onde tudo começa e aonde damos um até breve!", desc: "🔁Entrada/Saida<br>🚻Banheiro (Comum e Acessivel)<br>🧑‍💻SAV (Serviço de Atendimento ao Visitante)<br>☕Cafeteria (Cafés e salgados)<br>🧸Animalia Adventure (Souvenier)<br>📸Fotografica (Retirada de Fotos)<br>", icone: "icons/recepçao.png", top: 27, left: 48 },

            // Zoológico / Animais
            { id: "FAZENDINHA", nome: "FAZENDINHA", area: "Ambiente aconchegante para refeições e lembranças", desc: "🚻 Banheiro (Comum e Acessível)<br>🍿 Quiósque Fazendinha (Doces e Bebidas)<br>🧸 Estação Souvenir (Ursinhos e lembrancinhas)<br>🍔 Hamburgueria Teleférico (Burgers e bebidas)<br>🚠 Estação Teleférico (Vai e Volta ou só vai)<br>", icone: "icons/fazenda.png", categoria: "animais", top: 82, left: 65 },
            { id: "AVIÁRIO", nome: "AVIÁRIO", area: "Um dos Maiores Aviários da América Latina", desc: "🚻 Banheiro (Comum e Acessível)<br>☕ Café Caverna (Cafés e salgados)<br>🪿 Aviário (Pássaros e Natureza)<br>", icone: "icons/Aviario.png", categoria: "animais", top: 60, left: 33 }
        ]
    }
};

let scale = 1, pointX = 0, pointY = 0, startX = 0, startY = 0, isDragging = false;

// ==========================================
// FUNÇÕES DE MAPA E INTERFACE
// ==========================================

function atualizarTransformacao() {
    const mapa = document.getElementById("mapa");
    if (!mapa) return;
    mapa.style.transform = `translate(${pointX}px, ${pointY}px) scale(${scale})`;
}

function renderizarPontos(categoriaFiltro = 'alimentacao') {
    const camada = document.getElementById("camadaPontos");
    if (!camada) return;
    camada.innerHTML = "";
    
    dadosPark.reserva.pontos.forEach(ponto => {
        if (categoriaFiltro === 'todos' || ponto.categoria === categoriaFiltro) {
            const el = document.createElement("div");
            el.className = "ponto";
            el.style.top = ponto.top + "%";
            el.style.left = ponto.left + "%";
            el.innerHTML = `<img src="${ponto.icone}" alt="${ponto.nome}" class="icone-marcador">`;
            el.onclick = (e) => { e.stopPropagation(); abrirLocal(ponto); };
            camada.appendChild(el);
        }
    });
}

function atualizarLegendaHorizontal() {
    const lista = document.getElementById("legendaListaHorizontal");
    if (!lista) return;
    lista.innerHTML = "";

    dadosPark.reserva.categoriasLegenda.forEach((cat, index) => {
        const li = document.createElement("li");
        li.className = "filtro-item" + (index === 0 ? " active" : "");
        li.innerText = cat.texto;

        li.onclick = () => {
            document.querySelectorAll('.filtro-item').forEach(el => el.classList.remove('active'));
            li.classList.add('active');
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
    scale = Math.min(containerWidth / realWidth, containerHeight / realHeight);

    pointX = (containerWidth - realWidth * scale) / 2;
    pointY = (containerHeight - realHeight * scale) / 2;
    atualizarTransformacao();
}

function inicializarMapa() {
    const imgMapa = document.getElementById("imagemMapa");
    imgMapa.onload = () => { 
        resetZoom(); 
        renderizarPontos(dadosPark.reserva.categoriasLegenda[0].id); 
    };
    imgMapa.src = dadosPark.reserva.imagem;
    if (imgMapa.complete && imgMapa.naturalWidth !== 0) { imgMapa.onload(); }
    atualizarLegendaHorizontal();
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
    if (e.target.id === "janelaLocal") fecharLocal(); 
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
// EVENTOS DE GESTO E ARRASTO
// ==========================================

document.addEventListener("DOMContentLoaded", () => {
    inicializarMapa();
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

    window.addEventListener("mouseup", () => { 
        isDragging = false; 
    });

    window.addEventListener("resize", resetZoom);
});
