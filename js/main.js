const traducoes = {
  frSobre: "A notebook of machines, studies and inventions",
  frTituloA: "Codex",
  frTituloB: "of Thiago",
  frLede: "The codex of ideas of a future maker",
  indiceTitulo: "Contents",
  idxInventor: "The Inventor",
  idxVivencias: "Experience",
  idxEstudos: "My Studies",
  idxMaquinas: "Machines",
  idxAnatomia: "Anatomical Studies",
  idxCuriosidades: "Cabinet of Curiosities",
  idxEquacoes: "Favorite Equations",
  idxRota: "The Inventor's Route",
  idxPergaminhos: "Scrolls",
  idxGaleria: "Gallery",
  idxFavorita: "Favorite Work",
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

  curTitulo: "Cabinet of Curiosities",
  curIntro: "In the Renaissance, collectors kept bones, instruments, maps and machines in cabinets of wonders. This one is mine: stories from where engineering meets medicine. Tap a card to turn it over.",
  cartaDica: "Tap to see the answer",
  cartaVolta: "Tap to turn back",
  c1Pergunta: "How does the heart's valve know when to close?",
  c1Titulo: "Leonardo and the aortic valve",
  c1Resposta: "Around 1513, Leonardo da Vinci studied ox hearts and drew the swirls that blood forms just past the aortic valve. These vortices push the cusps back and help the valve close. Science only confirmed the idea in 1968.",
  c2Pergunta: "If an artery's radius shrinks by half, how much less blood gets through?",
  c2Titulo: "Poiseuille's law",
  c2Resposta: "In a tube, flow depends on the radius to the fourth power. Halve the radius and 16 times less fluid gets through, because (½)⁴ = 1/16. Jean Poiseuille, a French physician who wanted to understand blood circulation, measured this around 1840.",
  c3Pergunta: "Which is faster: the pulse or the blood?",
  c3Titulo: "The wave that runs ahead",
  c3Resposta: "The pulse. With every beat, a pressure wave travels down the aorta at about 5 m/s, much faster than the blood itself. As arteries stiffen with age, the wave speeds up, which is why doctors measure it. It's the physics behind Vitrum.",
  c4Pergunta: "Did the math of CT scans come before or after the scanner?",
  c4Titulo: "Radon and Hounsfield",
  c4Resposta: "Long before. In 1917, the mathematician Johann Radon showed how to rebuild an object from its “shadows” seen from many angles. The first scan of a patient only happened in 1971, on a machine built by the engineer Godfrey Hounsfield, who later won the Nobel Prize in Medicine.",
  c5Pergunta: "How many pacemakers can one person use in a lifetime?",
  c5Titulo: "The first implanted pacemaker",
  c5Resposta: "In 1958, in Stockholm, the physician and engineer Rune Elmqvist built a pacemaker, and the surgeon Åke Senning implanted it in Arne Larsson. Arne lived until 2001 and went through 26 devices.",
  c6Pergunta: "What was the first stethoscope like?",
  c6Titulo: "Laennec's notebook",
  c6Resposta: "A rolled-up notebook. In 1816, the physician René Laennec needed to listen to a patient's heart and rolled a notebook into a tube. The sound came through louder than expected. Laennec later built a wooden cylinder and named it the stethoscope.",

  rotaTitulo: "The Inventor's Route",
  rotaIntro: "Every inventor needs a map. This is the road I want to travel, from computing to machines that care for people.",
  rotaAqui: "You are here",
  rota1Titulo: "Computer Science",
  rota1Texto: "Undergraduate degree at PUC Minas, in Belo Horizonte.",
  rota2Titulo: "First health studies",
  rota2Texto: "Vitrum, Sentinela and Tomography: physics and algorithms applied to the body.",
  rota3Titulo: "Master's degree",
  rota3Texto: "Biomedical Engineering, Medical Physics or Computational Modeling.",
  rota4Titulo: "Destination",
  rota4Texto: "Designing and programming machines for healthcare.",

  eqTitulo: "Favorite Equations",
  eqIntro: "The formulas I love studying most, where math, physics and computing become tools for medicine. Tap an equation to see what it means.",
  eqDica: "Tap to see what it means",
  eq1Titulo: "Radon transform",
  eq1Sub: "The math behind CT scans",
  eq1Med: "<strong>Medicine.</strong> Every “shadow” a CT scanner measures is an integral of the body along one ray. Inverting the transform rebuilds the patient's cross-sections.",
  eq1Fis: "<strong>Physics.</strong> f(x, y) is how much each point of tissue attenuates. The Dirac delta keeps only the points on the line at distance ρ from the center, at angle θ.",
  eq1Comp: "<strong>Computing.</strong> All the projections together form the sinogram. Algorithms such as filtered back-projection and iterative methods invert it and produce the image.",
  eq2Titulo: "Schrödinger equation",
  eq2Sub: "How a quantum system changes over time",
  eq2Med: "<strong>Medicine.</strong> MRI comes from the quantum physics of spin: the hydrogen nuclei in the body absorb and give back energy at well-defined frequencies.",
  eq2Fis: "<strong>Physics.</strong> Ψ is the wave function, which holds the system's probabilities. The Hamiltonian Ĥ gathers the energy and dictates how Ψ evolves.",
  eq2Comp: "<strong>Computing.</strong> Solving it numerically is the basis of computational chemistry, which simulates molecules to help design new drugs.",
  eq3Titulo: "Beer–Lambert law",
  eq3Sub: "X-rays passing through the body",
  eq3Med: "<strong>Medicine.</strong> Bone absorbs more X-rays than fat and muscle. That contrast is what shows up on radiographs and CT scans.",
  eq3Fis: "<strong>Physics.</strong> Intensity drops exponentially along the path. μ(s) is the attenuation coefficient of each tissue the ray crosses.",
  eq3Comp: "<strong>Computing.</strong> Taking the logarithm gives −ln(I/I₀) = ∫μ ds: each measurement becomes exactly the integral the Radon transform uses.",
  eq4Titulo: "Fourier transform",
  eq4Sub: "A signal seen as a sum of frequencies",
  eq4Med: "<strong>Medicine.</strong> MRI measures its data as frequencies, and the image comes from an inverse transform. In ECG and EEG, it separates rhythms from noise.",
  eq4Fis: "<strong>Physics.</strong> Any signal can be written as a sum of waves. F(ω) tells how much of each frequency ω is present in f(t).",
  eq4Comp: "<strong>Computing.</strong> The FFT algorithm does the math in O(n log n) instead of O(n²), and it powers audio, image compression and tomographic reconstruction.",
  eq5Titulo: "Navier–Stokes",
  eq5Sub: "How blood really flows",
  eq5Med: "<strong>Medicine.</strong> It describes blood in the heart, the arteries and aneurysms. Simulations help plan surgeries and stents and measure the friction of blood on vessel walls.",
  eq5Fis: "<strong>Physics.</strong> It is Newton's second law for a fluid: mass times acceleration, on the left, equals the pressure and viscous forces (σ, treating blood as a Newtonian fluid) plus external forces (f).",
  eq5Comp: "<strong>Computing.</strong> No one has proved it always has a smooth solution in 3D, one of the Millennium Prize Problems. In practice it is solved numerically (CFD) on meshes with millions of points.",
  eq6Titulo: "Womersley solution",
  eq6Sub: "Pulsatile flow in a tube",
  eq6Med: "<strong>Medicine.</strong> It shows how the blood profile changes with every beat: in large arteries it flattens and can even reverse near the wall. In the aorta, α is above 10.",
  eq6Fis: "<strong>Physics.</strong> It is the exact Navier–Stokes solution for oscillating pressure in a rigid tube. J₀ is the zeroth-order Bessel function, and α = R√(ωρ/μ) weighs inertia against viscosity.",
  eq6Comp: "<strong>Computing.</strong> It is used to validate CFD solvers and as the inlet condition in artery models. It is one of the starting points of Vitrum.",

  pergTitulo: "Scrolls",
  pergIntro: "My public repositories on GitHub.",
  aeroDesc: "A flight simulator built with Arduino, final project for the Interdisciplinary Project course.",
  abrirGithub: "Open on GitHub",

  galTitulo: "Gallery",
  galIntro: "Public-domain masterpieces from the Metropolitan Museum of Art in New York. Pick a painter to see the works.",

  favTitulo: "The Favorite Work",
  favIntro: "The writer of this codex keeps one work as a personal favorite.",
  favObra: "The Starry Night",
  favLocal: "Oil on canvas · Museum of Modern Art (MoMA), New York",
  favNota: "Painted in Saint-Rémy-de-Provence, it shows the view from Van Gogh's window at the asylum, with a village he imagined.",

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

  idiomaGrupo: "Language",
  indiceAria: "Contents",
  margemAria: "Notes",
  temasAria: "Painters",
  lacreAria: "Open my GitHub",
  engAlt: "Drawing of three meshing gears",
  propAlt: "Human figure inscribed in a square and a circle",
  asaAlt: "Study of a jointed wing with ribs and a membrane",
  artAlt: "Study of an artery with the pressure wave and a cross-section",
  favAlt: "A night sky of swirling blue, with yellow stars and moon, over a small village; on the left, a dark cypress rises into the sky",
  c1Alt: "Leonardo da Vinci's ink studies of the heart valves, with notes in mirror writing",
  c2Alt: "Ink drawing of two tubes, one with half the radius of the other, showing the parabolic flow profile",
  c3Alt: "Drawing of an artery with a pressure wave ahead and a drop of blood behind",
  c4Alt: "Drawing of rays crossing an object at two angles and casting its shadows",
  c5Alt: "Ink drawing of a pacemaker connected to an ECG trace",
  c6Alt: "1819 plate with drawings of Laennec's wooden stethoscope"
};

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
    formEnviando: "Enviando...",
    formEnviado: "Mensagem enviada! Obrigado pelo contato.",
    atualizado: "atualizado em",
    abrirGithub: "Abrir no GitHub",
    galCarregando: "Buscando pinturas no museu...",
    galErro: "O museu não respondeu agora. Tente outro tema ou recarregue a página.",
    galVazia: "Nenhuma pintura encontrada neste tema.",
    artistaDesconhecido: "Artista desconhecido"
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
    formEnviando: "Sending...",
    formEnviado: "Message sent! Thanks for reaching out.",
    atualizado: "updated",
    abrirGithub: "Open on GitHub",
    galCarregando: "Looking for paintings in the museum...",
    galErro: "The museum didn't respond. Try another theme or reload the page.",
    galVazia: "No paintings found for this theme.",
    artistaDesconhecido: "Unknown artist"
  }
};

