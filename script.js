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
            { id: 'servicos', texto: 'SERVIÇOS' },
            { id: 'souvenier', texto: 'SOUVENIER' },
            { id: 'atracao', texto: 'ATRAÇÕES' },
            { id: 'outros', texto: 'SERVIÇOS' }
        ],
        pontos: [
                      // Alimentação
            { id: "LEAO", nome: "QUIOSQUE LEÃO", area: "🍿 Café, Salgados e pipocas", desc: "Logo após o recinto do Leão.", icone: "icons/quiosque.png", categoria: "alimentacao", top: 49, left: 41 },
            { id: "SUÇUARANA", nome: "QUIOSQUE SUÇUARANA", area: "🍿 Salgados e pipocas", desc: "Em frente ao recinto Suçuarana.", icone: "icons/quiosque.png", categoria: "alimentacao", top: 64, left: 43 },
            { id: "TAMANDUA", nome: "QUIOSQUE TAMANDUÁ", area: "🍿 Café, Salgados e pipocas", desc: "Localizado em frente ao recinto tamanduá.", icone: "icons/quiosque.png", categoria: "alimentacao", top: 60, left: 50 },
            { id: "FAZENDINHA", nome: "QUIÓSQUE FAZENDINHA", area: "Doces e Pipocas", desc: "🍿 Quiósque Fazendinha (Doces e Bebidas)", icone: "icons/fazenda.png", categoria: "alimentacao", top: 82, left: 65 },  
            { id: "HAMB EST2", nome: "HAMBURGUERIA EST.2", area: "Ambiente aconchegante para refeições e lembranças", desc: "🍔 Hamburgueria Teleférico (Burgers e bebidas)<br>", icone: "icons/fazenda.png", categoria: "alimentacao",top: 82, left: 65 },
            { id: "LOBO MARINHO", nome: "QUIOSQUE LOBO MARINHO", area: "🍿 Café, Salgados e pipocas", desc: "Localizado na Reserva.", icone: "icons/quiosque.png", categoria: "alimentacao", top: 80, left: 80 },
            { id: "FOOD PARK", nome: "FOOD PARK", area: "Natureza e uma boa alimentação", desc: "🍖 Espetaria/Linguiçaria<br>🍗 Chicken & Fries<br>🥟 Pastelaria<br>🍜 Yakissoba<br>", icone: "icons/food-park.png", categoria: "alimentacao", top: 60.5, left: 70.5 },
            { id: "RESTAURANTE CENTRAL", nome: "RESTAURANTE CENTRAL", area: "Buffet a Vontade", desc: "🍽️ Restaurante Baboá (Buffet por Pessoa)<br>🦋 Jardim das Borboletas (Área de Descanso)<br>", icone: "icons/rest.central.png", categoria: "alimentacao", top: 45.5, left: 55.5 },
            { id: "CANGURU", nome: "QUIOSQUE CANGURU", area: "🍿 Café, Salgados e pipocas", desc: "Localizado na Reserva.", icone: "icons/quiosque.png", categoria: "alimentacao", top: 40, left: 74.5 },
            { id: "VILA ANIMALIA", nome: "VILA ANIMÁLIA", area: "Ambiente aconchegante para uma refeições e garantir uma lembrança", desc: "🥩Restaurante Savana (Carnes nobres)<br>🥤Shake do Bin (Sorvetes e Shakes)<br>☕Vila Cafeteria (Cafés e salgados)<br>🍔Hamburgueria da Vila (Burgues e bebidas)<br>🍕Selva de Sabores (Pizzas e Crespes)<br>🍝Vila Tratoria (Massas e Carnes)<br>🌭Hot Dog do Kiran (Hot Dog's)<br>🍨Cantinho da Girafa (Sorvetes e massas)<br>", icone: "icons/vila.png", categoria: "alimentacao", top: 20, left: 53 },
            { id: "RECEPÇÃO", nome: "RECEPÇÃO", area: "Onde tudo começa e aonde damos um até breve!", desc: "☕Cafeteria (Cafés e salgados)", icone: "icons/quiosque.png", top: 27, left: 48 },
            { id: "DIVERSÃO INDOOR A&B", nome: "DIVERSAO INDOOR", area: "Diversão e refeição, tudo em um só lugar!", desc: "🍔 Cesta Pic Nic (Burgers e bebidas)<br>☕ Carrossel (Porções e Cafés)<br>🥮 Mundo Doce (Doces e Bebidas)<br>🍿 Carrinho de Doce e Pipoca", icone: "icons/div-ab.png", categoria: "alimentacao", top: 17, left: 35 },
            { id: "SPLASH", nome: "QUIÓSQUE SPLASH", area: "🍿 Café, Salgados e pipocas", desc: "Localizado próximo ao vulcão.", icone: "icons/quiosque.png", categoria: "alimentacao", top: 8, left: 41 },
            { id: "VIKING", nome: "QUIÓSQUE VIKING", area: "🍿 Café, Salgados e pipocas", desc: "Localizado na entrada do Outdoor.", icone: "icons/quiosque.png", categoria: "alimentacao", top: 17, left: 41 },

                      // Banheiros
            { id: "WC RECEPÇÃO", nome: "WC RECEPÇÃO", area: "Localizado na Recepção", desc: "🚻 Banheiro (Comum e Acessível)", icone: "icons/banheiro.png", categoria: "banheiros", top: 27, left: 48 },
            { id: "WC LEAO", nome: "WC LEÃO", area: "Localizado logo após o recinto do leão", desc: "🚻 Banheiro (Comum e Acessível)", icone: "icons/banheiro.png", categoria: "banheiro", top: 49, left: 41 },
            { id: "WC AVIÁRIO", nome: "WC AVIÁRIO", area: "Localizado dentro do Aviário", desc: "🚻 Banheiro (Comum e Acessível)", icone: "icons/banheiro.png", categoria: "banheiros", top: 60, left: 33 },
            { id: "WC JARDIM BORBOLETA", nome: "WC BORBOLETÁRIO", area: "Localizado na parte externa do Buffet", desc: "🚻 Banheiro (Comum e Acessível)", icone: "icons/banheiro.png", categoria: "banheiros", top: 45.5, left: 55.5 },
            { id: "WC FAZENDINHA", nome: "WC FAZENDINHA", area: "Localizado perto do desembarque Estação 2.", desc: "🚻 Banheiro (Comum e Acessível)", icone: "icons/banheiro.png", categoria: "banheiros", top: 82, left: 65 },
            { id: "WC FOOD PARK", nome: "WC FOOD PARK", area: "Localizado no Food Park", desc: "🚻 Banheiro (Comum e Acessível)", icone: "icons/banheiro.png", categoria: "banheiros", top: 60.5, left: 70.5 },
            { id: "WC RESTAURANTE CENTRAL", nome: "WC RESTAURANTE CENTRAL", area: "Localizado na parte externa do Buffet", desc: "🚻 Banheiro (Comum e Acessível)", icone: "icons/banheiro.png", categoria: "banheiros", top: 45.5, left: 55.5 },
            { id: "VILA ANIMALIA", nome: "WC VILA ANIMÁLIA", area: "Localizado na Saída do Zoológico", desc: "🚻 Banheiro (Comum e Acessível)", icone: "icons/banheiro.png", categoria: "banheiros", top: 20, left: 53 },
            { id: "WC DIV INDOOR", nome: "WC DIV INDOOR", area: "Localizado dentro do Animália Diversão", desc: "🚻 Banheiro (Comum e Acessível)", icone: "icons/banheiro.png", categoria: "banheiros", top: 17, left: 35 },
            { id: "WC DIV OUTDOOR", nome: "WC DIV OUDOOR" , area: "Localizado ao redor do Diversão Aventura", desc: "🚻 Banheiro (Comum e Acessível)", icone: "icons/banheiro.png", categoria: "banheiros", top: 41, left: 15 },

                      // Souvenier
            { id: "RECEPÇÃO", nome: "ANIMALIA ADVENTURE", area: "Onde tudo começa e aonde damos um até breve!", desc: "🧸 Animalia Adventure (Souvenir)<br>📸 Fotográfica (Retirada de Fotos)<br>", icone: "icons/souvenier.png", categoria: "souvenier", top: 27, left: 48 },
            { id: "VILA ANIMALIA", nome: "VILAS E BABY ZOO", area: "Ambiente aconchegante para uma refeições e garantir uma lembrança", desc: "🧸Vila Adventure (Souvenier)<br>🧸Baby Zoo (Souvenier)<br>", icone: "icons/souvenier.png",categoria: "souvenier", top: 20, left: 53 },
            { id: "FAZENDINHA", nome: "ESTAÇÃO SOUVENIER", area: "Ambiente aconchegante para refeições e lembranças", desc: "🧸 Estação Souvenir (Ursinhos e lembrancinhas)", icone: "icons/souvenier.png", categoria: "souvenier", top: 82, left: 65 },
            { id: "FOTO", nome: "FOTO OFICIAL", area: "Xxxxxxxxx!!!", desc: "📸 Fotografia Oficial", icone: "icons/foto.png", categoria: "souvenier", top: 60, left: 33 },
            { id: "FOTO", nome: "FOTO OFICIAL", area: "Leve uma recordação para casa!", desc: "📸 Fotografia Oficial", icone: "icons/foto.png", categoria: "souvenier", top: 27, left: 48 },

                     // Outros / Serviços
            { id: "AMBULATÓRIO", nome: "AMBULATÓRIO", area: "Ambulatório Animália Park", desc: "Localizado na Vila Animália.", icone: "icons/ambulatorio.png", categoria: "outros", top: 26, left: 53 },
            { id: "ESTACIONAMENTO2", nome: "ESTACIONAMENTO", area: "Estacionamento seguro e com Transfer", desc: "🚗 Vagas Comuns<br>♿ Vagas Acessíveis<br>", icone: "icons/estacionamento.png", categoria: "outros", top: 76, left: 46 },
            { id: "ESTACIONAMENTO1", nome: "ESTACIONAMENTO", area: "Vaga garantida e seu carro assegurado!", desc: "🚗 Vagas Comuns<br>♿ Vagas Acessíveis<br>🪫 Vagas para Carros Eletrificados<br>", icone: "icons/estacionamento.png", categoria: "outros", top: 40, left: 28 },
            { id: "RECEPÇÃO", nome: "RECEPÇÃO", area: "Onde tudo começa e aonde damos um até breve!", desc: "🔁 Entrada/Saída", icone: "icons/recepçao.png", categoria: "outros", top: 27, left: 48 },
            { id: "RECEPÇÃO", nome: "SAV", area: "Reclamações, elogios ou retirada de duvidas", desc: "💻 SAV (Serviço de Atendimento ao Visitante)", icone: "icons/recepçao.png", categoria: "outros", top: 27, left: 48 },

                      // Atrações
            { id: "DIVERSÃO INDOOR DIV", nome: "🎡 ANIMALIA DIVERSÃO", area: "Atrações Mágicas e divertidas!", desc: "🐸 Vitória Regia<br>🛩️ Eagle Flight (Aviãozinho)<br>🎈 Balão Mexicano<br>👒 Forte Apache (Trenzinho)<br>🦘 Kanguroo Joy<br>🦒 Giraffe Cool<br>🎠 Bella Giostra (Carrossel)<br>🩻 Joe Caveira<br>🧗 Kite Dragon<br>🍭 Mundo Doce<br>⛵ Rise of Rome<br>🥶 Bear Mountain<br>🏎️ Big Chock (bate-bate)<br>🧩 Cantinho do Silêncio (Para pessoas neurodivergentes)<br>🧸 Diversão Adventure (Souvenir)<br>", icone: "icons/div.png", categoria: "atracao", top: 21, left: 38 },
            { id: "DIVERSAO AVENTURA", nome: "🎢 ANIMALIA AVENTURA", area: "Atrações Radicaaaaais!", desc: "⛵ Barco Viking (Aqui tem que gritar)<br>💧 Splash (Águaaaa)<br>🥶 Cyber Hawk (De ponta cabeça)<br>🎢 Cyclone (Intensidade e aventura)<br>🐀 Big Air Coaster (Essa é leve)<br>🔫 Aqua Combat (Combate aquático)<br>", icone: "icons/div.png", categoria: "atracao", top: 10, left: 40 },
            { id: "EST. 2", nome: "TELEFÉRICO EST.2", area: "Embarca e se divirta com a paisagem", desc: "🚠 Estação Teleférico (Vai e Volta ou só vai)", icone: "icons/fazenda.png", categoria: "atracao", top: 82, left: 65 },
            { id: "EST. 1", nome: "TELEFÉRICO EST. 1A", area: "Embarca e se divirta com a paisagem", desc: "🚠 Estação Teleférico (Vai e Volta ou só vai)", icone: "icons/banheiro.png", categoria: "atracao", top: 20, left: 53 },

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
