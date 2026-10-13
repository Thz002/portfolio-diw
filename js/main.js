// =========================================================
//  Códice de Thiago - main.js
//  1. Textos em inglês
//  2. Projetos (dados das linhas do tempo)
//  3. Linha do tempo
//  4. Troca de idioma (PT / EN)
//  5. Escrita espelhada
//  6. Formulário de contato (validação)
// =========================================================


// ---------- 1. TEXTOS EM INGLÊS ----------
// O português fica direto no HTML. Cada elemento com data-i18n="chave"
// troca pelo texto em inglês da mesma chave.
const traducoes = {
  frSobre: "A notebook of machines, studies and inventions",
  frTituloA: "Codex",
  frTituloB: "of Thiago",
  frLede: "Computer Science student at PUC Minas. I write code, build circuits with Arduino and want to create machines and systems for healthcare.",
  indiceTitulo: "Contents",
  idxInventor: "The Inventor",
  idxVivencias: "Experience",
  idxEstudos: "My Studies",
  idxMaquinas: "Machines",
  idxAnatomia: "Anatomical Studies",
  idxPergaminhos: "Scrolls",
  idxGaleria: "Gallery",
  idxCorrespondencia: "Correspondence",
  engLegenda: "Study of a gear train with 24, 16 and 10 teeth. The middle wheel turns one and a half times for every turn of the largest.",

  invTitulo: "The Inventor",
  invP1: "My name is Thiago. I'm 18 and in my second semester of Computer Science at PUC Minas.",
  invP2: "My professional goal is to graduate in Computer Science and then do a master's degree in Biomedical Engineering, Medical Physics or Computational Modeling.",
  invP3: "I swim for AAAE PUC, the Engineering athletics association, I lift weights, and I'd like to start playing handball. I love drawing and creating new characters, which keeps my creativity going, and in my free time I write stories of my own.",
  fichaCurso: "Course",
  fichaCursoV: "Computer Science",
  fichaPeriodo: "Semester",
  fichaPeriodoV: "2nd",
  fichaInst: "University",
  fichaCidade: "City",
  ferramentas: "Tools of the trade",
  ferrHtml: "HTML and CSS",
  ferrGit: "Git and GitHub",
  ferrPython: "Python, learning",
  propLegenda: "A study of proportions after Vitruvius: four cubits make a pace, and twenty-four palms make a man.",
  espelho1: "To create things and bring them to life.",
  dicaLonga: "Mirror writing, as in Leonardo's notebooks. Tap to read.",
  dicaCurta: "Tap to read.",

  vivTitulo: "Experience",
  vivIntro: "What I've been learning hands-on, in and out of the classroom.",
  viv1Periodo: "2026 – present",
  viv1Atividade: "Web development",
  viv1Inst: "PUC Minas and personal projects",
  viv1Desc: "Building screens with HTML, CSS and JavaScript and connecting them to a back end to make pages dynamic. I put this into practice in SGP, Heroes of Health and this portfolio.",
  viv2Periodo: "1st and 2nd semesters · 2026",
  viv2Atividade: "Programming logic",
  viv2Inst: "PUC Minas · Algorithms and Data Structures",
  viv2Desc: "Building programming logic through algorithms and data structures in C and Java.",
  viv3Periodo: "1st semester · 2026",
  viv3Atividade: "Arduino prototyping",
  viv3Inst: "PUC Minas · Interdisciplinary Project",
  viv3Desc: "Building interactive prototypes with Arduino, sensors and displays, from the Tinkercad circuit to the C++ code.",

  estTitulo: "My Studies",
  estIntro: "My projects, split into two notebooks and laid out as timelines, from oldest to newest.",
  maqTitulo: "Machines",
  maqIntro: "Electronics and Arduino, built for the Interdisciplinary Project course.",
  asaLegenda: "A wing study for Aero Hub. The ribs hold up the membrane, like a bat's wing.",
  espelho2: "Every machine starts as a sketch.",
  anaTitulo: "Anatomical Studies",
  anaIntro: "Where computing meets health, the field I want to work in.",
  proxTitulo: "Next studies",
  prox1: "<strong>Vitrum.</strong> Simulate blood flow in an artery and the pressure wave produced by each heartbeat.",
  prox2: "<strong>Sentinela.</strong> Use algorithms and physics to predict diseases related to blood, blood pressure and veins.",
  prox3: "<strong>Tomography.</strong> Reconstruct the inside of an object from how much X-ray it absorbs at each angle.",
  artLegenda: "A study for Vitrum, in red chalk: with each systole a pressure wave travels down the artery and stretches its wall.",
  espelho3: "Mechanics gives the structure; the algorithm brings it to life.",

  pergTitulo: "Scrolls",
  pergIntro: "My public repositories on GitHub.",
  aeroDesc: "A flight simulator built with Arduino, final project for the Interdisciplinary Project course.",
  abrirGithub: "Open on GitHub",

  galTitulo: "Gallery",
  galIntro: "Old paintings in the public domain from the Art Institute of Chicago. Pick a theme to see the works.",
  temaMadonna: "Madonnas",
  temaSaint: "Saints",
  temaAnnunciation: "Annunciation",
  temaPortrait: "Portraits",
  temaLandscape: "Landscapes",

  corTitulo: "Correspondence",
  corSaudacao: "Dear reader,",
  corTexto: "thank you for leafing through this notebook. To see my projects or get in touch, find me on GitHub or send me a message.",
  formTitulo: "Write a message",
  formNome: "Name",
  formEmail: "E-mail",
  formMensagem: "Message",
  formEnviar: "Send message",

  colofao1: "Set in IM Fell English and EB Garamond. Icons by Font Awesome.",
  colofao2: 'Made by Thiago, Belo Horizonte, MMXXVI. <a href="#topo">Back to contents</a>',

  // aria-label e alt (textos para leitores de tela)
  idiomaGrupo: "Language",
  indiceAria: "Contents",
  margemAria: "Notes",
  temasAria: "Painting theme",
  lacreAria: "Open my GitHub",
  engAlt: "Drawing of three meshing gears",
  propAlt: "Human figure inscribed in a square and a circle",
  asaAlt: "Study of a jointed wing with ribs and a membrane",
  artAlt: "Study of an artery with the pressure wave and a cross-section"
};

