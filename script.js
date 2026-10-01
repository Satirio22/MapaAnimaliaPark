// ==========================================
// DADOS DO PARQUE COM BOUNDS REAIS DE COTIA
// ==========================================
const dadosPark = {
    reserva: {
        // Coordenadas geográficas exatas para encaixar o mapa do Animália Park perfeitamente
        bounds: {
            north: -23.6165,  // Topo do parque
            south: -23.6265,  // Fundo/Base do parque
            east: -46.9640,   // Lado direito
            west: -46.9725    // Lado esquerdo
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
            { id: "quiosque-sucuarana", nome: "QUIÓSQUE SUÇUARANA", area: "🍿 Salgados e pipocas", desc: "Em frente ao recinto Suçuarana.", icone: "icons/quiosque.png", lat: -23.6240, lng: -46.9683 },
            { id: "quiosque-tamandua", nome: "QUIÓSQUE TAMANDUÁ", area: "🍿 Café, Salgados e pipocas", desc: "Localizado in frente ao recinto tamanduá.", icone: "icons/quiosque.png", lat: -23.6235, lng: -46.9672 },
            { id: "quiosque-lobo-marinho", nome: "QUIÓSQUE LOBO MARINHO", area: "🍿 Café, Salgados e pipocas", desc: "Localizado na Reserva.", icone: "icons/quiosque.png", lat: -23.6255, lng: -46.9665 },
            { id: "quiosque-canguru", nome: "QUIÓSQUE CANGURU", area: "🍿 Café, Salgados e pipocas.", desc: "Localizado na Reserva.", icone: "icons/quiosque.png", lat: -23.6215, lng: -46.9663 },
            { id: "VILA ANIMALIA", nome: "VILA ANIMÁLIA", area: "Ambiente aconchegante para uma refeições e garantir uma lembrança", desc: "🚻Banheiro (Comum e Acessivel)<br>🧸Vila Adventure (Souvenier)<br>🧸Baby Zoo (Souvenier)<br>🥩Restaurante Savana (Carnes nobres)<br>🥤Shake do Bin (Sorvetes e Shakes)<br>☕Vila Cafeteria (Cafés e salgados)<br>🍔Hamburgueria da Vila (Burgues e bebidas)<br>🍕Selva de Sabores (Pizzas e Crespes)<br>🍝Vila Tratoria (Massas e Carnes)<br>🌭Hot Dog do Kiran (Hot Dog's)<br>🍨Cantinho da Girafa (Sorvetes e massas)<br>🚑Ambulatório (Saude e Bombeiros)<br>🚠Vila Estação. (Teleférico)<br>", icone: "icons/vila.png", lat: -23.6200, lng: -46.9680 },
            { id: "RECEPÇÃO", nome: "RECEPÇÃO", area: "Onde tudo começa e aonde damos um até breve!", desc: "🔁Entrada/Saida<br>🚻Banheiro (Comum e Acessivel)<br>🧑‍💻SAV (Serviço de Atendimento ao Visitante)<br>☕Cafeteria (Cafés e salgados)<br>🧸Animalia Adventure (Souvenier)<br>📸Fotografica (Retirada de Fotos)<br>", icone: "icons/recepçao.png", lat: -23.6205, lng: -46.9685 },
            { id: "FOOD PARK", nome: "FOOD PARK", area: "Natureza e uma boa alimentação", desc: "🚻Banheiro (Comum e Acessivel)<br>🍖Espetaria/Linguiçaria<br>🍗Chicken & Fries<br>🥟Pastelaria<br>🍜Yakissoba<br>", icone: "icons/food-park.png", lat: -23.6235, lng: -46.9665 },
            { id: "AVIÁRIO", nome: "AVIÁRIO", area: "Um dos Maiores Aviarios da America Latina", desc: "🚻Banheiro (Comum e Acessivel)<br>☕Cafá Caverna (Cafés e salgados)<br>🪿Aviário (Passaros e Natureza)<br>", icone: "icons/Aviario.png", lat: -23.6235, lng: -46.9692 },
            { id: "RESTAURANTE CENTRAL", nome: "RESTAURANTE CENTRAL", area: "Buffet a Vontade", desc: "🚻Banheiro (Comum e Acessivel)<br> 🍽️Restaurante Baboá (Buffet por Pessoa)<br> 🦋Jardim das Borboletas (Area de Descanso)<br>", icone: "icons/rest.central.png", lat: -23.6220, lng: -46.9678 },
            { id: "DIVERSÃO INDOOR A&B", nome: "🍟🍔 ANIMALIA ALIMENTAÇÃO", area: "Diversão e refeição, tudo em um só lugar!", desc: "🚻Banheiro (Comum e Acessivel)<br>🍔 Cesta Pic Nic (Burgues e bebidas).<br>☕Carrossel (Porções e Cafés).<br>🥮Mundo Doce (Doces e Bebidas).<br>🍿Carrinho de Doce e Pipoca.(Vai um docinho ai?)", icone: "icons/div-ab.png", lat: -23.6190, lng: -46.9690 },
            { id: "DIVERSÃO INDOOR DIV", nome: "🎡 ANIMALIA DIVERSÃO", area: "Atrações Magicas e divertidas!", desc: "🚻Banheiro (Comum e Acessivel)<br> 🐸Vitoria Regia<br>🛩️Eagle Flight (Aviãozinho)<br>🎈Balão Mexicano<br>👒Forte Apache (Trenzinho)<br>🦘Kanguroo Joy<br>🦒Giraffe Cool<br>🎠Bella Giostra (Carrosel)<br>🩻Joe Caveira<br>🧗Kite Dragon<br>🍭Mundo Doce<br>⛵Rise of Rome<br>🥶Bear Mountain<br>🏎️Big Chock (bate-bate)<br>🧩Cantinho do Silencio (Para Pessoas neurodivergentes)<br>🧸Diversão Adventure (Souvenier)<br>", icone: "icons/div.png", lat: -23.6195, lng: -46.9685 },
            { id: "DIVERSAO AVENTURA", nome: "🎢 ANIMALIA AVENTURA", area: "Atrações Radicaaaaais!", desc: "🚻Banheiro (Comum e Acessivel)<br> ⛵Barco Viking (Aqui tem que gritar)<br>💧Splash (Aguaaaa)<br>🥶Cyber Hawk (De ponta cabeça)<br>🎢Cyclone (Intensidade e aventura)<br>🐀Big Air Coaster (Essa é leve)<br>🔫Aqua Combat (Combate aquatico)<br>", icone: "icons/div.png", lat: -23.6182, lng: -46.9682 },
            { id: "FAZENDINHA", nome: "FAZENDINHA", area: "Ambiente aconchegante para uma refeições e garantir uma lembrança", desc: "🚻Banheiro (Comum e Acessivel)<br>🍿Quiósque Fazendinha (Doces e Bebidas)<br>🧸Estação Souvenier (Ursinhos e lembrancinhas)<br>🍔Hamburgueria Teleférico (Burgues e bebidas)<br>🚠Estação Teleférico (Vai e Vola ou só vai)<br>", icone: "icons/fazenda.png", lat: -23.6260, lng: -46.9670 },
            { id: "ESTACIONAMENTO1", nome: "ESTACIONAMENTO", area: "Vaga garantida e seu carro assegurado!", desc: "🚗Vagas Comuns<br>♿Vagas Acessiveis<br>🪫Vagas para Carros Eletrificados<br>", icone: "icons/estacionamento.png", lat: -23.6210, lng: -46.9695 },
            { id: "ESTACIONAMENTO2", nome: "ESTACIONAMENTO", area: "Estacionamento seguro e com Transfer", desc: "🚗Vagas Comuns<br>♿Vagas Acessiveis<br>", icone: "icons/estacionamento.png", lat: -23.6250, lng: -46.9675 }
        ]
    },
    diversao: {
        bounds: {
            north: -23.6165,  
            south: -23.6265,  
            east: -46.9640,   
            west: -46.9705    
        },
        imagem: "mapa.diversao.png",
        legenda: [
            { img: "icons/local.png", texto: "Entrada Diversão"},
            { img: "icons/estacionamento.png", texto: "Estacionamento" },
            { img: "icons/wc.png", texto: "Banheiros" },
            { img: "icons/saida.png", texto: "Saidas de Emergência" },
            { img: "icons/div.png", texto: "Atrações Indoor" },
            { img: "icons/div.png", texto: "Atrações Outdoor" },
            { img: "icons/quiosque.png", texto: "Quiosques" },
        ],
        pontos: [
            { id: "quiosque-splash", nome: "QUIÓSQUE SPLASH", area: "🍿 Café, Salgados e pipocas", desc: "Localizado próximo ao vulcão.", icone: "icons/quiosque.png", lat: -23.6200, lng: -46.9695 },
            { id: "quiosque-viking", nome: "QUIÓSQUE VIKING", area: "🍿 Café, Salgados e pipocas", desc: "Localizado na entrada do Outdoor.", icone: "icons/quiosque.png", lat: -23.6200, lng: -46.9680 },
            { id: "animalia diversão", nome: "🎡ANIMALIA DIVERSÃO", area: "Atrações Magicas e divertidas!", desc: "🚻Banheiro (Comum e Acessivel)<br> 🐸Vitoria Regia<br>🛩️Eagle Flight (Aviãozinho)<br>🎈Balão Mexicano<br>👒Forte Apache (Trenzinho)<br>🦘Kanguroo Joy<br>🦒Giraffe Cool<br>🎠Bella Giostra (Carrosel)<br>🩻Joe Caveira<br>🧗Kite Dragon<br>🍭Mundo Doce<br>⛵Rise of Rome<br>🥶Bear Mountain<br>🏎️Big Chock (bate-bate)<br>🧩Cantinho do Silencio (Para Pessoas neurodivergentes)<br>", icone: "icons/div.png", lat: -23.6215, lng: -46.9675 },
            { id: "DIVERSAO AVENTURA", nome: "🎢 ANIMALIA AVENTURA", area: "Atrações Radicaaaaais!", desc: "🚻Banheiro (Comum e Acessivel)<br> ⛵Barco Viking (Aqui tem que gritar)<br>💧Splash (Aguaaaa)<br>🥶Cyber Hawk (De ponta cabeça)<br>🎢Cyclone (Intensidade e aventura)<br>🐀Big Air Coaster (Essa é leve)<br>🔫Aqua Combat (Combate aquatico)<br>", icone: "icons/div.png", lat: -23.6195, lng: -46.9690 },
            { id: "RECEPÇÃO", nome: "RECEPÇÃO", area: "Onde tudo começa e aonde damos um até breve!", desc: "🔁Entrada/Saida<br>🚻Banheiro (Comum e Acessivel)<br>🧑‍💻SAV (Serviço de Atendimento ao Visitante)<br>☕Cafeteria (Cafés e salgados)<br>🧸Animalia Adventure (Souvenier)<br>📸Fotografica (Retirada de Fotos)<br>", icone: "icons/recepçao.png", lat: -23.6180, lng: -46.9680 },
            { id: "VILA ANIMALIA", nome: "VILA ANIMÁLIA", area: "Ambiente aconchegante para uma refeições e garantir uma lembrança", desc: "🚻Banheiro (Comum e Acessivel)<br>🧸Vila Adventure (Souvenier)<br>🧸Baby Zoo (Souvenier)<br>🥩Restaurante Savana (Carnes nobres)<br>🥤Shake do Bin (Sorvetes e Shakes)<br>☕Vila Cafeteria (Cafés e salgados)<br>🍔Hamburgueria da Vila (Burgues e bebidas)<br>🍕Selva de Sabores (Pizzas e Crespes)<br>🍝Vila Tratoria (Massas e Carnes)<br>🌭Hot Dog do Kiran (Hot Dog's)<br>🍨Cantinho da Girafa (Sorvetes e massas)<br>🚑Ambulatório (Saude e Bombeiros)<br>🚠Vila Estação. (Teleférico)<br>", icone: "icons/vila.png", lat: -23.6175, lng: -46.9685 },
            { id: "ESTACIONAMENTO1", nome: "ESTACIONAMENTO", area: "Vaga garantida e seu carro assegurado!", desc: "🚗Vagas Comuns<br>♿Vagas Acessiveis<br>🪫Vagas para Carros Eletrificados<br>", icone: "icons/estacionamento.png", lat: -23.6210, lng: -46.9652 }
        ]
    }
};

let map;
let currentOverlay = null;
let currentMarkers = [];
let userMarker = null;
let watchId = null;
let categoriaAtual = 'reserva';

// ==========================================
// INICIALIZAÇÃO DO GOOGLE MAPS (MODO SATÉLITE)
// ==========================================
function initMap() {
    // Centro exato em cima da área do Animália Park em Cotia
    const centroInicial = { lat: -23.6215, lng: -46.9680 };

    map = new google.maps.Map(document.getElementById("mapa"), {
        zoom: 17,
        center: centroInicial,
        mapTypeId: "satellite", // <-- ALTERADO PARA O SATÉLITE DO GOOGLE
        disableDefaultUI: true,
        zoomControl: false
    });

    carregarCategoriaMapa(categoriaAtual);
    iniciarGeolocalizacao();
}
