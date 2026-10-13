// =========================================================
//  Códice de Thiago - animacoes.js (GSAP + ScrollTrigger)
// =========================================================

// quem pediu "menos movimento" no sistema fica sem animações
const menosMovimento = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (!menosMovimento) {
  // avisa o GSAP que vamos usar o plugin ScrollTrigger
  gsap.registerPlugin(ScrollTrigger);

  // 1. Capa: cada linha entra de baixo pra cima, uma depois da outra
  gsap.from(".fr-texto > *", {
    y: 30,          // começa 30px abaixo do lugar final
    opacity: 0,     // e invisível
    duration: 0.8,  // leva 0,8 segundo
    stagger: 0.12   // cada elemento começa 0,12s depois do anterior
  });

  gsap.from(".fr-desenho", { opacity: 0, scale: 0.95, duration: 1.2, delay: 0.4 });

  // 2. Número do fólio + título de cada seção sobem quando chegam na tela
  document.querySelectorAll(".folio__num").forEach((numero) => {
    const titulo = numero.nextElementSibling; // o h2 ou h3 que vem logo depois
    gsap.from([numero, titulo], {
      y: 40,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      scrollTrigger: {
        trigger: numero,   // quem "dispara" a animação
        start: "top 85%"   // quando o topo dele chega a 85% da altura da tela
      }
    });
  });

  // 3. Vivências entram da esquerda, uma por uma
  gsap.from(".registro__item", {
    x: -30,
    opacity: 0,
    duration: 0.6,
    stagger: 0.15,
    scrollTrigger: { trigger: ".registro", start: "top 80%" }
  });

  // 4. Desenhos da margem aparecem suavemente
  document.querySelectorAll(".estudo").forEach((desenho) => {
    gsap.from(desenho, {
      y: 30,
      opacity: 0,
      duration: 1,
      scrollTrigger: { trigger: desenho, start: "top 85%" }
    });
  });

  // 5. A linha do tempo é riscada conforme você rola a página
  document.querySelectorAll(".linha").forEach((linha) => {
    gsap.from(linha.querySelector(".linha__traco"), {
      scaleY: 0,     // começa com altura zero
      ease: "none",  // velocidade constante, acompanhando o scroll
      scrollTrigger: {
        trigger: linha,
        start: "top 75%",
        end: "bottom 60%",
        scrub: true  // a animação segue a barra de rolagem, pra frente e pra trás
      }
    });
  });

  // 6. A obra favorita surge devagar, como um quadro sendo revelado
  gsap.from(".favorita", {
    y: 50,
    opacity: 0,
    scale: 0.96,   // começa um pouco menor
    duration: 1.4,
    ease: "power2.out",
    scrollTrigger: { trigger: ".favorita", start: "top 80%" }
  });
}