let idioma = "pt";

function frase(chave) {
  return frases[idioma][chave];
}


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
      imagem: null
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
      imagem: null
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
      imagem: null
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
      repo: null,
      estado: "emDesenvolvimento",
      imagem: null
    },
    {
      titulo: { pt: "Heroes of Health", en: "Heroes of Health" },
      data: { pt: "2º período · 2026", en: "2nd semester · 2026" },
      descricao: {
        pt: "Aplicação web gamificada que transforma o aprendizado sobre saúde em jogo para crianças e adolescentes, com o tema do ODS 3, Saúde e Bem-Estar. O projeto une alunos de Computação e de Medicina em um sistema que ajuda a formar jovens e cidadãos mais conscientes sobre a própria saúde.",
        en: "A gamified web app that turns learning about health into a game for children and teenagers, built around the UN goal of Good Health and Well-being (SDG 3). The project brings Computer Science and Medicine students together in a system that helps young people grow into citizens who are more aware of their own health."
      },
      tecnologias: ["HTML5", "CSS3", "JavaScript", "Node.js", "Figma"],
      repo: "https://github.com/Thz002/heroes-of-health",
      estado: "emAndamento",
      imagem: null
    }
  ]
};


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

function desenharLinha(chave) {
  const lista = document.getElementById("linha-" + chave);
  lista.innerHTML = "";
  projetos[chave].forEach((projeto) => lista.append(criarMarco(projeto)));
}


