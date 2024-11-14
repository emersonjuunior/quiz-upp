const questions = {
  conhecimentosGerais: [
    {
      id: 1,
      question: "Qual é o maior animal terrestre?",
      correct_answer: "Elefante africano",
      incorrect_answers: ["Girafa", "Búfalo", "Rinoceronte"],
    },
    {
      id: 2,
      question: "Qual é a capital do Japão?",
      correct_answer: "Tóquio",
      incorrect_answers: ["Pequim", "Seul", "Bangkok"],
    },
    {
      id: 3,
      question: "Qual é a fórmula da água?",
      correct_answer: "H2O",
      incorrect_answers: ["CO2", "O2", "H2"],
    },
    {
      id: 4,
      question: "Quem pintou a Mona Lisa?",
      correct_answer: "Leonardo da Vinci",
      incorrect_answers: ["Vincent van Gogh", "Pablo Picasso", "Michelangelo"],
    },
    {
      id: 5,
      question:
        "Em que ano foi assinada a Lei Áurea, abolindo a escravidão no Brasil?",
      correct_answer: "1888",
      incorrect_answers: ["1886", "1871", "1890"],
    },
    {
      id: 6,
      question: "Qual é o maior planeta do Sistema Solar?",
      correct_answer: "Júpiter",
      incorrect_answers: ["Saturno", "Terra", "Vênus"],
    },
    {
      id: 7,
      question: "Qual é o maior continente em termos de área?",
      correct_answer: "Ásia",
      incorrect_answers: ["África", "América", "Europa"],
    },
    {
      id: 8,
      question: "Qual é a unidade básica da vida?",
      correct_answer: "Célula",
      incorrect_answers: ["Molécula", "Átomo", "Orgânulo"],
    },
    {
      id: 9,
      question: "Quem foi o primeiro homem a pisar na Lua?",
      correct_answer: "Neil Armstrong",
      incorrect_answers: ["Buzz Aldrin", "Yuri Gagarin", "Michael Collins"],
    },
    {
      id: 10,
      question: "Qual foi o primeiro império da história?",
      correct_answer: "Império Acádio",
      incorrect_answers: ["Império Romano", "Império Egípcio", "Império Persa"],
    },
    {
      id: 11,
      question: "De quem é a famosa frase 'Penso, logo existo'?",
      correct_answer: "Descartes",
      incorrect_answers: ["Platão", "Galileu Galilei", "Sócrates"],
    },
    {
      id: 12,
      question: "Quem inventou a lâmpada elétrica?",
      correct_answer: "Thomas Edison",
      incorrect_answers: [
        "Nikola Tesla",
        "Albert Einstein",
        "Benjamin Franklin",
      ],
    },
    {
      id: 13,
      question: "Qual é o animal mais rápido do mundo?",
      correct_answer: "Guepardo",
      incorrect_answers: ["Leão", "Águia", "Falcão"],
    },
    {
      id: 14,
      question: "Qual é o planeta mais próximo do Sol?",
      correct_answer: "Mercúrio",
      incorrect_answers: ["Vênus", "Terra", "Marte"],
    },
    {
      id: 15,
      question: "Qual é a velocidade da luz?",
      correct_answer: "299 792 458 metros por segundo (m/s)",
      incorrect_answers: [
        "300 000 000 metros por segundo (m/s)",
        "150 000 000 metros por segundo (m/s)",
        "199 792 458 metros por segundo (m/s)",
      ],
    },
    {
      id: 16,
      question: "Quem foi o criador da teoria da relatividade?",
      correct_answer: "Albert Einstein",
      incorrect_answers: ["Isaac Newton", "Niels Bohr", "Galileu Galilei"],
    },
    {
      id: 17,
      question:
        "Qual a religião monoteísta que conta com o maior número de adeptos no mundo?",
      correct_answer: "Cristianismo",
      incorrect_answers: ["Judaísmo", "Budismo", "Islamismo"],
    },
    {
      id: 18,
      question: "Quem foi o primeiro presidente do Brasil?",
      correct_answer: "Marechal Deodoro da Fonseca",
      incorrect_answers: [
        "Getúlio Vargas",
        "Juscelino Kubitschek",
        "Dom Pedro II",
      ],
    },
    {
      id: 19,
      question:
        "Qual é o nome do processo pelo qual as plantas fazem sua própria comida?",
      correct_answer: "Fotossíntese",
      incorrect_answers: ["Respiração", "Transpiração", "Fermentação"],
    },
    {
      id: 20,
      question: "Quem foi o autor de 'Dom Quixote'?",
      correct_answer: "Miguel de Cervantes",
      incorrect_answers: [
        "William Shakespeare",
        "Fernando Pessoa",
        "Machado de Assis",
      ],
    },
  ],
  geografia: [
    {
      id: 21,
      question: "Qual é o maior continente do mundo?",
      correct_answer: "Ásia",
      incorrect_answers: ["África", "América do Norte", "Europa"],
    },
    {
      id: 22,
      question: "Qual é o país mais populoso do mundo?",
      correct_answer: "Índia",
      incorrect_answers: ["Estados Unidos", "China", "Brasil"],
    },
    {
      id: 23,
      question: "Em que continente está localizado o Egito?",
      correct_answer: "África",
      incorrect_answers: ["Ásia", "Europa", "América do Sul"],
    },
    {
      id: 24,
      question: "Qual a montanha mais alta do Brasil?",
      correct_answer: "Pico da Neblina",
      incorrect_answers: ["Pico da Bandeira", "Monte Roraima", "Pico Paraná"],
    },
    {
      id: 25,
      question: "Qual é a capital da França?",
      correct_answer: "Paris",
      incorrect_answers: ["Londres", "Roma", "Madrid"],
    },
    {
      id: 26,
      question: "Qual país tem a maior área territorial do mundo?",
      correct_answer: "Rússia",
      incorrect_answers: ["China", "Estados Unidos", "Canadá"],
    },
    {
      id: 27,
      question: "Qual é o rio mais longo do mundo?",
      correct_answer: "Amazonas",
      incorrect_answers: ["Nilo", "Yangtze", "Mississippi"],
    },
    {
      id: 28,
      question: "Qual é o maior deserto do mundo?",
      correct_answer: "Antártida",
      incorrect_answers: [
        "Deserto do Saara",
        "Deserto de Gobi",
        "Deserto de Kalahari",
      ],
    },
    {
      id: 29,
      question: "Qual é a maior ilha do mundo?",
      correct_answer: "Groenlândia",
      incorrect_answers: ["Nova Guiné", "Borneu", "Madagascar"],
    },
    {
      id: 30,
      question: "Qual é o país conhecido como a Terra do Sol Nascente?",
      correct_answer: "Japão",
      incorrect_answers: ["Coreia do Sul", "China", "Tailândia"],
    },
    {
      id: 31,
      question: "Qual dessas não é uma região do Brasil?",
      correct_answer: "Oeste",
      incorrect_answers: ["Sul", "Norte", "Nordeste"],
    },
    {
      id: 32,
      question: "Qual é a capital da Austrália?",
      correct_answer: "Canberra",
      incorrect_answers: ["Sydney", "Melbourne", "Brisbane"],
    },
    {
      id: 33,
      question: "Em qual continente está localizada a floresta amazônica?",
      correct_answer: "América do Sul",
      incorrect_answers: ["África", "Ásia", "América do Norte"],
    },
    {
      id: 34,
      question: "Qual é o maior rio do mundo?",
      correct_answer: "Rio Amazonas",
      incorrect_answers: ["Rio Nilo", "Rio Yangtzé", "Rio Mississippi"],
    },
    {
      id: 35,
      question: "Qual desses países não fazem fronteira com o Brasil?",
      correct_answer: "Chile",
      incorrect_answers: ["Bolívia", "Colômbia", "Suriname"],
    },
    {
      id: 36,
      question: "Em que país se encontra a cidade de Machu Picchu?",
      correct_answer: "Peru",
      incorrect_answers: ["Chile", "Bolívia", "Equador"],
    },
    {
      id: 37,
      question: "Qual é o deserto mais seco do mundo?",
      correct_answer: "Deserto de Atacama",
      incorrect_answers: [
        "Deserto do Saara",
        "Deserto de Gobi",
        "Deserto de Kalahari",
      ],
    },
    {
      id: 38,
      question: "Qual é o maior oceano do mundo?",
      correct_answer: "Oceano Pacífico",
      incorrect_answers: ["Oceano Atlântico", "Oceano Índico", "Oceano Ártico"],
    },
    {
      id: 39,
      question: "Qual país tem mais ilhas no mundo?",
      correct_answer: "Suécia",
      incorrect_answers: ["Finlândia", "Grécia", "Estados Unidos"],
    },
    {
      id: 40,
      question: "Qual é o ponto mais baixo da Terra?",
      correct_answer: "Fossa das Marianas",
      incorrect_answers: ["Mar Morto", "Vale da Morte", "Grand Canyon"],
    },
  ],
  entreterimento: [
    {
      id: 41,
      question: "Qual filme da Disney apresenta um leão chamado Simba?",
      correct_answer: "O Rei Leão",
      incorrect_answers: ["Aladdin", "Cinderela", "A Bela e a Fera"],
    },
    {
      id: 42,
      question: "Quem é o super-herói conhecido como Homem de Ferro?",
      correct_answer: "Tony Stark",
      incorrect_answers: ["Bruce Wayne", "Steve Rogers", "Peter Parker"],
    },
    {
      id: 43,
      question: "Qual é o nome do famoso bruxo criado por J.K. Rowling?",
      correct_answer: "Harry Potter",
      incorrect_answers: ["Frodo Baggins", "Percy Jackson", "Hermione Granger"],
    },
    {
      id: 44,
      question: "Quem é o cantor famoso pela música 'Thriller'?",
      correct_answer: "Michael Jackson",
      incorrect_answers: ["Elvis Presley", "Prince", "Justin Timberlake"],
    },
    {
      id: 45,
      question:
        "Qual série de TV é famosa por ser sobre um grupo de amigos que vive em Nova York?",
      correct_answer: "Friends",
      incorrect_answers: [
        "The Office",
        "How I Met Your Mother",
        "Big Bang Theory",
      ],
    },
    {
        id: 46,
        question: "Qual é o nome do personagem principal de 'O Senhor dos Anéis'?",
        correct_answer: "Frodo Baggins",
        incorrect_answers: [
          "Aragorn",
          "Gandalf",
          "Legolas",
        ],
      },
      {
        id: 47,
        question: "Qual é o nome da princesa da Disney que perdeu seu sapatinho de cristal?",
        correct_answer: "Cinderela",
        incorrect_answers: [
          "Branca de Neve",
          "Ariel",
          "Aurora",
        ],
      },
      {
        id: 48,
        question: "Qual desses filmes é uma animação da Pixar?",
        correct_answer: "Toy Story",
        incorrect_answers: [
          "Shrek",
          "Madagascar",
          "Kung Fu Panda",
        ],
      },
      {
        id: 49,
        question: "Qual é o nome do super-herói que se veste de morcego?",
        correct_answer: "Batman",
        incorrect_answers: [
          "Superman",
          "Homem-Aranha",
          "Flash",
        ],
      },
      {
        id: 50,
        question: "Qual é o nome do famoso filme que se passa em uma casa com brinquedos que ganham vida?",
        correct_answer: "Toy Story",
        incorrect_answers: [
          "O Rei Leão",
          "Monstros S.A.",
          "Procurando Nemo",
        ],
      },
      {
        id: 51,
        question: "Quem é o diretor do filme 'Jurassic Park'?",
        correct_answer: "Steven Spielberg",
        incorrect_answers: [
          "George Lucas",
          "James Cameron",
          "Ridley Scott",
        ],
      },
      {
        id: 52,
        question: "Qual desses não é um aplicativo de Streaming de Filmes?",
        correct_answer: "Spotify",
        incorrect_answers: [
          "Netflix",
          "Max",
          "Prime Video",
        ],
      },
      {
        id: 53,
        question: "Qual desses filmes é da DreamWorks?",
        correct_answer: "Shrek",
        incorrect_answers: [
          "Tarzan",
          "Bambi",
          "Mogli",
        ],
      },
      {
        id: 54,
        question: "Quem é o cantor famoso pela música 'Thriller'?",
        correct_answer: "Michael Jackson",
        incorrect_answers: [
          "Prince",
          "Elvis Presley",
          "Whitney Houston",
        ],
      },
      {
        id: 55,
        question: "Em qual país se passa a história de 'Chaves'?",
        correct_answer: "México",
        incorrect_answers: [
          "Brasil",
          "Estados Unidos",
          "Acapulco",
        ],
      },
      {
        id: 56,
        question: "Qual é o nome do famoso super-herói que usa um escudo de vibranium?",
        correct_answer: "Capitão América",
        incorrect_answers: [
          "Thor",
          "Homem de Ferro",
          "Hulk",
        ],
      },
      {
        id: 57,
        question: "Quem foi o primeiro artista a se apresentar no Super Bowl Halftime Show em 2020?",
        correct_answer: "Shakira",
        incorrect_answers: [
          "Beyoncé",
          "Katy Perry",
          "Lady Gaga",
        ],
      },
      {
        id: 58,
        question: "Em qual filme de animação um peixe chamado Marlin busca sua filha?",
        correct_answer: "Procurando Nemo",
        incorrect_answers: [
          "Aviões",
          "Monstros S.A.",
          "Os Incríveis",
        ],
      },
      {
        id: 59,
        question: "Qual é o nome do famoso filme que conta a história de um garoto e um alienígena chamado E.T.?",
        correct_answer: "E.T. - O Extraterrestre",
        incorrect_answers: [
          "Star Wars",
          "Contatos Imediatos do Terceiro Grau",
          "A Guerra dos Mundos",
        ],
      },
      {
        id: 60,
        question: "Quem interpretou o personagem Jack Dawson no filme 'Titanic'?",
        correct_answer: "Leonardo DiCaprio",
        incorrect_answers: [
          "Brad Pitt",
          "Johnny Depp",
          "Tom Cruise",
        ],
      }
  ],
  ciencias: [
    {
        id: 61,
        question: "Qual é o nome do processo pelo qual os seres humanos e animais produzem energia?",
        correct_answer: "Respiração celular",
        incorrect_answers: [
          "Transpiração",
          "Fermentação",
          "Fotossíntese",
        ],
      },
      {
        id: 62,
        question: "Qual é o órgão responsável pela produção de bile no corpo humano?",
        correct_answer: "Fígado",
        incorrect_answers: [
          "Estômago",
          "Rins",
          "Pâncreas",
        ],
      },
      {
        id: 63,
        question: "Quantos dentes permanentes um adulto geralmente tem?",
        correct_answer: "32",
        incorrect_answers: [
          "28",
          "30",
          "34",
        ],
      },
      {
        id: 64,
        question: "Qual dos seguintes animais é um mamífero?",
        correct_answer: "Cachorro",
        incorrect_answers: [
          "Cobra",
          "Iguana",
          "Pato",
        ],
      },
      {
        id: 65,
        question: "O que é a biodiversidade?",
        correct_answer: "A variedade de seres vivos em um determinado ambiente",
        incorrect_answers: [
          "A quantidade de poluentes em um ecossistema",
          "A quantidade de água potável disponível no mundo",
          "A variação das estações do ano",
        ],
      },
      {
        id: 66,
        question: "Qual é a função dos glóbulos vermelhos no corpo humano?",
        correct_answer: "Transportar oxigênio",
        incorrect_answers: [
          "Defender contra doenças",
          "Produzir hormônios",
          "Transportar nutrientes",
        ],
      },
      {
        id: 67,
        question: "Em que parte do corpo humano fica o esôfago?",
        correct_answer: "No pescoço e no tórax",
        incorrect_answers: [
          "Na cabeça",
          "No abdômen",
          "Na perna",
        ],
      },
      {
        id: 68,
        question: "O que é um ecossistema?",
        correct_answer: "Uma comunidade de organismos interagindo com o ambiente",
        incorrect_answers: [
          "Uma cadeia alimentar",
          "Uma área com muitos animais",
          "Uma planta que cresce rapidamente",
        ],
      },
      {
        id: 69,
        question: "Qual é a principal função do sistema digestivo?",
        correct_answer: "Transformar alimentos em nutrientes",
        incorrect_answers: [
          "Transportar oxigênio para o corpo",
          "Produzir hormônios",
          "Filtrar toxinas do corpo",
        ],
      },
      {
        id: 70,
        question: "Qual desses alimentos é uma fonte de carboidrato?",
        correct_answer: "Arroz",
        incorrect_answers: [
          "Carne",
          "Leite",
          "Ovos",
        ],
      },
      {
        id: 71,
        question: "Qual é o maior órgão do corpo humano?",
        correct_answer: "Pele",
        incorrect_answers: [
          "Coração",
          "Fígado",
          "Cérebro",
        ],
      },
      {
        id: 72,
        question: "Como chamamos a substância que reveste os dentes e os protege?",
        correct_answer: "Esmalte",
        incorrect_answers: [
          "Dentina",
          "Gengiva",
          "Polpa dentária",
        ],
      },
      {
        id: 73,
        question: "Qual é o principal gás responsável pelo efeito estufa?",
        correct_answer: "Dióxido de carbono",
        incorrect_answers: [
          "Oxigênio",
          "Metano",
          "Nitrogênio",
        ],
      },
      {
        id: 74,
        question: "Qual é o nome da camada externa da Terra?",
        correct_answer: "Crosta",
        incorrect_answers: [
          "Manto",
          "Núcleo",
          "Litosfera",
        ],
      },
      {
        id: 75,
        question: "Qual é a unidade de medida de força no Sistema Internacional?",
        correct_answer: "Newton",
        incorrect_answers: [
          "Joule",
          "Pascal",
          "Watt",
        ],
      },
      {
        id: 76,
        question: "O que é o pH?",
        correct_answer: "A medida de acidez ou alcalinidade de uma substância",
        incorrect_answers: [
          "A medida de temperatura de uma substância",
          "A quantidade de matéria em uma substância",
          "A densidade de uma substância",
        ],
      },
      {
        id: 77,
        question: "O que são os hormônios?",
        correct_answer: "Substâncias que controlam várias funções no corpo",
        incorrect_answers: [
          "Substâncias que ajudam na digestão",
          "Substâncias que geram energia",
          "Substâncias que matam germes",
        ],
      },
      {
        id: 78,
        question: "O que é o sistema circulatório?",
        correct_answer: "Sistema responsável por transportar sangue e nutrientes pelo corpo",
        incorrect_answers: [
          "Sistema que produz energia",
          "Sistema que protege contra doenças",
          "Sistema que realiza a digestão",
        ],
      },
      {
        id: 79,
        question: "O que são os neurônios?",
        correct_answer: "Células que transmitem impulsos nervosos",
        incorrect_answers: [
          "Células que produzem sangue",
          "Células que realizam a digestão",
          "Células que protegem o corpo contra infecções",
        ],
      },
      {
        id: 80,
        question: "O que é um terremoto?",
        correct_answer: "O movimento brusco das placas tectônicas",
        incorrect_answers: [
          "O aumento de temperatura do núcleo da Terra",
          "A fusão de rochas no manto",
          "A erupção de um vulcão",
        ],
      }
  ],
  matematica: [
    {
        id: 81,
        question: "Qual é o valor de 5 × 9?",
        correct_answer: "45",
        incorrect_answers: [
          "40",
          "50",
          "55",
        ],
      },
      {
        id: 82,
        question: "Qual é a área de um quadrado com lado 8?",
        correct_answer: "64",
        incorrect_answers: [
          "72",
          "60",
          "80",
        ],
      },
      {
        id: 83,
        question: "Quantos lados tem um hexágono?",
        correct_answer: "6",
        incorrect_answers: [
          "5",
          "7",
          "8",
        ],
      },
      {
        id: 84,
        question: "Qual é a soma dos ângulos internos de um triângulo?",
        correct_answer: "180°",
        incorrect_answers: [
          "90°",
          "360°",
          "270°",
        ],
      },
      {
        id: 85,
        question: "Qual é a metade de 90?",
        correct_answer: "45",
        incorrect_answers: [
          "40",
          "50",
          "55",
        ],
      },
      {
        id: 86,
        question: "Qual é o valor de 3⁴ (3 elevado à quarta potência)?",
        correct_answer: "81",
        incorrect_answers: [
          "64",
          "72",
          "90",
        ],
      },
      {
        id: 87,
        question: "Se um círculo tem raio 7, qual é o seu diâmetro?",
        correct_answer: "14",
        incorrect_answers: [
          "12",
          "16",
          "10",
        ],
      },
      {
        id: 88,
        question: "Quanto é 12 + 15 × 2?",
        correct_answer: "42",
        incorrect_answers: [
          "30",
          "40",
          "45",
        ],
      },
      {
        id: 89,
        question: "Qual é a diferença entre 120 e 85?",
        correct_answer: "35",
        incorrect_answers: [
          "30",
          "40",
          "45",
        ],
      },
      {
        id: 90,
        question: "Qual é o valor de 7³ (7 elevado à terceira potência)?",
        correct_answer: "343",
        incorrect_answers: [
          "328",
          "350",
          "400",
        ],
      },
      {
        id: 91,
        question: "Quanto é 8 × 8?",
        correct_answer: "64",
        incorrect_answers: [
          "56",
          "72",
          "80",
        ],
      },
      {
        id: 92,
        question: "Qual é o resultado de 15 ÷ 3?",
        correct_answer: "5",
        incorrect_answers: [
          "4",
          "6",
          "3",
        ],
      },
      {
        id: 93,
        question: "Qual é o valor de 6² (6 elevado à segunda potência)?",
        correct_answer: "36",
        incorrect_answers: [
          "32",
          "38",
          "42",
        ],
      },
      {
        id: 94,
        question: "Qual é o valor de 25% de 200?",
        correct_answer: "50",
        incorrect_answers: [
          "40",
          "60",
          "45",
        ],
      },
      {
        id: 95,
        question: "Qual é a soma de 37 + 58?",
        correct_answer: "95",
        incorrect_answers: [
          "92",
          "97",
          "90",
        ],
      },
      {
        id: 96,
        question: "Qual é a multiplicação de 11 × 11?",
        correct_answer: "121",
        incorrect_answers: [
          "111",
          "100",
          "130",
        ],
      },
      {
        id: 97,
        question: "Qual é o valor de 5 × 7?",
        correct_answer: "35",
        incorrect_answers: [
          "30",
          "40",
          "45",
        ],
      },
      {
        id: 98,
        question: "Quanto é 90 ÷ 9?",
        correct_answer: "10",
        incorrect_answers: [
          "8",
          "12",
          "11",
        ],
      },
      {
        id: 99,
        question: "Qual é o valor de 3 × 3 × 3?",
        correct_answer: "27",
        incorrect_answers: [
          "24",
          "30",
          "25",
        ],
      },
      {
        id: 100,
        question: "Qual é o valor de 7 + 5 × 3?",
        correct_answer: "22",
        incorrect_answers: [
          "20",
          "21",
          "23",
        ],
      }
  ]
};

export default questions;