// Frases que o JavaScript escreve na tela (não estão no HTML)
const frases = {
  pt: {
    repoGithub: "Repositório no GitHub",
    semRepo: "Sem repositório público",
    repoEmBreve: "Link do repositório em breve",
    emDesenvolvimento: "em desenvolvimento",
    emAndamento: "em andamento",
    funcionando: "em funcionamento",
    erroNome: "Escreva seu nome.",
    erroEmail: "Escreva um e-mail válido, como nome@exemplo.com.",
    erroMensagem: "A mensagem precisa de pelo menos 10 caracteres.",
    formOk: "Tudo certo com os campos."
  },
  en: {
    repoGithub: "Repository on GitHub",
    semRepo: "No public repository",
    repoEmBreve: "Repository link coming soon",
    emDesenvolvimento: "in development",
    emAndamento: "in progress",
    funcionando: "running",
    erroNome: "Please write your name.",
    erroEmail: "Please write a valid e-mail, like name@example.com.",
    erroMensagem: "The message needs at least 10 characters.",
    formOk: "All fields look good."
  }
};

let idioma = "pt";

function frase(chave) {
  return frases[idioma][chave];
}


// ---------- 2. PROJETOS ----------
// Cada projeto tem o texto nos dois idiomas.
// repo: link do GitHub (ou null)  |  imagem: caminho do print/GIF (ou null)
const projetos = {
  maquinas: [
    {
      titulo: { pt: "Smart City", en: "Smart City" },
      data: { pt: "1º período · 2026", en: "1st semester · 2026" },
      descricao: {
        pt: "Sistema de iluminação pública inteligente com Arduino, usando sensor ultrassônico (HC-SR04), sensor de luz (LDR) e LEDs.",
        en: "A smart street-lighting system built with Arduino, using an ultrasonic sensor (HC-SR04), a light sensor (LDR) and LEDs."
      },
      tecnologias: ["Arduino", "C++", "HC-SR04", "LDR"],
      repo: null,
      semRepo: true,
      imagem: null // ex.: "assets/projetos/smart-city.png"
    },
    {
      titulo: { pt: "Desarmador de Bombas", en: "Bomb Defuser" },
      data: { pt: "1º período · 2026", en: "1st semester · 2026" },
      descricao: {
        pt: "Jogo para Arduino feito com um Multi-function Shield (HW-262), placa que reúne display de quatro dígitos, botões e buzzer. Usei as bibliotecas TimerOne e MultiFuncShield.",
        en: "An Arduino game built on a Multi-function Shield (HW-262), a board with a four-digit display, buttons and a buzzer. I used the TimerOne and MultiFuncShield libraries."
      },
      tecnologias: ["Arduino", "C++", "TimerOne", "MultiFuncShield"],
      repo: null,
      semRepo: true,
      imagem: null // ex.: "assets/projetos/desarmador.png"
    },
    {
      titulo: { pt: "Aero Hub", en: "Aero Hub" },
      data: { pt: "1º período · 2026 · projeto final", en: "1st semester · 2026 · final project" },
      descricao: {
        pt: "Simulador de voo com Arduino, meu projeto final de Trabalho Interdisciplinar. Integra três módulos: sistemas inteligentes, sustentabilidade e jogos sérios. O circuito foi montado no Tinkercad e todo o projeto está documentado no repositório.",
        en: "A flight simulator built with Arduino, my final project for the Interdisciplinary Project course. It brings together three modules: intelligent systems, sustainability and serious games. I assembled the circuit in Tinkercad and documented the whole project in the repository."
      },
      tecnologias: ["Arduino", "C++", "Tinkercad"],
      repo: "https://github.com/Thz002/AeroHub",
      imagem: null // ex.: "assets/projetos/aerohub.png"
    }
  ],
  anatomia: [
    {
      titulo: { pt: "SGP · Sistema de Gestão de Pacientes", en: "SGP · Patient Management System" },
      data: { pt: "Férias de meio de ano · 2026", en: "Mid-year break · 2026" },
      descricao: {
        pt: "Sistema web para uma UBS (Unidade Básica de Saúde) organizar o cadastro dos seus pacientes. É meu projeto pessoal para aprender front-end e back-end com JavaScript.",
        en: "A web system for a UBS, a Brazilian public primary-care clinic, to organize its patient records. It's my personal project for learning front end and back end with JavaScript."
      },
      tecnologias: ["HTML5", "CSS3", "JavaScript"],
      repo: null, // coloque aqui o link do repositório
      estado: "emDesenvolvimento",
      imagem: null // ex.: "assets/projetos/sgp.png"
    },
    {
      titulo: { pt: "Heroes of Health", en: "Heroes of Health" },
      data: { pt: "2º período · 2026", en: "2nd semester · 2026" },
      descricao: {
        pt: "Aplicação web gamificada que ensina termos médicos a crianças, com o tema do ODS 3, Saúde e Bem-Estar. Tem um painel com turmas e foi prototipada no Figma. É o meu Trabalho Interdisciplinar 2 (MedComp).",
        en: "A gamified web app that teaches medical terms to children, built around the UN goal of Good Health and Well-being (SDG 3). It has a dashboard with classes and was prototyped in Figma. It's my Interdisciplinary Project 2 (MedComp)."
      },
      tecnologias: ["HTML5", "CSS3", "JavaScript", "Node.js", "Figma"],
      repo: null, // coloque aqui o link do repositório
      estado: "emAndamento",
      imagem: null // ex.: "assets/projetos/heroes-of-health.png"
    }
  ]
};


