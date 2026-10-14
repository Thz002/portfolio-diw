# O Códice Perdido

Portfólio pessoal com tema de caderno medieval, inspirado nos códices de Leonardo da Vinci. O site reúne quem eu sou, minhas vivências, meus projetos, um gabinete de curiosidades sobre engenharia e medicina, meus repositórios do GitHub, uma galeria de pinturas e um formulário de contato. Tudo está disponível em português e inglês.

## Site publicado

Hospedado no **[Vercel](https://portfolio-iota-mauve-7fl1vfyq8y.vercel.app/)**: *link disponível após o primeiro deploy.*

## Seções

| Fólio | Seção | O que tem |
|---|---|---|
| 2 | O Inventor | Quem eu sou, minha ficha e as ferramentas que uso |
| 3 | Vivências | O que venho aprendendo na prática |
| 4 | Meus Estudos | Linhas do tempo dos projetos: Máquinas (Arduino) e Estudos Anatômicos (saúde) |
| 5 | Gabinete de Curiosidades | Cartas que viram, Equações Favoritas e a Rota do Inventor |
| 6 | Pergaminhos | Meus repositórios públicos no GitHub |
| 7 | Galeria | Pinturas do Metropolitan Museum of Art e a minha obra favorita |
| 8 | Correspondência | Formulário de contato |

## Tecnologias utilizadas

- **HTML5, CSS3 e JavaScript**, sem frameworks
- **[GSAP](https://gsap.com/) 3.13**, para as animações, com os plugins:
  - ScrollTrigger: animações ao rolar a página
  - SplitText: título que entra letra por letra
  - DrawSVG: engrenagens desenhadas a tinta
- **[KaTeX](https://katex.org/)**: desenha as equações matemáticas
- **[API do GitHub](https://docs.github.com/pt/rest)**: carrega os repositórios dos Pergaminhos
- **[API do Metropolitan Museum of Art](https://metmuseum.github.io/)**: carrega as pinturas da Galeria
- **[Formspree](https://formspree.io/)**: envia por e-mail as mensagens do formulário
- **[Font Awesome](https://fontawesome.com/)**: ícones
- **[Google Fonts](https://fonts.google.com/)**: fontes IM Fell English e EB Garamond

## Detalhes visuais

- Engrenagens da capa desenhadas a tinta, que giram com a rolagem na proporção certa dos dentes (24, 16 e 10)
- Manômetro de latão no canto da tela: o ponteiro vai de 0 a 120 mmHg conforme você lê a página
- Cursor em forma de pena de escrever
- Cartas com cantoneiras de latão que viram em 3D
- Divisores ornamentais com engrenagem entre os fólios, manchas de tinta e gotas de cera
- Frases em escrita espelhada na margem, como nos cadernos de Leonardo

## Como usar

1. Abra o site pelo link acima.
2. Use o **Índice** da capa para ir direto a uma seção.
3. Troque o idioma no botão **PT / EN**, no canto superior direito.
4. No **Gabinete de Curiosidades**, clique numa carta para virá-la. Nas **Equações Favoritas**, o verso de cada carta explica o que a fórmula significa na medicina, na física e na computação.
5. Na **Galeria**, escolha um pintor para ver as obras. Clique numa pintura para abrir a página dela no museu.
6. Toque nas frases escritas ao contrário, na margem, para lê-las.
7. Na **Correspondência**, preencha o formulário para me mandar uma mensagem.

As animações respeitam a opção "reduzir movimento" do sistema. Com ela ligada, o site aparece sem animações e sem o manômetro.

## Como desenvolver

1. Clone o repositório:
   ```bash
   git clone https://github.com/Thz002/portfolio-diw.git
   ```
2. Abra a pasta no VS Code.
3. Rode com a extensão **Live Server**: clique com o botão direito no `index.html` e escolha **Open with Live Server**.

É preciso estar conectado à internet, porque o GSAP, o KaTeX, as fontes, os ícones e as APIs são carregados de fora.

### Estrutura

```
├── index.html              estrutura e textos em português
├── favicon.svg             ícone da aba (engrenagem)
├── apple-touch-icon.png    ícone para iPhone e Safari
├── css/style.css           visual do site
├── js/main.js              idioma, projetos, cartas, formulário, repositórios e galeria
├── js/animations.js        animações com GSAP
└── assets/
    ├── curiosidades/       imagens das cartas e rosa dos ventos
    ├── desenhos/           desenhos da margem
    └── pinturas/           imagem da obra favorita
```

### Onde mudar cada coisa

| O que | Onde |
|---|---|
| Textos em português | `index.html` |
| Textos em inglês | objeto `traducoes` em `js/main.js` |
| Projetos das linhas do tempo | objeto `projetos` em `js/main.js` |
| Equações das cartas | `index.html`, em LaTeX dentro de cada `cartao__equacao` |
| Repositórios que não aparecem | lista `REPOS_ESCONDIDOS` em `js/main.js` |
| Pinturas da Galeria | objeto `colecoes` em `js/main.js` (número da obra no site do Met) |
| Animações | `js/animations.js` |

### Deploy

O site é estático (só HTML, CSS e JavaScript), então o **Netlify** publica os arquivos direto, sem etapa de build.

1. Entre em [app.netlify.com](https://app.netlify.com/) com a conta do GitHub.
2. Clique em **Add new site → Import an existing project** e escolha o repositório `portfolio-diw`.
3. Preencha as configurações:
   - **Branch to deploy:** `main`
   - **Build command:** deixe em branco
   - **Publish directory:** deixe em branco, porque o `index.html` está na raiz do repositório
4. Clique em **Deploy**. O Netlify gera um endereço terminado em `.netlify.app`, e em **Site configuration → Change site name** dá para escolher o nome dele.

Depois disso, cada `git push` na `main` publica a nova versão sozinho.

Para um teste rápido sem GitHub, também dá para arrastar a pasta do projeto em [app.netlify.com/drop](https://app.netlify.com/drop). Nesse caso, cada atualização precisa ser enviada à mão.

## Créditos

- *A Noite Estrelada*, de Vincent van Gogh (1889), em domínio público, via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg).
- Pinturas da Galeria: obras em domínio público do [Metropolitan Museum of Art](https://www.metmuseum.org/).
- Estudos das válvulas do coração, de Leonardo da Vinci (c. 1511–13, Royal Collection, RCIN 919079), em domínio público, via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Leonardo_da_Vinci_-_RCIN_919079,_Studies_of_the_valves_of_the_heart,_and_sketch_of_a_suditary,_and_calculations_c._1511-13.jpg).
- Desenhos do estetoscópio de René Laennec (1819), em domínio público, via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Rene-Theophile-Hyacinthe_Laennec_Drawings_stethoscope_1819.jpg).