const textos = document.querySelectorAll("[data-i18n]");
const arias = document.querySelectorAll("[data-i18n-aria]");
const alts = document.querySelectorAll("[data-i18n-alt]");
const botoesIdioma = document.querySelectorAll(".idioma button");

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

  desenharLinha("maquinas");
  desenharLinha("anatomia");
  traduzirErrosDoFormulario();
  desenharRepositorios();
  if (pinturas.length > 0) desenharGaleria();

  try {
    localStorage.setItem("idioma", idioma);
  } catch {}
}

botoesIdioma.forEach((botao) => {
  botao.addEventListener("click", () => trocarIdioma(botao.dataset.idioma));
});


function encaixarEquacoes() {
  document.querySelectorAll(".cartao__equacao").forEach((caixa) => {
    const formula = caixa.querySelector(".katex");
    if (!formula) return;
    formula.style.fontSize = "";
    const conteudo = document.createRange();
    conteudo.selectNodeContents(formula.querySelector(".katex-html"));
    const proporcao = caixa.clientWidth / conteudo.getBoundingClientRect().width;
    if (proporcao < 1) {
      formula.style.fontSize = parseFloat(getComputedStyle(formula).fontSize) * proporcao * 0.96 + "px";
    }
  });
}

if (window.katex) {
  document.querySelectorAll(".cartao__equacao").forEach((equacao) => {
    katex.render(equacao.textContent, equacao, { displayMode: true, throwOnError: false });
  });
  encaixarEquacoes();
  document.fonts.ready.then(encaixarEquacoes);
  window.addEventListener("resize", encaixarEquacoes);
}