// ---------- 3. LINHA DO TEMPO ----------
// Cria um elemento com classe e texto (textContent é seguro: não interpreta HTML)
function criar(tag, classe, texto) {
  const elemento = document.createElement(tag);
  if (classe) elemento.className = classe;
  if (texto) elemento.textContent = texto;
  return elemento;
}

function criarMarco(projeto) {
  const li = criar("li", projeto.estado ? "marco marco--andamento" : "marco");

  li.append(criar("p", "marco__data", projeto.data[idioma]));
  li.append(criar("h4", null, projeto.titulo[idioma]));
  li.append(criar("p", null, projeto.descricao[idioma]));
  li.append(criar("p", "marco__materiais", projeto.tecnologias.join(" · ")));

  if (projeto.imagem) {
    const figura = criar("figure", "prancha");
    const img = document.createElement("img");
    img.src = projeto.imagem;
    img.alt = projeto.titulo[idioma] + " " + frase("funcionando");
    img.loading = "lazy";
    figura.append(img, criar("figcaption", null, projeto.titulo[idioma] + " " + frase("funcionando") + "."));
    li.append(figura);
  }

  const rodape = criar("p", "marco__rodape");
  if (projeto.repo) {
    const link = criar("a", "marco__repo");
    const icone = criar("i", "fa-brands fa-github");
    icone.setAttribute("aria-hidden", "true");
    link.append(icone, " " + frase("repoGithub"));
    link.href = projeto.repo;
    link.target = "_blank";
    link.rel = "noopener";
    rodape.append(link);
  } else {
    rodape.append(criar("span", "marco__sem", frase(projeto.semRepo ? "semRepo" : "repoEmBreve")));
  }
  if (projeto.estado) {
    rodape.append(criar("span", "estado", frase(projeto.estado)));
  }
  li.append(rodape);

  return li;
}

// Apaga a lista e desenha de novo a partir do array (os dados mandam, a tela obedece)
function desenharLinha(chave) {
  const lista = document.getElementById("linha-" + chave);
  lista.innerHTML = "";
  projetos[chave].forEach((projeto) => lista.append(criarMarco(projeto)));
}


// ---------- 4. TROCA DE IDIOMA ----------
const textos = document.querySelectorAll("[data-i18n]");
const arias = document.querySelectorAll("[data-i18n-aria]");
const alts = document.querySelectorAll("[data-i18n-alt]");
const botoesIdioma = document.querySelectorAll(".idioma button");

