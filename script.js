// ==========================================
// DADOS DO PARQUE
// ==========================================
const dadosPark = {
    reserva: {
        imagem: "mapa.zoo.webp",
        categoriasLegenda: [
            { id: 'alimentacao',texto: 'ALIMENTAÇÃO'},
            { id: 'animais',    texto: 'ZOOLOGICO'  },
            { id: 'atracao',    texto: 'ATRAÇÕES'   },
            { id: 'souvenir',   texto: 'SOUVENIR'   },
            { id: 'banheiros',  texto: 'BANHEIROS'  },
            { id: 'servicos',   texto: 'SERVIÇOS'   }
        ],
        pontos: [
            // Alimentação
            { id: "alim_recepcao", nome: "CAFÉ RECEPÇÃO", tipo: "ALIMENTAÇÃO", legendaNome: "QUIÓSQUE CAFÉ RECEPÇÃO<br>Kiosk Cafe Reception", area: "Onde tudo começa e aonde damos um até breve!", desc: "☕ Cafeteria (Cafés e salgados.)", icone: "icons/caferecepcao.png", categoria: "alimentacao", top: 27, left: 48 },
            { id: "alim_leao", nome: "QUIOSQUE LEÃO", tipo: "ALIMENTAÇÃO", legendaNome: "QUIÓSQUE LEÃO<br>Kiosk Lion", area: "🍿 Café, Salgados e pipocas", desc: "Logo após o recinto do Leão.", icone: "icons/pontoleao.png", categoria: "alimentacao", top: 48, left: 41 },
            { id: "alim_sucuarana", nome: "QUIOSQUE SUÇUARANA", tipo: "ALIMENTAÇÃO", legendaNome: "QUIÓSQUE SUÇUARANA<br>Kiosk Puma", area: "🍿 Salgados e pipocas", desc: "Em frente ao recinto Suçuarana.", icone: "icons/pontosucuarana.png", categoria: "alimentacao", top: 64, left: 43 },
            { id: "alim_tamandua", nome: "QUIOSQUE TAMANDUÁ", tipo: "ALIMENTAÇÃO", legendaNome: "QUIÓSQUE TAMANDUA<br>Kiosk Anteater", area: "🍿 Café, Salgados e pipocas", desc: "Localizado em frente ao recinto tamanduá.", icone: "icons/pontotamandua.png", categoria: "alimentacao", top: 60, left: 50 },
            { id: "alim_fazendinha", nome: "QUIOSQUE FAZENDINHA", tipo: "ALIMENTAÇÃO", legendaNome: "QUIÓSQUE FAZENDINHA", area: "Doces e Pipocas", desc: "🍿 Quiosque Fazendinha (Doces e Bebidas)", icone: "icons/pontofazendinha.png", categoria: "alimentacao", top: 78, left: 64 },  
            { id: "alim_hamb_est2", nome: "HAMBURGUERIA EST.2", tipo: "ALIMENTAÇÃO", legendaNome: "HAMBURGUERIA EST.2", area: "Ambiente aconchegante para refeições e lembranças", desc: "🍔 Hamburgueria Teleférico (Burgers e bebidas)<br>", icone: "icons/hambestacao.png", categoria: "alimentacao", top: 80, left: 65 },
            { id: "alim_lobo_marinho", nome: "QUIOSQUE LOBO MARINHO", tipo: "ALIMENTAÇÃO", legendaNome: "QUIÓSQUE LOBO MARINHO", area: "🍿 Café, Salgados e pipocas", desc: "Localizado na Reserva.", icone: "icons/pontolobomarinho.png", categoria: "alimentacao", top: 80, left: 80 },
            { id: "alim_pastelaria", nome: "FOOD PARK PASTELARIA", tipo: "ALIMENTAÇÃO", legendaNome: "FOOD PARK PASTEL", area: "Natureza e uma boa alimentação", desc: "🥟 Pastelaria", icone: "icons/foodpastel.png", categoria: "alimentacao", top: 60, left: 71 },
            { id: "alim_yakisoba", nome: "FOOD PARK YAKISOBA", tipo: "ALIMENTAÇÃO", legendaNome: "FOOD PARK YAKISOBRA", area: "Natureza e uma boa alimentação", desc: "🍜 Yakissoba", icone: "icons/foodyakisoba.png", categoria: "alimentacao", top: 63, left: 71 },
            { id: "alim_chickenfries", nome: "FOOD PARK CHICKEN & FRIES", tipo: "ALIMENTAÇÃO", legendaNome: "FOOD PARK CHICKEN & FRIES", area: "Natureza e uma boa alimentação", desc: "🍗 Chicken & Fries", icone: "icons/foodchicken.png", categoria: "alimentacao", top: 60, left: 69 },
            { id: "alim_espetaria", nome: "FOOD PARK ESPETARIA/LINGUIÇARIA", tipo: "ALIMENTAÇÃO", legendaNome: "FOOD PARK ESPETO/LINGUIÇA", area: "Natureza e uma boa alimentação", desc: "🍖 Espetaria/Linguiçaria", icone: "icons/foodespeto.png", categoria: "alimentacao", top: 63, left: 69 },
            { id: "alim_rest_central", nome: "RESTAURANTE CENTRAL", tipo: "ALIMENTAÇÃO", legendaNome: "RESTAURANTE BAOBÁ", area: "Buffet a Vontade", desc: "🍽️ Restaurante Baboá (Buffet por Pessoa)", icone: "icons/restbaoba.png", categoria: "alimentacao", top: 45.5, left: 55.5 },
            { id: "alim_iglu", nome: "MOBILE IGLU", tipo: "ALIMENTAÇÃO", legendaNome: "MOBILE KIBON IGLU", area: "Sorvete para resfrescar!", desc: "Localizado na Reserva.", icone: "icons/mobileiglu.png", categoria: "alimentacao", top: 40, left: 70 },
            { id: "alim_canguru", nome: "QUIOSQUE CANGURU", tipo: "ALIMENTAÇÃO", legendaNome: "QUIÓSQUE CANGURU", area: "🍿 Café, Salgados e pipocas", desc: "Localizado na Reserva.", icone: "icons/pontocanguru.png", categoria: "alimentacao", top: 40, left: 74.5 },
            { id: "alim_hambvila", nome: "HAMBURGUERIA DA VILA", tipo: "ALIMENTAÇÃO", legendaNome: "HAMBURGUERIA DA VILA", area: "Ambiente aconchegante para refeições e lembranças", desc: "🍔Hamburgueria da Vila (Burgues e bebidas)", icone: "icons/hambvila.png", categoria: "alimentacao", top: 21, left: 51 },
            { id: "alim_cafevila", nome: "CAFETERIA DA VILA", tipo: "ALIMENTAÇÃO", legendaNome: "CAFETERIA DA VILA", area: "Ambiente aconchegante para refeições e lembranças", desc: "☕Vila Cafeteria (Cafés e salgados)", icone: "icons/cafevila.png", categoria: "alimentacao", top: 20.1, left: 53 },
            { id: "alim_shakedobin", nome: "SHAKE DO BIN", tipo: "ALIMENTAÇÃO", legendaNome: "SHAKE DO BIN", area: "Ambiente aconchegante para refeições e lembranças", desc: "🥤 Shake do Bin (Sorvetes e Shakes)", icone: "icons/pontoshake.png", categoria: "alimentacao", top: 19.1, left: 55 },
            { id: "alim_savana", nome: "RESTAURANTE SAVANA", tipo: "ALIMENTAÇÃO", legendaNome: "RESTAURANTE SAVANA", area: "Ambiente aconchegante para refeições e lembranças", desc: "🥩 Restaurante Savana (Carnes nobres)", icone: "icons/restsavana.png", categoria: "alimentacao", top: 18.5, left: 57 },
            { id: "alim_selva", nome: "SELVA DOS SABORES", tipo: "ALIMENTAÇÃO", legendaNome: "SELVA DOS SABORES", area: "Ambiente aconchegante para refeições e lembranças", desc: "🍕 Selva de Sabores (Pizzas e Crepes)<br>", icone: "icons/selvasabores.png", categoria: "alimentacao", top: 23.5, left: 52 },
            { id: "alim_hotdog", nome: "HOTDOG DO KIRAN", tipo: "ALIMENTAÇÃO", legendaNome: "HOT DOG DO KIRAN", area: "Ambiente aconchegante para refeições e lembranças", desc: "🌭Hot Dog do Kiran (Hot Dog's)", icone: "icons/hotdog.png", categoria: "alimentacao", top: 23, left: 54 },
            { id: "alim_tratoria", nome: "VILA TRATORIA", tipo: "ALIMENTAÇÃO", legendaNome: "VILA TRATORIA", area: "Ambiente aconchegante para refeições e lembranças", desc: "🍝Vila Tratoria (Massas e Carnes)", icone: "icons/tratoria.png", categoria: "alimentacao", top: 22, left: 56 },
            { id: "alim_cantgira", nome: "CANTINHO DA GIRAFA", tipo: "ALIMENTAÇÃO", legendaNome: "CANTINHO DA GIRAFA", area: "Ambiente aconchegante para refeições e lembranças", desc: "🍨 Cantinho da Girafa (Picoles e massas)", icone: "icons/pontocantinho.png", categoria: "alimentacao", top: 26, left: 53 },
            { id: "alim_cesta", nome: "CESTA PICNIC", tipo: "ALIMENTAÇÃO", legendaNome: "CESTA PIC NIC", area: "Diversão e refeição, tudo em um só lugar!", desc: "🍔 Cesta Pic Nic (Burgers e bebidas)", icone: "icons/cesta.png", categoria: "alimentacao", top: 15, left: 32 },
            { id: "alim_carrinho", nome: "CARRINHO DOCE e PIPOCA", tipo: "ALIMENTAÇÃO", legendaNome: "CARRINHO DE DOCE/PIPOCA", area: "Diversão e refeição, tudo em um só lugar!", desc: "🍿 Carrinho de Doce e Pipoca", icone: "icons/carrinho.png", categoria: "alimentacao", top: 18, left: 32 },
            { id: "alim_carrosel", nome: "CESTA CARROSEL", tipo: "ALIMENTAÇÃO", legendaNome: "CESTA CARROSEL", area: "Diversão e refeição, tudo em um só lugar!", desc: "☕ Carrossel (Porções e Cafés)", icone: "icons/carrosel.png", categoria: "alimentacao", top: 17.5, left: 35 },
            { id: "alim_deck", nome: "DECK PIC NIC", tipo: "ALIMENTAÇÃO", legendaNome: "DECK PIC NIC", area: "Diversão e refeição, tudo em um só lugar!", desc: "🍿 Deck Pic nic (Doce e Pipoca)", icone: "icons/deck.png", categoria: "alimentacao", top: 20.5, left: 35 },
            { id: "alim_mundodoce", nome: "MUNDO DOCE", tipo: "ALIMENTAÇÃO", legendaNome: "MUNDO DOCE", area: "Diversão e refeição, tudo em um só lugar!", desc: "🥮 Mundo Doce (Doces e Bebidas)", icone: "icons/mundodoce.png", categoria: "alimentacao", top: 20, left: 38 },
            { id: "alim_lego", nome: "LEGO", tipo: "ALIMENTAÇÃO", legendaNome: "QUIÓSQUE LEGO", area: "Diversão e refeição, tudo em um só lugar!", desc: "🥮 Lego (Doces e Bebidas)", icone: "icons/lego.png", categoria: "alimentacao", top: 23, left: 38 },
            { id: "alim_splash", nome: "QUIOSQUE SPLASH", tipo: "ALIMENTAÇÃO", legendaNome: "QUIÓSQUE SPLASH", area: "🍿 Café, Salgados e pipocas", desc: "Localizado próximo ao vulcão.", icone: "icons/splash.png", categoria: "alimentacao", top: 7, left: 41 },
            { id: "alim_viking", nome: "QUIOSQUE VIKING", tipo: "ALIMENTAÇÃO", legendaNome: "QUIÓSQUE VIKING", area: "🍿 Café, Salgados e pipocas", desc: "Localizado na entrada do Outdoor.", icone: "icons/viking.png", categoria: "alimentacao", top: 14, left: 39 },
            { id: "alim_aviario", nome: "CAFÉ AVIÁRIO", tipo: "ALIMENTAÇÃO", legendaNome: "CAFÉ CAVERNA/AVIÁRIO", area: "Um dos Maiores Aviários da América Latina", desc: "☕ Café Caverna (Cafés e salgados)", icone: "icons/cafecaverna.png", categoria: "alimentacao", top: 60, left: 35 },

            // Banheiros
            { id: "wc_recepcao", nome: "WC RECEPÇÃO", tipo: "BANHEIROS", legendaNome: "RECEPÇÃO", area: "Localizado na Recepção", desc: "🚻 Banheiro (Comum e Acessível)", icone: "icons/banheiro.png", categoria: "banheiros", top: 27, left: 48 },
            { id: "wc_leao", nome: "WC LEÃO", tipo: "BANHEIROS", legendaNome: "LEÃO", area: "Localizado logo após o recinto do leão", desc: "🚻 Banheiro (Comum e Acessível)", icone: "icons/banheiro.png", categoria: "banheiros", top: 47.5, left: 42 },
            { id: "wc_aviario", nome: "WC AVIÁRIO", tipo: "BANHEIROS", legendaNome: "AVIÁRIO", area: "Localizado dentro do Aviário", desc: "🚻 Banheiro (Comum e Acessível)", icone: "icons/banheiro.png", categoria: "banheiros", top: 60, left: 35 },
            { id: "wc_baoba", nome: "WC RESTAURANTE BAOBÁ", tipo: "BANHEIROS", legendaNome: "RESTAURANTE BAOBÁ", area: "Localizado na parte externa do Buffet", desc: "🚻 Banheiro (Comum e Acessível)", icone: "icons/banheiro.png", categoria: "banheiros", top: 53, left: 52 },
            { id: "wc_fazendinha", nome: "WC FAZENDINHA", tipo: "BANHEIROS", legendaNome: "FAZENDINHA", area: "Localizado perto do desembarque Estação 2.", desc: "🚻 Banheiro (Comum e Acessível)", icone: "icons/banheiro.png", categoria: "banheiros", top: 80, left: 60 },
            { id: "wc_food_park", nome: "WC FOOD PARK", tipo: "BANHEIROS", legendaNome: "FOOD PARK", area: "Localizado no Food Park", desc: "🚻 Banheiro (Comum e Acessível)", icone: "icons/banheiro.png", categoria: "banheiros", top: 60.5, left: 74.5 },
            { id: "wc_vila_animalia", nome: "WC VILA ANIMÁLIA", tipo: "BANHEIROS", legendaNome: "VILA ANIMALIA", area: "Localizado na Saída do Zoológico", desc: "🚻 Banheiro (Comum e Acessível)", icone: "icons/banheiro.png", categoria: "banheiros", top: 21, left: 56 },
            { id: "wc_div_indoor", nome: "WC DIV INDOOR", tipo: "BANHEIROS", legendaNome: "ANIMALIA DIVERSÃO", area: "Localizado dentro do Animália Diversão", desc: "🚻 Banheiro (Comum e Acessível)", icone: "icons/banheiro.png", categoria: "banheiros", top: 20, left: 38 },
            { id: "wc_div_outdoor", nome: "WC DIV OUTDOOR", tipo: "BANHEIROS", legendaNome: "ANIMALIA AVENTURA", area: "Localizado ao redor do Diversão Aventura", desc: "🚻 Banheiro (Comum e Acessível)", icone: "icons/banheiro.png", categoria: "banheiros", top: 15, left: 48 },
            { id: "wc_borboletario", nome: "WC BORBOLETÁRIO", tipo: "BANHEIROS", legendaNome: "JARDIM DAS BORBOLETAS", area: "Localizado na parte externa do Buffet", desc: "🚻 Banheiro (Comum e Acessível)", icone: "icons/banheiro.png", categoria: "banheiros", top: 55, left: 55.5 },
            { id: "wc_hipopotamo", nome: "WC HIPOPOTAMO", tipo: "BANHEIROS", legendaNome: "HIPOPOTAMO", area: "Localizado em frente ao recinto do Hipopotamo", desc: "🚻 Banheiro (Comum e Acessível)", icone: "icons/banheiro.png", categoria: "banheiros", top: 43, left: 68 },

            // Souvenirs
            { id: "souv_adventure", nome: "ANIMALIA ADVENTURE", tipo: "SOUVENIR", legendaNome: "ANIMALIA ADVENTURE<br>Loja de souvenier", area: "Onde tudo começa e aonde damos um até breve!", desc: "🧸 Animalia Adventure (Souvenir)", icone: "icons/souvenir.png", categoria: "souvenir", top: 27, left: 47 },
            { id: "souv_vilas", nome: "VILAS ADVENTURE", tipo: "SOUVENIR", legendaNome: "VILA ANIMALIA<br>Loja de souvenier", area: "Ambiente aconchegante para refeições e garantir uma lembrança", desc: "🧸 Vila Adventure (Souvenir)", icone: "icons/souvenir.png", categoria: "souvenir", top: 19.1, left: 55 },
            { id: "souv_baby", nome: "BABY ZOO", tipo: "SOUVENIR", legendaNome: "BABY ZOO<br>Loja de souvenier", area: "Ambiente aconchegante para refeições e garantir uma lembrança", desc: "🧸 Baby Zoo (Souvenir)", icone: "icons/souvenir.png", categoria: "souvenir", top: 20.1, left: 53 },
            { id: "souv_est.fazenda", nome: "ESTAÇÃO SOUVENIR", tipo: "SOUVENIR", legendaNome: "ESTAÇÃO. FAZENDINHA<br>Loja de souvenier", area: "Ambiente aconchegante para refeições e lembranças", desc: "🧸 Estação Souvenir (Ursinhos e lembrancinhas)", icone: "icons/souvenir.png", categoria: "souvenir", top: 78, left: 64 },
            { id: "souv_divavd", nome: "DIVERSÂO ADVENTURE", tipo: "SOUVENIR", legendaNome: "DIVERSÃO ADVENTURE<br>Loja de souvenier", area: "Diversão e Pelucia!", desc: "🧸 Diversão Adventure (Souvenir)", icone: "icons/souvenir.png", categoria: "souvenir", top: 20, left: 37},
            { id: "foto_aviario", nome: "FOTO OFICIAL AVIÁRIO", tipo: "SOUVENIR", legendaNome: "FOTO OFICIAL<br>Ponto Tira foto", area: "Leve uma recordação para casa!", desc: "📸 Fotografia Oficial", icone: "icons/foto.png", categoria: "souvenir", top: 56, left: 38 },            
            { id: "foto_recepcao", nome: "FOTO OFICIAL RECEPÇÃO", tipo: "SOUVENIR", legendaNome: "FOTO OFICIAL<br>Ponto Compra foto", area: "Leve uma recordação para casa!", desc: "📸 Fotografia Oficial", icone: "icons/foto.png", categoria: "souvenir", top: 27, left: 49 },  

            // Serviços
            { id: "serv_sav", nome: "SAV", tipo: "SERVIÇOS", legendaNome: "SAV - ATENDIMENTO AO VISITANTE", area: "Reclamações, elogios ou retirada de duvidas", desc: "💻 SAV (Serviço de Atendimento ao Visitante)", icone: "icons/recepcao.png", categoria: "servicos", top: 27, left: 48 },
            { id: "serv_ambulatorio", nome: "AMBULATÓRIO", tipo: "SERVIÇOS", legendaNome: "AMBULATÓRIO MÉDICO", area: "Ambulatório teste Animália Park", desc: "Localizado na Vila Animália.", icone: "icons/ambulatorio.png", categoria: "servicos", top: 26, left: 53 },
            { id: "serv_estacionamento2", nome: "ESTACIONAMENTO EXTERNO", tipo: "SERVIÇOS", legendaNome: "ESTACIONAMENTO EXTERNO", area: "Estacionamento seguro e com Transfer", desc: "🚗 Vagas Comuns<br>♿ Vagas Acessíveis<br>", icone: "icons/estacionamento.png", categoria: "servicos", top: 76, left: 46 },
            { id: "serv_estacionamento1", nome: "ESTACIONAMENTO INTERNO", tipo: "SERVIÇOS", legendaNome: "ESTACIONAMENTO INTERNO", area: "Vaga garantida e seu carro assegurado!", desc: "🚗 Vagas Comuns<br>♿ Vagas Acessíveis<br>🪫 Vagas para Carros Eletrificados<br>", icone: "icons/estacionamento.png", categoria: "servicos", top: 40, left: 28 },

            // Atrações
            { id: "atracao_indoor", nome: "🎡 ANIMALIA DIVERSÃO", tipo: "ATRAÇÕES", legendaNome: "ANIMALIA DIVERSÃO<br>Galpão indoor", area: "Atrações Mágicas e divertidas!", desc: "🐸 Vitória Régia<br>🛩️ Eagle Flight (Aviãozinho)<br>🎈 Balão Mexicano<br>👒 Forte Apache (Trenzinho)<br>🦘 Kanguroo Joy<br>🦒 Giraffe Cool<br>🎠 Bella Giostra (Carrossel)<br>🩻 Joe Caveira<br>🧗 Kite Dragon<br>🍭 Mundo Doce<br>⛵ Rise of Rome<br>🥶 Bear Mountain<br>🏎 Big Chock (bate-bate)<br>🧩 Cantinho do Silêncio (Para pessoas neurodivergentes)<br>", icone: "icons/divindoor.png", categoria: "atracao", top: 21, left: 38 },
            { id: "atracao_aventura", nome: "🎢 ANIMALIA AVENTURA", tipo: "ATRAÇÕES", legendaNome: "ANIMALIA AVENTURA<br>Area Externa", area: "Atrações Radicaaaaais!", desc: "⛵ Barco Viking (Aqui tem que gritar)<br>💧 Splash (Águaaaa)<br>🥶 Cyber Hawk (De ponta cabeça)<br>🎢 Cyclone (Intensidade e aventura)<br>🐀 Big Air Coaster (Essa é leve)<br>🔫 Aqua Combat (Combate aquático)<br>", icone: "icons/divoutdoor.png", categoria: "atracao", top: 10, left: 40 },
            { id: "atracao_tel_est2", nome: "WALK IN THE FOREST", tipo: "ATRAÇÕES", legendaNome: "ESTAÇÃO TELEFÉRICO<br>Fazendinha", area: "Estação teleférico Vila Animalia", desc: "🚠 Estação Teleférico (Vai e Volta ou só vai)", icone: "icons/estacao.png", categoria: "atracao", top: 82, left: 65 },
            { id: "atracao_tel_est1", nome: "WALK IN THE FOREST", tipo: "ATRAÇÕES", legendaNome: "ESTAÇÃO TELEFÉRICO<br>Vila Animália", area: "Estação teleférico Fazendinha", desc: "🚠 Estação Teleférico (Vai e Volta ou só vai)", icone: "icons/estacao.png", categoria: "atracao", top: 20, left: 53 },

                 // SAVANA AFRICANA
            { id: "zoo_savanafricana", nome: "SAVANA AFRICANA", tipo: "ANIMÁLIA SAVANA AFRICANA", legendaNome: "SAVANA AFRICANA<br>African Savanna", area: "African Savanna", desc: "GIRAFA / Southern Giraffe<br>ZEBRA / Plains Zebra<br>AVESTRUZ COMUM / Ostrich<br>COBO-DO-NILO / Nile lechwe<br>ORYX / Gemsbok<br>CERVICABRA / Blackbuk<br>WATERBUCK<br>ADAX / Addax<br>FLAMINGO-ROSADO / Greater Flamingo<br>GALINHA-D'ANGOLA / Helmeted Guineafowl<br>GANSO-DO-EGITO / Egyptian Goose<br>", icone: "icons/1.png", categoria: "animais", top: 35, left: 52 },

                 // ZOO 1
            { id: "zoo_leao", nome: "LEÃO", tipo: "ANIMÁLIA RESERVA", legendaNome: "LEÃO<br>Lion", area: "Lion", desc: "Colocar descrição do animal", icone: "icons/2.png", categoria: "animais", top: 44, left: 38.5 },
            { id: "zoo_Fig", nome: "MIRANTE-FIGUEIRA", tipo: "ANIMÁLIA RESERVA", legendaNome: "MIRANTE-FIGUEIRA<br>Fig tree belvedere", area: "Fig tree belvedere", desc: "Colocar descrição do animal", icone: "icons/3.png", categoria: "animais", top: 48, left: 43 },
            { id: "zoo_orq", nome: "ORQUIDÁRIO", tipo: "ANIMÁLIA RESERVA", legendaNome: "ORQUIDÁRIO<br>Orchidary", area: "Orchidary", desc: "Colocar descrição do animal", icone: "icons/4.png", categoria: "animais", top: 52, left: 35 },
            { id: "zoo_onça", nome: "ONÇA-PINTADA", tipo: "ANIMÁLIA RESERVA", legendaNome: "ONÇA-PINTADA<br>Jaguar", area: "Jaguar", desc: "Colocar descrição do animal", icone: "icons/5.png", categoria: "animais", top: 51, left: 29 },
            { id: "zoo_sai", nome: "SAUIM-DE-COLEIRA", tipo: "ANIMÁLIA RESERVA", legendaNome: "SAUIM-DE-COLEIRA<br>Pied Tamarin", area: "Pied Tamarin", desc: "Colocar descrição do animal", icone: "icons/6.png", categoria: "animais", top: 54, left: 35 },

                 // FOREST
            { id: "zoo_aviário", nome: "Aviário Animália Park", tipo: "ANIMÁLIA FOREST", legendaNome: "ANIMÁLIA FOREST", area: "Animais que voce encontra aqui:", desc: "AVES / Birds<br>ANTA / Lowland Tapir<br>CUTIA / Azara's Agouti<br>LONTRA / Neotropical Otter<br>VEADO-CATINGUEIRO / Gray brocket<br>CAGADOS - JABUTIS / Chelidae - Tortoise<br>IGUANA<br>JIBOIAS - ARIRANHA / Boa - Giant Otter<br>", icone: "icons/7.png", categoria: "animais", top: 60, left: 35 },

                // ZOO 2
            { id: "zoo_macaranha", nome: "MACACO-ARANHA / BUGIO-RUIVO", tipo: "ANIMÁLIA RESERVA", legendaNome: "MACACO-ARANHA / BUGIO-RUIVO", area: "Guiana Spider Monkey / Southern Brown Howler Monkey", desc: "Colocar descrição do animal", icone: "icons/8.png", categoria: "animais", top: 57, left: 39 },
            { id: "zoo_sucuarana", nome: "SUÇUARANA", tipo: "ANIMÁLIA RESERVA", legendaNome: "SUÇUARANA<br>Puma", area: "Puma", desc: "Colocar descrição do animal", icone: "icons/9.png", categoria: "animais", top: 65, left: 45 },
            { id: "zoo_urso", nome: "URSO-DE-ÓCULOS", tipo: "ANIMÁLIA RESERVA", legendaNome: "URSO-DE-ÓCULOS<br>Spectacled Bear", area: "Spectacled Bear", desc: "Colocar descrição do animal", icone: "icons/10.png", categoria: "animais", top: 68, left: 50 },
            { id: "zoo_tamandua", nome: "TAMANDUÁ-MIRIM", tipo: "ANIMÁLIA RESERVA", legendaNome: "TAMANDUÁ-MIRIM<br>Southern Tamanudá", area: "Southern Tamanudá", desc: "Colocar descrição do animal", icone: "icons/11.png", categoria: "animais", top: 57, left: 45 },
            { id: "zoo_lobo", nome: "LOBO-GUARÁ", tipo: "ANIMÁLIA RESERVA", legendaNome: "LOBO-GUARÁ<br>Maned Wolf", area: "Maned Wolf", desc: "Colocar descrição do animal", icone: "icons/12.png", categoria: "animais", top: 60, left: 44 },
            { id: "zoo_raposa", nome: "RAPOSINHA-DO-CAMPO", tipo: "ANIMÁLIA RESERVA", legendaNome: "RAPOSINHA-DO-CAMPO<br>Hoary Fox", area: "Hoary Fox", desc: "Colocar descrição do animal", icone: "icons/13.png", categoria: "animais", top: 40, left: 45 },
            { id: "zoo_tamandban", nome: "TAMANDUÁ-BANDEIRA", tipo: "ANIMÁLIA RESERVA", legendaNome: "TAMANDUÁ-BANDEIRA<br>Giant Anteater", area: "Giant Anteater", desc: "Colocar descrição do animal", icone: "icons/14.png", categoria: "animais", top: 60, left: 52.5 },
            { id: "zoo_arara", nome: "ARARAS ESPECIAIS", tipo: "ANIMÁLIA RESERVA", legendaNome: "ARARAS ESPECIAIS<br>Special Macaws", area: "Special Macaws", desc: "Colocar descrição do animal", icone: "icons/15.png", categoria: "animais", top: 65, left: 58 },
            { id: "zoo_cahvinagre", nome: "CACHORRO-VINAGRE", tipo: "ANIMÁLIA RESERVA", legendaNome: "CACHORRO-VINAGRE<br>Bush Dog", area: "Bush Dog", desc: "Colocar descrição do animal", icone: "icons/16.png", categoria: "animais", top: 75, left: 57 },
                 
                   // FAZENDA
            { id: "zoo_fazenda", nome: "FAZENDA ANIMÁLIA", tipo: "FAZENDA ANIMÁLIA", legendaNome: "FAZENDA ANIMÁLIA", area: "Animais que voce encontra aqui:", desc: "PATO<br>CAVALO<br>", icone: "icons/17.png", categoria: "animais", top: 83, left: 57 },
            { id: "zoo_chimp", nome: "CHIMPANZÉ", tipo: "ANIMÁLIA RESERVA", legendaNome: "CHIMPANZÉ<br>Chimpanzee", area: "Chimpanzee", desc: "Colocar descrição do animal", icone: "icons/18.png", categoria: "animais", top: 78, left: 67  },
            { id: "zoo_aoud", nome: "AOUDADS", tipo: "ANIMÁLIA RESERVA", legendaNome: "AOUDADS<br>Barbary Sheep", area: "Barbary Sheep", desc: "Colocar descrição do animal", icone: "icons/19.png", categoria: "animais", top: 78, left: 70 },
            { id: "zoo_beng", nome: "TIGRE-DE-BENGALA", tipo: "ANIMÁLIA RESERVA", legendaNome: "TIGRE-DE-BENGALA<br>Bengal Tiger", area: "Bengal Tiger", desc: "Colocar descrição do animal", icone: "icons/20.png", categoria: "animais", top: 87.5, left: 70 },
            { id: "zoo_jaca", nome: "JACARÉ-DE-PAPO-AMARELO", tipo: "ANIMÁLIA RESERVA", legendaNome: "JACARÉ-DE-PAPO-AMARELO<br>Yellow-Snouted Caiman", area: "Yellow-Snouted Caiman", desc: "Colocar descrição do animal", icone: "icons/21.png", categoria: "animais", top: 90, left: 72 },
            { id: "zoo_hie", nome: "HIENA-LISTRADA", tipo: "ANIMÁLIA RESERVA", legendaNome: "HIENA-LISTRADA<br>Striped Hyaena", area: "Striped Hyaena", desc: "Colocar descrição do animal", icone: "icons/22.png", categoria: "animais", top: 88, left: 74 },
            { id: "zoo_lemur", nome: "LÊMURE-NEGRO", tipo: "ANIMÁLIA RESERVA", legendaNome: "LÊMURE-NEGRO<br>lack Lemur", area: "Black Lemur", desc: "Colocar descrição do animal", icone: "icons/23.png", categoria: "animais", top: 89, left: 75 },
            { id: "zoo_Hien", nome: "HIENA-MALHADA", tipo: "ANIMÁLIA RESERVA", legendaNome: "HIENA-MALHADA<br>Spotted Hyaenar", area: "Spotted Hyaena", desc: "Colocar descrição do animal", icone: "icons/24.png", categoria: "animais", top: 88, left: 78 },
            { id: "zoo_sur", nome: "SURICATO", tipo: "ANIMÁLIA RESERVA", legendaNome: "SURICATO<br>Meerkat", area: "Meerkat", desc: "Colocar descrição do animal", icone: "icons/25.png", categoria: "animais", top: 86, left: 77 },
            { id: "zoo_gorila", nome: "GORILA", tipo: "ANIMÁLIA RESERVA", legendaNome: "GORILA<br>Gorilla", area: "Gorilla", desc: "Colocar descrição do animal", icone: "icons/26.png", categoria: "animais", top: 83, left: 73 },
            { id: "zoo_lemur", nome: "LÊMURE-PRETO-E-BRANCO", tipo: "ANIMÁLIA RESERVA", legendaNome: "LÊMURE-PRETO-E-BRANCO<br>Black and White Lemur", area: "Black and White Lemur", desc: "Colocar descrição do animal", icone: "icons/27.png", categoria: "animais", top: 83, left: 77 },
            { id: "zoo_lobo", nome: "LOBO-MARINHO", tipo: "ANIMÁLIA RESERVA", legendaNome: "LOBO-MARINHO<br>Afro-Australian fur Seal", area: "Afro-Australian fur Seal", desc: "Colocar descrição do animal", icone: "icons/28.png", categoria: "animais", top: 80, left: 78 },
            { id: "zoo_rino", nome: "RINOCERONTE-INDIANO", tipo: "ANIMÁLIA RESERVA", legendaNome: "RINOCERONTE-INDIANO<br>Greater One-Horned Rhino", area: "Greater One-Horned Rhino", desc: "Recinto", icone: "icons/29.png", categoria: "animais", top: 72, left: 74 },
            { id: "zoo_lemur", nome: "LÊMURE-DE-CAUDA-ANELADA", tipo: "ANIMÁLIA RESERVA", legendaNome: "LÊMURE-DE-CAUDA-ANELADA<br>Ring-Tailed Lemur", area: "Ring-Tailed Lemur", desc: "Colocar descrição do animal", icone: "icons/30.png", categoria: "animais",  top: 68, left: 77 },
            { id: "zoo_mandril", nome: "MANDRIL", tipo: "ANIMÁLIA RESERVA", legendaNome: "MANDRIL<br>Mandrill", area: "Mandrill", desc: "Colocar descrição do animal", icone: "icons/31.png", categoria: "animais", top: 65, left: 75 },
            { id: "zoo_hipo", nome: "HIPOPOTAMO", tipo: "ANIMÁLIA RESERVA", legendaNome: "HIPOPOTAMO<br>Hippopotamus", area: "Hippopotamus", desc: "Colocar descrição do animal", icone: "icons/32.png", categoria: "animais", top: 42, left: 63 },
            { id: "zoo_camel", nome: "EMU-CAMELO", tipo: "ANIMÁLIA RESERVA", legendaNome: "EMU-CAMELO<br>Emu-Bactrian Camel", area: "Emu-Bactrian Camel", desc: "Colocar descrição do animal", icone: "icons/33.png", categoria: "animais", top: 45, left: 70 },
            { id: "zoo_canguru", nome: "CANGURU-VERMELHO", tipo: "ANIMÁLIA RESERVA", legendaNome: "CANGURU-VERMELHO<br>Red Kangaroo", area: "Red Kangaroo", desc: "Colocar descrição do animal", icone: "icons/34.png", categoria: "animais", top: 43, left: 75 },
            { id: "zoo_viveiro", nome: "VIVEIRO AVES ORNAMENTAIS", tipo: "ANIMÁLIA RESERVA", legendaNome: "VIVEIRO AVES ORNAMENTAIS<br>Ornamental Birds Aviary", area: "Ornamental Birds Aviary", desc: "Colocar descrição do animal", icone: "icons/35.png", categoria: "animais",  top: 23, left: 59 },
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
    
    const pontosDaLegenda = [];

    dadosPark.reserva.pontos.forEach(ponto => {
        if (categoriaFiltro === 'todos' || ponto.categoria === categoriaFiltro) {
            // Cria o marcador interativo no mapa
            const el = document.createElement("div");
            el.className = "ponto";
            el.style.top = ponto.top + "%";
            el.style.left = ponto.left + "%";
            el.innerHTML = `<img src="${ponto.icone}" alt="${ponto.nome}" class="icone-marcador">`;
            el.onclick = (e) => { e.stopPropagation(); abrirLocal(ponto); };
            camada.appendChild(el);

            // Adiciona na lista que vai popular a legenda lateral
            pontosDaLegenda.push(ponto);
        }
    });

    atualizarLegendaLateral(pontosDaLegenda);
}

function atualizarLegendaLateral(pontos) {
    const containerLegenda = document.getElementById("conteudoLegendaLateral");
    if (!containerLegenda) return;
    containerLegenda.innerHTML = "";

    pontos.forEach(ponto => {
        const item = document.createElement("div");
        item.className = "item-legenda-visual";
        item.style.cursor = "pointer";
        item.style.padding = "4px 0";
        item.style.alignItems = "center";
        item.style.display = "flex";
        item.style.gap = "8px";
        
        const textoLegenda = ponto.legendaNome || ponto.nome;
        item.innerHTML = `<img src="${ponto.icone}" alt="${textoLegenda}" style="width: 40px; height: 40px; object-fit: contain;"> <span>${textoLegenda}</span>`;

        // AO CLICAR NO ITEM DA LEGENDA: Dá zoom suave no mapa e abre o card de detalhes do local
        item.onclick = () => {
            focarNoPonto(ponto.top, ponto.left);
            abrirLocal(ponto);
        };

        containerLegenda.appendChild(item);
    });
}

// NOVA FUNÇÃO: Foca e centraliza suavemente no ponto clicado na legenda
function focarNoPonto(topPercent, leftPercent) {
    const container = document.getElementById("mapaContainer");
    const imgMapa = document.getElementById("imagemMapa");
    const mapaWrapper = document.getElementById("mapa");
    
    if (!container || !imgMapa) return;

    // Define o zoom ideal para focar no ponto (ex: 2.2x)
    scale = 1.8; 
    atualizarTransformacao();

    const realWidth = imgMapa.naturalWidth * scale;
    const realHeight = imgMapa.naturalHeight * scale;
    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;

    // Calcula a posição em pixels correspondente à porcentagem do ponto
    const pontoXPx = (leftPercent / 100) * realWidth;
    const pontoYPx = (topPercent / 100) * realHeight;

    // Centraliza o ponto no meio exato da tela
    pointX = (containerWidth / 2) - pontoXPx;
    pointY = (containerHeight / 2) - pontoYPx;

    // Aplica animação de transição suave
    mapaWrapper.style.transition = "transform 0.4s ease-in-out";
    atualizarTransformacao();

    // Remove a transição após o movimento para o arraste manual continuar livre
    setTimeout(() => {
        mapaWrapper.style.transition = "none";
    }, 400);
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

    // --- COLOQUE AQUI TAMBÉM FUNCIONA PERFEITAMENTE ---
    const painelLegenda = document.querySelector('.painel-legenda-lateral');
    if (painelLegenda) {
        ['touchstart', 'touchmove', 'touchend', 'mousedown', 'mousemove', 'mouseup', 'wheel'].forEach(evento => {
            painelLegenda.addEventListener(evento, (e) => {
                e.stopPropagation();
            }, { passive: false });
        });
    }

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


// ponto antigo, padrao google
//   topLeft:     { lat: -23.619760, lng: -46.970712 }, // Canto superior esquerdo
//   bottomRight: { lat: -23.626049, lng: -46.962151 }  // Canto inferior direito



// 1. Defina as coordenadas dos cantos da sua imagem (Seus dados reais)
const bounds = {
    topLeft:     { lat: -23.620150, lng: -46.970820 }, // Canto superior esquerdo
    bottomRight: { lat: -23.626049, lng: -46.962151 }  // Canto inferior direito
};

// Lista de pontos do trajeto (0% a 100%)
const rotaTrilha = [
    { percent: 0,   lat: -23.621430, lng: -46.966515 },
    { percent: 10,  lat: -23.622426, lng: -46.967513 },
    { percent: 20,  lat: -23.623628, lng: -46.967509 },
    { percent: 30,  lat: -23.623916, lng: -46.966510 },
    { percent: 40,  lat: -23.624614, lng: -46.965261 },
    { percent: 50,  lat: -23.624768, lng: -46.964401 },
    { percent: 60,  lat: -23.623350, lng: -46.964988 },
    { percent: 70,  lat: -23.622503, lng: -46.965436 },
    { percent: 80,  lat: -23.622142, lng: -46.964953 },
    { percent: 90,  lat: -23.622121, lng: -46.964939 },
    { percent: 100, lat: -23.621111, lng: -46.965892 }
];

function atualizarLocalizacaoUsuario(lat, lng) {
    const img = document.getElementById("imagemMapa");
    const marker = document.getElementById("user-marker");
    
    if (!img || !marker) return;

    // Pega o tamanho real que a imagem está ocupando na tela (já considerando o zoom)
    const currentWidth = img.clientWidth;   
    const currentHeight = img.clientHeight; 

    // Calcula a posição X e Y proporcional em pixels
    const x = ((lng - bounds.topLeft.lng) / (bounds.bottomRight.lng - bounds.topLeft.lng)) * currentWidth;
    const y = ((bounds.topLeft.lat - lat) / (bounds.topLeft.lat - bounds.bottomRight.lat)) * currentHeight;
    
    // Posiciona o marcador e o torna visível
    marker.style.left = `${x}px`;
    marker.style.top = `${y}px`;
    marker.style.display = "block";
}

// Função para calcular distância simples entre coordenadas
function calcularDistancia(lat1, lon1, lat2, lon2) {
    const x = lat2 - lat1;
    const y = lon2 - lon1;
    return Math.sqrt(x * x + y * y);
}

// Função para descobrir a porcentagem percorrida
function calcularProgressoTrilha(userLat, userLng) {
    let menorDistancia = Infinity;
    let porcentagemAtual = 0;

    for (let i = 0; i < rotaTrilha.length; i++) {
        const ponto = rotaTrilha[i];
        const distancia = calcularDistancia(userLat, userLng, ponto.lat, ponto.lng);

        if (distancia < menorDistancia) {
            menorDistancia = distancia;
            porcentagemAtual = ponto.percent;
        }
    }

    return porcentagemAtual;
}

// 2. Ativa o GPS do navegador em tempo real
if ("geolocation" in navigator) {
    navigator.geolocation.watchPosition(
        (position) => {
            const userLat = position.coords.latitude;
            const userLng = position.coords.longitude;

            // 1. Atualiza o ponto no mapa
            atualizarLocalizacaoUsuario(userLat, userLng);
            
            // 2. Calcula o progresso do trajeto
            const progresso = calcularProgressoTrilha(userLat, userLng);

            // 3. Exibe os dados no console
            console.log(`GPS Ativo -> Lat: ${userLat}, Lng: ${userLng} | Progresso: ${progresso}%`);

            // 4. Se você tiver um elemento na tela para exibir a porcentagem (ex: <span id="progressoTexto"></span>)
            const elementoProgresso = document.getElementById("progressoTexto");
            if (elementoProgresso) {
                elementoProgresso.innerText = `${progresso}% concluído`;
            }
        },
        (error) => {
            console.warn("Aviso de Geolocalização: ", error.message);
        },
        {
            enableHighAccuracy: true, // Força alta precisão (ideal para celular)
            maximumAge: 0,
            timeout: 10000
        }
    );
} else {
    console.warn("Seu navegador não suporta geolocalização.");
}
