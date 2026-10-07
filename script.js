// ==========================================
// DADOS DO PARQUE
// ==========================================
const dadosPark = {
    reserva: {
        imagem: "mapa.zoo.png",
        categoriasLegenda: [
            { id: 'animais', texto: 'RESERVA' },
            { id: 'alimentacao', texto: 'ALIMENTAÇÃO' },
            { id: 'atracao', texto: 'ATRAÇÕES' },
            { id: 'souvenir', texto: 'SOUVENIR' },
            { id: 'banheiros', texto: 'BANHEIROS' },
            { id: 'servicos', texto: 'SERVIÇOS' }
        ],
        pontos: [
            // Alimentação
            { id: "alim_recepcao", nome: "CAFÉ RECEPÇÃO", tipo: "ALIMENTAÇÃO", legendaNome: "PONTO", area: "Onde tudo começa e aonde damos um até breve!", desc: "☕ Cafeteria (Cafés e salgados)", icone: "icons/ponto.png", categoria: "alimentacao", top: 27, left: 48 },
            { id: "alim_leao", nome: "QUIOSQUE LEÃO", tipo: "ALIMENTAÇÃO", legendaNome: "QUIÓSQUE", area: "🍿 Café, Salgados e pipocas", desc: "Logo após o recinto do Leão.", icone: "icons/quiosque.png", categoria: "alimentacao", top: 48, left: 41 },
            { id: "alim_sucuarana", nome: "QUIOSQUE SUÇUARANA", tipo: "ALIMENTAÇÃO", legendaNome: "QUIÓSQUE", area: "🍿 Salgados e pipocas", desc: "Em frente ao recinto Suçuarana.", icone: "icons/quiosque.png", categoria: "alimentacao", top: 64, left: 43 },
            { id: "alim_tamandua", nome: "QUIOSQUE TAMANDUÁ", tipo: "ALIMENTAÇÃO", legendaNome: "QUIÓSQUE", area: "🍿 Café, Salgados e pipocas", desc: "Localizado em frente ao recinto tamanduá.", icone: "icons/quiosque.png", categoria: "alimentacao", top: 60, left: 50 },
            { id: "alim_fazendinha", nome: "QUIOSQUE FAZENDINHA", tipo: "ALIMENTAÇÃO", legendaNome: "QUIÓSQUE", area: "Doces e Pipocas", desc: "🍿 Quiosque Fazendinha (Doces e Bebidas)", icone: "icons/quiosque.png", categoria: "alimentacao", top: 78, left: 64 },  
            { id: "alim_hamb_est2", nome: "HAMBURGUERIA EST.2", tipo: "ALIMENTAÇÃO", legendaNome: "QUIÓSQUE", area: "Ambiente aconchegante para refeições e lembranças", desc: "🍔 Hamburgueria Teleférico (Burgers e bebidas)<br>", icone: "icons/ponto.png", categoria: "alimentacao", top: 80, left: 65 },
            { id: "alim_lobo_marinho", nome: "QUIOSQUE LOBO MARINHO", tipo: "ALIMENTAÇÃO", legendaNome: "QUIÓSQUE", area: "🍿 Café, Salgados e pipocas", desc: "Localizado na Reserva.", icone: "icons/quiosque.png", categoria: "alimentacao", top: 80, left: 80 },
            { id: "alim_pastelaria", nome: "FOOD PARK PASTELARIA", tipo: "ALIMENTAÇÃO", legendaNome: "PONTO", area: "Natureza e uma boa alimentação", desc: "🥟 Pastelaria", icone: "icons/ponto.png", categoria: "alimentacao", top: 60, left: 71 },
            { id: "alim_yakisoba", nome: "FOOD PARK YAKISOBA", tipo: "ALIMENTAÇÃO", legendaNome: "PONTO", area: "Natureza e uma boa alimentação", desc: "🍜 Yakissoba", icone: "icons/ponto.png", categoria: "alimentacao", top: 63, left: 71 },
            { id: "alim_chickenfries", nome: "FOOD PARK CHICKEN & FRIES", tipo: "ALIMENTAÇÃO", legendaNome: "PONTO", area: "Natureza e uma boa alimentação", desc: "🍗 Chicken & Fries", icone: "icons/ponto.png", categoria: "alimentacao", top: 60, left: 69 },
            { id: "alim_espetaria", nome: "FOOD PARK ESPETARIA/LINGUIÇARIA", tipo: "ALIMENTAÇÃO", legendaNome: "PONTO", area: "Natureza e uma boa alimentação", desc: "🍖 Espetaria/Linguiçaria", icone: "icons/ponto.png", categoria: "alimentacao", top: 63, left: 69 },
            { id: "alim_rest_central", nome: "RESTAURANTE CENTRAL", tipo: "ALIMENTAÇÃO", legendaNome: "PONTO", area: "Buffet a Vontade", desc: "🍽️ Restaurante Baboá (Buffet por Pessoa)", icone: "icons/ponto.png", categoria: "alimentacao", top: 45.5, left: 55.5 },
            { id: "alim_iglu", nome: "MOBILE IGLU", tipo: "ALIMENTAÇÃO", legendaNome: "MOBILE", area: "Sorvete para resfrescar!", desc: "Localizado na Reserva.", icone: "icons/mobile.png", categoria: "alimentacao", top: 40, left: 70 },
            { id: "alim_canguru", nome: "QUIOSQUE CANGURU", tipo: "ALIMENTAÇÃO", legendaNome: "QUIÓSQUE", area: "🍿 Café, Salgados e pipocas", desc: "Localizado na Reserva.", icone: "icons/quiosque.png", categoria: "alimentacao", top: 40, left: 74.5 },
            { id: "alim_hambvila", nome: "HAMBURGUERIA DA VILA", tipo: "ALIMENTAÇÃO", legendaNome: "PONTO", area: "Ambiente aconchegante para refeições e lembranças", desc: "🍔Hamburgueria da Vila (Burgues e bebidas)", icone: "icons/ponto.png", categoria: "alimentacao", top: 21, left: 51 },
            { id: "alim_cafevila", nome: "CAFETERIA DA VILA", tipo: "ALIMENTAÇÃO", legendaNome: "PONTO", area: "Ambiente aconchegante para refeições e lembranças", desc: "☕Vila Cafeteria (Cafés e salgados)", icone: "icons/ponto.png", categoria: "alimentacao", top: 20.1, left: 53 },
            { id: "alim_shakedobin", nome: "SHAKE DO BIN", tipo: "ALIMENTAÇÃO", legendaNome: "PONTO", area: "Ambiente aconchegante para refeições e lembranças", desc: "🥤 Shake do Bin (Sorvetes e Shakes)", icone: "icons/ponto.png", categoria: "alimentacao", top: 19.1, left: 55 },
            { id: "alim_savana", nome: "RESTAURANTE SAVANA", tipo: "ALIMENTAÇÃO", legendaNome: "PONTO", area: "Ambiente aconchegante para refeições e lembranças", desc: "🥩 Restaurante Savana (Carnes nobres)", icone: "icons/ponto.png", categoria: "alimentacao", top: 18.5, left: 57 },
            { id: "alim_selva", nome: "SELVA DOS SABORES", tipo: "ALIMENTAÇÃO", legendaNome: "PONTO", area: "Ambiente aconchegante para refeições e lembranças", desc: "🍕 Selva de Sabores (Pizzas e Crepes)<br>", icone: "icons/ponto.png", categoria: "alimentacao", top: 23.5, left: 52 },
            { id: "alim_hotdog", nome: "HOTDOG DO KIRAN", tipo: "ALIMENTAÇÃO", legendaNome: "PONTO", area: "Ambiente aconchegante para refeições e lembranças", desc: "🌭Hot Dog do Kiran (Hot Dog's)", icone: "icons/ponto.png", categoria: "alimentacao", top: 23, left: 54 },
            { id: "alim_tratoria", nome: "VILA TRATORIA", tipo: "ALIMENTAÇÃO", legendaNome: "PONTO", area: "Ambiente aconchegante para refeições e lembranças", desc: "🍝Vila Tratoria (Massas e Carnes)", icone: "icons/ponto.png", categoria: "alimentacao", top: 22, left: 56 },
            { id: "alim_cantgira", nome: "CANTINHO DA GIRAFA", tipo: "ALIMENTAÇÃO", legendaNome: "PONTO", area: "Ambiente aconchegante para refeições e lembranças", desc: "🍨 Cantinho da Girafa (Picoles e massas)", icone: "icons/ponto.png", categoria: "alimentacao", top: 26, left: 53 },
            
            { id: "alim_cesta", nome: "CESTA PICNIC", tipo: "ALIMENTAÇÃO", legendaNome: "PONTO", area: "Diversão e refeição, tudo em um só lugar!", desc: "🍔 Cesta Pic Nic (Burgers e bebidas)", icone: "icons/ponto.png", categoria: "alimentacao", top: 15, left: 32 },
            { id: "alim_carrinho", nome: "CARRINHO DOCE e PIPOCA", tipo: "ALIMENTAÇÃO", legendaNome: "QUIOSQUE", area: "Diversão e refeição, tudo em um só lugar!", desc: "🍿 Carrinho de Doce e Pipoca", icone: "icons/quiosque.png", categoria: "alimentacao", top: 18, left: 32 },

            { id: "alim_carrosel", nome: "CESTA CARROSEL", tipo: "ALIMENTAÇÃO", legendaNome: "PONTO", area: "Diversão e refeição, tudo em um só lugar!", desc: "☕ Carrossel (Porções e Cafés)", icone: "icons/ponto.png", categoria: "alimentacao", top: 17.5, left: 35 },
            { id: "alim_deck", nome: "DECK PIC NIC", tipo: "ALIMENTAÇÃO", legendaNome: "PONTO", area: "Diversão e refeição, tudo em um só lugar!", desc: "🍿 Deck Pic nic (Doce e Pipoca)", icone: "icons/ponto.png", categoria: "alimentacao", top: 20.5, left: 35 },

            { id: "alim_mundodoce", nome: "MUNDO DOCE", tipo: "ALIMENTAÇÃO", legendaNome: "PONTO", area: "Diversão e refeição, tudo em um só lugar!", desc: "🥮 Mundo Doce (Doces e Bebidas)", icone: "icons/ponto.png", categoria: "alimentacao", top: 20, left: 38 },
            { id: "alim_lego", nome: "LEGO", tipo: "ALIMENTAÇÃO", legendaNome: "QUIOSQUE", area: "Diversão e refeição, tudo em um só lugar!", desc: "🥮 Lego (Doces e Bebidas)", icone: "icons/quiosque.png", categoria: "alimentacao", top: 23, left: 38 },

            
            { id: "alim_splash", nome: "QUIOSQUE SPLASH", tipo: "ALIMENTAÇÃO", legendaNome: "QUIÓSQUE", area: "🍿 Café, Salgados e pipocas", desc: "Localizado próximo ao vulcão.", icone: "icons/ponto.png", categoria: "alimentacao", top: 7, left: 41 },
            { id: "alim_viking", nome: "QUIOSQUE VIKING", tipo: "ALIMENTAÇÃO", legendaNome: "QUIÓSQUE", area: "🍿 Café, Salgados e pipocas", desc: "Localizado na entrada do Outdoor.", icone: "icons/ponto.png", categoria: "alimentacao", top: 14, left: 39 },
            { id: "alim_aviario", nome: "CAFÉ AVIÁRIO", tipo: "ALIMENTAÇÃO", legendaNome: "PONTO", area: "Um dos Maiores Aviários da América Latina", desc: "☕ Café Caverna (Cafés e salgados)", icone: "icons/ponto.png", categoria: "alimentacao", top: 60, left: 35 },

            // Banheiros
            { id: "wc_recepcao", nome: "WC RECEPÇÃO", tipo: "BANHEIROS", legendaNome: "BANHEIRO", area: "Localizado na Recepção", desc: "🚻 Banheiro (Comum e Acessível)", icone: "icons/banheiro.png", categoria: "banheiros", top: 27, left: 48 },
            { id: "wc_leao", nome: "WC LEÃO", tipo: "BANHEIROS", legendaNome: "BANHEIRO", area: "Localizado logo após o recinto do leão", desc: "🚻 Banheiro (Comum e Acessível)", icone: "icons/banheiro.png", categoria: "banheiros", top: 47.5, left: 42 },
            { id: "wc_aviario", nome: "WC AVIÁRIO", tipo: "BANHEIROS", legendaNome: "BANHEIRO", area: "Localizado dentro do Aviário", desc: "🚻 Banheiro (Comum e Acessível)", icone: "icons/banheiro.png", categoria: "banheiros", top: 60, left: 35 },
            { id: "wc_baoba", nome: "WC RESTAURANTE BAOBÁ", tipo: "BANHEIROS", legendaNome: "BANHEIRO", area: "Localizado na parte externa do Buffet", desc: "🚻 Banheiro (Comum e Acessível)", icone: "icons/banheiro.png", categoria: "banheiros", top: 53, left: 52 },
            { id: "wc_fazendinha", nome: "WC FAZENDINHA", tipo: "BANHEIROS", legendaNome: "BANHEIRO", area: "Localizado perto do desembarque Estação 2.", desc: "🚻 Banheiro (Comum e Acessível)", icone: "icons/banheiro.png", categoria: "banheiros", top: 80, left: 60 },
            { id: "wc_food_park", nome: "WC FOOD PARK", tipo: "BANHEIROS", legendaNome: "BANHEIRO", area: "Localizado no Food Park", desc: "🚻 Banheiro (Comum e Acessível)", icone: "icons/banheiro.png", categoria: "banheiros", top: 60.5, left: 74.5 },
            { id: "wc_vila_animalia", nome: "WC VILA ANIMÁLIA", tipo: "BANHEIROS", legendaNome: "BANHEIRO", area: "Localizado na Saída do Zoológico", desc: "🚻 Banheiro (Comum e Acessível)", icone: "icons/banheiro.png", categoria: "banheiros", top: 21, left: 56 },
            { id: "wc_div_indoor", nome: "WC DIV INDOOR", tipo: "BANHEIROS", legendaNome: "BANHEIRO", area: "Localizado dentro do Animália Diversão", desc: "🚻 Banheiro (Comum e Acessível)", icone: "icons/banheiro.png", categoria: "banheiros", top: 20, left: 38 },
            { id: "wc_div_outdoor", nome: "WC DIV OUTDOOR", tipo: "BANHEIROS", legendaNome: "BANHEIRO", area: "Localizado ao redor do Diversão Aventura", desc: "🚻 Banheiro (Comum e Acessível)", icone: "icons/banheiro.png", categoria: "banheiros", top: 15, left: 48 },
            { id: "wc_borboletario", nome: "WC BORBOLETÁRIO", tipo: "BANHEIROS", legendaNome: "BANHEIRO", area: "Localizado na parte externa do Buffet", desc: "🚻 Banheiro (Comum e Acessível)", icone: "icons/banheiro.png", categoria: "banheiros", top: 55, left: 55.5 },
            { id: "wc_hipopotamo", nome: "WC HIPOPOTAMO", tipo: "BANHEIROS", legendaNome: "BANHEIRO", area: "Localizado em frente ao recinto do Hipopotamo", desc: "🚻 Banheiro (Comum e Acessível)", icone: "icons/banheiro.png", categoria: "banheiros", top: 43, left: 68 },

            // Souvenirs
            { id: "souv_adventure", nome: "ANIMALIA ADVENTURE", tipo: "SOUVENIR", legendaNome: "LOJA SOUVENIR", area: "Onde tudo começa e aonde damos um até breve!", desc: "🧸 Animalia Adventure (Souvenir)", icone: "icons/souvenir.png", categoria: "souvenir", top: 27, left: 47 },
            { id: "souv_vilas_baby", nome: "VILAS ADVENTURE", tipo: "SOUVENIR", legendaNome: "LOJA SOUVENIR", area: "Ambiente aconchegante para refeições e garantir uma lembrança", desc: "🧸 Vila Adventure (Souvenir)", icone: "icons/souvenir.png", categoria: "souvenir", top: 19.1, left: 55 },
            { id: "souv_baby", nome: "BABY ZOO", tipo: "SOUVENIR", legendaNome: "LOJA SOUVENIR", area: "Ambiente aconchegante para refeições e garantir uma lembrança", desc: "🧸 Baby Zoo (Souvenir)", icone: "icons/souvenir.png", categoria: "souvenir", top: 20.1, left: 53 },
            { id: "souv_est.fazenda", nome: "ESTAÇÃO SOUVENIR", tipo: "SOUVENIR", legendaNome: "LOJA SOUVENIR", area: "Ambiente aconchegante para refeições e lembranças", desc: "🧸 Estação Souvenir (Ursinhos e lembrancinhas)", icone: "icons/souvenir.png", categoria: "souvenir", top: 78, left: 64 },
            { id: "foto_aviario", nome: "FOTO OFICIAL AVIÁRIO", tipo: "SOUVENIR", legendaNome: "FOTO OFICIAL", area: "Leve uma recordação para casa!", desc: "📸 Fotografia Oficial", icone: "icons/foto.png", categoria: "souvenir", top: 56, left: 38 },            
            { id: "foto_recepcao", nome: "FOTO OFICIAL RECEPÇÃO", tipo: "SOUVENIR", legendaNome: "FOTO OFICIAL", area: "Leve uma recordação para casa!", desc: "📸 Fotografia Oficial", icone: "icons/foto.png", categoria: "souvenir", top: 27, left: 49 },  
            { id: "souv_divavd", nome: "DIVERSÂO ADVENTURE", tipo: "SOUVENIR", legendaNome: "LOJA SOUVENIR", area: "Diversão e Pelucia!", desc: "🧸 Diversão Adventure (Souvenir)", icone: "icons/souvenir.png", categoria: "souvenir", top: 20, left: 37},

            // Serviços
            { id: "serv_ambulatorio", nome: "AMBULATÓRIO", tipo: "SERVIÇOS", legendaNome: "AMBULATÓRIO MÉDICO", area: "Ambulatório teste Animália Park", desc: "Localizado na Vila Animália.", icone: "icons/ambulatorio.png", categoria: "servicos", top: 26, left: 53 },
            { id: "serv_estacionamento2", nome: "ESTACIONAMENTO EXTERNO", tipo: "SERVIÇOS", legendaNome: "ESTACIONAMENTO", area: "Estacionamento seguro e com Transfer", desc: "🚗 Vagas Comuns<br>♿ Vagas Acessíveis<br>", icone: "icons/estacionamento.png", categoria: "servicos", top: 76, left: 46 },
            { id: "serv_estacionamento1", nome: "ESTACIONAMENTO INTERNO", tipo: "SERVIÇOS", legendaNome: "ESTACIONAMENTO", area: "Vaga garantida e seu carro assegurado!", desc: "🚗 Vagas Comuns<br>♿ Vagas Acessíveis<br>🪫 Vagas para Carros Eletrificados<br>", icone: "icons/estacionamento.png", categoria: "servicos", top: 40, left: 28 },
            { id: "serv_sav", nome: "SAV", tipo: "SERVIÇOS", legendaNome: "SAV - ATENDIMENTO AO VISITANTE", area: "Reclamações, elogios ou retirada de duvidas", desc: "💻 SAV (Serviço de Atendimento ao Visitante)", icone: "icons/recepcao.png", categoria: "servicos", top: 27, left: 48 },

            // Atrações
            { id: "atracao_indoor", nome: "🎡 ANIMALIA DIVERSÃO", tipo: "ATRAÇÕES", legendaNome: "ANIMALIA DIVERSÃO", area: "Atrações Mágicas e divertidas!", desc: "🐸 Vitória Régia<br>🛩️ Eagle Flight (Aviãozinho)<br>🎈 Balão Mexicano<br>👒 Forte Apache (Trenzinho)<br>🦘 Kanguroo Joy<br>🦒 Giraffe Cool<br>🎠 Bella Giostra (Carrossel)<br>🩻 Joe Caveira<br>🧗 Kite Dragon<br>🍭 Mundo Doce<br>⛵ Rise of Rome<br>🥶 Bear Mountain<br>🏎 Big Chock (bate-bate)<br>🧩 Cantinho do Silêncio (Para pessoas neurodivergentes)<br>", icone: "icons/divindoor.png", categoria: "atracao", top: 21, left: 38 },
            { id: "atracao_aventura", nome: "🎢 ANIMALIA AVENTURA", tipo: "ATRAÇÕES", legendaNome: "ANIMALIA AVENTURA", area: "Atrações Radicaaaaais!", desc: "⛵ Barco Viking (Aqui tem que gritar)<br>💧 Splash (Águaaaa)<br>🥶 Cyber Hawk (De ponta cabeça)<br>🎢 Cyclone (Intensidade e aventura)<br>🐀 Big Air Coaster (Essa é leve)<br>🔫 Aqua Combat (Combate aquático)<br>", icone: "icons/divoutdoor.png", categoria: "atracao", top: 10, left: 40 },
            { id: "atracao_tel_est2", nome: "EST.2 FAZENDINHA", tipo: "ATRAÇÕES", legendaNome: "ESTAÇÃO TELEFÉRICO", area: "Embarca e se divirta com a paisagem", desc: "🚠 Estação Teleférico (Vai e Volta ou só vai)", icone: "icons/estacao.png", categoria: "atracao", top: 82, left: 65 },
            { id: "atracao_tel_est1", nome: "EST.1 VILA ANIMALIA", tipo: "ATRAÇÕES", legendaNome: "ESTAÇÃO TELEFÉRICO", area: "Embarca e se divirta com a paisagem", desc: "🚠 Estação Teleférico (Vai e Volta ou só vai)", icone: "icons/estacao.png", categoria: "atracao", top: 20, left: 53 },

            // Zoológico / Animais

            { id: "zoo_zebra", nome: "ZEBRA", tipo: "RESERVA", legendaNome: "ZEBRA", area: "Animalia Reserva", desc: "Recinto", icone: "icons/zebra.png", categoria: "animais", top: 35, left: 52  },
            { id: "zoo_girafa", nome: "GIRAFA", tipo: "RESERVA", legendaNome: "GIRAFA", area: "Animalia Reserva", desc: "Recinto", icone: "icons/girafa.png", categoria: "animais", top: 35, left: 55  },
            { id: "zoo_ema", nome: "EMA", tipo: "RESERVA", legendaNome: "EMA", area: "Animalia Reserva", desc: "Recinto", icone: "icons/ema.png", categoria: "animais", top: 38, left: 50  },
            { id: "zoo_leao", nome: "LEÃO", tipo: "RESERVA", legendaNome: "LEÃO", area: "Animalia Reserva", desc: "Recinto", icone: "icons/leao.png", categoria: "animais", top: 44, left: 38.5 },
            { id: "zoo_onça", nome: "ONÇA-PINTADA", tipo: "RESERVA", legendaNome: "ONÇA-PINTADA", area: "Animalia Reserva", desc: "Recinto", icone: "icons/onca.png", categoria: "animais", top: 51, left: 29 },
            { id: "zoo_aviário", nome: "AVIÁRIO", tipo: "RESERVA", legendaNome: "AVIÁRIO", area: "Animalia Reserva", desc: "Recinto", icone: "icons/aviario.png", categoria: "animais", top: 60, left: 35 },
            { id: "zoo_macaranha", nome: "MACACO-ARANHA", tipo: "RESERVA", legendaNome: "MACACO-ARANHA", area: "Animalia Reserva", desc: "Recinto", icone: "icons/macacoaranha.png", categoria: "animais", top: 57, left: 39 },
            { id: "zoo_sucuarana", nome: "SUÇUARANA", tipo: "RESERVA", legendaNome: "SUÇUARANA", area: "Animalia Reserva", desc: "Recinto", icone: "icons/sucuarana.png", categoria: "animais", top: 64, left: 43 },
            { id: "zoo_urso", nome: "URSO-DE-ÓCULOS", tipo: "RESERVA", legendaNome: "URSO-DE-ÓCULOS", area: "Animalia Reserva", desc: "Recinto", icone: "icons/urso.png", categoria: "animais", top: 67, left: 43 },
            { id: "zoo_tamandua", nome: "TAMANDUA", tipo: "RESERVA", legendaNome: "TAMANDUA", area: "Animalia Reserva", desc: "Recinto", icone: "icons/tamandua.png", categoria: "animais", top: 60, left: 50 },
            { id: "zoo_cahvinagre", nome: "CACHORRO-VINAGRE", tipo: "RESERVA", legendaNome: "CACHORRO-VINAGRE", area: "Animalia Reserva", desc: "Recinto", icone: "icons/cachorrovinagre.png", categoria: "animais", top: 75, left: 57  },
            { id: "zoo_fazenda", nome: "FAZENDINHA", tipo: "RESERVA", legendaNome: "FAZENDINHA", area: "Animalia Reserva", desc: "Recinto", icone: "icons/fazenda.png", categoria: "animais", top: 83, left: 57 },
            { id: "zoo_cabramontes", nome: "CABRA-DA-MONTANHA", tipo: "RESERVA", legendaNome: "CABRA-DA-MONTANHA", area: "Animalia Reserva", desc: "Recinto", icone: "icons/cabramontes.png", categoria: "animais", top: 80, left: 70 },
            { id: "zoo_gorila", nome: "GORILA", tipo: "RESERVA", legendaNome: "GORILA", area: "Animalia Reserva", desc: "Recinto", icone: "icons/gorila.png", categoria: "animais", top: 83, left: 73 },
            { id: "zoo_hipo", nome: "HIPOPOTAMO", tipo: "RESERVA", legendaNome: "HIPOPOTAMO", area: "Animalia Reserva", desc: "Recinto", icone: "icons/hipopotamo.png", categoria: "animais", top: 42, left: 63 },
            { id: "zoo_mandril", nome: "MANDRIL", tipo: "RESERVA", legendaNome: "MANDRIL", area: "Animalia Reserva", desc: "Recinto", icone: "icons/mandril.png", categoria: "animais", top: 70, left: 78 },
            { id: "zoo_lobo", nome: "LOBO-MARINHO", tipo: "RESERVA", legendaNome: "LOBO-MARINHO", area: "Animalia Reserva", desc: "Recinto", icone: "icons/lobo.png", categoria: "animais", top: 80, left: 78 },
            { id: "zoo_rino", nome: "RINOCERONTE", tipo: "RESERVA", legendaNome: "RINOCERONTE", area: "Animalia Reserva", desc: "Recinto", icone: "icons/rino.png", categoria: "animais", top: 72, left: 74 },
            { id: "zoo_drome", nome: "DROMEDARIO", tipo: "RESERVA", legendaNome: "DROMEDARIO", area: "Animalia Reserva", desc: "Recinto", icone: "icons/dromedario.png", categoria: "animais", top: 45, left: 70 },
            { id: "zoo_canguru", nome: "CANGURU", tipo: "RESERVA", legendaNome: "CANGURU", area: "Animalia Reserva", desc: "Recinto", icone: "icons/canguru.png", categoria: "animais", top: 43, left: 75 },
            { id: "zoo_aviario2", nome: "AVIARIO 2", tipo: "RESERVA", legendaNome: "AVIARIO 2", area: "Animalia Reserva", desc: "Recinto", icone: "icons/aviario2.png", categoria: "animais",  top: 23, left: 59 } 



            
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
    
    const iconesUnicos = new Map();

    dadosPark.reserva.pontos.forEach(ponto => {
        if (categoriaFiltro === 'todos' || ponto.categoria === categoriaFiltro) {
            const el = document.createElement("div");
            el.className = "ponto";
            el.style.top = ponto.top + "%";
            el.style.left = ponto.left + "%";
            el.innerHTML = `<img src="${ponto.icone}" alt="${ponto.nome}" class="icone-marcador">`;
            el.onclick = (e) => { e.stopPropagation(); abrirLocal(ponto); };
            camada.appendChild(el);

            if (!iconesUnicos.has(ponto.icone)) {
                iconesUnicos.set(ponto.icone, ponto.legendaNome || ponto.tipo || "Local");
            }
        }
    });

    atualizarLegendaLateral(iconesUnicos);
}

function atualizarLegendaLateral(iconesMap) {
    const containerLegenda = document.getElementById("conteudoLegendaLateral");
    if (!containerLegenda) return;
    containerLegenda.innerHTML = "";

    iconesMap.forEach((texto, icone) => {
        const item = document.createElement("div");
        item.className = "item-legenda-visual";
        item.innerHTML = `<img src="${icone}" alt="${texto}"> <span>${texto}</span>`;
        containerLegenda.appendChild(item);
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
    
    if (!container || !imgMapa || !imgMapa.naturalWidth || imgMapa.naturalWidth === 0) return;

    const realWidth = imgMapa.naturalWidth;
    const realHeight = imgMapa.naturalHeight;
    mapaWrapper.style.width = realWidth + "px";
    mapaWrapper.style.height = realHeight + "px";

    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;
    
    if (containerWidth === 0 || containerHeight === 0) return;

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
    const elTipo = document.getElementById("tipoLocal");
    if (elTipo) {
        elTipo.innerText = ponto.tipo || "LOCAL";
    }
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
// EVENTOS DE GESTO E ARRASTO (MOUSE & TOUCH)
// ==========================================

let initialDistance = 0;
let initialScale = 1;
let focalPointX = 0;
let focalPointY = 0;

function getDistance(touches) {
    const dx = touches[0].clientX - touches[1].clientX;
    const dy = touches[0].clientY - touches[1].clientY;
    return Math.sqrt(dx * dx + dy * dy);
}

document.addEventListener("DOMContentLoaded", () => {
    inicializarMapa();
    const container = document.getElementById("mapaContainer");
    if (!container) return;

    // Eventos de Mouse
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

    // Eventos de Toque (Mobile - Arraste e Zoom focado na pinça)
    container.addEventListener("touchstart", (e) => {
        if (e.targetTouches.length === 1) {
            isDragging = true;
            startX = e.targetTouches[0].clientX - pointX;
            startY = e.targetTouches[0].clientY - pointY;
        } else if (e.targetTouches.length === 2) {
            isDragging = false;
            initialDistance = getDistance(e.targetTouches);
            initialScale = scale;

            // Ponto central exato entre os dois dedos em relação ao container
            const rect = container.getBoundingClientRect();
            focalPointX = ((e.targetTouches[0].clientX + e.targetTouches[1].clientX) / 2) - rect.left;
            focalPointY = ((e.targetTouches[0].clientY + e.targetTouches[1].clientY) / 2) - rect.top;
        }
    }, { passive: false });

    container.addEventListener("touchmove", (e) => {
        if (e.targetTouches.length === 1 && isDragging) {
            pointX = e.targetTouches[0].clientX - startX;
            pointY = e.targetTouches[0].clientY - startY;
            atualizarTransformacao();
        } else if (e.targetTouches.length === 2) {
            const currentDistance = getDistance(e.targetTouches);
            if (initialDistance > 0) {
                const zoomFactor = currentDistance / initialDistance;
                let newScale = Math.min(Math.max(initialScale * zoomFactor, 0.2), 3.0);

                // Aplica o zoom mantendo o foco exatamente onde os dedos estão pinçando
                pointX = focalPointX - (focalPointX - pointX) * (newScale / scale);
                pointY = focalPointY - (focalPointY - pointY) * (newScale / scale);
                scale = newScale;

                atualizarTransformacao();
            }
        }
    }, { passive: false });

    container.addEventListener("touchend", (e) => {
        if (e.targetTouches.length < 2) {
            initialDistance = 0;
        }
        if (e.targetTouches.length === 0) {
            isDragging = false;
        }
    });

    let lastWidth = window.innerWidth;
    window.addEventListener("resize", () => {
        if (window.innerWidth !== lastWidth) {
            lastWidth = window.innerWidth;
            resetZoom();
        }
    });
});