document.querySelectorAll(".espelho, .cartao").forEach((botao) => {
  botao.addEventListener("click", () => {
    const lido = botao.getAttribute("aria-pressed") === "true";
    botao.setAttribute("aria-pressed", lido ? "false" : "true");
  });
});


const formulario = document.getElementById("formulario");
const statusFormulario = document.getElementById("status-formulario");

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

function traduzirErrosDoFormulario() {
  for (const nomeDoCampo in regras) {
    const campo = document.getElementById(nomeDoCampo);
    if (campo.getAttribute("aria-invalid") === "true") validarCampo(nomeDoCampo);
  }
}

for (const nomeDoCampo in regras) {
  document.getElementById(nomeDoCampo).addEventListener("input", () => {
    const campo = document.getElementById(nomeDoCampo);
    if (campo.getAttribute("aria-invalid") === "true") validarCampo(nomeDoCampo);
  });
}

const ENDERECO_FORMSPREE = "https://formspree.io/f/xbgdzknr";

formulario.addEventListener("submit", async (evento) => {
  evento.preventDefault();
  statusFormulario.textContent = "";

  if (!validarFormulario()) {
    formulario.querySelector("[aria-invalid='true']").focus();
    return;
  }

  const botao = formulario.querySelector("button[type='submit']");
  botao.disabled = true;
  statusFormulario.textContent = frase("formEnviando");

  try {
    const resposta = await fetch(ENDERECO_FORMSPREE, {
      method: "POST",
      body: new FormData(formulario),
      headers: { Accept: "application/json" }
    });
    if (!resposta.ok) throw new Error("Formspree respondeu " + resposta.status);

    formulario.reset();
    statusFormulario.textContent = frase("formEnviado");
  } catch {
    statusFormulario.textContent = frase("formErro");
  } finally {
    botao.disabled = false;
  }
});


const USUARIO_GITHUB = "Thz002";
const REPOS_ESCONDIDOS = ["Prova-1---Desenvolvimento-Interface-Web-2026-2", "my-soc-ops-pythons", "my-soc-ops-python"];
const listaRolos = document.getElementById("rolos");
let repositorios = [];

async function carregarRepositorios() {
  try {
    const resposta = await fetch(`https://api.github.com/users/${USUARIO_GITHUB}/repos?sort=updated&per_page=30`);
    if (!resposta.ok) throw new Error("GitHub respondeu " + resposta.status);

    const dados = await resposta.json();
    repositorios = dados.filter((repo) => !repo.fork && !REPOS_ESCONDIDOS.includes(repo.name)).slice(0, 6);
    desenharRepositorios();
  } catch (erro) {
    console.log("Não consegui carregar os repositórios:", erro);
  }
}

