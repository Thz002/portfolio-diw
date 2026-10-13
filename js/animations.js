const menosMovimento = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (!menosMovimento) {
  gsap.registerPlugin(ScrollTrigger, SplitText, DrawSVGPlugin);

  gsap.from(".fr-texto > *", {
    y: 30,
    opacity: 0,
    duration: 0.8,
    stagger: 0.12
  });

  document.querySelectorAll(".folio__num").forEach((numero) => {
    const titulo = numero.nextElementSibling;
    gsap.from([numero, titulo], {
      y: 40,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      scrollTrigger: {
        trigger: numero,
        start: "top 85%"
      }
    });
  });

  gsap.from(".registro__item", {
    x: -30,
    opacity: 0,
    duration: 0.6,
    stagger: 0.15,
    scrollTrigger: { trigger: ".registro", start: "top 80%" }
  });

  document.querySelectorAll(".estudo").forEach((desenho) => {
    gsap.from(desenho, {
      y: 30,
      opacity: 0,
      duration: 1,
      scrollTrigger: { trigger: desenho, start: "top 85%" }
    });
  });

  document.querySelectorAll(".linha").forEach((linha) => {
    gsap.from(linha.querySelector(".linha__traco"), {
      scaleY: 0,
      ease: "none",
      scrollTrigger: {
        trigger: linha,
        start: "top 75%",
        end: "bottom 60%",
        scrub: true
      }
    });
  });

  gsap.from(".favorita", {
    y: 50,
    opacity: 0,
    scale: 0.96,
    duration: 1.4,
    ease: "power2.out",
    scrollTrigger: { trigger: ".favorita", start: "top 80%" }
  });

  document.fonts.ready.then(() => {
    const titulo = SplitText.create(".fr-titulo__a, .fr-titulo__b", { type: "chars" });
    gsap.from(titulo.chars, {
      opacity: 0,
      yPercent: 40,
      rotate: -6,
      duration: 0.7,
      stagger: 0.04,
      ease: "power2.out"
    });
  });

  gsap.from("#engrenagens .tinta > *", {
    drawSVG: 0,
    duration: 1.5,
    ease: "power1.inOut",
    stagger: 0.04,
    delay: 0.3
  });

  const rodas = [
    { id: "#roda-a", giro: 120 },
    { id: "#roda-b", giro: -180 },
    { id: "#roda-c", giro: 288 }
  ];

  rodas.forEach((roda) => {
    const grupo = document.querySelector(roda.id);
    gsap.to(grupo, {
      rotation: roda.giro,
      svgOrigin: grupo.dataset.centro,
      ease: "none",
      scrollTrigger: {
        trigger: ".frontispicio",
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    });
  });

  document.querySelectorAll(".cartas").forEach((grade) => {
    gsap.from(grade.querySelectorAll(".cartao"), {
      y: 40,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: "power2.out",
      scrollTrigger: { trigger: grade, start: "top 80%" }
    });
  });

  gsap.fromTo(".rota__paradas",
    { "--progresso": "0%" },
    {
      "--progresso": "100%",
      duration: 1.8,
      ease: "power1.inOut",
      scrollTrigger: { trigger: ".rota", start: "top 75%" }
    }
  );

  gsap.from(".rota__parada", {
    y: 20,
    opacity: 0,
    duration: 0.6,
    stagger: 0.4,
    scrollTrigger: { trigger: ".rota", start: "top 75%" }
  });

  gsap.fromTo("#ponteiro",
    { rotation: -120, svgOrigin: "60 60" },
    {
      rotation: 60,
      svgOrigin: "60 60",
      ease: "none",
      scrollTrigger: { start: 0, end: "max", scrub: 0.4 }
    }
  );
}