// guarda o português original de cada elemento antes de trocar
textos.forEach((el) => { el.dataset.pt = el.innerHTML; });
arias.forEach((el) => { el.dataset.ptAria = el.getAttribute("aria-label"); });
alts.forEach((el) => { el.dataset.ptAlt = el.getAttribute("alt"); });

function trocarIdioma(novo) {
  idioma = novo;
  document.documentElement.lang = idioma === "en" ? "en" : "pt-BR";
  document.title = idioma === "en" ? "Codex of Thiago" : "Códice de Thiago";

  textos.forEach((el) => {
    const ingles = traducoes[el.dataset.i18n];
    el.innerHTML = idioma === "en" && ingles ? ingles : el.dataset.pt;
  });
  arias.forEach((el) => {
    const ingles = traducoes[el.dataset.i18nAria];
    el.setAttribute("aria-label", idioma === "en" && ingles ? ingles : el.dataset.ptAria);
  });
  alts.forEach((el) => {
    const ingles = traducoes[el.dataset.i18nAlt];
    el.setAttribute("alt", idioma === "en" && ingles ? ingles : el.dataset.ptAlt);
  });

  botoesIdioma.forEach((botao) => {
    botao.setAttribute("aria-pressed", botao.dataset.idioma === idioma ? "true" : "false");
  });

  // partes que o JS desenha também precisam ser refeitas
  desenharLinha("maquinas");
  desenharLinha("anatomia");
  traduzirErrosDoFormulario();

  // lembra a escolha para a próxima visita
  try {
    localStorage.setItem("idioma", idioma);
  } catch (erro) {
    // navegador sem armazenamento: tudo bem, só não lembra
  }
}

botoesIdioma.forEach((botao) => {
  botao.addEventListener("click", () => trocarIdioma(botao.dataset.idioma));
});


// ---------- 5. ESCRITA ESPELHADA ----------
// O CSS desvira o texto quando aria-pressed é "true"
document.querySelectorAll(".espelho").forEach((botao) => {
  botao.addEventListener("click", () => {
    const lido = botao.getAttribute("aria-pressed") === "true";
    botao.setAttribute("aria-pressed", lido ? "false" : "true");
  });
});


// ---------- 6. FORMULÁRIO DE CONTATO ----------
const formulario = document.getElementById("formulario");
const statusFormulario = document.getElementById("status-formulario");

// uma regra por campo: devolve true se o valor está ok
const regras = {
  nome: (valor) => valor.trim().length >= 2,
  email: (valor) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valor.trim()),
  mensagem: (valor) => valor.trim().length >= 10
};

const mensagensDeErro = {
  nome: "erroNome",
  email: "erroEmail",
  mensagem: "erroMensagem"
};

function validarCampo(nomeDoCampo) {
  const campo = document.getElementById(nomeDoCampo);
  const erro = document.getElementById("erro-" + nomeDoCampo);
  const ok = regras[nomeDoCampo](campo.value);

  campo.closest(".campo").classList.toggle("campo--erro", !ok);
  campo.setAttribute("aria-invalid", ok ? "false" : "true");
  erro.textContent = ok ? "" : frase(mensagensDeErro[nomeDoCampo]);
  return ok;
}

function validarFormulario() {
  let tudoCerto = true;
  for (const nomeDoCampo in regras) {
    if (!validarCampo(nomeDoCampo)) tudoCerto = false;
  }
  return tudoCerto;
}

// quando troca o idioma, os erros que estão na tela também trocam
function traduzirErrosDoFormulario() {
  for (const nomeDoCampo in regras) {
    const campo = document.getElementById(nomeDoCampo);
    if (campo.getAttribute("aria-invalid") === "true") validarCampo(nomeDoCampo);
  }
}

// enquanto a pessoa corrige um campo com erro, o erro some na hora
for (const nomeDoCampo in regras) {
  document.getElementById(nomeDoCampo).addEventListener("input", () => {
    const campo = document.getElementById(nomeDoCampo);
    if (campo.getAttribute("aria-invalid") === "true") validarCampo(nomeDoCampo);
  });
}

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault(); // não recarrega a página
  statusFormulario.textContent = "";

  if (!validarFormulario()) {
    // leva o foco para o primeiro campo com erro
    formulario.querySelector("[aria-invalid='true']").focus();
    return;
  }

  // FERRAMENTA (próximo passo): enviar a mensagem por e-mail
  statusFormulario.textContent = frase("formOk");
});


// ---------- INÍCIO ----------
let idiomaSalvo = "pt";
try {
  idiomaSalvo = localStorage.getItem("idioma") || "pt";
} catch (erro) {
  // sem armazenamento: começa em português
}
trocarIdioma(idiomaSalvo);