function criarRolo(repo) {
  const rolo = criar("article", "rolo");

  const data = new Date(repo.updated_at).toLocaleDateString(idioma === "en" ? "en-US" : "pt-BR");
  let detalhes = frase("atualizado") + " " + data;
  if (repo.language) detalhes = repo.language + " · " + detalhes;

  const link = criar("a");
  link.href = repo.html_url;
  link.target = "_blank";
  link.rel = "noopener";
  const icone = criar("i", "fa-brands fa-github");
  icone.setAttribute("aria-hidden", "true");
  link.append(icone, " " + frase("abrirGithub"));

  rolo.append(
    criar("h3", null, repo.name),
    criar("p", null, repo.description || frase("semDescricao")),
    criar("p", "rolo__meta", detalhes),
    link
  );
  return rolo;
}

function desenharRepositorios() {
  if (repositorios.length === 0) return;
  listaRolos.innerHTML = "";
  repositorios.forEach((repo) => listaRolos.append(criarRolo(repo)));
  if (window.ScrollTrigger) ScrollTrigger.refresh();
}

const colecoes = {
  vangogh: [436535, 436532, 436528, 436524, 437980, 436529],
  rembrandt: [437394, 437397, 437398, 437393, 437385, 437399],
  vermeer: [437881, 437878, 437880, 437879, 437877],
  ticiano: [437824, 437826, 437825, 437827],
  goya: [436548, 436545, 459090, 436554]
};

const galeria = document.getElementById("quadros");
const botoesTema = document.querySelectorAll(".tema");
let pinturas = [];
let pedidoAtual = 0;

async function buscarObra(id) {
  const resposta = await fetch("https://collectionapi.metmuseum.org/public/collection/v1/objects/" + id);
  if (!resposta.ok) throw new Error("Museu respondeu " + resposta.status);
  return resposta.json();
}

async function carregarPinturas(tema) {
  const meuPedido = ++pedidoAtual;
  galeria.innerHTML = `<p class="aviso">${frase("galCarregando")}</p>`;

  try {
    const respostas = await Promise.allSettled(colecoes[tema].map(buscarObra));

    if (meuPedido !== pedidoAtual) return;

    pinturas = respostas
      .filter((r) => r.status === "fulfilled" && r.value.primaryImageSmall)
      .map((r) => r.value);
    if (pinturas.length === 0) throw new Error("Nenhuma obra chegou");
    desenharGaleria();
  } catch {
    if (meuPedido !== pedidoAtual) return;
    galeria.innerHTML = `<p class="aviso">${frase("galErro")}</p>`;
  }
}

function criarQuadro(obra) {
  const quadro = criar("a", "quadro");
  quadro.href = obra.objectURL;
  quadro.target = "_blank";
  quadro.rel = "noopener";

  const moldura = criar("span", "quadro__moldura");
  const tela = criar("span", "quadro__tela");
  const img = document.createElement("img");
  img.src = obra.primaryImageSmall;
  img.alt = obra.title;
  img.loading = "lazy";
  tela.append(img);
  moldura.append(tela);

  const artista = obra.artistDisplayName ? obra.artistDisplayName.split(" (")[0] : frase("artistaDesconhecido");
  const legenda = criar("span", "quadro__legenda");
  legenda.append(criar("strong", null, obra.title), criar("em", null, artista + ", " + obra.objectDate));

  quadro.append(moldura, legenda);
  return quadro;
}

function desenharGaleria() {
  if (pinturas.length === 0) {
    galeria.innerHTML = `<p class="aviso">${frase("galVazia")}</p>`;
    return;
  }
  galeria.innerHTML = "";
  pinturas.forEach((obra) => galeria.append(criarQuadro(obra)));
  if (window.ScrollTrigger) ScrollTrigger.refresh();
}

botoesTema.forEach((botao) => {
  botao.addEventListener("click", () => {
    botoesTema.forEach((b) => b.setAttribute("aria-pressed", "false"));
    botao.setAttribute("aria-pressed", "true");
    carregarPinturas(botao.dataset.tema);
  });
});

let idiomaSalvo = "pt";
try {
  idiomaSalvo = localStorage.getItem("idioma") || "pt";
} catch {}
trocarIdioma(idiomaSalvo);
carregarRepositorios();
carregarPinturas("vangogh");
